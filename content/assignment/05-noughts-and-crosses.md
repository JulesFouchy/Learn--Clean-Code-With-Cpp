---
title: Noughts and Crosses
---
import TipTryNotToRead from "./_tip_try_not_to_read.md"
import CommitLink from "../../src/components/CommitLink"
import LessonLink from "@site/components/LessonLink"

Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click on the window to play!

We are gonna use the [*p6* library](https://github.com/JulesFouchy/p6) which makes it very easy. Its API is strongely inspired by [*p5.js*](https://p5js.org/) which you might be familiar with.

TODO PUT A GIF OF THE GAME BEING PLAYED

## Adding the library

First you will need to add the library to your project. This might be a great time to read the lessons on <LessonLink text="CMake" slug="cmake"/> and <LessonLink text="Git submodules" slug="git-submodules"/>.<br/>
Also the examples of the library might help you getting started. (In order to find them, browse [the GitHub of the library](https://github.com/JulesFouchy/p6).)

<CommitLink hash="458a5603ddc711b293543ae9fd1ae6a98ceab45e"/>

## First steps

In order to get familiar with the library, start by trying to do some very simple things:

- First create a window
- Then display a square in that window

Again, the library provides all the examples you will need to do that 😉

## Drawing a board

We need a *3 by 3* board. We will make our function a little more general than that since making an *n by n* board is as simple as a *3 by 3*.
But handling a board that is not square adds a little bit of complexity, and since we don't need it for now we will only make a function that can draw square boards, with as many rows as columns.

```cpp
void draw_board(int size, p6::Context& p6)
{
    // TODO
}
```

![](../img/board.png)


:::info tip
The [map](TODO link to the doc) function from *p6* might be useful to convert your loop indices into a position in the window.
:::

<CommitLink hash="a9f374bd92e8dd2503c35d2b868be469c00fdceb"/>