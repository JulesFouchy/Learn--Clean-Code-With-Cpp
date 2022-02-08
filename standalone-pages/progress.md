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

**The level 1 is worth <LevelPoints level={1}/> points, the level 2 is worth <LevelPoints level={2}/> points, the level 3 is worth <LevelPoints level={3}/> points, the level 4  is worth <LevelPoints level={4}/> points and the level 5 is worth <LevelPoints level={5}/> points**. For each level the points are split across the lessons according to their difficulty: the harder lessons are worth more points.

Your mastery in each lesson is measured in *butterflies*: 0 butterfly means you haven't looked at the lesson yet, 1 means you have read it, 2 means you are starting to apply it to your code, and 3 means you apply it *consistently* with great success. **You get a third of the points of the lesson for each butterfly you unlock!**

The <ButterflyGreen/> green butterflies <ButterflyGreen/> indicate the points that I have validated, and the <ButterflyBlue/> blue ones <ButterflyBlue/> are the ones you can temporarily check to see what your grade would be if you were to validate those points.

**My goal is that all of you do level 1** (which is pretty easy and quick) and then **focus on level 2** for the majority of the semester. If you do so you will all get at least <LevelPoints level={1}/> to <LevelPoints level={[1, 2]}/> points. *If you have time*, start working on level 3: it is full of important lessons too. Level 4 contains lessons that are slightly less important, or that don't make sense to apply until you have already a strong mastery of level 3. Level 5 contains lessons that are not really important at all, but that are still worth hearing once in your lifetime (perhaps).

:::tip
Don't wait to reach butterfly 3 on a lesson before moving on to the next: this last butterfly might be difficult to get (especially for the harder lessons).<br/>
You will be better off starting new lessons while still trying to apply the previous lessons you learned.
:::

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