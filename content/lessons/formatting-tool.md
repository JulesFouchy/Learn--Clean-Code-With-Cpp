---
title: Use a formatting tool
benefit: 5
easiness: 4
level: 1
tags:
    - Tools
---
import VSCodeExtension from "@site/components/VSCodeExtension"

## Brief

Tools can format your code automatically: fix indentation, add spaces consistently, put curly braces where you want them, *etc.*
It saves a lot of time because it means you don't have to worry about it and do it manually!
Also, it ensures a consistency in style across the whole codebase and all the developers.

## Details

For C++, *Clang format* is the most popular one and I would recommend it. Here is how to set it up:
- Install it on your computer. For Linux it is just a matter of using `sudo apt install clang-format`.
- Install the associated VSCode extension that will automatically run it on your code: <VSCodeExtension id="xaver.clang-format"/>.
- Go to your VSCode settings and:
    - set *Default Formatter* to Clang-Format
    - enable *Format on Save*

You will also need to put a configuration file named *.clang-format* at the root of your project to specify how the formatting should be done. You can use [this great website](https://zed0.co.uk/clang-format-configurator/) to configure it. Or if you don't want to spend too many time tweaking it yourself, you can use mine: https://github.com/CoolLibs/tooling/blob/main/.clang-format.