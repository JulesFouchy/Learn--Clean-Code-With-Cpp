---
title: Install a compiler
benefit: 5
easiness: 5
level: 1
bias: 1
tags:
    - Tools
    - C++
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'
import CodeBlock from "@theme/CodeBlock"
import VSCodeExtension from "@site/components/VSCodeExtension"

## Brief

A compiler is the program that takes your C++ code and creates an executable out of it. Needless to say that it is quite important to have as a C++ developer.

## Installation

<Tabs>
  <TabItem value="windows" label="Windows">
You will find all the explanations you need <a href = "https://code.visualstudio.com/docs/cpp/config-msvc">here</a> (<b>NB:</b> you only need to follow the <i>Prerequisites</i> section).<br/>
I will just add that while you install MSVC, after selecting <b>Desktop development with C++</b>, in the <i>Installation details</i> on the right you must also check <i>C++ Clang tools for Windows</i> (We will need it later when we install amazing tools).
<br/><br/>
Then install CMake: go <a href="https://cmake.org/download/">here</a> and download and run the <i>Windows x64 Installer</i>.
  </TabItem>
  <TabItem value="linux" label="Linux">
I believe all Linux distributions come with a compiler installed. If not, check out <a href="https://code.visualstudio.com/docs/cpp/config-linux">this article</a> (<b>NB:</b> you only need to follow the <i>Prerequisites</i> section).
  </TabItem>
  <TabItem value="mac" label="Mac">
You should just have to run this command:<br/><br/>
<CodeBlock language="cpp">{`xcode-select --install`}</CodeBlock>
If you need more information, you can check out <a href="https://code.visualstudio.com/docs/cpp/config-clang-mac">this article</a> (<b>NB:</b> you only need to follow the <i>Prerequisites</i> section).
  </TabItem>
</Tabs>

## Verification

You should now be able to build [this sample project](https://github.com/JulesFouchy/Simple-Cpp-Setup). If you are using VSCode you just need the <VSCodeExtension id="ms-vscode.cpptools-extension-pack"/> and you should then be able to use the *launch* button at the bottom of your VSCode:

![](./img/cmake-run-project.png)