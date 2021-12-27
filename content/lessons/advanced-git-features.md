---
title: Advanced git features
benefit: 3
easiness: 3
order: 3
tags:
    - Tools
    - Git
---

## Amend

Write a commit but don't push it, you can modify it later. It can be good to save your progress even if it doesn't compile yet and you don't want to push it.

## Rebase

Like amend, but more powerful

:::caution
Don't amend or rebase if someone has already pulled your inital commit and starting working on top of it! It will mess up the Git history and merging will be **impossible**.
:::

## Stash