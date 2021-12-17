---
title: Hangman
---
import TipTryNotToRead from "./_tip_try_not_to_read.md"
import CommitLink from "../../src/components/CommitLink"

Our second game will be *Hangman*. The program picks a random word, and the player must find it. They enter letters ony by one: if they are in the word, then they are revealed, otherwise the player loses one life. They lose when they have no more lives, and they win if they find all letters of the word. Here is an example:

> ← You have 8 lives<br/>
  ← \_ \_ \_ \_<br/>
  → e<br/>
  ← Correct!<br/>
  ← You have 8 lives<br/>
  ← \_ \_ \_ e<br/>
  → m<br/>
  ← Nope!<br/>
  ← You have 7 lives<br/>
  ← \_ \_ \_ e<br/>
  → c<br/>
  ← Correct!<br/>
  ← You have 7 lives<br/>
  ← c \_ \_ e<br/>
  → o<br/>
  ← Correct!<br/>
  ← You have 7 lives<br/>
  ← c o \_ e<br/>
  → d<br/>
  ← Congrats, you won!<br/>
  ← The word was "code"<br/>

<TipTryNotToRead />

## The building blocks

So, what do we need to code for this game?
- pick a random word
- get an input from the user
- a struct or class to hold the state of our game (number of lives, letters than have been found)
- displaying the state to the user
- update the state according to the guesses from the user
- check if the player won or lost
- loop until the end of the game

We will code each of these features one by one, and we will assemble them at the end.

## Picking a random word

You might be able to reuse what we did for the last game where we needed a random int. If you do so, you will need to move the `rand()` code to it's own file so that it can be included both in *Guess the Number* and *Hangman*.

You can use a hardcoded list of words like:
```cpp
#include <array>

const char* pick_a_random_word() 
{ 
    static constexpr std::array words = { 
        "code", 
        "crous", 
        "imac", 
        "opengl", 
    };
 
    // TODO: return a random element from the array
} 
```

<CommitLink hash="63ffa3454105ab89900143695485a768aaf30e55"/>

## Getting an input from the user

The code is gonna be very similar to what we did in the last game, except that we want a `char` instead of an `int`. It might be time to generalize that code with a *template*!

First, let's move `get_int_from_user()` into its own *get_input_from_user.h* file.

<CommitLink hash="36046efb9e335e8eef972a0afc9b82a894a83e0d"/>
<br/><br/>

Then we can turn it into a template, a rename it because it is not tied to integers anymore:
```cpp
/// Blocks until the user inputs something of type T in the console
template<typename T>
T get_input_from_user() {
    // TODO: replace int with T
}
```

<CommitLink hash="aa392e00c74b209f68d24ff89a33532b9b4e2e95"/>

## The state of the game

What are the things we need to store?
 - The number of lives remaining
 - The word the player has to guess
 - The letters that the player has found. This is the "hard" part because we have many choices of implementation. We can trade off simplicity of the code for performance if we want to. But since the words are always gonna be small (obvisouly less than 1000 characters), performance should not be a concern and we are gonna aim for the simplest code possible. I thing of vector of bools will work great.