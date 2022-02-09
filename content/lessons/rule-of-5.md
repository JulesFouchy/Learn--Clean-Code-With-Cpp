---
title: The Rule of 5
benefit: 3
easiness: 3
level: 3
tags:
    - Clean Code
    - C++
---

The *Rule of 5* states that if you write a *special member function* (a.k.a. a destructor, a copy constructor, a copy assignment, a move constructor or a move assignment), then you need to write all 5 of them. They will not be generated by the compiler because if you define one explicitly this probably means that the implementation that the compiler would have defined by default is not good for any of them.

An example of that is an object containing a raw owning pointer: it needs to be deleted, but also when you make a copy of it you want to copy the pointed object, not the pointer, in order to preserve value semantics. If you were to copy only the pointer then the copied object would point to the same thing as the original object, they would not be independent copies. Also when the first one would be deleted it would delete the pointer that the other object also uses, and you will get a segmentation fault somewhere because the second object is still alive but the pointer it holds has already been destroyed by someone else.

If you have to implement special member functions explicitly, try to make the class as small as possible. You most likely have only one member of your class that requires the destructor / copy. Then, move that member into its own class that implements the rule of 5, and in your main class use that wrapper class and let the compiler generate the destructor / move / copy. It will prevent you from forgetting to copy a member in your copy / move, or something silly of that kind.

:::tip
Most classes shouldn't have explicit special member functions: This is known as the **Rule of 0**.<br/>
Those rare ones that need the *Rule of 5* should be kept at a minimal size: **only one member variable**.
:::