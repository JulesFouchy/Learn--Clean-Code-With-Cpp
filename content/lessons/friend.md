---
title : friend
benefit: 1
easiness: 5
order: 4
tags:
    - Clean Code
    - C++
---

There are __*very few*__ good reasons to use ```friend```.
The only one I can think of is when you are forced, for implementation reasons, to split something into two classes but conceptually it really is one united block. For example, when implementing the state pattern : you have a class X that holds a state S. Although S needs to be a seperate class in order to have different implementations and be changed at runtime, it really is part of X and should be allowed to access it's internals like no one else. Even in that case, you should first wonder wether it wouldn't make sense to put in your public interface all the things that *S* needs. If the answer is now, then maybe you have a use case for ```friend```.

What really bothers me with ```friend``` is that it is *all or nothing*. I wish I could specify that only one given method will be usable by a specific class : "this method is not part of the public API, but it can be used by this one class who knows how to handle it". With the current ```friend```, all friends suddenly have access to all methods *and members*.

(Maybe this problem is lessened when the Single Responsibility Principle is strictly followed and each class really is an *all or nothing* package (since there is only one thing in the package), but still I don't like the fact the friends can access member variables)


=> Useless since C++20 and modules, which allow us a much finer grain control over visibility

[PassKey idiom](https://youtu.be/zvWCgiVvpPU)