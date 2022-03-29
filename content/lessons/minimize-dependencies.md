---
title: Minimize dependencies
benefit: 5
easiness: 3
level: 3
tags:
    - Clean Code
---
import LessonLink from "@site/components/LessonLink"

## Brief

The dependencies of a given class / function are basically all the things that are accessible (visible) to that class / function. And the more things your object can touch, the more complex it is, the more potential for bugs there is, and the harder to reason about the object becomes.

That's why you should always try to minimize dependencies. <br/>
**For example if a `render_image()` function needs the view matrix of a camera, only pass the matrix, not the whole camera!**

Also, having less dependencies will make your code easier to change, because a change to the `Matrix` class won't affect the `render_image()` function if the latter properly declared that it was not actually depending on the camera but only on one matrix.

<LessonLink slug="prefer-free-functions" text="Prefering free functions"/> is also one way to reduce dependencies: now the function only depends on the public parts of the class, whereas a method would have depended on the whole class.