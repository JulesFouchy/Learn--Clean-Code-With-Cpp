---
title: Write libraries
benefit: 5
easiness: 3
level: advanced
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"

Even if it's only for your personal use, it will help you a lot with code reuse across projects and also inside one project. And also it will force you to make your code a little more generic, which most of the time will improve it at the same time. Moreover, it will make sure that the code is decoupled from the rest of your application.

So : as soon as you are write some bit of code that is fairly generic, consider turning it into a library.

For CMake refer back to <LessonLink text="here" slug="cmake" anchor="#cmake-for-library-authors"/>.

I would only advice to do it once you are experrienced though. Because it takes wisdow to know how generic your needs to be: dpon't iver do it, but don't under do it either.