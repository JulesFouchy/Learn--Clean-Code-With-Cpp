---
title: clangd
benefit: 5
easiness: 5
level: tools
tags:
    - Tools
---

If you are familiar with intellisense (which is installed by default in Visual Studio and Visual Studio Code), clangd is the same kind of thing, but better (less laggy, more complete).

After you install the extension, you will see two prompts: one to disable intellisense, and one to download the actual language server. Say yes to both.

![](img/clangd-disable-intellisense.png)


Setting "clangd arguments", ajouter `--compile-commands-dir=${workspaceFolder}/build`

Dire oui quand il demande d'installer le serveur de langage et de désactiver Inetllisense.