---
title: std::variant
benefit: 3
easiness: 3
level: basic-cpp
tags:
    - Clean Code
    - Performant Code
    - C++
---
import GoingFurther from "@site/components/GoingFurther"
import YoutubeVideo from "@site/components/YoutubeVideo"


## Brief

`std::variant<int, float> my_variant;` is a variable that can hold either an int or a float, and the actual type it holds can change at runtime. Using `std::variant` with `int` and `float` is not all that useful, but it starts to get very interesting when we use `variant` to represent the different states that we could be in, or to achieve polymorphism for example: `std::variant<TrackballCamera, FreeflyCamera>`.

<YoutubeVideo id="qCc_Vqg3hJk?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"/>

<br/>

[An example of using `variant`](https://youtu.be/ojZbFIQSdl8?t=933).<br/>
[Another example of using `variant`](https://youtu.be/ojZbFIQSdl8?t=1128).

`std::variant` is a very good alternative to enums because – on top of beeing a list of possible states – it can contain data.

## Going further

<GoingFurther resources = {[
    {
        title: "Using Types Effectively",
        author: "Ben Deane",
        link: "https://youtu.be/ojZbFIQSdl8",
        duration: "1h",
    },
    {
        title: "Effective replacement of dynamic polymorphism with std::variant",
        author: "Mateusz Pusz",
        link: "https://youtu.be/gKbORJtnVu8",
        duration: "30min",
    },
]}/>