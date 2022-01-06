---
slug: /progress
title: Progress
---
import {TagsFilter} from "@site/components/progress/TagsFilter"
import {LessonsTable} from "@site/components/progress/LessonsTable"
import {Grade} from "@site/components/progress/Grade"
import {StudentPicker} from "@site/components/progress/StudentPicker"
import ProgressScore from "@site/components/progress/ProgressScore"

## How?


Grading:

The lessons are grouped in **levels**:

The level 1 is worth 10 points, the level 2 is worth 5 points, and the levels 3, 4 and 5 are worth 5 points altogether. For each level, the points are split across the lessons according to their difficulty: the harder lessons are worth more points!

Your mastery in each lesson is measured in *butterflies*: 0 butterflies means you haven't looked at the lesson yet, 1 means you have read it, 2 means you are starting to apply it to your code but it's not perfect yet, and 3 means you apply it *consistently* with great success. You get a third of the points of the lesson for each butterfly you unlock!

My goal is that all of you do level 1 (it is pretty easy and quick) and then focus on level 2 for the majority of the semester, and so you will all get at least between 10 and 15. If you have time, start working on level 3, it is full of important lessons too. Level 4 is lessons that are slightly less important, or that don't make sense to apply until you have already a strong mastery of level 3. Level 5 is lessons that are not really important at all, but it always good to know about them, because why not?

PS: don't wait to reach butterfly 3 on a lesson to move on to the next; this last butterfly might be difficult to get (especially for the harder lessons) and you will be better off starting new lessons while still trying to apply the previous lessons you learned.

Level:
 - **1**: the basic tools that you **must** use while you write code, and the basic habits that you must start to try picking up
 - **2**: the essential principles that will naturally lead you to writing better code.
 - **3**: many things that will improve your code: C++ features, design patterns, implmentation tricks, more tools etc.
 - **4**: Nice to have features, or things to do when you are grown up and understand most of the things of level 3
 - **5**: When you have nothing important to learn anymore

 TODO: split the lesson table in multiple tables, one for each level

## Filters
<StudentPicker/>
<br/>
<TagsFilter/>
<Grade/>
<br/>

## Level 1
<ProgressScore level={1}/>
<LessonsTable level={1}/>

## Level 2
<ProgressScore level={2}/>
<LessonsTable level={2}/>

## Level 3
<ProgressScore level={3}/>
<LessonsTable level={3}/>

## Level 4
<ProgressScore level={4}/>
<LessonsTable level={4}/>

## Level 5
<ProgressScore level={5}/>
<LessonsTable level={5}/>