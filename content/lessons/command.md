---
title: The Command pattern
benefit: 5
easiness: 2
level: 4
tags:
    - Clean Code
---

## Brief

## Remarks

*Command* is similar to *Singleton* in that it gives everyone access to a lot of things without having to declare the dependencies in the signature of the function. But the ig difference is that with *Command* you just express your intent, you are not tied to any specific implementation and we can always change easily how the command is executed. And other parts of the code are never affect by the fact that you submit a command, whereas changing the state of a singleton can impact and annoy everyone. Singleton has state that people might be depending on, whereas Command is just equivalent to calling a function.