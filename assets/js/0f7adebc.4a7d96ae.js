"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[2138],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5720:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=["components"],i={title:"assert",benefit:3,easiness:5,level:"basic-cpp",tags:["Clean Code"]},l=void 0,c={unversionedId:"lessons/assert",id:"lessons/assert",title:"assert",description:"Brief",source:"@site/../../content/lessons/assert.md",sourceDirName:"lessons",slug:"/lessons/assert",permalink:"/Learn--Clean-Code-With-Cpp/lessons/assert",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"assert",benefit:3,easiness:5,level:"basic-cpp",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Templates",permalink:"/Learn--Clean-Code-With-Cpp/lessons/templates"},next:{title:"auto",permalink:"/Learn--Clean-Code-With-Cpp/lessons/auto"}},p=[{value:"Brief",id:"brief",children:[],level:2},{value:"assert",id:"assert",children:[],level:2},{value:"static_assert",id:"static_assert",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"brief"},"Brief"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assert")," is a pretty useful debugging tool. It allows you to make sure that a function is used properly by the outside world. And you don't even pay a performance cost for it because this check is removed once you build in release mode. ",(0,s.kt)("strong",{parentName:"p"},"But")," this also means that once in release mode you have no guarantee that the requirements are met; this means that in some cases it is better to enforce those checks with another mechanism, such as exceptions, which will remain in release mode."),(0,s.kt)("h2",{id:"assert"},"assert"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"void serve_alcohol(Person& person) {\n    assert(person.age() >= 18); // Bad, this kind of check needs to remain in release mode! Because `person` could be anyone and you don't have a guarantee that this check is done anywhere.\n    person.drink(alcohol());\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example from the Dear ImGui library"',title:'"Example',from:!0,the:!0,Dear:!0,ImGui:!0,'library"':!0},'assert(g.WithinFrameScope && "You forgot to call ImGui::NewFrame()");\n// Good, this does trigger when the developer using the library does something wrong, and tells them what they did wrong. Once the error has been detected and fixed in the code, we can have the guarantee that it will never happen again even in release.\n// Basically since this function does not depend on user input but on usage by the programmer it is safe to use an assert.\n')),(0,s.kt)("h2",{id:"static_assert"},"static_assert"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"static_assert")," happens at compile time, whereas ",(0,s.kt)("inlineCode",{parentName:"p"},"assert")," happens at runtime. It is used, just like ",(0,s.kt)("inlineCode",{parentName:"p"},"assert"),", to make sure that a function is used properly. It is especially useful in template contexts if you require that a type has certain properties:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'template<typename T>\nT compute_something(T t) {\n    static_assert(std::is_floating_point<T>::value, // Good, fail early rather than see the function break in unexpected ways later\n                  "compute_something() only works for float and double!");\n    // ...\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example from the Cereal library"',title:'"Example',from:!0,the:!0,Cereal:!0,'library"':!0},'// Great, Cereal does some metaprogramming magic to help you use the library correctly\n// and gives you clear error messages in case you do something wrong.\ntemplate <class T, class A>\nstruct has_member_save : std::integral_constant<bool, detail::has_member_save_impl<T, A>::value>\n{\n    typedef typename detail::has_member_save_impl<T, A> check;\n    static_assert( check::value || !check::not_const_type,\n    "cereal detected a non-const save. \\n "\n    "save member functions must always be const" );\n};\n')))}m.isMDXComponent=!0}}]);