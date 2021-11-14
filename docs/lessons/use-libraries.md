---
title : Use libraries
benefit: 5
easiness: 3
order: 3
tags:
    - Architecture
---

### Build from source

Building from source means that anyone simply has to clone your project and is guaranteed to have all the dependencies, that you never have any version conflict, that you can tweak the libraries if you need to, that you have quick access to the source code to read it and that your IDE can jump to it.

I am not the only one with this opinion.

To add a library to your project you can simply download the folder and copy it into your project, but a better practice is to use a [Git submodule](./submodules).

### Add them to your project with CMake

If they provide good CMake support, all you should have to do is
```cmake
add_subdirectory(libname)
target_link_libraries(${PROJECT_NAME} libname)
```

If not, then you will have to define the target and its requirements yourself. For that, check out [the lesson on CMake for library authors](./cmake#cmake-for-library-authors).