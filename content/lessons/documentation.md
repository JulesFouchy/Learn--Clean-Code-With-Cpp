---
title: Documentation
benefit: 5
easiness: 3
level: 3
tags:
    - Clean Code
---
import GoingFurther from "@site/components/GoingFurther"

## Document for users of your library

Give examples! Ideally the code should be cimpilable as-is (no hidden information)! It also allows you to write some script that grabs all your examples and tries to run them. Write your examples as tests!

## Document for maintainers of your library

State your intentions, the alternatives you considered, the reason that made you choose this particular implementation etc. Don't be shy, talk a lot, leave a trace for others.

Even if you are unsure or not confident about your design, say it ! It will help future developers have no remorse to rewrite your code, and be confident there isn't some important thing that they are missing and that made you write the code this way.

## Using Doxygen

Doxygen is *the* reference tool to generate documentation for C++ projects. It has one drawback though: the sites it generates are ugly. We can go around that by using another tool for the website part, like Sphinx: [here is a nice tutorial for Doxygen + Sphinx](https://devblogs.microsoft.com/cppblog/clear-functional-c-documentation-with-sphinx-breathe-doxygen-cmake/).

## Going further

<GoingFurther resources = {[
    {
        title: "Documentation in the Era of Concepts and Ranges",
        author: "Christopher Di Bella & Sy Brand",
        link: "https://youtu.be/nm45t2fnUms",
        duration: "1h",
        description: "Good advice on what to put in your documentation"
    }
]}/>