"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[6717],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7268:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(4137)),l=["components"],c={title:"std::function",benefit:3,easiness:5,level:"basic-cpp",tags:["Clean Code","C++"]},i=void 0,s={unversionedId:"lessons/std-function",id:"lessons/std-function",title:"std::function",description:"Brief",source:"@site/../../content/lessons/std-function.md",sourceDirName:"lessons",slug:"/lessons/std-function",permalink:"/Learn--Clean-Code-With-Cpp/lessons/std-function",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"},{label:"C++",permalink:"/Learn--Clean-Code-With-Cpp/tags/c"}],version:"current",frontMatter:{title:"std::function",benefit:3,easiness:5,level:"basic-cpp",tags:["Clean Code","C++"]},sidebar:"lessons",previous:{title:"static",permalink:"/Learn--Clean-Code-With-Cpp/lessons/static"},next:{title:"STL algorithms",permalink:"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms"}},p=[{value:"Brief",id:"brief",children:[],level:2},{value:"Signature",id:"signature",children:[],level:2}],u={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"brief"},"Brief"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"std::function")," is a simple yet powerful type. It can basically store any function: this allows you to pass functions as parameters to other functions, or to store a function for later use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <functional>\n\nstd::vector<std::function<void()>> callbacks; // A list of functions that we will call when some special event happens.\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"std::function")," can be a lambda:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'callbacks.push_back(\n    []() { std::cout << "Lambda\\n"; }\n);\n')),(0,o.kt)("p",null,"or a function pointer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'void my_callback() {\n    std::cout << "Function pointer\\n";\n}\n\ncallbacks.push_back(\n    &my_callback\n);\n')),(0,o.kt)("p",null,"or a function object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'struct MyCallback {\n    void operator()() const {\n        std::cout << "Function object\\n";\n    }\n};\n\ncallbacks.push_back(\n    MyCallback{}\n);\n')),(0,o.kt)("p",null,"We would than use our ",(0,o.kt)("inlineCode",{parentName:"p"},"callbacks")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"for (const auto& callback : callbacks) {\n    callback();\n}\n")),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"std::function")," stores functions with a given signature. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"std::function<int(float)>")," is a function that takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," and returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),"."))}f.isMDXComponent=!0}}]);