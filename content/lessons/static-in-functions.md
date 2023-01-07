---
title: Put your static objects in functions
benefit: 2
easiness: 5
level: practices-and-patterns
tags:
    - C++
---
import GoingFurther from "@site/components/GoingFurther"

## Brief

There is a problem in C++ known as the [Static Initialization Order Fiasco](https://en.cppreference.com/w/cpp/language/siof). It basically means that you should avoid having global static objects. An alternative to that is to put your objects as static local variables in functions, which makes it so that they won't be constructed until they are actually needed, which happens after the initialization of global static objects, thus avoiding some of the problems:

```cpp
// Bad, subject to the Static Initialization Order Fiasco
std::string my_string{"Hello"};
```

```cpp
// Better
std::string& my_string()
{
    static std::string instance{"Hello"};
    return instance;
}
```