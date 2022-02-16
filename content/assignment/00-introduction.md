---
title: Introduction
slug: /assignment
---
import LessonLink from "@site/components/LessonLink"

## ["Passe-moi le code !"](https://www.youtube.com/watch?v=59lC-XnPgBE&ab_channel=LaCineTech)

> Que ce soit tes sources ou ton Wi-Fi, stp passe-moi le code ! 
– [*MC-Risson*](https://www.youtube.com/watch?v=59lC-XnPgBE&ab_channel=LaCineTech)

In order to evaluate you, all I need is to see some code you wrote in order for me to tell which lessons you mastered.

**This means that the exact project you will be working on is up to you**.

I will provide a suggestion of a small project with guided steps, but you can choose to work on your own project instead.

The main difference will be that I won't be able to provide you with guided steps for your own projects, but this also means that you will learn a ton more by doing it! You might also be more motivated to work on something you chose and care about.

## Submitting your work

I will be looking at your code regularly to give you feedback and start checking the lessons that you are learning.

In order for me to do so, all of you must publish your work on a public Git repository (which is good practice anyways, and will be the number one lesson I will be looking at).

You can use GitHub, GitLab or whatever you are used to using. Just send me a link to the relevant repository *now* (or as soon as you start working on the project).

Also, there are some lessons that I won't be able, from looking at your code, to tell if you have read them, like <LessonLink slug="master-your-ide"/>. So it would be nice if you kept a little ReadMe of all the lessons you have read. You can also use it for yourself: for example you can take notes of the things you learned in the lesson and really don't want to forget[^1], write down the points that you didn't quite get, the ones you disagree with, *etc.*

[^1]: This is a great learning practice. See [The Pragmatic Programer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/), Chapter 3, Section *Engineering Daybooks*.

## Time investment

In terms of invested time I won't ask you more than can fit during the class sessions, i.e. 24 hours in total this semester. This means that hopefully you won't have to work (too much) outside of class on your spare time.

Please note that *I will only be evaluating the quality of your code, not the state of the end product*. This means that it doesn't matter if you don't have time to finish the project you set out to do! Your grade will be solely based on the lessons you successfully applied in the project. So no worries please 😎.

## Option#1: Rolling your own project

I would highly encourage you to do so if you are really interested in programming. You will definitely learn a ton by doing so, and produce something that you will be proud of.

If you choose to do so it might be a good idea to share your plans with me so that we can discuss them, give you some feedback or suggestions, and try to estimate the time it will take you. Note that you can still embark on a huge project if you so desire because it doesn't matter if you don't finish it for the end of the semester (see [Time investment](#time-investment)).

**For this project you _can_ work in groups**. Simply remember that the more you are on a project, the harder it is to coordinate and produce a cohesive codebase. But if you think that a collaboration would be beneficial, then please go ahead!

I also think that it only makes sense to team up with people who have roughly the same level as you. This way you will be able to help each other out and discuss ideas on equal footing. If you are looking for someone very good to help you, you can always ask your comrades or me, but working on the same project wouldn't be beneficial I believe because you won't be advancing at the same pace and/or having the same ambitions. (I might be wrong though and we can discuss that).

If you choose Option#1, you don't need to care about the other pages of the *Assignment* section. Just know that I strongly recommend to use [this template](https://github.com/JulesFouchy/Simple-Cpp-Setup) as a starting point for your code.

### Project ideas

If you are looking for inspiration I can suggest a few ideas that I would personally love working on:

 - **A Bezier-curve editor**: Check out [this video](https://youtu.be/aVwxzDHniEw) to learn more about Bezier curves. Bezier curves are pretty cool; you could do an editor that renders them, allows you to draw them, implement a fill algorithm to colorize the interior, and so on. Once you can render Bezier curves you can render any SVG using a library like [nanosvg](https://github.com/memononen/nanosvg).
 - **Image post-processing**: Apply effects like brightness, constrast, blur, and many more on an image.
 - **Image mosaic**: Recreate an image by stamping a lot of small ones together, like [this one](https://blenderartists.org/t/mosaic-image-generator-program/596903).
 - **Boids**: Simulate flocks of birds and other similar behaviours, using a few simple rules. Here is a [great explanation by *The Coding Train*](https://youtu.be/P_xJMH8VvAE?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM).
 - **A drawing app**: With a few tools: brushes, shapes, *etc.*
 - **A tool for generative artists**
 - **Cool**: I am currently working on a C++ framework called [*Cool*](https://coollibs.github.io/home/) where we do a lot of image-related work. If you are interested in joining the adventure, there is definitely a place for you! You could work on the camera system, the lighting, the scripting, or many other things.

## Option#2: Following the guided project

This option will be easier to follow and shouldn't require as much time investment. The project will consist in making a few little games: hangman, noughts and crosses, *etc.*.

It makes sense to choose this option if you don't want to have to organize and plan a project by yourself. Here you will be able to focus entirely on the micro-level programming tasks like *"let's get a string from the user"*, *"let's check if this word contains this letter"* and so on.

The other pages of this section will guide you through this project step by step.

I believe it is better if you work alone on this project. (But we can discuss that if you think it will be beneficial for you to team up with someone).