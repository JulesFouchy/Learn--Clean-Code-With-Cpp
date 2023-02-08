---
title: "DRY: Don't repeat yourself"
benefit: 5
easiness: 3
level: clean-code
tags:
    - Clean Code
---
import Resource from "@site/components/Resource"

## Brief

In software development we try to avoid duplications. This helps us maintain our code because the important stuff happens in only one place and we don't have to chase the duplicated code around in our codebase when we want to make a change.

There are many ways to avoid duplications:

- **Use a loop or an algorithm**, when you want to do the same thing multiple times in a row.
- **Use a function**, when you want to do the same thing in different places.
- **Use a template**, when you want to do the same thing but for different types.
- **Use a struct or a class**, when you want to use the same group of data in different places.
- **Use a `using`** declaration, e.g. `using Board = std::array<std::array<boardTile, 3>, 3>`.
- **Use `auto`**, when the type is already declared in the expression; e.g. `std::unique_ptr<MyClass> ptr = std::make_unique<MyClass>();` vs `auto ptr = std::make_unique<MyClass>();`.
- **Use a macro**, (😬[^1]) when you can't use any of the above methods, and have the courage to write and maintain some ugly macro-based code. (Honestly I believe that in most cases duplications are less of an evil than complicated metaprogramming based on macros, so I wouldn't recommend going down the route of macros most of the time). If you really need macros to do complicated things, take a look at a library like [Boost.Hana](https://www.boost.org/doc/libs/1_61_0/libs/hana/doc/html/index.html).
- **Use a Python script** to generate repetitive parts of your C++ code. This can often be a better solution than macros because the generated code is clean and readable, and therefore easy to debug. Arguably having parts of your C++ code as strings in a Python script can be annoying too, but you have to pick your poison. I would recommend to generate the bits of code you need in separate files, and then include those files where you need them in your C++ code. It will be simpler than having code injected directly by the script in the middle of a regular source file; you can just generate the whole file from scratch each time you run the script. Example: [Python script](https://github.com/CoolLibs/Cool/blob/main/src/Cool/ColorSpaces/generator_colors.py), [generated file](https://github.com/CoolLibs/Cool/blob/main/src/Cool/ColorSpaces/generated/parse_color_and_alpha_space.inl), [C++ file using the generated file](https://github.com/CoolLibs/Cool/blob/main/src/Cool/ColorSpaces/ColorAndAlphaSpace.cpp). This uses [this little helper script](https://github.com/CoolLibs/tooling/blob/main/generate_files.py) I wrote.

[^1]: Unfortunately there are still some (very rare) use cases for macros. Hopefully those will disappear once we get reflection and proper metaprogramming in the language, which should come in C++26 or C++29.

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

See also: <Resource title="SOLID, Revisited" author="Tony Van Eerd" link="https://youtu.be/glYq-dvgby4?t=4157" duration="6min"/>.
:::

:::tip
To know if you are violating *DRY*, ask yourself: "If I change this bit of code, would it be a bug to forget to change that other bit of code?" If the answer is yes, then you are not following the *DRY* principle.
:::

:::tip
You should avoid duplicating implementation, but you are free to duplicate intention because it is way less likely to have to change. (And also it is the atomic element of code so you can't really refactor it away anyways).
:::

:::tip
[Introducing the wrong abstraction is **way worse** than introducing duplication](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction).
:::

## Going further

:::info Going Further
*DRY - The Evils of Duplication*, Chapter 2 of [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) (10min, I can lend you the book)
:::