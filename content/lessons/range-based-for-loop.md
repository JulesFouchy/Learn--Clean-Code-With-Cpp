---
title: Range-based for loop
benefit: 3
easiness: 5
order: 3
tags:
    - Clean Code
    - C++
---

It helps you express your intent more clearly. If you want to go over each element once (which the case of most `for` loops) you can write :

```cpp
const std::vector v = {3, 1, 17, 8};
for (auto x : v) {
    // do something with x
}
for (const auto& x : v) {
    // do something with x
}
for (auto& x : v) {
    // do something with x
}
```

It guarantees that you are not modifying the index in the body of the loop to make nasty things and change the iteration process.Having this guarantee helps people reason about your code, and this is very important !

```cpp
const std::vector v = {3, 1, 17, 8};
for (size_t i = 0; i < v.size(); ++i) {
    // Long body
    // Might do i++ somewhere
}
```