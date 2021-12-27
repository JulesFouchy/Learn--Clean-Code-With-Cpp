---
title: Setting up a project
---

We will be making a program that allows you to play a few games, all in one project. This will force you to reuse code and maintain the hygiene of your codebase.

## Git

First things first, let's create **a Git repo**. If you are not used to using Git, read [the associated lesson](../lessons/git).

I also created a repo that you will be able to use as a reference / solution as you work on the project. I will regularly link to commits that correspond to the current exercise, and you can also check out the [commit history](https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices--Project/commits/main).

**NB:** in my solution there are a lot of comments that explain why I do things in a certain way. They are not good examples of comments that you should put in your code ; they are only here to help you learn C++. For example these comments shouldn't appear in actual code:
```cpp
static constexpr int MIN = 0;   // `static constexpr` is the "proper" way of declaring constants known at compile time
static constexpr int MAX = 100; // It is as efficient as `#define` but has the benefit of working like a normal C++ variable: it has a type, etc.
```

**NB:** my solutions will not always be the best, partly to keep them simple, partly to leave you room to think and improve the code I give you 😉 (and partly because I am not an omniscient programmer and there might be things that I am simply not aware of).
We will come back to some of the solutions later to improve them.

## Project template

I would recommend you use [this template](https://github.com/JulesFouchy/Simple-Cpp-Setup). It is a minimalist C++ project that uses CMake. It also sets up a few tools that will be useful to you. Read its readme to learn how to build it! (NB: I don't recommend to use the dev container for this project because we will do some graphics stuff later on).