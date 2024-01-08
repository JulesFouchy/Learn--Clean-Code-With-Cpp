---
title: Compiler
benefit: 5
easiness: 5
level: tools
bias: 2
tags:
    - Tools
    - C++
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'
import CodeBlock from "@theme/CodeBlock"
import VSCodeExtension from "@site/components/VSCodeExtension"

## Brief

A compiler is a program that takes your C++ code and creates an executable out of it. Needless to say that it is quite important to have as a C++ developer.

## Installation

<Tabs>
  <TabItem value="windows" label="Windows">
You will find all the explanations you need <a href = "https://code.visualstudio.com/docs/cpp/config-msvc">here</a> (<b>NB:</b> you only need to follow the <i>Prerequisites</i> section).<br/>
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
