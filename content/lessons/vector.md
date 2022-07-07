---
title: std::vector
benefit: 5
easiness: 5
level: basic-cpp
tags:
    - Clean Code
    - Performant Code
    - C++
---
import YoutubeVideo from "@site/components/YoutubeVideo"

## Brief

This is by far the best container! It can do everything and is also the most performant in almost all situations.<br/>
If you use another container than `std::vector` you must have a very strong reason to do so! Most notably, even if `std::list` has a better algorithmic complexity for some operations, in most cases `std::vector` will still be faster in practice because it has better cache coherency (the data is grouped together in memory, which makes it much faster to access).

<YoutubeVideo id="PocJ5jXv8No?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"/>

<br/>

<YoutubeVideo id="HcESuwmlHEY?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"/>

## Initializer-list syntax

Instead of
```cpp
std::vector<int> v;
v.push_back(1);
v.push_back(7);
v.push_back(4);
v.push_back(12);
```

you can write
```cpp
std::vector<int> v{1, 7, 4, 12};
```

These are totally equivalent. And by the way this syntax works for all the containers, not only `std::vector`.