---
title: Adding tests
---

We will go back to our *Hangman* game and add a few tests. Tests are very important and a huge part of the job of every developer. To learn why tests are so great and how to write them, first [read the lesson](../lessons/testing).

TODO SHOW HOW TO TEST SOME SIMPLE FUNCTIONS

The most interesting tests will be for the logging functions like `show_word_to_guess_with_missing_letters()`. How can we know what has been outputed to `std::cout`? It is tricky and even if there was a way, this is not the right approach!
Our function `show_word_to_guess_with_missing_letters()` is inherently hard to test because it has side-effects! If we tweak our function and move the side-effect outside of it, it will become a *pure function* that is much easier to test. It will also become more general, and easier to reason about! Many good reasons to get rid of the side-effects!

:::tip
You will often find that trying to design a function to make it testable also forces you to design a better function in the first place 😉
:::

In its previous version `show_word_to_guess_with_missing_letters()` had two reasons to change: if we wanted to change how the string is formated, and if we wanted to change the way we output it to the user! It didn't respect the Single Responsibility Principle!

Now we will split this into two simpler chunks:
```cpp
std::string format_word_to_guess_with_missing_letters(const std::string& word, const std::vector<bool>& letters_guessed) {
    // TODO: return the string instead of outputing it to std::cout
}
```

and the act of outputting to std::cout is already so simple that we can use it directly in the main code:
```cpp
pick_a_word_to_guess();
while (player_is_alive() && !player_has_won()) {
    show_number_of_lives();
    std::cout << format_word_to_guess_with_missing_letters(word_to_guess, letters_guessed);
// ...
```

It might feel silly to add tests to a code that we already know to work. And even though it kinda is, there is still a lot of benefits to writing tests afterwards: 
common misconception: the main goal of tests is not to prove that the code you just wrote is correct (we trust you on that, even though tests can help you writing your code), they are mainly here to make sure that whenever anyone changes the code, it **remains** correct!
(But if you can write the tests as you write the code it is even better because they will help you write and debug your code, and you are less likely to forget to test an edge case)
And since we will modify our *Hangman* in the next section, now is a good time to add tests to it.