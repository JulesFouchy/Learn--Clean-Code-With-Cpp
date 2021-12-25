"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[2358],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var f=r.createContext({}),l=function(e){var n=r.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(f.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=i,m=d["".concat(f,".").concat(u)]||d[u]||s[u]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var f in n)hasOwnProperty.call(n,f)&&(c[f]=n[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9238:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(4137)),a=["components"],c={title:"#if defined()",benefit:1,easiness:5,order:4,tags:["C++"]},f=void 0,l={unversionedId:"lessons/if-defined",id:"lessons/if-defined",title:"#if defined()",description:"#if defined(SOMETHING) offers more flexibility than #ifdef SOMETHING.",source:"@site/../../content/lessons/if-defined.md",sourceDirName:"lessons",slug:"/lessons/if-defined",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/if-defined",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/tags/c"}],version:"current",frontMatter:{title:"#if defined()",benefit:1,easiness:5,order:4,tags:["C++"]},sidebar:"lessons",previous:{title:"friend",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/friend"},next:{title:"performance-cache-and-branches",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/performance-cache-and-branches"}},p=[],s={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#if defined(SOMETHING)")," offers more flexibility than ",(0,o.kt)("inlineCode",{parentName:"p"},"#ifdef SOMETHING"),".\nFor example you can use ",(0,o.kt)("em",{parentName:"p"},"negation"),", ",(0,o.kt)("em",{parentName:"p"},"and")," and ",(0,o.kt)("em",{parentName:"p"},"or")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"#if defined(SOMETHING) && !defined(SOMETHING_ELSE)")),(0,o.kt)("p",null,"You can also it with ",(0,o.kt)("inlineCode",{parentName:"p"},"#elif")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#if defined(MACRO1)\n// ...\n#elif defined(MACRO2)\n// ...\n#elif defined(MACRO3)\n// ...\n#else\n// ...\n#endif\n")))}d.isMDXComponent=!0}}]);