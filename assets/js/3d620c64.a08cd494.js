"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8700],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={title:"Single Source of Truth",benefit:4,easiness:4,level:"practices-and-patterns",tags:["Clean Code"]},l=void 0,c={unversionedId:"lessons/single-source-of-truth",id:"lessons/single-source-of-truth",title:"Single Source of Truth",description:"The Single Source of Truth principle is very simple : only store an information once !",source:"@site/../../content/lessons/single-source-of-truth.md",sourceDirName:"lessons",slug:"/lessons/single-source-of-truth",permalink:"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Single Source of Truth",benefit:4,easiness:4,level:"practices-and-patterns",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Testing",permalink:"/Learn--Clean-Code-With-Cpp/lessons/testing"},next:{title:"Split problems in small pieces",permalink:"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Single Source of Truth")," principle is very simple : only store an information once !\nAnd it stems from a very simple observation : if you store a value (or information that are deduced from that value) in several places, then they all need to be updated at the same time when you change that value. To do so you can try to write setter functions that will update the data in all the required places, but it is so easy to mess up, especially years in the future when someone else comes along and starts modifiyng the code. Basically it introduces oddities in the code that one must be aware of when working with it. This is why if often leads to bugs at some point ; and it also makes the code harder to reason about and maintain !"))}f.isMDXComponent=!0}}]);