"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[940],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],s={title:"Markdown",benefit:3,easiness:5,order:2,tags:["Dev Practices"]},l=void 0,c={unversionedId:"lessons/markdown",id:"lessons/markdown",title:"Markdown",description:"Markdown is an amazing markup language. Its main strength is its simplicity, and the other one is its omnipresence.",source:"@site/../../content/lessons/markdown.md",sourceDirName:"lessons",slug:"/lessons/markdown",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/markdown",tags:[{label:"Dev Practices",permalink:"/Learn--Cpp-And-Dev-Practices/tags/dev-practices"}],version:"current",frontMatter:{title:"Markdown",benefit:3,easiness:5,order:2,tags:["Dev Practices"]},sidebar:"lessons",previous:{title:"Debug vs Release",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/debug-vs-release"},next:{title:"Range-based for loop",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/range-based-for-loop"}},p=[{value:"Subtitle",id:"subtitle",children:[{value:"Sub-subtitle",id:"sub-subtitle",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Markdown is an amazing markup language. Its main strength is its simplicity, and the other one is its omnipresence."),(0,i.kt)("p",null,"This is what most developers use to write readmes, documentation, books, websites ",(0,i.kt)("em",{parentName:"p"},"etc."),". For example all of the textual content of this website is written in Markdown (using a ",(0,i.kt)("a",{parentName:"p",href:"./static-site-generators"},"static site generator"),")."),(0,i.kt)("p",null,"Here are the features you will use the most :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Title\n## Subtitle\n### Sub-subtitle\n\n*italic text*\n\n**bold text**\n\n[a link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)\n\n - A\n - bullet\n - point\n - list\n")),(0,i.kt)("p",null,"Which renders as :"),(0,i.kt)("h1",{id:"title"},"Title"),(0,i.kt)("h2",{id:"subtitle"},"Subtitle"),(0,i.kt)("h3",{id:"sub-subtitle"},"Sub-subtitle"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"italic text")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"bold text")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"},"a link")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A"),(0,i.kt)("li",{parentName:"ul"},"bullet"),(0,i.kt)("li",{parentName:"ul"},"point"),(0,i.kt)("li",{parentName:"ul"},"list")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As you can see the Markdown syntax is very light and doesn't hurt the source text's libility (unlike html)."))),(0,i.kt)("p",null," You can learn more about the Markdown syntax ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"},"here"),"."))}m.isMDXComponent=!0}}]);