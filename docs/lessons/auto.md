---
title : auto
benefit: 4
easiness: 5
order: 2
tags:
    - C++
---

Most of the time the type of a variable is obvious and a type declaration would be redundant. In such cases you can use `auto` instead :

```cpp
std::unique_ptr<MyClass> my_ptr = std::make_unique<MyClass>();
// Bad : we are saying twice that we want a unique pointer to MyClass
auto my_ptr = std::make_unique<MyClass>();
// Good : we don't repeat ourselves
```

`auto` might feel weird at first, but over time you will probably find yourself using it in more and more places, and that's a good thing (IMHO).

You can find a very good discussion about `auto` by Herb Sutter : https://youtu.be/xnqTKD8uD64?t=1703