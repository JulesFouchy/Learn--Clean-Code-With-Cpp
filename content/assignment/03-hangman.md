---
title: Hangman
---
import TipTryNotToRead from "./_tip_try_not_to_read.md"
import CommitLink from "../../components/CommitLink"
import LessonLink from "@site/components/LessonLink"

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
    show_word_to_guess_with_missing_letters();
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
    show_defeat_message();
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

The solution that I suggest is that we write all of them as free functions, taking only the parameters they need. We will then have our state in a struct and only pass the required parts of our state to the different functions. (See <LessonLink slug="free-functions"/>)

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
```

<CommitLink hash="39784edef20238fbd646058d9ca63fc1928314eb"/>

## player_has_won()

This one is a bit tricky ; we need to decide how we are gonna store the letters that the user has guessed in order to know if has won. We have many choices of implementation. We can trade off simplicity of the code for performance if we want to. But since the words are always gonna be small (less than 1000 characters, obviously) performance should not be a concern and we are gonna aim for the simplest code possible. I thing of vector of bools will work great, indicating for each letter of the word if it has been found.

```cpp
bool player_has_won(const std::vector<bool>& letters_guessed) {
    // TODO
}
```

We need to know if the vector contains at least one false. You might be tempted to use a loop, but you can also use an algorithm from the standard library and do this in one line! Go search on the Internet how you can do that 😉<br/>
NB: several algorithms can be used to achieve this result and it doesn't really matter which one you pick.

<CommitLink hash="1f853409ad2bd1f71d198f394f5a9d4da2616e67"/>

## show_word_to_guess_with_missing_letters()

We need to output something like *c \_ \_ e*

```cpp
void show_word_to_guess_with_missing_letters(const std::string& word, const std::vector<bool>& letters_guessed) {
    // TODO
}
```

<CommitLink hash="a7a27b74ad1af8fa89c5e1a67abe5178ca7af6ef"/>

## word_contains()

```cpp
bool word_contains(char letter, std::string_view word) {
    // TODO
}
```

:::tip What is string_view?
It is [a new type from C++17](https://en.cppreference.com/w/cpp/string/basic_string_view). It is a non-owning reference to either a `const char*` or a `std::string`.

It has many advantages: providing the same API as `std::string` for `const char*` without having to pay the cost of constructing a `std::string`, working with `const char*` and `std::string` as if they were the same type, *etc.*

Just remember that it is non-owning, like a reference: it is great for passing parameters around, but if you need to store it as a long-lasting variable you probably still need to use a `std::string`.

(Read <LessonLink slug="string-and-string-view"/>)
:::

(**NB:** there might be a one-liner solution available in the standard library! Go search for it 😉)

<CommitLink hash="f4d32f3a93cfb3455cd977c41e99b7956b51cd08"/>

## mark_as_guessed()

```cpp
void mark_as_guessed(char guessed_letter, std::vector<bool>& letters_guessed, std::string_view word_to_guess) {
    // TODO
}
```

Again, try to use an algorithm instead of a raw loop.

<CommitLink hash="bf39accdad3e94b34caf912a9a50993e61daae10"/>

## remove_one_life()

```cpp
void remove_one_life(int& lives_count) {
    // TODO
}
```

<CommitLink hash="f2700eb415a3c19201dd5c6ba79553ca12d20a33"/>

## show_congrats_message()

```cpp
void show_congrats_message(std::string_view word_to_guess) {
    // TODO
}
```

<CommitLink hash="905a59b56114569a5c97736f25c5c29a2af29317"/>

## show_defeat_message()

```cpp
void show_defeat_message(std::string_view word_to_guess) {
    // TODO
}
```

<CommitLink hash="6b926baddbe8139f406bfc70f3d768e561434ce3"/>

## Assembling it all

Now we can go back to our pseudo-code and implement it. The final code might be a bit different because we did not consider the parameters we had to pass to each function, but the structure of the code is still the same!

```cpp
void play_hangman() {
    // TODO: adapt the code below to make it work
    pick_a_word_to_guess();
    while (player_is_alive() && !player_has_won()) {
        show_number_of_lives();
        show_word_to_guess_with_missing_letters();
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
        show_defeat_message();
    }
}
```

<CommitLink hash="ab4f021e61f020e4be095532e1258e021cd493b6"/>

## Refactoring

Now, as we did for the previous game, we will move all this code into its file.

<CommitLink hash="1fedb688994be92d5e787f733e685611973c7256"/>

## Bonus

### Enforcing invariants with a class

You noticed that in several functions we had to `assert(word_to_guess.size() == letters_guessed.size())`. This is because from the point of view of the function their is no guarantee that this invariant has been enforced. But because of that we end up checking the invariant many times, which is a waste of effort and requires more code (and code duplication!).

So, how can we improve this situation? Well, classes are made exactly for that reason (and only that reason): *enforcing invariants*!

```cpp
class WordWithMissingLetters {
public:
    WordWithMissingLetters(std::string_view word)
        : _word{word}
        , _letters_revealed(word.size(), false) // The invariant is enforced by the constructor here, and no public function of this class allows users to break the invariant, so we can guarantee that it will be preserved!
    {}

    // TODO: implement the methods required by the outside world

private:
    std::string _word;
    std::vector<bool> _letters_revealed;
};
```

Now think about which of the functions we wrote deserve (or need) to be members of this class? TIP: try to move as few functions as possible inside the class. Only those that need access to the private details of the class must (and should) be moved in the class. Because each member function has to make sure that the invariant is preserved, whereas free functions using this class can rely on the fact that the invariant is enforced by the class.

You will also probably need to add some getters.

<CommitLink hash="3972c14c04b0a88da9a08b7a27625cbe3127bc8b"/><br/><br/>

:::tip
Designing a good class requires time and thinking, but it can simplify the rest of your code later down the road, and makes your code easier to reason about.

**_Small_ classes that do their job well and enforce one or two invariants are all the rage!**<br/>
(Read <LessonLink slug="design-cohesive-classes"/>)
:::

:::info Bonus
Can you find a better name for this class? The current name is great because it is descriptive, but it is a bit long. Can you find a shorter name that is still as clear as the current one?
:::