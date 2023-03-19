---
title: Design cohesive classes
benefit: 5
easiness: 3
level: clean-code
bias: 5
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"
import GoingFurther from "@site/components/GoingFurther"

## Keep it small

Try not to mix concerns inside a single class: it should have only one reason to change. This is known as the *Single Responsibility Principle*.

A good indicator: if none of your methods need to have access to all members at once then you can probably split that class into two or more smaller classes.

## Avoid public methods that only use the public API

If your method only uses public members of the class, then it could be written as a free function: this will make your class simpler, and the overall design more decoupled. See <LessonLink slug="prefer-free-functions"/>.

:::tip
Public methods are meant to access private members: *this is where the encapsulation happens!*<br/>
If they only need public members then you can turn them into free functions.
:::

## Avoid private methods

Private methods are annoying because they are hard to test and they can't be reused outside of the class.

Think about it: what is their advantage over a free function? Apart from the fact that they have access to all the members of the class, and therefore they don't need to declare parameters I can't think of anything else[^3]. While it might be quick and easy not to have to declare any parameters (and in some situations where the class remains pretty small this is completely ok), it is often preferable to be clear about the dependencies of each function.

[^3]: Actually they might be used in inheritance hierarchies. But since inheritance hierarchies are a bad practice too, this doesn't quite count 😛

So my guideline will be: avoid private member functions, use free functions that take as parameters the things they need.

## Going further

<GoingFurther resources = {[
    {
        title: "SOLID, Revisited",
        author: "Tony Van Eerd",
        link: "https://youtu.be/glYq-dvgby4",
        duration: "1h30",
    },
]}/>