---
title: Design cohesive classes
benefit: 5
easiness: 3
level: clean-code
bias: 4
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"
import GoingFurther from "@site/components/GoingFurther"

## Brief

First, do you need a class? What is the difference between a *class* and a *struct*?[^1]<br/>
A class can have private members, it can have methods attached to it[^2], and it can use inheritance.

Inheritance is kinda problematic so we are not going to consider it here (see <LessonLink slug="composition-over-inheritance"/>). We are then left with methods and private attributes, which actually both serve the same goal: *enforcing invariants*.

:::tip
Classes have one goal: **_enforcing invariants_**.
:::

If you don't have any invariants, you will end up with a class that only has getters and setters that do nothing special: this is basically a struct with an uglier syntax. You could also have member functions, but if your member variables all have getters and setters then you could always replace these member functions with free functions, which is a better practice anyways (see <LessonLink slug="prefer-free-functions"/>).

:::tip
Prefer using a *struct* over a *class* if you have no invariants to enforce (see the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c2-use-class-if-the-class-has-an-invariant-use-struct-if-the-data-members-can-vary-independently)).
:::

[^1]: I am talking about the semantic differences here, because in C++ a *class* and a *struct* can do exactly the same things. The only difference is that by default if you don't use an access specifier everything is private in a *class* and public in a *struct*.

[^2]: Although I am not opposed to having methods in a struct.

## Keep it small

Try not to mix concerns inside a single class: it should have only one reason to change. This is known as the *Single Responsibility Principle*.

A good indicator: if none of your methods need to have access to all members at once then you can probably split that class into two or more smaller classes.

## Avoid private methods

Private methods are problematic because they can't be tested and they can't be reused outside of the class.

Think about it: what is their advantage over a free function? Apart from the fact that they have access to all the members of the class, and therefore they don't need to declare parameters (which is kind of a bad reason, don't be lazy!) I can't think of anything else[^3].

[^3]: Actually they might be used in inheritance hierarchies. But since inheritance hierarchies are a bad practice too, this doesn't quite count 😛

So my guideline will be: avoid private member functions, use free functions that take as parameters the things they need.

## Avoid public methods that only use the public API

If your method only uses public members of the class, then it could be written as a free function: this will make your class simpler, and the overall design more decoupled. See <LessonLink slug="prefer-free-functions"/>.

:::tip
Public methods are meant to access private members: *this is where the encapsulation happens!*<br/>
If they only need public members then you can turn them into free functions.
:::

## Going further

<GoingFurther resources = {[
    {
        title: "SOLID, Revisited",
        author: "Tony Van Eerd",
        link: "https://youtu.be/glYq-dvgby4",
        duration: "1h30",
    },
]}/>