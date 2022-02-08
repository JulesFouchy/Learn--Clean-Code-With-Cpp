---
title: Use structs to group data
benefit: 5
easiness: 3
level: 2
bias: 3
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"

## Brief

Structs allow you to group data together. When there are no invariants to enforce, using a struct and having all your data public is better that using a class (as explained in <LessonLink slug="design-cohesive-classes"/>).

Often, if you notice that you are passing the same group of parameters to a few functions, it is a great oportunity to create a struct: it will simplify parameter passing, make it easier to add a parameter to the group later, and it adds an abstraction to your code that might help you reason about it and that you might reuse later.<br/>
For example, if many functions take an `x` and a `y` you might refactor this into a `Point` or `Point2D` struct.<br/>
On the other hand if you need a point that is restricted to, say, a disk on the plane, then you will need a class to enforce that invariant.

## Designated initializers

In C++20 structs have become even more amazing thanks to *designated initializers*:<br/>
Given this struct
```cpp
struct WindowConfig {
    const char* title;                                                            // The title that will be displayed in the title bar of the window
    int         initial_width               = 1280;                               // Initial width of the window
    int         initial_height              = 720;                                // Initial height of the window
    bool        cap_framerate_on_startup_if = true;                               // Whether the framerate should be capped or not (this can later be changed at runtime through window.cap_framerate_if())
    bool        maximize_on_startup_if      = is_building_as(BuildMode::Release); // Whether the window will be maximized when the application starts.
    bool        hide_on_startup_if          = false;                              // Whether the window will be hidden when the application starts.
};
```

you can now initialize it by naming its members:
```cpp
const auto window_config = WindowConfig{
    .title                  = "Hello C++",
    .initial_width          = 500,
    .initial_height         = 500,
    .maximize_on_startup_if = true,
};
```

Which is much more readable than
```cpp
const auto window_config = WindowConfig{"Hello C++", 500, 500, true, true, false};
```

And note that you can skip some members (like `cap_framerate_on_startup_if` in this example). They will be initialized with their default value.