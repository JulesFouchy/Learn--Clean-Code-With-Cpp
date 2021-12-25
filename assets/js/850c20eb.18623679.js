"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4647],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2569:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"Documentation",benefit:5,easiness:3,order:2,tags:["Dev Practices"]},c=void 0,u={unversionedId:"lessons/documentation",id:"lessons/documentation",title:"Documentation",description:"Document for users",source:"@site/../../content/lessons/documentation.md",sourceDirName:"lessons",slug:"/lessons/documentation",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/documentation",tags:[{label:"Dev Practices",permalink:"/Learn--Cpp-And-Dev-Practices/tags/dev-practices"}],version:"current",frontMatter:{title:"Documentation",benefit:5,easiness:3,order:2,tags:["Dev Practices"]},sidebar:"lessons",previous:{title:"Design Great Classes",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/design-great-classes"},next:{title:"Make it work, then make it good",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/make-it-work-then-make-it-good"}},l=[{value:"Document for users",id:"document-for-users",children:[],level:2},{value:"Document for developers",id:"document-for-developers",children:[],level:2}],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"document-for-users"},"Document for users"),(0,a.kt)("h2",{id:"document-for-developers"},"Document for developers"),(0,a.kt)("p",null,"State your intentions, the alternatives you considered, the reason that made you choose this particular implementation etc. Don't be shy, talk a lot, leave a trace for others."),(0,a.kt)("p",null,"Even if you are unsure or not confident about your design, say it ! It will help future developers have no remorse to rewrite your code, and be confident there isn't some important thing that they are missing and that made you write the code this way."))}f.isMDXComponent=!0}}]);