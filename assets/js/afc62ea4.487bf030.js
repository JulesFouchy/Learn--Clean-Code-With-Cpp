"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[6800],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),y=o,d=f["".concat(c,".").concat(y)]||f[y]||u[y]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),i=["components"],a={title:"Consistency in style",benefit:3,easiness:5,order:1,tags:["Style"]},c=void 0,l={unversionedId:"lessons/consistency-in-style",id:"lessons/consistency-in-style",isDocsHomePage:!1,title:"Consistency in style",description:"Be consistent with the conventions you choose (e.g. camelCase vs snake_case, prefix of member variables etc.)",source:"@site/docs/lessons/consistency-in-style.md",sourceDirName:"lessons",slug:"/lessons/consistency-in-style",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/consistency-in-style",tags:[{label:"Style",permalink:"/Learn--Cpp-And-Dev-Practices/docs/tags/style"}],version:"current",frontMatter:{title:"Consistency in style",benefit:3,easiness:5,order:1,tags:["Style"]},sidebar:"lessons",previous:{title:"Split problems in small pieces",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/split-problems-in-small-pieces"},next:{title:"Documentation",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/documentation"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Be consistent with the conventions you choose (e.g. camelCase vs snake_case, prefix of member variables etc.)"),(0,s.kt)("p",null,"But also, you shouldn't be too religious about it and try different conventions. A new project is a great opportunity to give another convention a shot. Don't judge conventions solely on your expectations, because we are so used to the one we use that all the others feel weird at first sight. But by trying a convention for a few weeks, your view of it will change. This happened to me with ",(0,s.kt)("em",{parentName:"p"},"snake_case")," ; I used to thing it was weird and ugly, but now I thing this is most readable conventions of all because the words are clearly separated and it helps a lot, especially with long names."))}f.isMDXComponent=!0}}]);