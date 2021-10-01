---
title : Strong Typing
benefit: 4
easiness: 4
order: 3
tags:
    - Dev Practices
---

## Brief

Strong typing is when you create a type just to wrap an `int`,  so that you can give that `int` a name. It helps you express your intent more clearly and makes your APIs harder to misuse. They are amazing and definitely worth the extra little time needed to write them down ; don't be lazy !

## Details

[Read this great article about strong types](https://www.fluentcpp.com/2016/12/08/strong-types-for-strong-interfaces/).

And then look at [this great example](https://youtu.be/ojZbFIQSdl8?t=1444) of using strong types to prevent a nasty bug.

Once you are done with these, I want to give an example of my own.

Consider a 2D position (a.k.a a point) and a 2D displacement (a.k.a. a vector (although that term is way too overloaded and has sadly become ambiguous)). They can both be represented with two numbers *x* and *y* even though they are **_very different concepts_** !

The fact that they are different concepts means that we can not do the same operations on them ! Strong typing can protect us from accidently doing that.

For example, adding two displacements *d1* and *d2* makes total sense : it simply yields another displacement that is the same as moving by *d1* and then by *d2* :

![](../../static/img/displacement-addition.png)

Adding a displacement to a position is perfectly reasonable too : it moves the position :

![](../../static/img/displacement-position-addition.png)

But adding two positions doesn't make sense at all !!!

![](../../static/img/point-addition.png)

Even though it would be easy to add the *representation* of two positions, we want to prevent that because it would most likely be a bug or a logic error.

:::tip
Strong typing helps us give a more concrete representation to ***concepts***, ***physical units***, ***coordinate spaces***, and much more ! They prevent logic errors and make APIs clearer.
:::