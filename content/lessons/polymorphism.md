---
title: Polymorphism
benefit: 3
easiness: 2
level: basic-cpp
tags:
    - Clean Code
---
import GoingFurther from "@site/components/GoingFurther"

## Static Polymorphism

Function overloading and templates.

https://www.fluentcpp.com/2017/04/28/extract-interface-cpp/

## Dynamic Polymorphism

Base class *vs* ```std::variant```. When people say why OOP is so great, the biggest (hidden) argument is most often that **polymorphism** is great. But beware the confusion ! OOP is not the only way of achieving polymorphism ; generic programming with ```std::variant``` is an option too.

## Going further

<GoingFurther resources = {[
    {
        title: "Embrace No Paradigm Programming!",
        author: "Klaus Iglberger",
        link: "https://youtu.be/fwXaRH5ffJM",
        duration: "1h",
        description: "Comparison of different approaches to achieve polymorphism",
    },
]}/>