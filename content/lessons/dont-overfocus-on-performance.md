---
title: "Don't overfocus on performance"
benefit: 4
easiness: 3
order: 2
tags:
    - Clean Code
---

Because most applications don't really need performance, and correctness is their main concern. Often, the compute-heavy parts are handled by libraries and you don't need to worry about that. If the code that you write doesn't weigh much in the performance scale, don't waste time optimizing it, or worse, don't optimize it at the expense of readability / maintainability !

Sometimes you have to not be obsessed with performance and have a critical eye on wheter this performance matters. Saving 1 nanosecond every second doesn't matter to anyone! (accept maybe in high-frequency trading) Know your environment and your performance requirements, and don't push it further than you need.