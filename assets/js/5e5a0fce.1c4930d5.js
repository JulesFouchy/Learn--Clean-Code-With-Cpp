"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[2945],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],s={title:"Strong Typing",benefit:4,easiness:4,level:3,tags:["Clean Code"]},p=void 0,l={unversionedId:"lessons/strong-typing",id:"lessons/strong-typing",title:"Strong Typing",description:"Brief",source:"@site/../../content/lessons/strong-typing.md",sourceDirName:"lessons",slug:"/lessons/strong-typing",permalink:"/Learn--Clean-Code-With-Cpp/lessons/strong-typing",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Strong Typing",benefit:4,easiness:4,level:3,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Single Source of Truth",permalink:"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth"},next:{title:"Code reviews",permalink:"/Learn--Clean-Code-With-Cpp/lessons/code-reviews"}},c=[{value:"Brief",id:"brief",children:[],level:2},{value:"Details",id:"details",children:[],level:2}],m={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"brief"},"Brief"),(0,o.kt)("p",null,"Strong typing is when you create a type just to wrap an ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),",  so that you can give that ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," a name, invariants, and so on. It helps you express your intent more clearly and makes your APIs harder to misuse. They are amazing and definitely worth the extra little time needed to write them down; don't be lazy!"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Strong typedefs")," (as well as a few other amazing features) are available in the great ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/foonathan/type_safe"},(0,o.kt)("em",{parentName:"a"},"type_safe"))," library. You should consider using it if you want to use strong types."),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.fluentcpp.com/2016/12/08/strong-types-for-strong-interfaces/"},"Read this great article about strong types"),"."),(0,o.kt)("p",null,"And then look at ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/ojZbFIQSdl8?t=1444"},"this great example")," of using strong types to prevent a nasty bug."),(0,o.kt)("p",null,"Once you are done with these, I want to give an example of my own."),(0,o.kt)("p",null,"Consider a 2D position (a.k.a a point) and a 2D displacement (a.k.a. a vector (although that term is way too overloaded and has sadly become ambiguous)). They can both be represented with two numbers ",(0,o.kt)("em",{parentName:"p"},"x")," and ",(0,o.kt)("em",{parentName:"p"},"y")," even though they are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"very different concepts")),"!"),(0,o.kt)("p",null,"The fact that they are different concepts means that we can not do the same operations on them ! Strong typing can protect us from accidently doing that."),(0,o.kt)("p",null,"For example, adding two displacements ",(0,o.kt)("em",{parentName:"p"},"d1")," and ",(0,o.kt)("em",{parentName:"p"},"d2")," makes total sense : it simply yields another displacement that is the same as moving by ",(0,o.kt)("em",{parentName:"p"},"d1")," and then by ",(0,o.kt)("em",{parentName:"p"},"d2")," :"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7478).Z,width:"1432",height:"800"})),(0,o.kt)("p",null,"Adding a displacement to a position is perfectly reasonable too : it moves the position :"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5289).Z,width:"1126",height:"800"})),(0,o.kt)("p",null,"But adding two positions doesn't make sense at all!!!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8042).Z,width:"1604",height:"800"})),(0,o.kt)("p",null,"Even though it would be easy to add the ",(0,o.kt)("em",{parentName:"p"},"representation")," of two positions, we want to prevent that because it would most likely be a bug or a logic error."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Recap")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Strong typing helps us give a more concrete representation to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"concepts")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"physical units")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"coordinate spaces")),", and much more! They prevent logic errors and make APIs clearer."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Going further")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/7dExYGSOJzo"},(0,o.kt)("em",{parentName:"a"},"Strong types for physical units"))),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/632a-DMM5J0"},(0,o.kt)("em",{parentName:"a"},"Abstract Algebra and Strong Types"))))))}d.isMDXComponent=!0},7478:function(e,t,n){t.Z=n.p+"assets/images/displacement-addition-6ad1b963190f05e7f13981c43f958b53.png"},5289:function(e,t,n){t.Z=n.p+"assets/images/displacement-position-addition-d6f3e6e4716feb8aa3eda79284a99cc3.png"},8042:function(e,t,n){t.Z=n.p+"assets/images/point-addition-ebe50a4ddeaf79f65da6c6177c2788ce.png"}}]);