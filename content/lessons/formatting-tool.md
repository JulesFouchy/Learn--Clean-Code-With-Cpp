---
title: Use a formatting tool
benefit: 4
easiness: 5
order: 1
tags:
    - Tools
---

## Brief

Tools can format your code automatically: fix indentation, add spaces consistently, put curly braces where you want them, *etc.*
It saves a lot of time because it means you don't have to worry about it and do it manually!
Also, it ensures a consistency in style across the whole codebase and all the developpers.

## Details

For C++, *Clang format* is the most used one and I would recommend it. You can use it inside VSCode through this extension: [xaver.clang-format](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format). Once installed you will need go in your VSCode settings and
 - set *Default Formatter* to Clang-Format
 - enable *Format on Save*

You will also need to put a configuration file named *.clang-format* at the root of your project to specify how the formatting should be done. You can use [this great website](https://zed0.co.uk/clang-format-configurator/) to configure it. If you don't want to spend too many time tweaking it yourself, you can use mine: https://github.com/CoolLibs/Cool/blob/main/.clang-format.