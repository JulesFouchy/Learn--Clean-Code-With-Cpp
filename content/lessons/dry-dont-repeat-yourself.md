---
title: "DRY: Don't repeat yourself"
benefit: 5
easiness: 2
level: 2
tags:
    - Clean Code
---

## Brief

In software development we try to avoid duplications. This helps us maintain our code because the important stuff happens in only one place and we don't have to chase the duplicated code around in our code base when we want to make a change.

There are many ways to avoid duplications:

- **Use a loop or an algorithm**, when you want to do the same thing multiple times in a row
- **Use a function**, when you want to do the same thing in different places
- **Use a template**, when you want to do the same thing but for different types
- **Use a struct or a class**, when you want to use the same group of data in different places
- **Use a macro**, (😬[^1]) when you can't use any of the above methods, and have the courage to write and maintain some ugly macro-based code. (Honestly I believe that in most cases duplications are less of an evil than complicated metaprogramming based on macros, so I wouldn't recommend going down the route of macros most of the time). If you really need macros to do complicated things, take a look at libraries like [Boost.Hana](https://www.boost.org/doc/libs/1_61_0/libs/hana/doc/html/index.html).

[^1]: Unfortunately there are still some (very rare) use cases for macros. Hopefully those will disappear once we get reflection and proper metaprogramming in the language, which should come for C++26 or C++29.

:::info Tip
*Code duplication* doesn't mean *textual duplication*, but **knowledge duplication**.
For example, this is not violating DRY even though the text is the same in two places:
```cpp
bool age_is_valid(int age) {
    return 0 < age && age < 18;
}

bool order_is_valid(int amount) {
    return 0 < amount && amount < 18;
}
```

It is feasible that we will need to change `order_is_valid` while keeping `age_is_valid` the same, and it wouldn't be practical to do if the code had been refactored away. In this example the duplication is a coincidence, not a fondamental property of our domain model.
:::

## Going further

:::info Going Further
*DRY - The Evils of Duplication*, Chapter 2 of [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) (10min, I can lend you the book)
:::