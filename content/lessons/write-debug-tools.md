---
title: Write debug tools
benefit: 4
easiness: 3
level: 4
tags:
    - Tools
---

When you write test code to help you develop a feature, don't throw that code away once you are done with your feature! This code will be helpful again one day, when you need to debug something or change the feature. Put an on/off option onto it, hide it behind a `#if DEBUG`, but put an option in your UI to re-enable it so that it is always close at hand when you will need it.

This can be for example a view in your UI that shows you the state of some system.