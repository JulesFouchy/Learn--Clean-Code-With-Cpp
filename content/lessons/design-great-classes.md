---
title: Design Great Classes
benefit: 5
easiness: 3
order: 2
bias: 3
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"

First, do you need a class? What is the difference between a *class* and a *struct*?[^1]<br/>
A class can have private members, it can have methods attached to it[^2], and it can use inheritance.

Inheritance is kinda problematic so we are not going to consider it here. We are then left with private member variables, and methods, which actually both serve the same goal: *enforcing invariants*.

:::tip
Classes have one goal: **_enforcing invariants_**.
:::

If you don't have any invariants, you will end up with a class that only has getters and setters that do nothing special: this is basically a struct with an uglier syntax. You could also have member functions, but if your member variables all have getters and setters then you could always replace these member functions with free functions, which is a better practice anyways (see <LessonLink slug="free-functions"/>).

:::tip
Prefer using a *struct* over a *class* if you have no invariants to enforce.
:::

[^1]: I am talking about the semantic differences here, because in C++ a *class* and a *struct* can do exactly the same things. The only difference is that by default if you don't use an access specifier everything is private in a *class* and public in a *struct*.

[^2]: Even though I am not opposed to having methods in a struct.

## Keep it small

Try not to mix concerns inside a single class: it should have only one reason to change.

A good indicator: if none of your methods needs to have access to all members at once, you can probably split that class in two or more smaller classes.

## No private methods

**Private methods** are bad because they can't be tested and they can't be reused outside of the class!

Think about it: what is their advantage over a free function? Apart from the fact that they have access to all the members of the class, and therefore they don't need to declare parameters (which is a bad reason, don't be lazy!), I can't think of anything[^3].

[^3]: Actually they might be used in inheritance hierarchies. But since inheritance hierarchies are a bad practice too, this doesn't count 😛

So my guideline will be: don't use private member functions, use free functions that take as a parameter the things they need.