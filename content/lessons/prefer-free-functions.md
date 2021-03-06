---
title: Prefer free functions
benefit: 5
easiness: 3
level: 2
bias: 5
tags:
    - Clean Code
---
import GoingFurther from "@site/components/GoingFurther"

## Brief

:::tip
Free functions help a lot with decoupling, code reuse, testing, *etc.*
:::

The problem with methods is that they depend on the whole class and, if your class is quite large (which it shouldn't be but that's a different topic) then you probably have many unnecessary dependencies. It makes it harder to reason about methods at the call site because they could use any information from the class and, if they are not `const`, modify any member of the class. On the other hand free functions are very clear about their dependencies: it's just the arguments of the function, nothing is hidden. And even if you pass the whole class to the function, at least it can only use the public interface of the class which greatly limits the harm it can do.

**NB:** This doesn't mean that methods are bad or that you should never use them. If you need to encapsulate data and only access it in well defined ways, a method is the way to go. But if something can be done using only the public interface of a class, then a free function is preferable to a member function.

Free functions are also very easy to reuse since they are not burried inside any class and have minimal dependencies.

**Check out what David Sankel has to say about this ([1 minute, starting at 36:00](https://youtu.be/ta3S8CRN2TM?t=2159)), as well as [the C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c4-make-a-function-a-member-only-if-it-needs-direct-access-to-the-representation-of-a-class).**

## Going further

<GoingFurther resources = {[
    {
        title: "Free Your Functions!",
        author: "Klaus Iglberger",
        link: "https://youtu.be/WLDT1lDOsb4",
        duration: "1h",
    },
    {
        title: "How Non-Member Functions Improve Encapsulation",
        author: "Scott Meyers",
        link: "https://embeddedartistry.com/fieldatlas/how-non-member-functions-improve-encapsulation/",
        duration: "15min",
    },
]}/>