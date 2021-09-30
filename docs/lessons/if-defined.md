---
title : "#if defined()"
benefit: 1
easiness: 5
order: 4
tags:
    - C++
---

`#if defined(SOMETHING)` offers more flexibility than `#ifdef SOMETHING`.
For example you can use *negation*, *and* and *or* : `#if defined(SOMETHING) && !defined(SOMETHING_ELSE)`

You can also it with `#elif` :

```cpp
#if defined(MACRO1)
// ...
#elif defined(MACRO2)
// ...
#elif defined(MACRO3)
// ...
#else
// ...
#endif
```