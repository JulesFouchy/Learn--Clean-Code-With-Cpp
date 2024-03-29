---
title: Smart Pointers
benefit: 3
easiness: 5
level: basic-cpp
tags:
    - Clean Code
    - C++
---
import YoutubeVideo from "@site/components/YoutubeVideo"

<YoutubeVideo id="UOB7-B2MfwA?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"/>

**No naked new** : this doesn't mean *no dynamic allocations*, it just means they should always be done through a smart pointer or a container.

```cpp
#include <memory>

MyClass* x = new MyClass(); // BAD
std::unique_ptr<MyClass> x = std::make_unique<MyClass>(); // GOOD
std::shared_ptr<MyClass> x = std::make_shared<MyClass>(); // GOOD too, but less often what you need
```