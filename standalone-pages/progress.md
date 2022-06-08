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
import LevelPoints from "@site/components/progress/LevelPoints"

# Progress

<ButterflyGreen/> <ButterflyGreen/> <ButterflyGreen/><br/>
Welcome! In this section you will be able to see your progress live, your current grade, and the next lessons that you can learn.<br/>
<ButterflyBlue/> <ButterflyBlue/> <ButterflyBlue/><br/><br/>

## How is my grade calculated?

### Git and other tools (5 points)

What grants you points:

- ➕ Following [the good practices of the Git lesson](/lessons/git#good-practices)
- ➕ Having a [.clang-format](/lessons/formatting-tool/) file, and applying it to your codebase
- ➕ Having a [.clang-tidy](/lessons/static-analysers/) file, and applying it to your codebase
- ➕ Having a nice ReadMe, using Markdown

What loses you points:

- ➖ Commiting unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- ➖ Making no commits until near the end of the semester

### Clean Code (10 points)

What grants you points:

- ➕ Writing small functions
- ➕ Writing small structs
- ➕ Writing small classes
- ➕ Using free functions whenever possible
- ➕ Names that are clear

What loses you points:

- ➖ Duplicated code
- ➖ Overly complicated code
- ➖ Headers with unnecessary includes in them/ If something is only needed by the .cpp file, only include it in the .cpp, not the .hpp.

### Investment (5 points)

Originalité, déviation par rapport au sujet de TPs, ou faire un projet

What grants you points:

- ➕ Asking questions and participating in class
- ➕ Reading lessons (but how do I evaluate that? Probably just say everybody reads levels 1 and 2 and other levels are bonuses)

What loses you points:

- ➖ 

## How are the lessons sorted?

They are first sorted by **Level**. Then, for lessons of the same Level, a **Priority** is computed as `0.75 * Benefit + 0.25 * Easiness`, which is then remapped between 100% and 0% according to the Level. **Benefit** measures how much your code or workflow will improve if you learn that lesson, and **Easiness** measures how easy it will be to learn that lesson. The bests lessons are the ones that have a huge impact *and* are easy to learn, and these are the ones that will have the highest Priorities.

## Filters
<BrowserOnly>{() =>(<span>
    <StudentPicker/>
    <br/>
    <TagsFilter/>
    <Grade top_position="340px"/>
    <br/>
</span>)}</BrowserOnly>

## Level 1

The basic tools you **must** use while you write code, and the basic habits you should try to start picking up.

<BrowserOnly>{() =>(<span>
    <ProgressScore level={1}/>
    <LessonsTable level={1}/>
</span>)}</BrowserOnly>

## Level 2

The essential principles that will naturally lead you to writing better code.

<BrowserOnly>{() =>(<span>
    <ProgressScore level={2}/>
    <LessonsTable level={2}/>
</span>)}</BrowserOnly>

## Level 3

Many things that will improve your code: C++ features, design patterns, implementation tricks, more tools, *etc.*

<BrowserOnly>{() =>(<span>
    <ProgressScore level={3}/>
    <LessonsTable level={3}/>
</span>)}</BrowserOnly>

## Level 4

Nice to have features, or things to do once you understand most of the things of level 3.

<BrowserOnly>{() =>(<span>
    <ProgressScore level={4}/>
    <LessonsTable level={4}/>
</span>)}</BrowserOnly>

## Level 5

When you have nothing important to learn anymore.

<BrowserOnly>{() =>(<span>
    <ProgressScore level={5}/>
    <LessonsTable level={5}/>
</span>)}</BrowserOnly>