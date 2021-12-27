---
title: Naming
benefit: 5
easiness: 1
order: 1
tags:
    - Clean Code
---

Finding the right name sometimes gives you ideas of how to improve your design. For example I wanted a struct to hold a width and a height to represent the size of some images. I started calling it `RectangleSize` to be more generic, but when I realized it was more of an `ImageSize`, it helped me a lot ! Because then I added an invariant to that struct : width >= 1 and height >= 1. This is very usefull because most graphics API won't accept an empty image anyways and I was doing tests all over the place to make sure width >= 1 and height >= 1. But now that I have this invariant for `ImageSize` I can use it safely without checks, since they already took place in the constructor of `ImageSize`. If we want to allow for an empty image size, we can use `std::optional<ImageSize>` instead, but then we will always have to check to see if it is `nullopt`.

:::info Going further
[*Kevlin Henney on naming*](https://youtu.be/FyCYva9DhsI?t=2490) (10min)

[*Kate Gregory on naming*](https://youtu.be/MBRoCdtZOYg) (1h)
:::