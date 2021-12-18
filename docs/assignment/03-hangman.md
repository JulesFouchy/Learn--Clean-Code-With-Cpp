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

We will first write the global logic of our game, and will then implement each function one by one:

```cpp
pick_a_word_to_guess();
while (player_is_alive() && !player_has_won()) {
    show_number_of_lives();
    show_word_to_guess_with_holes();
    const auto guess = get_char_from_user();
    if (word_to_guess_contains(guess)) {
        mark_as_guessed(guess);
    }
    else {
        remove_one_life();
    }
}
if (player_has_won()) {
    show_congrats_message();
}
else {
    show_death_message();
}
```
It should look like that in the end (even though we will probably have to modify it a bit as we write our code)

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
<br/><br/>

NB: you might also need to turn `rand()` into a template in order to be able to use it with other types of integers like `size_t` and `uint32_t`.

<CommitLink hash="16a4076071420a2c6c9ed1188420d7364fb6c748"/>

## Getting an input from the user

The code is gonna be very similar to what we did in the last game, except that we want a `char` instead of an `int`. It might be time to generalize that code with a *template*!

First, let's move `get_int_from_user()` into its own *get_input_from_user.h* file.

<CommitLink hash="36046efb9e335e8eef972a0afc9b82a894a83e0d"/>
<br/><br/>

Then we can turn it into a template, and rename it because it is not tied to integers anymore:
```cpp
/// Blocks until the user inputs something of type T in the console
template<typename T>
T get_input_from_user() {
    // TODO: replace int with T
}
```

<CommitLink hash="aa392e00c74b209f68d24ff89a33532b9b4e2e95"/>

## The state of the game

**Now we will ask a difficult and fondamental question!**

Many functions we wrote in our pseudo-code need to have access to some state. For example `show_number_of_lives()` needs to know the number of lives, `show_word_to_guess_with_holes()` needs to know the word to guess and the letters that have already be found, and so on. So, how are we gonna give our functions access to this state?

:::tip
This is a complex question and there is no one true answer, so feel free to ponder and find your own 🥰
:::

One answer might be that we will make a class which will have all the state as member variables, and that our `show_number_of_lives()` will be a member function. One problem with that approach is that now `show_number_of_lives()` also has access to variables it doesn't need like the word to guess and the letters that have already be found. It is as if we wrote `show_number_of_lives(int number_of_lives, const std::string& word_to_guess, const std::vector<char>& letters_that_have_been_found)`, giving three parameters to our function even though it only needs one.

The solution that I suggest is that we write all of them as free functions, taking only the parameters they need. We will then have our state in a struct and only pass the required parts of our state to the different functions. (See [Prefer free functions](../lessons/free-functions))

So, what do we put in our state? Well, I guess we will see as we implement each function 😉

## show_number_of_lives()

This function only needs the number of lives, so its signature will be
```cpp
void show_number_of_lives(int number_of_lives) {
    // TODO
}
```

<CommitLink hash="328230726b2a03f6a2d3697e315f1d60027e637f"/>

## player_is_alive()

The signature of this function will be
```cpp
bool player_is_alive(int number_of_lives) {
    // TODO
}

<CommitLink hash="39784edef20238fbd646058d9ca63fc1928314eb"/>