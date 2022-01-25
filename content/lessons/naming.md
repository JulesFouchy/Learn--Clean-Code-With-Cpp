---
title: Naming
benefit: 5
easiness: 1
level: 1
tags:
    - Clean Code
---
import GoingFurther from "@site/components/GoingFurther"
import Resource from "@site/components/Resource"
import LessonLink from "@site/components/LessonLink"

> There are only two hard problems in computer science: naming, cache invalidation, and off-by-1 errors.

## Brief

Naming is very important because this is your first and most powerful tool to communicate with the other developers (and with yourself in the future).

It is very important that you pick your names carefuly, take the time to mature your design, and change the names whenever you realize they don't quite describe what your object is or does anymore.

:::tip
Take the time to rename whenever you notice a name that is not quite accurate!
<LessonLink slug="ide" anchor="#rename" text="Use the features of your IDE"/> to make the renaming easy.
:::

The greatest names are both consise and descriptive: they encapsulate a concept perfectly and everybody can wrap their head around them easily.<br/>
The next best thing are names that are long, but still descriptive. The fact that you need a "sentence" to describe your object might indicate that you don't fully understand the abstraction behind it, or that you have a design flaw (maybe your function tries to do several things at once and should be split, or maybe your class has more than one responsibility). Nevertheless it is still a decent name and you can live with it for a while.<br/>
The last kind of names are the ones that are obscure (or worse, *lies*); those are inacceptable!

:::tip
I could not do a better job than Kevlin Henney already did, so please watch those 10 minutes of his conference, starting at 41:30
<Resource 
    title="Clean Coders Hate What Happens to Your Code When You Use These Enterprise Programming Tricks"
    author="Kevlin Henney"
    link="https://youtu.be/FyCYva9DhsI?t=2490"/>
:::

## Anecdote

Finding the right name sometimes gives you ideas of how to improve your design. For example I wanted a class to hold a width and a height to represent the size of some images. I started calling it `RectangleSize` to be more generic, but when I realized it was more of an `ImageSize` it helped me a lot! Because then I added an invariant to that class : `width > 0 && height > 0`. This is very useful because most graphics APIs won't accept an empty image anyways and I was doing tests all over the place to make sure that `width > 0 && height > 0`. Once I had this invariant for `ImageSize` I was able to use it safely without checks, since they already took place in the constructor of `ImageSize`.

## Going further

<GoingFurther resources = {[
    {
        title: "Naming is Hard: Let's Do Better",
        author: "Kate Gregory",
        link: "https://youtu.be/MBRoCdtZOYg",
        duration: "1h",
    },
]}/>