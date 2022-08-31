---
slug: /progress
title: Progress
---
import {TagsFilter} from "@site/components/progress/TagsFilter"
import {LessonsTable} from "@site/components/progress/LessonsTable"
import {Grade} from "@site/components/progress/Grade"
import {StudentPicker} from "@site/components/progress/StudentPicker"
import ProgressScore from "@site/components/progress/ProgressScore"
import BrowserOnly from "@docusaurus/BrowserOnly"
import ButterflyGreen from "@site/static/img/butterfly-green.svg"
import ButterflyBlue from "@site/static/img/butterfly-blue.svg"

# Progress

Welcome! In this section you will be able to see your progress live, the things you did well, and the things you need to work on. This is basically a big list of all the do's and don'ts I expect you to follow during this semester.

:::tip LEGEND
🌞 > You are doing great.<br/>
☁️ > I haven't seen enough of your code yet to tell if you are doing well.<br/>
❌ > I am not happy and you should prioritize working on that point.
:::

Read all of level 1 and 2, and other levels when you need to (e.g. you need a refresher on lambdas, range-for loops etc.)

Level 1: Tools
Level 2: Expressive, Clean code
Level 3: C++ Features
Level 4: Advanced Stuff

Levels don't really make sense anymore cause there isn't a notion of progression. You can read Level 3 whenever you need to learn about a C++ feature.


:::caution
Note that things **are not validated forever**! If you stop writing good code, you will lose your  happy faces! 🌞
:::

It's important that you deviate from the TP and add your own functionalities, it can be very simple, just a few extra functions, but I really want to see as much things as possible that you wrote 100% yourself.


## Git and other tools (coef. 1)

What grants you points:

- ➕ 🌈 Following [the good practices of the Git lesson](/lessons/git#good-practices)
- ➕ 🌈 Having a [.clang-format](/lessons/formatting-tool/) file, and applying it to your codebase
- ➕ 🌈 Having a [.clang-tidy](/lessons/static-analysers/) file, and fixing the problems ot shows you, or asking a teacher what the warning means if you don't understand how to fix it or why it is a problem.
- ➕ 🌈 Having a nice ReadMe, using Markdown
- ➕ 🌈 IDE, debugger, .clang-tidy are very important too, but I can't evaluate them

What loses you points:

- ➖ 💥 Commiting unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- ➖ ☁️ Making no commits until near the end of the semester

## Clean Code (coef. 3)

➕ What you **should** do:

- 🌞 Expressing your intent / Hiding implementation details
- 🌞 Writing small functions
- ☁️ Writing small structs
- ❌ Writing small classes
- ☁️ Using free functions when appropriate

➖ What you **shouldn't** do:

- 🌫 Hard to understand or misleading names
- 🌞 Duplicated code
- ❌ Overly complicated code
- 🌞 Global variables (and singletons are global variables btw!)
- 🌞 Missing a `const`
- 🌞 Not wrapping `std::cin` in a function. Doing so would capture your intention, allow you to handle errors easily, and creating const variables instead of creating them uninitialized and filling them with `cin`.

## C++ Code Quality (coef. 1)

What grants you points:

- ➕ 

What loses you points:

- ➖ Headers with unnecessary includes in them/ If something is only needed by the .cpp file, only include it in the .cpp, not the .hpp.
- ➖ Using `new` instead of a stack allocation or a smart pointer
- ➖ Forgetting `#pragma once` in your headers
- ➖ Using `0` and `1` instead of `true` and `false` for your booleans

## Investment (coef. 1)

Originalité, déviation par rapport au sujet de TPs, ajout de features, ou faire un projet

What grants you points:

- ➕ Asking questions and participating in class
- ➕ Reading lessons (but how do I evaluate that? Probably just say everybody reads levels 1 and 2 and other levels are bonuses)
- ➕ Advancing in the exercises ./ project.

What loses you points:

- ➖ 