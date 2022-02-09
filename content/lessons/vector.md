---
title: std::vector
benefit: 5
easiness: 5
level: 3
tags:
    - Clean Code
    - Performant Code
    - C++
---

## Brief

This is by far the best container! It can do everything and is also the most performant in almost all situations.<br/>
If you use another container than `std::vector` you must have a very strong reason to do so! Most notably, even if `std::list` has a better algorithmic complexity for some operations, in most cases `std::vector` will still be faster in practice because it has better cache coherency (the data is grouped together in memory, which makes it much faster to access).

The learn how to use `std::vector` watch this [great tutorial by The Cherno](https://youtu.be/PocJ5jXv8No).