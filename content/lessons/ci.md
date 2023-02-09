---
title: Continuous Integration (CI)
benefit: 4
easiness: 3
level: tools
tags:
    - Tools
---

## Brief

Continuous Integration is the process of testing your code automatically whenever you make changes to it.

For example, you can set it up with GitHub so that, whenever you make a commit, a server will automatically try to build your code and run your tests and, if anything fails, it will warn you. CI is an essential part of development as it ensures that you notice immediately if you break something. It also allows you to test your code on all the platforms (Windows, Linux, MacOS, ...) and all the compilers (Clang, GCC, MSVC, ...) and benefit from all the warnings they have to offer.

You can see the progress (and eventual errors) of your tests in the *Actions* tab of your GitHub repository.

![image](https://user-images.githubusercontent.com/45451201/217274801-37bc38bd-055a-4a84-89b9-e2d56c798b2f.png)

You will also receive an email if something fails.

## How to

To learn more about the specifics of GitHub Actions for C++, [see this article](https://github.com/CoolLibs/cpp-CI-template). Or you can check out how CI is set up in [this template](https://github.com/JulesFouchy/Simple-p6-Setup).

:::info
It is also possible to do this with GitLab (and many others) but you will have to look it up on your own.
:::