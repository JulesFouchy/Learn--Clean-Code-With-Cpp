"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8334],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return C}});var s=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,l=function(e,n){if(null==e)return{};var t,s,l={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=s.createContext({}),p=function(e){var n=s.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),C=l,g=d["".concat(r,".").concat(C)]||d[C]||c[C]||i;return t?s.createElement(g,a(a({ref:n},u),{},{components:t})):s.createElement(g,a({ref:n},u))}));function C(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},456:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(7294),l=JSON.parse('[{"title":"Advanced Git features","benefit":3,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":null},{"title":"std::array","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/array","slug":"array","priority":null},{"title":"assert","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":null},{"title":"auto","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":null},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":null},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":"useless","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":null},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":null},{"title":"Classes and Structs","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/classes-and-structs","slug":"classes-and-structs","priority":null},{"title":"CMake","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":null},{"title":"Code reviews","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":null},{"title":"The Command pattern","benefit":5,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":null},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":null},{"title":"Consistency in style","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":null},{"title":"const","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":null},{"title":"C++ casts","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":null},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":null},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":null},{"title":"Use a debugger","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":null},{"title":"Deleted functions","benefit":3,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":null},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":null},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":"clean-code","bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":null},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":null},{"title":"Documentation","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":null},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":null},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":null},{"title":"Enums","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":null},{"title":"Error Handling","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":null},{"title":"for","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/for","slug":"for","priority":null},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":null},{"title":"friend","benefit":1,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":null},{"title":"Functional programming","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":null},{"title":"Functions","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/functions","slug":"functions","priority":null},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":null},{"title":"Git submodules","benefit":4,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":null},{"title":"Use Git","benefit":5,"easiness":4,"level":"tools","bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":null},{"title":"Use an IDE","benefit":5,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":null},{"title":"#if defined()","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":null},{"title":"if","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/if","slug":"if","priority":null},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":null},{"title":"Inheritance","benefit":2,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/inheritance","slug":"inheritance","priority":null},{"title":"Install a compiler","benefit":5,"easiness":5,"level":"tools","bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":null},{"title":"Internet Search","benefit":5,"easiness":3,"level":"tools","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/internet","slug":"internet","priority":null},{"title":"Iterators","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/iterators","slug":"iterators","priority":null},{"title":"l-values and r-values","benefit":3,"easiness":2,"level":"advanced","link":"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values","slug":"l-values-and-r-values","priority":null},{"title":"Lambda functions","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":null},{"title":"Linked lists","benefit":2,"easiness":5,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":null},{"title":"Macros","benefit":1,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/macros","slug":"macros","priority":null},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":"clean-code","bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":null},{"title":"Markdown","benefit":3,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":null},{"title":"Master your IDE","benefit":4,"easiness":4,"level":"advanced","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":null},{"title":"Measuring performance","benefit":3,"easiness":3,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":null},{"title":"Minimize dependencies","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":null},{"title":"Move semantics","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":null},{"title":"Multithreading","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":null},{"title":"namespace","benefit":3,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/namespace","slug":"namespace","priority":null},{"title":"Naming","benefit":5,"easiness":1,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":null},{"title":"Operator Overloading","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/operator-overloading","slug":"operator-overloading","priority":null},{"title":"std::optional","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":null},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":null},{"title":"Polymorphism","benefit":3,"easiness":2,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":null},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":null},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":"clean-code","bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":null},{"title":"<random>","benefit":3,"easiness":3,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":null},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":null},{"title":"References","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/references","slug":"references","priority":null},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":null},{"title":"Scope guard","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":null},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":null},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":null},{"title":"Space out your code","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":null},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":null},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":null},{"title":"State and Strategy","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":null},{"title":"Use static analysers","benefit":5,"easiness":3,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":null},{"title":"Static site generators","benefit":4,"easiness":3,"level":"good-to-know","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":null},{"title":"static","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/static","slug":"static","priority":null},{"title":"std::function","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":null},{"title":"STL algorithms","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":null},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":null},{"title":"Strong Types","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":null},{"title":"Structured bindings","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/structured-bindings","slug":"structured-bindings","priority":null},{"title":"Templates","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/templates","slug":"templates","priority":null},{"title":"Testing","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":null},{"title":"Trailing return type","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":null},{"title":"Type erasure","benefit":4,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":null},{"title":"Use libraries","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":null},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":"clean-code","bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":null},{"title":"Variables","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/variables","slug":"variables","priority":null},{"title":"std::variant","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":null},{"title":"std::vector","benefit":5,"easiness":5,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":null},{"title":"wasm and electron","benefit":4,"easiness":2,"level":"advanced","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":null},{"title":"Watch conferences","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":null},{"title":"Write debug tools","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-debug-tools","slug":"write-debug-tools","priority":null},{"title":"Write libraries","benefit":5,"easiness":3,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":null},{"title":"Write small functions","benefit":5,"easiness":3,"level":"clean-code","bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":null}]');function i(e){var n=e.slug,t=e.text,i=e.anchor,a=l.find((function(e){return e.slug===n}));if(void 0===a)throw console.error('Broken link to inexistant lesson "'+n+'"'),"";return s.createElement("a",{href:a.link+(i||"")},t||a.title)}},6741:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return C}});var s=t(7462),l=t(3366),i=(t(7294),t(4137)),a=t(456),o=["components"],r={title:"Setting up a project"},p=void 0,u={unversionedId:"assignment/project-setup",id:"assignment/project-setup",title:"Setting up a project",description:"We will be making a program that allows you to play a few games, all in one project. This will force you to reuse code and maintain the hygiene of your codebase.",source:"@site/../../content/assignment/01-project-setup.md",sourceDirName:"assignment",slug:"/assignment/project-setup",permalink:"/Learn--Clean-Code-With-Cpp/assignment/project-setup",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setting up a project"},sidebar:"assignment",previous:{title:"Introduction",permalink:"/Learn--Clean-Code-With-Cpp/assignment"},next:{title:"Guess the number",permalink:"/Learn--Clean-Code-With-Cpp/assignment/guess-the-number"}},c=[{value:"Git",id:"git",children:[],level:2},{value:"Project template",id:"project-template",children:[],level:2}],d={toc:c};function C(e){var n=e.components,t=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will be making a program that allows you to play a few games, all in one project. This will force you to reuse code and maintain the hygiene of your codebase."),(0,i.kt)("h2",{id:"git"},"Git"),(0,i.kt)("p",null,"First things first, let's create ",(0,i.kt)("strong",{parentName:"p"},"a Git repo"),". If you are not used to using Git, read ",(0,i.kt)(a.Z,{text:"the associated lesson",slug:"git",mdxType:"LessonLink"}),"."),(0,i.kt)("p",null,"I also created a repo that you will be able to use as a reference / solution as you work on the project. I will regularly link to commits that correspond to the current exercise, and you can also check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commits/main"},"commit history"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NB:")," in my solution there are a lot of comments that explain why I do things in a certain way. They are not good examples of comments that you should put in your code; they are only here to help you learn C++. For example these comments shouldn't appear in actual code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'static constexpr int MIN = 0;   // `static constexpr` is the "proper" way of declaring constants known at compile time\nstatic constexpr int MAX = 100; // It is as efficient as `#define` but has the benefit of working like a normal C++ variable: it has a type, etc.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NB:")," my solutions will not always be the best, partly to keep them simple, partly to leave you room to think and improve the code I give you \ud83d\ude09 (and partly because I am not an omniscient programmer and there might be things that I am simply not aware of).\nWe will come back to some of the solutions later to improve them."),(0,i.kt)("h2",{id:"project-template"},"Project template"),(0,i.kt)("p",null,"I would recommend you use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Cpp-Setup"},"this template"),". It is a minimalist C++ project that uses CMake. It also sets up a few tools that will be useful to you. Read its readme to learn how to build it! (NB: I don't recommend to use the dev container for this project because we will do some graphics stuff later on)."))}C.isMDXComponent=!0}}]);