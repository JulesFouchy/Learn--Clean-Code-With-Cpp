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

The problem is that methods depend on the whole class and, if your class is quite large (which it shouldn't be but that's a different topic) then you probably have many unnecessary dependencies. It makes it harder to reason about methods at the call site because they could use any information from the class and, if they are not `const`, modify any member of the class. On the other hand free functions are very clear about their dependencies: it's just the arguments of the function, nothing is hidden. And even if you pass the whole class to the function, at least it can only use the public interface of the class which greatly limits the harm that it could do.

Free functions are also very easy to reuse, since they are not burried inside any class and have minimal dependencies.

<!-- I don't know how much you are used to Object-Oriented Programming, using classes and methods ; but I know that when I personnaly started learning these topics, I then used them everywhere, every function has to be encapsulated in a class. -->

:::info Going further
[David Sankel, *Building Software Capital: How to write the highest quality code and why*](https://youtu.be/ta3S8CRN2TM?t=2159) (1m)

[Klaus Iglberger, *Free Your Functions!*](https://youtu.be/WLDT1lDOsb4) (1h)
:::