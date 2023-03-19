---
title: Use structs to group data
benefit: 5
easiness: 3
level: clean-code
bias: 4
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"

> [C.2: Use `class` if the class has an invariant; use `struct` if the data members can vary independently.](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c2-use-class-if-the-class-has-an-invariant-use-struct-if-the-data-members-can-vary-independently)

## Brief

Structs allow you to group data together. When there are no invariants to enforce, using a struct and having all your data public is better that using a class.

## When to prefer a struct to a class

First, what is the difference between a *class* and a *struct*?[^1]<br/>
A class can have private members, it can have methods attached to it[^2], and it can use inheritance.

Inheritance is not always a good option so we are not going to consider it here (see <LessonLink slug="composition-over-inheritance"/>). We are then left with methods and private attributes, which actually both serve the same goal: *enforcing invariants*.

:::tip
Classes have one goal: **_enforcing invariants_**.
:::

:::info
An *invariant* is a property that is always true for your class.<br/><br/>
For example, a `PointInsideUnitDisk` class might store its state as an `x` and `y` values, and have the *invariant* that the length of the `(x, y)` vector is always less than 1. This invariant needs to be enforced by all the methods, e.g. by deciding what happens when we call `set_x()`: do we just set the `x` and throw an exception if the length of `(x, y)` is now greater than 1? Do we set the `x` and then normalize the `(x, y)` vector if its length would otherwise become greater than 1? Or do we not expose a `set_x()` method at all? All of these answers can be valid; it just depends on the context and on how you plan to use your `PointInsideUnitDisk` class.<br/><br/>
On the other hand a `Point2D` "class" might also store its state as an `x` and `y` values, but doesn't have any invariant to enforce because **any** values are valid for `x` and `y`. In that case `Point2D` might be better represented as a *struct* rather than a *class*.
:::

If you don't have any invariants, you will end up with a class that only has getters and setters that do nothing special: this is basically a struct with an uglier syntax. You could also have member functions, but if your member variables all have getters and setters then you could always replace these member functions with free functions, which is a better practice anyways (see <LessonLink slug="prefer-free-functions"/>).

:::tip
Prefer using a *struct* over a *class* if you have no invariants to enforce (see the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c2-use-class-if-the-class-has-an-invariant-use-struct-if-the-data-members-can-vary-independently)).
:::

[^1]: I am talking about the semantic differences here, because in C++ a *class* and a *struct* can do exactly the same things. The only difference is that by default if you don't use an access specifier everything is private in a *class* and public in a *struct*.

[^2]: Although I am not opposed to having methods in a struct.

## Examples

Often, if you notice that you are passing the same group of parameters to a few functions, it is a great oportunity to create a struct: it will simplify parameter passing, make it easier to add a parameter to the group later, and it adds an abstraction to your code that might help you reason about it and that you might reuse later.<br/>
For example, if many functions take an `x` and a `y` you might refactor this into a `Point` or `Point2D` struct.<br/>
On the other hand if you need a point that is restricted to, say, a disk on the plane, then you will need a class to enforce that invariant.

Moreover, if this group of parameters is supposed to have a default value, then you can encode it in the struct instead of duplicating it all over the place in all the functions that take those parameters:

```cpp
// Bad, we are duplicating our default values
class Texture {
    // . . .
    void resize     (ImageSize size,                   InternalFormat internal_format = InternalFormat::RGBA, Channels channels = Channels::RGBA, TexelDataType texel_data_type = TexelDataType::UnsignedByte);
    void upload_data(ImageSize size, const void* data, InternalFormat internal_format = InternalFormat::RGBA, Channels channels = Channels::RGBA, TexelDataType texel_data_type = TexelDataType::UnsignedByte);
};
```

```cpp
// Good, we have removed some duplications and introduced a useful abstraction
struct TextureLayout {
    InternalFormat internal_format = InternalFormat::RGBA;
    Channels       channels        = Channels::RGBA;
    TexelDataType  texel_data_type = TexelDataType::UnsignedByte;
};

class Texture {
    // . . .
    void resize(ImageSize size, TextureLayout layout = {});
    void upload_data(ImageSize size, const void* data, TextureLayout layout = {});
};
```

## Designated initializers

In C++20 structs have become even more amazing thanks to *designated initializers*:<br/>
Given this struct
```cpp
struct WindowConfig {
    const char* title                       = "Hello World";                      // The title that will be displayed in the title bar of the window
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

And note that you can skip some members (like `cap_framerate_on_startup_if` in this example). They will be initialized with their default value. **This makes structs a viable option to emulate named parameters in C++.**