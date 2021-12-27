---
title: std::string and std::string_view
benefit: 4
easiness: 4
order: 2
tags:
    - C++
---

```string_view``` is compatible with both ```string``` and ```const char*```. You don't need to do conversions or call .c_str().

## `string`

## `string_view`

It is [a new type from C++17](https://en.cppreference.com/w/cpp/string/basic_string_view). It is a non-owning reference to either a `const char*` or a `std::string`.

It has many advantages: providing the same API as `std::string` for `const char*` without having to pay the cost of constructing a `std::string`, working with `const char*` and `std::string` as if they were the same type, *etc.*

Just remember that it is non-owning, like a reference: it is great for passing parameters around, but if you need to store it as a long-lasting variable you probably still need to use a `std::string`.