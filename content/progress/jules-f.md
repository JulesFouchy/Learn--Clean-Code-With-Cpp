---
title: Jules F
---
import StudentsDropdown from "@site/components/progress/StudentsDropdown"

<StudentsDropdown/>

<br/>

# Progress

Welcome! In this section you will be able to see your progress live, the things you did well, and the things you need to work on. This is basically a big list of all the do's and don'ts I expect you to follow during this semester.

:::tip LEGEND
🌞 > You are doing great.<br/>
☁️ > I haven't seen enough of your code yet to tell if you are doing well.<br/>
❌ > I am not happy and you should prioritize working on that point.
:::

:::caution
Note that things **are not validated forever**! If you stop writing good code, you will lose your  happy faces! 🌞
:::

## Git and other tools (3 pts.)

➕* What you **should** do:*

- 🌞 Following [the good practices of the Git lesson](/lessons/git#good-practices)
- 🌞 Having a [.clang-format](/lessons/formatting-tool/) file, and applying it to your codebase
- 🌞 Having a [.clang-tidy](/lessons/static-analysers/) file, and fixing the problems ot shows you, or asking a teacher what the warning means if you don't understand how to fix it or why it is a problem.
- 🌞 Having a nice ReadMe, using Markdown
- 🌞 IDE, debugger, .clang-tidy are very important too, but I can't evaluate them

➖* What you **shouldn't** do:*

- ❌ Commiting unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- ☁️ Making no commits until near the end of the semester

## Clean Code (12 pts.)

➕* What you **should** do:*

- 🌞 Expressing your intent / Hiding implementation details
- 🌞 Writing small functions
- ☁️ Writing small structs
- ❌ Writing small classes
- ☁️ Using free functions as often as possible, and methods only when appropriate
- ☁️ Bonus points if you find an occasion to use `std::optional` (ans `std::variant` if you are an advanced user)

➖* What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names
- 🌞 Duplicated code
- ❌ Overly complicated code
- 🌞 Global variables (and singletons are global variables btw!)
- 🌞 Missing a `const`
- 🌞 Not wrapping `std::cin` in a function. Doing so would capture your intention, allow you to handle errors easily, and creating const variables instead of creating them uninitialized and filling them with `cin`.

## C++ Code Quality (3 pts.)

➕* What you **should** do:*

- ☁️ 

➖* What you **shouldn't** do:*

- ☁️ Headers with unnecessary includes in them/ If something is only needed by the .cpp file, only include it in the .cpp, not the .hpp.
- ☁️ Using `new` instead of a stack allocation or a smart pointer
- ☁️ Forgetting `#pragma once` in your headers
- ☁️ Using `0` and `1` instead of `true` and `false` for your booleans

## Investment (4 pts.)

Originalité, déviation par rapport au sujet de TPs, ajout de features, faire un projet, quantité de code rendu.

➕* What you **should** do:*

- ☁️ Asking questions and participating in class
- ☁️ Reading lessons (but how do I evaluate that? Probably just say everybody reads levels 1 and 2 and other levels are bonuses)
- ☁️ Advancing in the exercises ./ project.

➖* What you **shouldn't** do:*

-➖* 