---
title: auto
benefit: 3
easiness: 5
level: basic-cpp
tags:
    - Beautiful Code
    - Clean Code
    - C++
---

## Brief

Sometimes the type of a variable is obvious with the context, and a type declaration would be redundant. In such cases you can use `auto` instead:

```cpp
std::unique_ptr<MyClass> my_ptr = std::make_unique<MyClass>();
// Bad: we are saying twice that we want a unique pointer to MyClass
auto my_ptr = std::make_unique<MyClass>();
// Good: we don't repeat ourselves
```

**But there is more!** Sometimes, even if the type is not obvious, you don't want to hardcode it! Using `auto` can make refactoring easier and avoid unwanted implicit conversions. You can find this discussion in more details [here at 28:23](https://youtu.be/xnqTKD8uD64?t=1703).

Of course there are also good reasons not to use auto in some cases. It is up to you to make that decision.

:::tip
**Optimize for the reader, not the writer!**<br/>
You write a piece of code once, and then it will be read many many times by many people in the years to come. So facilitating the life of the readers is way more important than facilitating that of the writer.<br/>
In short: we don't care if you have to type more characters, we only care about the readability of the code.<br/>
So *"auto saves me some typing"* is not a good reason, but *"auto is more readable"* is. And in the cases where auto is *less* readable, then don't use auto!
:::