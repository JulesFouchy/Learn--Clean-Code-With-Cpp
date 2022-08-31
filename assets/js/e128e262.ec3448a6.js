"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4142],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7352:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r="video_E3b0";function o(e){var t=e.id;return a.createElement("div",{className:r},a.createElement("iframe",{src:"https://www.youtube.com/embed/"+t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}))}},5868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(7352),s=["components"],l={title:"auto",benefit:3,easiness:5,level:"basic-cpp",tags:["Beautiful Code","Clean Code","C++"]},c=void 0,u={unversionedId:"lessons/auto",id:"lessons/auto",title:"auto",description:"Brief",source:"@site/../../content/lessons/auto.md",sourceDirName:"lessons",slug:"/lessons/auto",permalink:"/Learn--Clean-Code-With-Cpp/lessons/auto",tags:[{label:"Beautiful Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/beautiful-code"},{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"},{label:"C++",permalink:"/Learn--Clean-Code-With-Cpp/tags/c"}],version:"current",frontMatter:{title:"auto",benefit:3,easiness:5,level:"basic-cpp",tags:["Beautiful Code","Clean Code","C++"]},sidebar:"lessons",previous:{title:"assert",permalink:"/Learn--Clean-Code-With-Cpp/lessons/assert"},next:{title:"namespace",permalink:"/Learn--Clean-Code-With-Cpp/lessons/namespace"}},p=[{value:"Brief",id:"brief",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"brief"},"Brief"),(0,o.kt)("p",null,"Sometimes the type of a variable is obvious with the context, and a type declaration would be redundant. In such cases you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"auto")," instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"std::unique_ptr<MyClass> my_ptr = std::make_unique<MyClass>();\n// Bad: we are saying twice that we want a unique pointer to MyClass\nauto my_ptr = std::make_unique<MyClass>();\n// Good: we don't repeat ourselves\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"But there is more!")," Sometimes, even if the type is not obvious, you don't want to hardcode it! Using ",(0,o.kt)("inlineCode",{parentName:"p"},"auto")," can make refactoring easier and avoid unwanted implicit conversions. You can find this discussion in more details ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/xnqTKD8uD64?t=1703"},"here at 28:23"),"."),(0,o.kt)("p",null,"Of course there are also good reasons not to use auto in some cases. It is up to you to make that decision."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Optimize for the reader, not the writer!"),(0,o.kt)("br",null),"\nYou write a piece of code once, and then it will be read many many times by many people in the years to come. So facilitating the life of the readers is way more important than facilitating that of the writer.",(0,o.kt)("br",null),"\nIn short: we don't care if you have to type more characters, we only care about the readability of the code.",(0,o.kt)("br",null),"\nSo ",(0,o.kt)("em",{parentName:"p"},'"auto saves me some typing"')," is not a good reason, but ",(0,o.kt)("em",{parentName:"p"},'"auto is more readable"')," is. And in the cases where auto is ",(0,o.kt)("em",{parentName:"p"},"less")," readable, then don't use auto!"))),(0,o.kt)(i.Z,{id:"2vOPEuiGXVo?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",mdxType:"YoutubeVideo"}))}m.isMDXComponent=!0}}]);