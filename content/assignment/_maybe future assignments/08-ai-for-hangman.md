---
title: An AI for Hangman
---

Now we want to write a program that plays *Hangman* by itself.

You will notice that at the moment our `play_hangman()` function is very opaque and you cannot easily change the way the programm receives guesses from the user. This is a small design flaw that we will fix through *Dependency Injection* (which is a fancy way of saying that we will add a parameter to our function):

```cpp
void play_hangman(std::function<char()> get_next_guess) {
    // TODO: replace get_input_from_user<char>() with get_next_guess()
}
```