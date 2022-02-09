"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[627],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"std::vector",benefit:5,easiness:5,level:3,tags:["Clean Code","Performant Code","C++"]},c=void 0,l={unversionedId:"lessons/vector",id:"lessons/vector",title:"std::vector",description:"Brief",source:"@site/../../content/lessons/vector.md",sourceDirName:"lessons",slug:"/lessons/vector",permalink:"/Learn--Clean-Code-With-Cpp/lessons/vector",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"},{label:"Performant Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/performant-code"},{label:"C++",permalink:"/Learn--Clean-Code-With-Cpp/tags/c"}],version:"current",frontMatter:{title:"std::vector",benefit:5,easiness:5,level:3,tags:["Clean Code","Performant Code","C++"]},sidebar:"lessons",previous:{title:"Composition over Inheritance",permalink:"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance"},next:{title:"Documentation",permalink:"/Learn--Clean-Code-With-Cpp/lessons/documentation"}},p=[{value:"Brief",id:"brief",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"This is by far the best container! It can do everything and is also the most performant in almost all situations.",(0,a.kt)("br",null),"\nIf you use another container than ",(0,a.kt)("inlineCode",{parentName:"p"},"std::vector")," you must have a very strong reason to do so! Most notably, even if ",(0,a.kt)("inlineCode",{parentName:"p"},"std::list")," has a better algorithmic complexity for some operations, in most cases ",(0,a.kt)("inlineCode",{parentName:"p"},"std::vector")," will still be faster in practice because it has better cache coherency (the data is grouped together in memory, which makes it much faster to access)."),(0,a.kt)("p",null,"The learn how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"std::vector")," watch this ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/PocJ5jXv8No"},"great tutorial by The Cherno"),"."))}f.isMDXComponent=!0}}]);