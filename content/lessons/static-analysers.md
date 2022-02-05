---
title: Use static analysers
benefit: 5
easiness: 3
level: 1
tags:
    - Tools
---
import VSCodeExtension from "@site/components/VSCodeExtension"

## Brief

There are a lot of bugs and bad coding habits that can be caught by tools. It can really help you a lot to improve the quality of your code!

If you use [the dev container of this C++ template project](https://github.com/JulesFouchy/Simple-Cpp-Setup) you will get a lot of tools installed out of the box. If not, consider using some VS Code extensions: <VSCodeExtension id="jbenden.c-cpp-flylint"/> and <VSCodeExtension id="notskm.clang-tidy"/>; note that you will also have to install the tools that these extensions rely one (*CppCheck*, *clang-tidy* and so on).

To see these tools in action, [check this out](https://youtu.be/juJaaCf_yKc).

## Installing

### clang-tidy

Go to [LLVM's release page](https://github.com/llvm/llvm-project/releases/latest) and choose the right executable (e.g. *LLVM-13.0.0-win64.exe* for windows). Then run the executable and it will install everything (don't forget to accept *Add to PATH*). Once you restart your computer the VSCode extension will be able to find the *clang-tidy* executable.

### The other

They should all be straight forward to install simply by looking on the Internet. If not, please [raise an issue](https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp/issues/new/choose).