---
title : Use libraries
benefit: 5
easiness: 3
order: 3
tags:
    - Architecture
---
import Image from '@theme/IdealImage';

## Build from source

Building from source means that anyone simply has to clone your project and is guaranteed to have all the dependencies, that you never have any version conflict, that you can tweak the libraries if you need to, that you have quick access to the source code to read it and that your IDE can jump to it.

I am not the only one with this opinion. [Titus](https://youtu.be/tISy7EJQPzI)

To add a library to your project you can simply download the folder and copy it into your project, but a better practice is to use a [Git submodule](./git-submodules.md).

## Add them to your project with CMake

If they provide good CMake support, all you should have to do is
```cmake
add_subdirectory(libname)
target_link_libraries(${PROJECT_NAME} libname)
```

If not, then you will have to define the target and its requirements yourself. For that, check out [the lesson on CMake for library authors](./cmake#cmake-for-library-authors).

## Read the documentation

Read the doc! Really! Or at least all the tutorial and introduction parts!<br/>
Whenever I finally take the time to sit down and go through the documentation of a library I use, I always end up cursing myself for not doing it earlier because I learn so much while reading it and I realize it would have saved me a lot of debugging time if I had read it before trying to blindly use the library! Plus you will discover amazing features that you were not even aware of!

:::tip
Take the time and **Read the Fucking Manual**. Programing is a slow and patient process. You will save time later down the road if you take the time to do things properly from the get go.
:::

<Image img={require('../img/the-fucking-manual.jpg')} />