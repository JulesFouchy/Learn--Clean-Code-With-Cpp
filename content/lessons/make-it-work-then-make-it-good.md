---
title: Make it work, then make it good
benefit: 5
easiness: 4
level: 2
bias: 1
tags:
    - Workflow
---

## Brief

No matter all the other advice I am gonna give you, always remember this one: 
> If you can't find the "perfect" solution, if you know that there must be a simpler way but can't figure out what it is, then don't worry and **do what works for you**!

The most important quality of a piece of code is that *it works*. All the other advice in the other lessons are just here to help you write working code, and make sure it keeps working over time when you make changes to it or to the code surrounding it.

It is completely OK if you do some copy-paste, some duplication, some not-so-good names while you are trying to get something to work. I don't want you to get paralyzed by all the other considerations about clean code.

But beware! I never said not to care about the quality of your code! Just that this concern should come in a second pass, once you already have a working piece of code. At that point, don't move on to the next feature! Go back to the code you just wrote, read it critically, and try to improve it! Refactor duplicated code, split complicated functions into smaller ones, create structs to hold the data that belongs together, creat classes to enforce the invariants of your code, *etc.*. Basically, **try to apply all the things you will learn in the next lessons**.

:::tip
Over time you will realize that – as you get used to writing clean code – you will start to write better code even during the first prototyping pass. But until then, don't feel compelled to produce the best code ever in the first pass.
:::