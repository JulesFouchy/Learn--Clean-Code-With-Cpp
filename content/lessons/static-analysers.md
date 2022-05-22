---
title: Use static analysers
benefit: 5
easiness: 3
level: 1
tags:
    - Tools
---
import VSCodeExtension from "@site/components/VSCodeExtension"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Brief

There are a lot of bugs and bad coding habits that can be caught by tools. It can really help you a lot to improve the quality of your code!

If you use [the dev container of this C++ template project](https://github.com/JulesFouchy/Simple-Cpp-Setup) you will get a lot of tools installed out of the box. If not, consider using some VSCode extensions: <VSCodeExtension id="jbenden.c-cpp-flylint"/> and <VSCodeExtension id="notskm.clang-tidy"/>. Note that you will also have to install the tools that these extensions rely one (*CppCheck*, *clang-tidy* and so on).

To see these tools in action, [check this out](https://youtu.be/juJaaCf_yKc).

## Installing

### clang-tidy

[Clang Tidy is now very easy to use in VS Code!](https://devblogs.microsoft.com/cppblog/visual-studio-code-c-december-2021-update-clang-tidy/).

<Tabs>
  <TabItem value="windows" label="Windows" default>
Go to <a href="https://github.com/llvm/llvm-project/releases/latest" target="_blank">LLVM's release page</a> and choose the right executable (e.g. <i>LLVM-13.0.0-win64.exe</i>). Then run the executable and it will install everything (don't forget to accept <i>Add to PATH</i>). Once you restart your computer the VSCode extension will be able to find the <i>clang-tidy</i> executable.
  </TabItem>
  <TabItem value="linux-and-mac" label="Linux and Mac">
It should be as simple as installing it through your favorite package manager. If not, go look on the Internet!
  </TabItem>
</Tabs>

To configure the behaviour of clang-tidy you need to have a *.clang-tidy* file at the root of your project. You can [use mine as a starting point](https://github.com/CoolLibs/tooling/blob/main/.clang-tidy).

### The other

They should all be straight forward to install simply by looking on the Internet. If not, please [raise an issue](https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp/issues/new/choose).