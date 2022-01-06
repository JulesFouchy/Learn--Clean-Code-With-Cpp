---
title: Deleted functions
benefit: 3
easiness: 5
level: 4
tags:
    - Clean Code
    - C++
---

You can delete functions to prevent them from beeing used. This is mostly used to prevent a type from being copied ; for example `std::unique_ptr` can't be copied because there can only be one owner of the data, unlike `std::shared_ptr`.

It can be done with the `=delete` syntax:

```cpp
class MyClass{
    //...
    MyClass(const MyClass&) = delete; // delete the copy constructor
    MyClass& operator=(const MyClass&) = delete; // delete the copy assignment
    //...
};
```