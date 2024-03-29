---
title: Naming
benefit: 5
easiness: 1
level: clean-code
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

**The greatest names are both consise and descriptive**: they encapsulate a concept perfectly and everybody can wrap their head around them easily.<br/>
**The next best thing are names that are long, but still descriptive**. The fact that you need a "sentence" to describe your object might indicate that you don't fully understand the abstraction behind it, or that you have a design flaw (maybe your function tries to do several things at once and should be split, or maybe your class has more than one responsibility). Nevertheless it is still a decent name and you can live with it for a while.<br/>
**The last kind of names are the ones that are obscure (or worse, *lies*); those are inacceptable!**

:::tip
To help you find good names, imagine yourself explaining to someone what the function does (or even better, actually find someone and explain it to them). Listen to the words that you will naturally say: they will often be a very good name for your function. And even if it is a full sentence, a long name is better than a bad one.
:::

:::info tip
I could not do a better job than Kevlin Henney already did, so please watch those 10 minutes of his conference, starting at 41:30.
<Resource 
    title="Clean Coders Hate What Happens to Your Code When You Use These Enterprise Programming Tricks"
    author="Kevlin Henney"
    link="https://youtu.be/FyCYva9DhsI?t=2490"/>
:::

## Anecdote

Finding the right name sometimes gives you ideas of how to improve your design. For example I wanted a class to hold a width and a height to represent the size of some images. I started calling it `RectangleSize` to be more generic, but when I realized it was more of an `ImageSize` it helped me a lot! Because then I added an invariant to that class : `width > 0 && height > 0`. This is very useful because most graphics APIs won't accept an empty image anyways and I was doing tests all over the place to make sure that `width > 0 && height > 0`. Once I had this invariant for `ImageSize` I was able to use it safely without checks, since they already took place in the constructor of `ImageSize`.

## Some Guidelines

Some of these are extracted from the [Unreal Engine Coding Guidelines](https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/DevelopmentSetup/CodingStandard/).

### Name your booleans as questions or assertions

To make it clear what true and false mean:

```cpp
// Bad, what does true mean?
bool CheckTea(Tea tea);

// Good, the name makes it clear that true means the tea is fresh
bool TeaIsFresh(Tea tea);
// Also good
bool IsTeaFresh(Tea tea);
```

The *assertion* version is great because it makes your code read as an actual sentence: `if (TeaIsFresh(myTea))`.
On the other hand the *question* version is great because the first word (`is`, `has`, `does`, *etc.*) makes it instantly clear that this is a boolean.

### Avoid abbreviations

What is obvious to you might not be obvious to everybody. Instead of taking the risk, just take the time to type a few more letters :wink:. Only use abbreviations if you are relying on a well established convention, like *id* for *identifier*. For example the *Bloomberg Coding Standards* define a list of allowed abbreviations that everyone should know the meaning of ([*See Section 3.4.3*](http://bloomberg.github.io/bde/knowledge_base/coding_standards.html#general-naming-conventions)).

```cpp
// Bad. Can you guess what this stands for?
int calc_rev_diff();

// Good, no guessing involved
int calculate_revenue_difference();

// Bad (although we have gotten used to it so this is now an OK convention)
void mkdir();

// Good, much clearer to everybody, especially to newbies
void make_directory();
```

### Use variables or functions to split complicated statements

Because it is faster to read than a comment, and can't be outdated:

```cpp
// Bad, difficult to understand
if ((Blah->BlahP->WindowExists->Etc && Stuff) &&
    !(PlayerExists && GameStarted && PlayerStillHasPawn &&
    IsTuesday())))
{
    DoSomething();
}

// Good, way easier to understand
const bool WindowIsValid = Blah->BlahP->WindowExists->Etc && Stuff;
const bool PlayerIsDead = PlayerExists && GameStarted && PlayerStillHasPawn && IsTuesday();
if (WindowIsValid && !PlayerIsDead)
{
    DoSomething();
}
```

## Going further

<GoingFurther resources = {[
    {
        title: "Naming is Hard: Let's Do Better",
        author: "Kate Gregory",
        link: "https://youtu.be/MBRoCdtZOYg",
        duration: "1h",
    },
]}/>