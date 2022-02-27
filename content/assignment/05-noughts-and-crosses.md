---
title: Noughts and Crosses
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
  It is probably a good occasion to create a little struct (see <LessonLink slug="use-structs-to-group-data"/>)
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
    It starts as (0, 0) in the bottom left and increases one by one. I then added functions that convert from cell_index to position in the window and vice-versa which allows we to do both my drawing and my hover detection with this CellIndex type.
    </div>
    </details>
</details>

<details>
  <summary>Tip n°2</summary>
  <div>
  It is possible that there is no cell under the mouse, if we are outside the board. How will you handle that?<br/>
  Your return type probably needs to be able to indicate the absence of a cell.<br/>
  Since C++17 we have <LessonLink slug="optional"/> that is made exactly for that purpose!
  </div>
</details>

<CommitLink hash="6dbc007e3f95dfe7c71006f3f52e042f0b6197b2"/>

## Drawing the noughts and crosses

Add two functions `draw_nought` and `draw_cross`. You are free to draw them as you want (actually they don't even need to be noughts and crosses).

<CommitLink hash="54c9d01993848c70cd045bb497984caecc87a43c"/>

![](./img/noughts-and-crosses-drawing.png)

## Storing the state of the game

Now to start playing we need to be able to remember where noughts and crosses have been added to the board. Basically we need a `Board` object that, for any given cell, can tell us if there is a cross, a nought, or nothing on that cell.

To make the syntax really nice we are gonna wrap a `std::array` in our own `Board` type and add a `[]` operator so that we can index into it using 2D indices:

```cpp
enum class Player {
    Noughts,
    Crosses,
};

template<int size>
class Board {
public:
    std::optional<Player>& operator[](CellIndex index)
    {
        // TODO
    }

    const std::optional<Player>& operator[](CellIndex index) const
    {
        // TODO
    }

private:
    // TODO
};
```

Then we can draw all the noughts and crosses that are stored in this board:

```cpp
template<int size>
void draw_noughts_and_crosses(const Board<size>& board, p6::Context& ctx)
{
    // TODO
}
```

<CommitLink hash="7c8a5badc8a058465cd72b4cbb882e63bd4eb664"/>

## Placing noughts and crosses

Then, when the player clicks on a cell, we want to add a nought or a cross in that cell.<br/>
This can be done in the [mouse_pressed](https://julesfouchy.github.io/p6-docs/reference/events#mouse_pressed) function of the p6 context:

```cpp
int main() {
    // ...
    ctx.mouse_pressed = [&](p6::MouseButton event) {
        // TODO
    };
}
```

<CommitLink hash="63d8cc096ed71e840136e4bece45780cb197ac60"/>

## Previewing the placement

When the player is hovering a cell we want to show what symbol they are about to put. This helps with the readability of the game.

<CommitLink hash="6036dd33652b03c45774c7563c3f759e05ad066c"/>

## Checking for the end of the game

We are almost done! We just have to check if one of the player has won, or if the game is over because the board is full.

### Checking that the board is full

<CommitLink hash="b06fcb78ed03127742838a89ecf1762bec0a9167"/>

### Checking that a player has won

We need to check all the rows, all the columns, and all the diagonals. How are you gonna reuse the same code for the rows, the columns and the diagonals? This is not an easy question!

<details><summary>Tip</summary>
    You can use <LessonLink slug="std-function"/>.
    <br/><br/>
    <details><summary>More details</summary>
        What differs between the rows, the columns and the diagonals is the way we index into the board. Basically we want a way to loop over any line. Well, we are gonna pass that behaviour to the function through a <i>std::function</i>:
            <CodeBlock language="cpp">{`std::optional<Player> check_for_winner_on_line(const Board<board_size>& board, std::function<CellIndex(int)> index_generator)
{
    // TODO
}`}
            </CodeBlock>
    </details>
</details>

<CommitLink hash="1d4e373e08f3b0b4c150f6f1e25d68c49fd6ac88"/>

## Refactoring

Congrats, you have finished a pretty nice game! Now all that there is left to do is to move your code into its own file and add this game to the menu.

<CommitLink hash="d79e7f02920fea4ff9aabc3d80d27b2ba839756c"/>