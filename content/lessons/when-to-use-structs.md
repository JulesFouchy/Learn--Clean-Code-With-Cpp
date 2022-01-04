---
title: When to use structs
benefit: 5
easiness: 3
order: 2
bias: 3
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"

Structs allow you to group data together. When there are no invariants to enforce, using a struct and having all your data public is better that using a class (refer to <LessonLink slug="design-great-classes"/>).

Often, if you notice that you are passing the same group of parameters to a few functions, it is a great oportunity to create a struct: it will simplify parameter passing, it will be easier to add a parameter later, and it adds an abstraction to your code that might help you reason about and that you might reuse later.

For example, if many functions take an `x` and a `y`, you might need a `Point` or `Point2D` struct.<br/>
On the other hand if you need a point that is restricted to, say, a disk on the plane, then you will need a class to enforce that invariant.