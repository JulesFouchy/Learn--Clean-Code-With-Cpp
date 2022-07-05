---
title: Range-based for loop
benefit: 4
easiness: 5
level: basic-cpp
tags:
    - Clean Code
    - C++
---

## Brief

If you want to go over each element of a container `v` once (which the case of most `for` loops) you can write:

```cpp
// If you want to modify the elements of v:
for (auto& x : v) {
    // ...
}
```

```cpp
// If you don't want to modify the elements of v, and your type is costly to copy:
for (const auto& x : v) {
    // ...
}
```

```cpp
// If you don't want to modify the elements of v, and your type is cheap to copy:
for (auto x : v) {
    // ...
}
```

**This helps you express your intent more clearly!**

It guarantees that you are not modifying the index in the body of the loop to make nasty things and change the iteration process. Having this guarantee helps people reason about your code, and this is very important!

```cpp
const std::vector v = {3, 1, 17, 8};
for (size_t i = 0; i < v.size(); ++i) {
    // Long body
    // Might do i++ somewhere
    // This is hard to debug
}
```