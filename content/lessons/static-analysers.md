---
title: Linter
benefit: 5
easiness: 3
level: tools
tags:
    - Tools
---
import VSCodeExtension from "@site/components/VSCodeExtension"
import LessonLink from "@site/components/LessonLink"

## Brief

There are a lot of bugs and bad coding habits that can be caught by tools. It can really help you a lot to improve the quality of your code! *clang-tidy* is a great one and I would recommend using it.

## Installing

You simple need to have <LessonLink slug="clangd" text="clangd set up"/>.

To configure the behaviour of clang-tidy you need to have a *.clang-tidy* file at the root of your project. You can [use mine as a starting point](https://github.com/CoolLibs/tooling/blob/main/.clang-tidy).

Once that is done you should see warnings popping up inside your IDE:

![clang-tidy](img/clang-tidy.png)

Also note the *"Quick Fix... (Ctrl+;)"* option: sometimes clang-tidy is even capable of fixing the problem for you automatically!