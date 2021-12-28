"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8168],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7562:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t="https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commit/"+e.hash;return a.createElement("a",{href:t,target:"_blank"},a.createElement("i",null,"Commit"))}},6129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=n(6894),l=n(7562),c=["components"],s={title:"Adding a menu"},u=void 0,m={unversionedId:"assignment/adding-a-menu",id:"assignment/adding-a-menu",title:"Adding a menu",description:"Before moving on to our third game, we will add a menu that allows the user to pick the game they want to play:",source:"@site/../../content/assignment/04-adding-a-menu.md",sourceDirName:"assignment",slug:"/assignment/adding-a-menu",permalink:"/Learn--Clean-Code-With-Cpp/assignment/adding-a-menu",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Adding a menu"},sidebar:"assignment",previous:{title:"Hangman",permalink:"/Learn--Clean-Code-With-Cpp/assignment/hangman"},next:{title:"Noughts and Crosses",permalink:"/Learn--Clean-Code-With-Cpp/assignment/noughts-and-crosses"}},d=[{value:"Skeleton",id:"skeleton",children:[],level:2},{value:"Bonus",id:"bonus",children:[],level:2},{value:"Refactoring",id:"refactoring",children:[],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before moving on to our third game, we will add a menu that allows the user to pick the game they want to play:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2190 What do you want to do?",(0,r.kt)("br",null),'\n\u2190 1: Play "Guess the Number"',(0,r.kt)("br",null),'\n\u2190 2: Play "Hangman"',(0,r.kt)("br",null),"\n\u2190 q: Quit",(0,r.kt)("br",null),"\n\u2192 a",(0,r.kt)("br",null),"\n\u2190 Sorry I don't know that command!",(0,r.kt)("br",null),"\n\u2192 1",(0,r.kt)("br",null),"\n\u2190 // The game starts playing . . .")),(0,r.kt)(i.ZP,{mdxType:"TipTryNotToRead"}),(0,r.kt)("h2",{id:"skeleton"},"Skeleton"),(0,r.kt)("p",null,"Here is a skeleton to help you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int main()\n{\n    bool quit = false;\n    while (!quit) {\n        show_the_list_of_commands(); // TODO: implement this function\n        const auto command = get_input_from_user<char>();\n        // TODO: handle the different possible values of command with a switch\n        // NB: don't forget to handle the case of an invalid command!\n    }\n}\n")),(0,r.kt)(l.Z,{hash:"2dbe98c7c49f38a9af013a5b17df8e6079f6c78a",mdxType:"CommitLink"}),(0,r.kt)("h2",{id:"bonus"},"Bonus"),(0,r.kt)("p",null,"Something that is a little annoying is that we have to make sure we don't mess up between what we say in ",(0,r.kt)("inlineCode",{parentName:"p"},"show_the_list_of_commands()")," and what we actually implement in our switch. Imagine we want to change the command for a given game: we need to change it in two places, that's bad!",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Can you think of a way to make the code more robust and easier to change?"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hint"),"You could define a ",(0,r.kt)("code",null,"Game")," struct that would contain the name of the game as a string and the function you need to call to start the game. Then you can associate a distinct command to each game by storing the game in a map (or an array if you only plan to use numbers: the index of the game will correspond to its command)."),(0,r.kt)(l.Z,{hash:"f63f3317faf40baa9ffbf1dadf3b066fe1065711",mdxType:"CommitLink"}),(0,r.kt)("h2",{id:"refactoring"},"Refactoring"),(0,r.kt)("p",null,"As usual, move the code to its own file in order to clean up ",(0,r.kt)("em",{parentName:"p"},"main.cpp"),"."),(0,r.kt)(l.Z,{hash:"c0eb2ced7cfbd8c2d5b0e8a56549e5224b344c28",mdxType:"CommitLink"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"We are duplicating knowledge and violating the ",(0,r.kt)("em",{parentName:"li"},"DRY")," principle (see ",(0,r.kt)("a",{parentName:"li",href:"../lessons/dont-repeat-yourself"},(0,r.kt)("em",{parentName:"a"},"Don't Repeat Yourself")),")",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},6894:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"I encourage you to first try to code without reading the guided steps that follow! Think of the different functions that you need to write, and try to implement them!",(0,r.kt)("br",null),"\nOnly when you are stuck are you allowed to keep reading \ud83d\ude09 And read only enough to get unstuck! Then try to keep coding by yourself \ud83d\ude01 (until you are stuck again)"))))}c.isMDXComponent=!0}}]);