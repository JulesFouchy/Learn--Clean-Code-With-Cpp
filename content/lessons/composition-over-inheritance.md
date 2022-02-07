---
title: Composition over Inheritance
benefit: 4
easiness: 2
level: 2
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"
import GoingFurther from "@site/components/GoingFurther"

> Inheritance is often overused, even by experienced developers. A sound rule of software engineering is to minimize coupling: if a relationship can be expressed in more than one way, use the weakest relationship that's practical.<br/>
– *Herb Sutter & Andrei Alexandrescu*

## Brief

Inheritance is great, but its complex. It should therefore only be used in cases that absolutely require it and when no other simpler mechanism would be able to achieve the same job. Such simpler mechanisms include **functions**, **function overloads**, **composition**, **function objects** and **templates**.

## Code reuse

If you are using inheritance to reuse code, then hold your horses! There are simpler ways:
- Use **functions** to reuse logic
- Use **composition** to reuse member variables

## What is composition?

In order to reuse member variables you can put them in a struct or class and add that struct as a member of the class that needs them. For example if many different classes need to have a `Transform` (a.k.a. a position, a rotation and a scale) you *could* have all your classes inherit from `Transform`, but you can also add `Transform` as an attribute of the classes instead:

```cpp
class Transform {
    vec3 position;
    vec3 rotation;
    vec3 scale;
};

class Character {
public:
    // functions that might use _transform if they need it
private:
    Transform _transform;
};

class Obstacle {
public:
    // functions that might use _transform if they need it
private:
    Transform _transform;
};
```

This gives you greater control over the API of the "child" classes. Because when you modify a parent class the change is necessarily reflected in *all* the children, which is often not desired. But often you end up needing to add something in the parent class because one specific child needs it; and by doing so you impose it on all the other children which don't necessarily need or want it. With composition you have greater control over that. And also composition naturally encourages you to write smaller classes instead of inheriting from one big mother class.

## Polymorphism

There are many ways of achieving polymorphism, and inheritance is only one of them! And there are also different kinds of polymorphism: *static* and *dynamic*.

### Static

Static polymorphism happens at compile time: it is therefore more performant, but can be used in fewer situations.<br/>
Static polymorphism is achieved through **templates**. (And **function overloads** can help too):

```cpp
void do_something(int x) {/*...*/}
void do_something(float x) {/*...*/}

template<typename T>
void complicated_function(T x) {
    // ...
    do_something(x); // This will use a different function depending on whether x is an int or a float
                     // Our overload set has helped us doing polymorphism even though the `do_something` functions are simple and don't involve templates!
    // ...
}
```

:::tip
Prefer static polymorphism to dynamic polymorphism whenever possible.
:::

### Dynamic

Dynamic polymorphism allows you to change the behaviour of an object or function *at runtime*. This is typically the use case that people have for inheritance. But there are alternatives! <LessonLink slug="variant"/> and <LessonLink slug="std-function"/>.

#### std::variant

One thing to note is that inheritance allows anyone to subclass a type at any time. This is very generic, but also very rarely needed! Most of the time you will know in advance all the possible subtypes. For example you might by writing an abstract `Camera` class which has exactly two child classes: `TrackballCamera` and `FreeflyCamera`. In such cases using a *std::variant* will be more performant, and also express the semantic better.

```cpp
using Camera = std::variant<TrackballCamera,
                            FreeflyCamera>;
```

Since all alternatives are known at compile time, the size of `Camera` is known too, which means it doesn't have to be allocated on the heap! No need for pointers, *new* or *std::unique_ptr* anymore: you can simply have a `Camera my_camera` on the stack and use it like any old regular variable. There are no problems with copying, no weird reference semantics, no problems at all!

:::info
One downside to *std::variant* is that the syntax is not as nice as it could be, and it might be simpler to use inheritance.<br/>
This has to be taken into account when deciding between *std::variant* and *inheritance*, and I will not blame you if you decide to pay the performance cost of inheritance for the sole reason that it is simpler to write code with inheritance than with *std::variant*. (Although dealing with *unique_ptr* can be quite cumbersome too).

But remember that in some cases *std::variant* will be simpler to use than inheritance (and also, as always, more performant); especially if you need your type to be copiable.
:::

#### std::function

[`std::function`](/lessons/std-function) is an amazing type! It is basically the strategy pattern embodied in a simple-to-use type! If you need to inject behaviour into a class or if you need to pass a function as a parameter to another function, then `std::function` is what you need.

## Good use cases for inheritance

You might now be left wondering when using inheritance is a good idea, if reusing code and doing polymorphism are not it. And in fact, good use cases for inheritance are rare.

### Interfaces

This is probably the bigger one. It is OK to inherit[^1] from a purely abstract class (a.k.a. a class which has no attributes, and only pure virtual methods):

[^1]: And even multiple inheritance works very well when used with interfaces (and needs to be used in many cases because you want your types to inherit from multiple interfaces)

```cpp
class ICamera {
public:
    virtual matrix4x4 view_matrix() const = 0;
    virtual matrix4x4 projection_matrix() const = 0;
};
```

This is called an *interface* and is very useful: it allows the client code to be decoupled from any given *Camera* implementation, and only depend on an interface:

```cpp
void render_scene(const ICamera& camera); // I don't depend on a specific camera implementation
                                          // I just need any object which has a `view_matrix()` and a `projection_matrix()` method
```

### CRTP

The *Curiously Recurring Template Pattern* (CRTP) is a pretty useful implementation trick. For example it allows you to add behaviour to a class easily:

```cpp
class Angle
    : public op::Addable<Angle>  // Defines the operators + and += This is much simpler than implementing them yourself, and less error-prone
    , public op::Scalable<Angle> // Defines Angle * float, float * Angle, and Angle *= float
{
    // . . .
};
```
(*This example uses the* [op](https://github.com/CoolLibs/op) *library*)

To learn about the CRTP, check out [this blog post](https://www.fluentcpp.com/2017/05/12/curiously-recurring-template-pattern/).

## Going further

<GoingFurther resources = {[
    {
        title: "Effective replacement of dynamic polymorphism with std::variant",
        author: "Mateusz Pusz",
        link: "https://youtu.be/gKbORJtnVu8",
        duration: "30min"
    }
]}/>