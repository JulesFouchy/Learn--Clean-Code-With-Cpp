---
title: Adding a menu
---
import TipTryNotToRead from "./_tip_try_not_to_read.md"
import CommitLink from "../../components/CommitLink"
import LessonLink from "@site/components/LessonLink"

Before moving on to our third game, we will add a menu that allows the user to pick the game they want to play:

> ← What do you want to do?<br/>
  ← 1: Play "Guess the Number"<br/>
  ← 2: Play "Hangman"<br/>
  ← q: Quit<br/>
  → a<br/>
  ← Sorry I don't know that command!<br/>
  → 1<br/>
  ← // The game starts playing . . .
  

<TipTryNotToRead />

## Skeleton

Here is a skeleton to help you:

```cpp
int main()
{
    bool quit = false;
    while (!quit) {
        show_the_list_of_commands(); // TODO: implement this function
        const auto command = get_input_from_user<char>();
        // TODO: handle the different possible values of command with a switch
        // NB: don't forget to handle the case of an invalid command!
    }
}
```

<CommitLink hash="2dbe98c7c49f38a9af013a5b17df8e6079f6c78a"/>

## Bonus

Something that is a little annoying is that we have to make sure we don't mess up between what we say in `show_the_list_of_commands()` and what we actually implement in our switch. Imagine we want to change the command for a given game: we need to change it in two places, that's bad![^1] Can you think of a way to make the code more robust and easier to change?

[^1]: We are duplicating knowledge and violating the *DRY* principle (see <LessonLink slug="dont-repeat-yourself"/>)

<details>
    <summary>Hint</summary>
    You could define a <code>Game</code> struct that would contain the name of the game as a string and the function you need to call to start the game. Then you can associate a distinct command to each game by storing the game in a map (or an array if you only plan on using numbers: the index of the game will correspond to its command). 
</details>

<CommitLink hash="f63f3317faf40baa9ffbf1dadf3b066fe1065711"/>

## Refactoring

As usual, move the code to its own file in order to clean up *main.cpp*.

<CommitLink hash="c0eb2ced7cfbd8c2d5b0e8a56549e5224b344c28"/>