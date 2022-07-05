---
title: Single Source of Truth
benefit: 4
easiness: 4
level: practices-and-patterns
tags:
    - Clean Code
---

The *Single Source of Truth* principle is very simple : only store an information once !
And it stems from a very simple observation : if you store a value (or information that are deduced from that value) in several places, then they all need to be updated at the same time when you change that value. To do so you can try to write setter functions that will update the data in all the required places, but it is so easy to mess up, especially years in the future when someone else comes along and starts modifiyng the code. Basically it introduces oddities in the code that one must be aware of when working with it. This is why if often leads to bugs at some point ; and it also makes the code harder to reason about and maintain !