---
title: Noughts and Crosses
---
import TipTryNotToRead from "./_tip_try_not_to_read.md"
import CommitLink from "../../components/CommitLink"
import LessonLink from "@site/components/LessonLink"
import CodeBlock from "@theme/CodeBlock"

Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click on the window to play!

We are gonna use the [*p6* library](https://github.com/JulesFouchy/p6) which makes it very easy. Its API is strongely inspired by [*p5.js*](https://p5js.org/) which you might already be familiar with.

TODO PUT A GIF OF THE GAME BEING PLAYED

## Adding the library

First you will need to add the library to your project. This might be a great time to read the lessons on <LessonLink text="CMake" slug="cmake"/> and <LessonLink text="Git submodules" slug="git-submodules"/>.<br/>
Also the examples of the library might help you getting started. (In order to find them, browse [the GitHub of the library](https://github.com/JulesFouchy/p6).)

<CommitLink hash="9f1fdf44859f1576d783abb4b3c13526316d5dd3"/>

## First steps

In order to get familiar with the library, start by trying to do some very simple things:

- First create a window
- Then display a square in that window

Again, the library provides all the examples you will need to do that 😉

## Drawing a board

We need a *3 by 3* board. We will make our function a little more general than that since making an *n by n* board is as simple as a *3 by 3*.
But handling a board that is not square adds a little bit of complexity, and since we don't need it for now we will only make a function that can draw square boards, with as many rows as columns.

```cpp
void draw_board(int size, p6::Context& ctx)
{
    // TODO
}
```

![](./img/board.png)

:::info tip
The [map](https://julesfouchy.github.io/p6-docs/reference/math#map) function from *p6* might be useful to convert your loop indices into a position in the window.
:::

<CommitLink hash="e643b41a4b81f4c66642239d03746bb13ccd600f"/>

## Detecting which cell is hovered

In order to click and place our noughts and crosses we first need to be able to know which cell is currently hovered by the mouse.

This time I want to give you a little more room to think about the design, so I am not going to give you the signature of the function(s) you need to write.

<details>
  <summary>Tip n°1</summary>
  <div>
  What will you return from this function? Or in other words: <i>how do you represent a cell?</i><br/>
  It is probably a good occasion to create a little struct (see <LessonLink slug="when-to-use-structs"/>)
  </div>
  <br/>
  <details>
    <summary>My solution</summary>
    <div>
    I chose to represent a cell with a 2D index:
    <CodeBlock language="cpp">{`struct CellIndex {
    int x;
    int y;
};`}
    </CodeBlock>
    It starts as (0, 0) on the bottom left and increases one by one. I then added functions that convert from cell_index to position in the window and vice-versa which allows we to do both my drawing and my hover detection with this CellIndex type.
    </div>
    </details>
</details>

<details>
  <summary>Tip n°2</summary>
  <div>
  It is possible that there is no cell under the mouse, if we are outside the board. How will you handle that?<br/>
  Your return type probably needs to be able to indicate the absence of cell.<br/>
  Since C++17 we have <LessonLink slug="optional"/> that is made exactly for that purpose!
  </div>
</details>

<CommitLink hash="6dbc007e3f95dfe7c71006f3f52e042f0b6197b2"/>