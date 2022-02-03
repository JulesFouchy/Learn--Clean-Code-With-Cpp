---
title: Stack vs Heap
benefit: 4
easiness: 3
level: 1
tags:
    - Performant Code
---

Good Reasons to use the heap :
- varying size (std::vector)
- very big object (image / mesh etc.)
- live longer than the current scope (image / mesh etc.)

(Kinda) bad reasons to use the heap :
- polymorphism (use std::variant instead of pointer to a base type)