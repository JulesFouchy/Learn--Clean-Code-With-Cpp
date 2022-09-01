---
title: Bubble Shooter
---
import TipTryNotToRead from "./_tip_try_not_to_read.md"
import CommitLink from "../../components/CommitLink"
import LessonLink from "@site/components/LessonLink"
import CodeBlock from "@theme/CodeBlock"

Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click in the window to play!

We are gonna use the [*p6* library](https://github.com/JulesFouchy/p6) which makes it very easy. Its API is strongely inspired by [*p5.js*](https://p5js.org/) which you might already be familiar with.

<img src="/Learn--Clean-Code-With-Cpp/img/noughts-and-crosses.gif" style={{width: "50%"}} />

## Adding the library

First you will need to add the library to your project. This might be a great time to read the lessons on <LessonLink text="CMake" slug="cmake"/> and <LessonLink text="Git submodules" slug="git-submodules"/>.<br/>
Also the examples of the library might help you getting started. (In order to find them, browse [the GitHub of the library](https://github.com/JulesFouchy/p6)).

<CommitLink hash="9f1fdf44859f1576d783abb4b3c13526316d5dd3"/>

## First steps

In order to get familiar with the library, start by trying to do some very simple things:

- First create a window
- Then display a square in that window

Again, the library provides all the examples you will need to do that 😉

## Implementing the game

I will let you on your own for this one! **Think about the abstractions you need to create** (a.k.a. which classes you will need) and try to keep your code organized and readable. <LessonLink text="Make a lot of small functions!" slug="write-small-functions"/>.

## Refactoring

Congrats, you have finished a pretty nice game! Now all that there is left to do is to move your code into its own file and add this game to the menu.