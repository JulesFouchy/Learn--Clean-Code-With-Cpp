---
title : Prefer free functions
benefit: 5
easiness: 3
order: 3
tags:
    - Architecture
---

Free functions help a lot with decoupling, code reuse, testing, *etc.*

**NB:** This doesn't mean that member functions are bad or that you should never use them. If you need to encapsulate data and only access it in well defined ways, a member function is the way to go. But if something can be done using only the public interface of a class, then a free function is preferable to a member function.

<!-- I don't know how much you are used to Object-Oriented Programming, using classes and methods ; but I know that when I personnaly started learning these topics, I then used them everywhere, every function has to be encapsulated in a class. -->

:::info Going further
[David Sankel, *Building Software Capital: How to write the highest quality code and why*](https://youtu.be/ta3S8CRN2TM?t=2159) (1m)

[Klaus Iglberger, *Free Your Functions!*](https://youtu.be/WLDT1lDOsb4) (1h)
:::