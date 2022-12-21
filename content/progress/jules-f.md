---
title: Jules F
---
import StudentsDropdown from "@site/components/progress/StudentsDropdown"
import LessonLink from "@site/components/LessonLink"

<StudentsDropdown/>

<br/>

# Progress

Welcome! In this section you will be able to see your progress live, the things you did well, and the things you need to work on. This is basically a big list of all the do's and don'ts I expect you to follow during this semester.

:::tip CAPTIONS
🌞 > You are doing great.<br/>
☁️ > I haven't seen enough of your code yet to tell if you are doing well.<br/>
❌ > I am not happy and you should prioritize working on that point.
:::

:::caution
Note that things **are not validated forever**! If you stop writing good code, you will lose your  happy faces! 🌞
:::

## Tools (3 pts.)

➕ *What you **should** do:*

- 🌞 Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- 🌞 Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- 🌞 Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.
<!-- - 🌞 Having a nice ReadMe, using Markdown -->
- 🌞 IDE, debugger, .clang-tidy are very important too, but I can't evaluate them

➖ *What you **shouldn't** do:*

- ❌ Commiting unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- ☁️ Making no commits until near the end of the semester

## Clean Code (12 pts.)

➕ *What you **should** do:*

- 🌞 Express your intent / Hide implementation details
- 🌞 Write small functions
- 🌞 Write many functions
- ☁️ Write small structs
- ❌ Write small classes
- ❌ Use strong types
- ❌ Encapsulation, use `public` / `private` accordingly
- 🌞 Use `const` when appropriate (see <LessonLink slug="const"/>)
- ❌ Use range-based loops or algorithms, instead of raw loops
- ☁️ Use free functions as often as possible, and methods only when appropriate
- ☁️ Bonus points if you find an occasion to use `std::optional` (and `std::variant` if you are an advanced user)

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names
- 🌞 Duplicated code
- ❌ Overly complicated code
- 🌞 Global variables (and singletons are global variables btw!)
- 🌞 Not wrapping `std::cin` in a function. Doing so would capture your intention, allow you to handle errors easily, and creating const variables instead of creating them uninitialized and filling them with `cin`.

## C++ Code Quality (3 pts.)

➕ *What you **should** do:*

- ☁️ Use lambdas when appropriate

➖ *What you **shouldn't** do:*

- ☁️ Headers with unnecessary includes in them/ If something is only needed by the .cpp file, only include it in the .cpp, not the .hpp.
- ☁️ Using `new` instead of a stack allocation or a smart pointer
- ☁️ Headers and source files in two separate folder[^1]. Put them next to each other, bc after I read I very often want to read the other so it should be easy to find.
- ☁️ Forgetting `#pragma once` in your headers
- ☁️ Using `0` and `1` instead of `true` and `false` for your booleans

[^1]: Unless you are writing a library. Then it might be to expose some headers and not others in an "include" folder.

## Investment (4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Advance in the exercises / project.
- ☁️ Deviate from the guided steps, add your own touch to the exercises, add more features than are not explicitly asked for
- ☁️ Take my feedback into account, improve your old code if need be

➖ *What you **shouldn't** do:*

- ☁️ Submitting no work until near the end of the semester
- ☁️ Copy-pasting the solution