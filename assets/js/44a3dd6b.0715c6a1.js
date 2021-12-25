"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8334],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"Setting up a project"},c=void 0,p={unversionedId:"assignment/project-setup",id:"assignment/project-setup",title:"Setting up a project",description:"Git",source:"@site/../../content/assignment/01-project-setup.md",sourceDirName:"assignment",slug:"/assignment/project-setup",permalink:"/Learn--Cpp-And-Dev-Practices/assignment/project-setup",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setting up a project"},sidebar:"assignment",previous:{title:"Introduction",permalink:"/Learn--Cpp-And-Dev-Practices/assignment"},next:{title:"Guess the number",permalink:"/Learn--Cpp-And-Dev-Practices/assignment/guess-the-number"}},l=[{value:"Git",id:"git",children:[],level:2},{value:"Project template",id:"project-template",children:[],level:2}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"git"},"Git"),(0,a.kt)("p",null,"First things first, let's create ",(0,a.kt)("strong",{parentName:"p"},"a Git repo"),". If you are not used to using Git, read ",(0,a.kt)("a",{parentName:"p",href:"../lessons/use-git"},"the associated lesson"),"."),(0,a.kt)("p",null,"I also created a repo that you will be able to use as a reference / solution as you work on the project. I will regularly link to commits that correspond to the current exercise, and you can also check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices--Project/commits/main"},"commit history"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NB:")," in my solution there are a lot of comments that explain why I do things in a certain way. They are not good examples of comments that you should put in your code ; they are only here to help you learn C++. For example these comments shouldn't appear in actual code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'static constexpr int MIN = 0;   // `static constexpr` is the "proper" way of declaring constants known at compile time\nstatic constexpr int MAX = 100; // It is as efficient as `#define` but has the benefit of working like a normal C++ variable: it has a type, etc.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NB:")," my solutions will not always be the best, partly to keep them simple, partly to leave you room to think and improve the code I give you \ud83d\ude09 (and partly because I am not an omniscient programmer and there might be things that I am simply not aware of).\nWe will come back to some of the solutions later to improve them."),(0,a.kt)("h2",{id:"project-template"},"Project template"),(0,a.kt)("p",null,"I would recommend you use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Cpp-Setup"},"this template"),". It is a minimalist C++ project that uses CMake. It also sets up a few tools that will be useful to you. Read its readme to learn how to build it! (NB: I don't recommend to use the dev container for this project because we will do some graphics stuff later on)."))}m.isMDXComponent=!0}}]);