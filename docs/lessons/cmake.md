---
title : CMake
benefit: 3
easiness: 3
order: 2
tags:
    - C++
---

## Brief

To understand modern CMake you need to understand *targets*. Basically a target is an executable or a library. You will define a target for your executable and describe its source files, and then you will import the targets for each library you use, and will add those targets as a dependency of your executable. Here is an example taken from [p6-examples](https://github.com/JulesFouchy/p6-examples/blob/main/CMakeLists.txt):
```cmake
cmake_minimum_required(VERSION 3.8)
project(p6-hello-world)

add_executable(${PROJECT_NAME} # Creates a target called ${PROJECT_NAME}, a.k.a. p6-hello-world
    src/main.cpp               # And adds its source files: main.cpp and something.cpp
    src/something.cpp          # Note that you don't need to list the header files here (.h / .hpp)
)

add_subdirectory(p6)                                  # Includes the p6 library ; this assumes that you have a folder called p6 at the same level as this CMakeLists.txt file, and that the p6 folder contains a CMakeLists.txt file
target_link_libraries(${PROJECT_NAME} PRIVATE p6::p6) # Adds the target "p6::p6" as a dependency of our target ${PROJECT_NAME}. Unfortunately the command is called target_link_libraries() even though it can be used for other things than just linking ; don't get confused! A better name would have been add_dependency()
                                                      # The name of the target "p6::p6" is up to the library authors. Check out their documentation to know how they called it!
                                                      # The "::" in the name of the library's target is not mandatory, but library authors often add it because target_link_libraries() can do many different things, and if you make a typo in the name of the target it will ignore it instead of reporting an error. It is only if you have a "::" in the name that target_link_libraries() will know that it can't be anything but a target and will raise an error if the name doesn't actually correspond to a target.
```

And that is all you need for a basic *CMakeLists.txt*!

If all your libraries define a target properly then you don't need anything more to build your project. (If they don't, unfortunately you will have to [do their job for them](#cmake-for-library-authors)).

## CMake tips

Now we will see a few useful things that you can do with CMake:

### Enabling warnings

```cmake
if (MSVC) # Visual Studio for Windows
    target_compile_options(${PROJECT_NAME} PRIVATE /WX /W3)
else() # gcc and clang
    target_compile_options(${PROJECT_NAME} PRIVATE -Werror -Wall -Wextra -Wpedantic -pedantic-errors)
endif()
```

`/WX` and `-Werror` make your compiler treat warnings as errors, and the other flags enable a lot of useful warnings.

:::tip
**Warnings are your friends**. They exist to protect you from bad practices and bugs. Listen to them!

A C++ code that compiles is far from guaranteed to have no bugs! (mostly because of backward compatibility with C). This is why warnings are important!
:::

### Setting your C++ version

You can ask for a specific version of C++:
```cmake
target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_20)
```
(If you don't you will probably get C++11 by default).

You can even ask for finer details with parameters like `cxx_variadic_templates`. This can be useful to increase the portability of your code a little bit (for example if you need C++11 plus only one little feature from C++14). Don't abuse it though because it can be very tedious to maintain!

### Adding `#define` (compile definitions)

You can `#define SOMETHING` from CMake. This can be useful to propagate information from CMake into your project. For example you can do
```cmake title="cmake"
target_compile_definitions(${PROJECT_NAME} PRIVATE
    USE_THIS_FEATURE
)
```
```cpp title="C++"
#if USE_THIS_FEATURE
    // Do something
#else 
    // Do something else
#endif
```

A very good use case is
```cmake
target_compile_definitions(${PROJECT_NAME} PRIVATE
    $<$<CONFIG:Debug>:DEBUG>
)
```
which defines `DEBUG` if you are building in debug mode. (This uses a [generator expression](https://stackoverflow.com/questions/46206495/cmake-generator-expressions). It can be read as: "If the CMake *CONFIG* is *Debug*, then return *DEBUG*, otherwise return nothing"). You can then have debug checks in your code that are only compiled in debug mode and totally removed in release:
```cpp
void assert_shader_is_bound(GLint id)
{
#if DEBUG
    GLint current_id;
    glGetIntegerv(GL_CURRENT_PROGRAM, &current_id);
    assert(current_id == id && "The shader is not bound");
#endif
}
```

You can also give a value to your `#define` (by default it gets the value `1`):
```cmake title="cmake"
target_compile_definitions(${PROJECT_NAME} PRIVATE
    WINDOW_NAME=\"Django ${CMAKE_PROJECT_VERSION}\"
)
```
```cpp title="C++"
glfwCreateWindow(1280, 720, WINDOW_NAME, nullptr, nullptr);
// Which expands to:
glfwCreateWindow(1280, 720, "Django 1.0", nullptr, nullptr);
```

### Setting the output path

By default your executable will end up in *build* with many other stuff generated by CMake. You can change that with `set(EXECUTABLE_OUTPUT_PATH ...)`. I personnaly like to do
```cmake
set(EXECUTABLE_OUTPUT_PATH ${CMAKE_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})
```

which gives me
```
├── bin/
│   ├── Debug
│   │   ├── myproject.exe // Built in debug mode
│   │   └── ...
│   └── Release
│       ├── myproject.exe // Built in release mode
│       └── ...
├── build/
│   ├── random cmake stuff you don't need to care about
│   └── ...
├── src/
│   ├── ...
│   └── ...
└── CMakeLists.txt
```

### Copying files and folders

Very often in projects you need to have files available alongside your executable ; it can be images, 3D models, shaders: anything that is not built into your binary but instead loaded at runtime.

You will have those files somewhere in your sources, but when you produce an executable and send it to your friends you must not forget to send the other resource files as well! CMake can help you by automating the process of copying these files to the output folder where your executable is created.

![All the files required by CoolLab.exe](../../static/img/cmake.png)

*All the files required by CoolLab.exe*

Here is an example of how you can ask CMake to copy your folder.s (taken from [Cool](https://github.com/CoolLibs/Cool/tree/main/cmake/copy_to_output.cmake)):

```cmake
# NB: this function requires policy CMP0112 which was set to NEW in CMake 3.19 (https://cmake.org/cmake/help/latest/policy/CMP0112.html#policy:CMP0112)
# If you are using a version of CMake lower than 3.19 then you need to call `cmake_policy(SET CMP0112 NEW)` just after `cmake_minimum_required(...)` in your main CMakeLists.txt file
# Otherwise you will get a "Cyclic dependencies" error

function(copy_folder FOLDER_NAME)
    string(SHA1 TARGET_HASH ${FOLDER_NAME})      # Create a unique name for our target. We can't use ${FOLDER_NAME} directly because it could contain invalid characters like spaces
    set(TARGET_NAME CopyToOutput_${TARGET_HASH}) #
    add_custom_target(${TARGET_NAME}
        COMMENT "Copying \"${FOLDER_NAME}\""
        COMMAND ${CMAKE_COMMAND} -E copy_directory
            ${CMAKE_SOURCE_DIR}/${FOLDER_NAME}
            $<TARGET_FILE_DIR:${PROJECT_NAME}>/${FOLDER_NAME}
    )
    add_dependencies(${PROJECT_NAME} ${TARGET_NAME}) # Mark our custom target as a dependency of the main project, so that whenever the main project is launched our custom target is triggered and files are copied
endfunction()
```

`add_custom_target()` adds a "fake" target whose only purpose is to run a command when it is built. In our case that command is `${CMAKE_COMMAND} -E copy_directory` which is a CMake command that copies a directory (you can use `copy` instead if you want to copy a single file). Finally we tell CMake that our main target depends on that "fake" target with `add_dependencies()`. This means that whenever our main target is built, the "fake" target will also be built, and therefore the command will be run.

NB: In this example we copy from `${CMAKE_SOURCE_DIR}` (a.k.a. the root directory of our project, where our main *CMakeLists.txt* lives)
to `$<TARGET_FILE_DIR:${PROJECT_NAME}>` (a.k.a. the folder where our executable will be created).

### GLOB

If you don't want to have to list all your *.cpp* files manually in your *CMakeLists.txt* you can use 

```cmake
file(GLOB_RECURSE MY_SOURCES CONFIGURE_DEPENDS src/*)
```

It will grab the list of all *.cpp* files in *src* ant put then in `MY_SOURCES`.

 - `GLOB_RECURSE` means that it will also find files that are in the subdirectories of *src*. If you only want to find the files at the first level of *src* you can use `GLOB` instead.

 - `CONFIGURE_DEPENDS` means that CMake will check before every build to see if files were added or deleted, and if so it will update accordingly. Without it you would need to manually tell CMake to reconfigure each time you add or remove a file.

You can then use that list of files like so:
```cmake
add_executable(${PROJECT_NAME} ${MY_SOURCES})
```

:::caution warning
Every CMake expert will tell you that you should never use `file(GLOB)` or `file(GLOB_RECURSE)`. The reason is always the same and can be found in the [official CMake documentation](https://cmake.org/cmake/help/latest/command/file.html#filesystem):
>We do not recommend using GLOB to collect a list of source files from your source tree. If no CMakeLists.txt file changes when a source is added or removed then the generated build system cannot know when to ask CMake to regenerate. The `CONFIGURE_DEPENDS` flag may not work reliably on all generators, or if a new generator is added in the future that cannot support it, projects using it will be stuck. Even if `CONFIGURE_DEPENDS` works reliably, there is still a cost to perform the check on every rebuild.

I disagree with it though, since to me maintaining a list of my *.cpp* files in my *CMakeLists.txt* is more of a hassle than having to refresh CMake manually when I add or remove a file. (And `CONFIGURE_DEPENDS` makes it even less of a hassle).

Now that you have the arguments from both sides, pick your poison. 
:::

### Precompiled header

A precompiled header is pretty useful (see [Precompiled Header](./precompiled-header)).
You can create one with CMake using [`target_precompile_headers`](https://cmake.org/cmake/help/git-stage/command/target_precompile_headers.html).
```cmake
target_precompile_headers(Cool PUBLIC
    <vector>
    <string>
    <memory>
    <functional>
    <imgui/imgui.h>
    <imgui/misc/cpp/imgui_stdlib.h>
    <Cool/Log/Log.h>
)
```

## CMake for library authors

As a library, your *CMakeLists.txt* has one goal: define a target containing all the required information for people to link to your library.
Users should only have to do
```cmake
add_subdirectory(libname)
target_link_libraries(${PROJECT_NAME} PRIVATE libname)
```
This is possible because a target can store a lot of things: the sources, the include directories, the compile definitions, *etc.* (this information is known as *requirements* in the literature). When users call `target_link_libraries(${PROJECT_NAME} PRIVATE libname)` all this information is propagated to `${PROJECT_NAME}` by CMake so that our main target will get the proper includes and so on.

*If you want to have a look at a real-world example of modern cmake, check out [p6](https://github.com/julesfouchy/p6/blob/main/CMakeLists.txt) (small library) or [Cool](https://github.com/CoolLibs/Cool/blob/main/CMakeLists.txt) (big framework).*

### add_library()

You create your library's target with
```cmake
add_library(libname)
```
(it is the equivalent of `add_executable(exename)`)

### Use the target_xxx() commands

To set requirements of your library, always use a `target_xxx` function. They all have alternatives without the `target_` prefix, but those functions affect the global state instead of just your target, which is obviously bad! For example if your project uses *libA* and *libB*, you don't want *libB* to see the include directories and settings of *libA*! These libraries should be completely independent!

They are all used like so:
```cmake
target_xxx(target_name PRIVATE additional_parameters ...)
```

You can also use `PUBLIC` or `INTERFACE` instead of `PRIVATE` (see [PRIVATE | PUBLIC | INTERFACE](#private--public--interface)).

Here are the most important functions:

- [`target_include_directories`](https://cmake.org/cmake/help/latest/command/target_include_directories.html) Specifies the location of the include files. For a library I would suggest to put them in a *include/libname* folder and to do `target_include_directories(libname PUBLIC include)` so that the include files are accessed with `#include <libname/some_file.hpp>`. It can also be nice to add a `libname.hpp` file that includes all the other header files. It allows users to include the whole library at once with `#include <libname/libname.hpp>`.
- [`target_sources`](https://cmake.org/cmake/help/latest/command/target_sources.html) Adds source files to the target (appends to the list that was already set with `add_library(libname some_file.cpp)`). It can be useful for example if you only need some files in some situations:
```cmake
add_library(Cool src/Cool.cpp)
if (USE_OPENGL)
    target_sources(Cool PRIVATE src/OpenGL/opengl.cpp)
elseif (USE_VULKAN)
    target_sources(Cool PRIVATE src/Vulkan/vulkan.cpp)
endif()
```
- [`target_link_libraries`](https://cmake.org/cmake/help/latest/command/target_link_libraries.html) To add another target as a dependency.
- [`target_compile_options`](https://cmake.org/cmake/help/latest/command/target_compile_options.html) We have seen it in [Enabling warnings](#enabling-warnings).
- [`target_compile_features`](https://cmake.org/cmake/help/latest/command/target_compile_features.html) We have seen it in [Setting your C++ version](#setting-your-c-version).
- [`target_compile_definitions`](https://cmake.org/cmake/help/latest/command/target_compile_definitions.html) We have seen it in [Adding `#define` (compile definitions)](#adding-define-compile-definitions).
- [`target_precompile_headers`](https://cmake.org/cmake/help/git-stage/command/target_precompile_headers.html) We have seen it in [Precompiled header](#precompiled-header).

### PRIVATE | PUBLIC | INTERFACE

This is the visibility of the requirements set with `target_xxx()`.

- `PRIVATE`: Only this target will have access to these requirements. When other targets link to this one with `target_link_libraries()` they will not get the private requirements. For example your warning level should always be private because you do not want to impose it on your dependents:
 ```cmake
 target_compile_options(libname PRIVATE -Werror -Wall)
 ```
- `PUBLIC`: This target and all of its dependents will be able to access the public requirements. For example if some include directories are used both internaly and by users to access the library, then they should be public:
 ```cmake
 target_include_directories(libname PUBLIC include)
 ```
  Also if you use some other library in your headers, then it will be visible by your users when they include your header, so you need to provide your users with the library:
 ```cmake
 target_link_libraries(Cool PUBLIC glad)
 ```

- `INTERFACE`: This target will *not* have access to these requirements but its dependents will. It is a bit peculiar but can be used for example in a header-only library: the library itself does not need to see the include directory (since there is no source files at all to build), but the dependents do:
 ```cmake
 target_include_directories(my-header-only-lib INTERFACE include)
 ```
 This can also be used if the user-facing headers are different from the private ones (e.g. if you have many headers but only want users to see a `libname.hpp` header that includes all the other ones):
 ```cmake
 target_include_directories(libname INTERFACE include) # The include folder is only used by users
 target_include_directories(libname PRIVATE private-headers) # All the headers that we use internally are in private-headers
 ```

:::tip
Try to keep things private as much as possible! Don't pollute others for no reason.
:::

### Add an alias containing "::"

```cmake
add_library(p6)
add_library(p6::p6 ALIAS p6)
```

People care about having a name with `::` because `target_link_libraries()` can do many different things and if you make a typo in the name of the target it will ignore it instead of reporting an error. It is only if you have a `::` in the name that `target_link_libraries()` will know that it can't be anything but a target and will raise an error if the name doesn't actually correspond to a target.

As far as the alias name goes, people have different conventions like `p6::p6`, `p6::core` *etc.* Pick one that you like.

## Going further

:::info Going further
[Mathieu Ropert, *Using Modern CMake Patterns to Enforce a Good Modular Design*](https://youtu.be/eC9-iRN2b04) (1h)

[Henry Schreiner, *Modern CMake*](https://cliutils.gitlab.io/modern-cmake/) (short online book)

[Stephen Kelly, *Embracing Modern CMake*](https://youtu.be/mn1ZnO3MtVk) (1h)
:::