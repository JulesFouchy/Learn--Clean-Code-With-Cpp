---
title: Guess the number
---
import TipTryNotToRead from "./_tip_try_not_to_read.md"
import CommitLink from "../../src/components/CommitLink"

Our first game will be very simple: the program picks a random number, and the user must find it. They make propositions, and the program tells them if they are above or below the actual number. Here is an example:

> ← I picked a number between 0 and 100<br/>
  → 50<br/>
  ← Greater<br/>
  → 75<br/>
  ← Smaller<br/>
  → 63<br/>
  ← Congrats, you won!<br/>

<TipTryNotToRead />

## The building blocks

So, what do we need to code for this game?
- pick a random number
- get an input from the user
- compare the input to the number we picked, and display a message accordingly
- repeat until the user finds the correct number

We will code each of these features one by one, and we will assemble them at the end.

## Picking a random number

Actually this is a bit of an annoying topic in C++, because C++ wants to be very generic and fit every use case. You can read [the lesson on random number generators](../lessons/random) or just copy this function:

```cpp
#include <random>

/// Returns a random int between min (included) and max (included)
int rand(int min, int max) {
    static std::default_random_engine  generator{std::random_device{}()};
    std::uniform_int_distribution<int> distribution{min, max};
    return distribution(generator);
}
```

<CommitLink hash="4af54ba4cb948f6b83ec95e7720ecef2baa09646"/>

## Getting an input from the user

You can use [`std::cin`](https://en.cppreference.com/w/cpp/io/cin) for that. I recommend to wrap that bit of code inside a function, because it will make the usage more convenient afterwards:
```cpp
int get_int_from_user() {
    // TODO ;) Use std::cin to get an int, and then return it
}
```

PS: did you think of what happens when the user tries to input something that is not a number? Here is [a link that can help you](https://stackoverflow.com/questions/10349857/how-to-handle-wrong-data-type-input). (NB: now you might start to understand why we wrap this code in a `get_int_from_user()` function: the code is not trivial so we want to encapsulate it. You can also read [*Write Small Functions*](../lessons/write-small-functions).)

<CommitLink hash="f0b93c1f556d25dc4b4a9511f50110ed5a3765ae"/>

## The game

We will now finish our game by implementing the last two steps!

```cpp
void play_guess_the_number()
{
    // TODO
}
```

- First you need to pick a random number
- Then you need a loop that asks the user for a number, until he guesses right. For the loop you can do something like
```cpp
bool finished = false;
while (!finished) {
    // Ask for a number
    // If it is the correct one then set finished to true
    // Else give a hint to the user ("Greater" or "Smaller")
}
```

<CommitLink hash="26ea43ecc10254df0138015bb9543985dbb79090"/>

## Refactoring

Now that we are done with that game we will move the code into its own file, so that *main.cpp* is now clean again and we can start coding our next game!

:::tip
It is a good practice to first code as you want, where you want, and get something working. You can worry about cleaning up in a second step.<br/>
(Read *[Make it work then make it good](../lessons/make-it-work-then-make-it-good)*)
:::

Think of what needs to go in the header (*.hpp*), and what belongs to the source file (*.cpp*). Tip: try to put as little things as possible in the header, because we want to keep things private as much as possible.

Your main file should now look like:
```cpp
#include "play_guess_the_number.h"

int main()
{
    play_guess_the_number();
}
```

<CommitLink hash="52515fd3ad25c43df3bad4814b672ae2543941b3"/>