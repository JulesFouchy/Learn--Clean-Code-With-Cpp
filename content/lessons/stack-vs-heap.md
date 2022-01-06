---
title: Stack vs Heap
benefit: 5
easiness: 3
level: 3
tags:
    - Performant Code
---

Good Reasons to use the heap :
- varying size (std::vector)
- very big object (image / mesh etc.)
- live longer than the current scope (image / mesh etc.)

Bad reasons to use the heap :
- polymorphism (use std::variant instead of pointer to a base type)