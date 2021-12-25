"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[3936],{4137:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},253:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(4137)),a=["components"],s={title:"string and string_view",benefit:4,easiness:4,order:2,tags:["C++"]},c=void 0,p={unversionedId:"lessons/string-and-string-view",id:"lessons/string-and-string-view",title:"string and string_view",description:"",source:"@site/../../content/lessons/string-and-string-view.md",sourceDirName:"lessons",slug:"/lessons/string-and-string-view",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/string-and-string-view",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/tags/c"}],version:"current",frontMatter:{title:"string and string_view",benefit:4,easiness:4,order:2,tags:["C++"]},sidebar:"lessons",previous:{title:"std::optional",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/optional"},next:{title:"const",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/const"}},l=[{value:"<code>string</code>",id:"string",children:[],level:2},{value:"<code>string_view</code>",id:"string_view",children:[],level:2}],u={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string_view")," is compatible with both ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"const char*"),". You don't need to do conversions or call .c_str()."),(0,o.kt)("h2",{id:"string"},(0,o.kt)("inlineCode",{parentName:"h2"},"string")),(0,o.kt)("h2",{id:"string_view"},(0,o.kt)("inlineCode",{parentName:"h2"},"string_view")),(0,o.kt)("p",null,"It is ",(0,o.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/string/basic_string_view"},"a new type from C++17"),". It is a non-owning reference to either a ",(0,o.kt)("inlineCode",{parentName:"p"},"const char*")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"std::string"),"."),(0,o.kt)("p",null,"It has many advantages: providing the same API as ",(0,o.kt)("inlineCode",{parentName:"p"},"std::string")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"const char*")," without having to pay the cost of constructing a ",(0,o.kt)("inlineCode",{parentName:"p"},"std::string"),", working with ",(0,o.kt)("inlineCode",{parentName:"p"},"const char*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"std::string")," as if they were the same type, ",(0,o.kt)("em",{parentName:"p"},"etc.")),(0,o.kt)("p",null,"Just remember that it is non-owning, like a reference: it is great for passing parameters around, but if you need to store it as a long-lasting variable you probably still need to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"std::string"),"."))}d.isMDXComponent=!0}}]);