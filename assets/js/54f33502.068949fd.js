"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[6283],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return C}});var s=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},l=Object.keys(e);for(s=0;s<l.length;s++)t=l[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)t=l[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=s.createContext({}),p=function(e){var n=s.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return s.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),C=i,g=u["".concat(r,".").concat(C)]||u[C]||c[C]||l;return t?s.createElement(g,a(a({ref:n},d),{},{components:t})):s.createElement(g,a({ref:n},d))}));function C(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},456:function(e,n,t){t.d(n,{Z:function(){return l}});var s=t(7294),i=JSON.parse('[{"title":"Advanced Git features","benefit":3,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":null},{"title":"std::array","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/array","slug":"array","priority":null},{"title":"assert","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":null},{"title":"auto","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":null},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":null},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":"useless","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":null},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":null},{"title":"Classes and Structs","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/classes-and-structs","slug":"classes-and-structs","priority":null},{"title":"CMake","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":null},{"title":"Code reviews","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":null},{"title":"The Command pattern","benefit":5,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":null},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":null},{"title":"Consistency in style","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":null},{"title":"const","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":null},{"title":"C++ casts","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":null},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":null},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":null},{"title":"Use a debugger","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":null},{"title":"Deleted functions","benefit":3,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":null},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":null},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":"clean-code","bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":null},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":null},{"title":"Documentation","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":null},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":null},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":null},{"title":"Enums","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":null},{"title":"Error Handling","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":null},{"title":"for","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/for","slug":"for","priority":null},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":null},{"title":"friend","benefit":1,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":null},{"title":"Functional programming","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":null},{"title":"Functions","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/functions","slug":"functions","priority":null},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":null},{"title":"Git submodules","benefit":4,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":null},{"title":"Use Git","benefit":5,"easiness":4,"level":"tools","bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":null},{"title":"Use an IDE","benefit":5,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":null},{"title":"#if defined()","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":null},{"title":"if","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/if","slug":"if","priority":null},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":null},{"title":"Inheritance","benefit":2,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/inheritance","slug":"inheritance","priority":null},{"title":"Install a compiler","benefit":5,"easiness":5,"level":"tools","bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":null},{"title":"Internet Search","benefit":5,"easiness":3,"level":"tools","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/internet","slug":"internet","priority":null},{"title":"Iterators","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/iterators","slug":"iterators","priority":null},{"title":"l-values and r-values","benefit":3,"easiness":2,"level":"advanced","link":"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values","slug":"l-values-and-r-values","priority":null},{"title":"Lambda functions","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":null},{"title":"Linked lists","benefit":2,"easiness":5,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":null},{"title":"Macros","benefit":1,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/macros","slug":"macros","priority":null},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":"clean-code","bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":null},{"title":"Markdown","benefit":3,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":null},{"title":"Master your IDE","benefit":4,"easiness":4,"level":"advanced","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":null},{"title":"Measuring performance","benefit":3,"easiness":3,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":null},{"title":"Minimize dependencies","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":null},{"title":"Move semantics","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":null},{"title":"Multithreading","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":null},{"title":"namespace","benefit":3,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/namespace","slug":"namespace","priority":null},{"title":"Naming","benefit":5,"easiness":1,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":null},{"title":"Operator Overloading","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/operator-overloading","slug":"operator-overloading","priority":null},{"title":"std::optional","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":null},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":null},{"title":"Polymorphism","benefit":3,"easiness":2,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":null},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":null},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":"clean-code","bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":null},{"title":"<random>","benefit":3,"easiness":3,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":null},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":null},{"title":"References","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/references","slug":"references","priority":null},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":null},{"title":"Scope guard","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":null},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":null},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":null},{"title":"Space out your code","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":null},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":null},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":null},{"title":"State and Strategy","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":null},{"title":"Use static analysers","benefit":5,"easiness":3,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":null},{"title":"Static site generators","benefit":4,"easiness":3,"level":"good-to-know","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":null},{"title":"static","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/static","slug":"static","priority":null},{"title":"std::function","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":null},{"title":"STL algorithms","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":null},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":null},{"title":"Strong Types","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":null},{"title":"Structured bindings","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/structured-bindings","slug":"structured-bindings","priority":null},{"title":"Templates","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/templates","slug":"templates","priority":null},{"title":"Testing","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":null},{"title":"Trailing return type","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":null},{"title":"Type erasure","benefit":4,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":null},{"title":"Use libraries","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":null},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":"clean-code","bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":null},{"title":"Variables","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/variables","slug":"variables","priority":null},{"title":"std::variant","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":null},{"title":"std::vector","benefit":5,"easiness":5,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":null},{"title":"wasm and electron","benefit":4,"easiness":2,"level":"advanced","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":null},{"title":"Watch conferences","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":null},{"title":"Write debug tools","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-debug-tools","slug":"write-debug-tools","priority":null},{"title":"Write libraries","benefit":5,"easiness":3,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":null},{"title":"Write small functions","benefit":5,"easiness":3,"level":"clean-code","bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":null}]');function l(e){var n=e.slug,t=e.text,l=e.anchor,a=i.find((function(e){return e.slug===n}));if(void 0===a)throw console.error('Broken link to inexistant lesson "'+n+'"'),"";return s.createElement("a",{href:a.link+(l||"")},t||a.title)}},1114:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(7294);function i(e){var n=e.hash,t=e.text,i="https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commit/"+n;return s.createElement("a",{href:i,target:"_blank"},s.createElement("i",null,"Commit"),t&&s.createElement("span",null,": ",t))}},5051:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var s=t(7462),i=t(3366),l=(t(7294),t(4137)),a=t(1114),o=t(456),r=["components"],p={title:"Connect 4"},d=void 0,c={unversionedId:"assignment/connect-4",id:"assignment/connect-4",title:"Connect 4",description:"Our final game will be Connect 4.",source:"@site/../../content/assignment/06-connect-4.md",sourceDirName:"assignment",slug:"/assignment/connect-4",permalink:"/Learn--Clean-Code-With-Cpp/assignment/connect-4",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Connect 4"},sidebar:"assignment",previous:{title:"Noughts and Crosses",permalink:"/Learn--Clean-Code-With-Cpp/assignment/noughts-and-crosses"},next:{title:"Going further",permalink:"/Learn--Clean-Code-With-Cpp/assignment/going-further"}},u=[{value:"Drawing the board",id:"drawing-the-board",children:[],level:2},{value:"Playing on the board",id:"playing-on-the-board",children:[{value:"Draw the tokens that are on the board",id:"draw-the-tokens-that-are-on-the-board",children:[],level:3},{value:"Add tokens to the board by clicking on a column",id:"add-tokens-to-the-board-by-clicking-on-a-column",children:[],level:3},{value:"Show a preview of where the player is about to play",id:"show-a-preview-of-where-the-player-is-about-to-play",children:[],level:3}],level:2},{value:"Check for the end of the game",id:"check-for-the-end-of-the-game",children:[],level:2},{value:"Final touches",id:"final-touches",children:[],level:2}],C={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,s.Z)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Our final game will be ",(0,l.kt)("em",{parentName:"p"},"Connect 4"),"."),(0,l.kt)("p",null,"You won't be very guided, but try to apply ",(0,l.kt)(o.Z,{slug:"split-problems-in-small-pieces",mdxType:"LessonLink"})," and ",(0,l.kt)(o.Z,{slug:"make-it-work-then-make-it-good",mdxType:"LessonLink"}),".",(0,l.kt)("br",null),"\nTry to think about simple things that you know how to do and that will move you towards the final goal. If a step is too complicated, simplify it: it might not correspond to what the final game needs, but it is still some progress done."),(0,l.kt)("img",{src:"/Learn--Clean-Code-With-Cpp/img/connect-4.gif",style:{width:"50%"}}),(0,l.kt)("h2",{id:"drawing-the-board"},"Drawing the board"),(0,l.kt)("p",null,"The code is going to be similar to what we did for ",(0,l.kt)("em",{parentName:"p"},"Noughts and Crosses"),", but we want a board the has more columns than rows. It is time to generalize the code we wrote for ",(0,l.kt)("em",{parentName:"p"},"Noughts and Crosses"),"!"),(0,l.kt)(a.Z,{hash:"2d52c14ccb265435dd780c9922b1d85b49958d60",text:"[board] Move some code from noughts_and_crosses to board",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"d00f025996abae103696745dab4db96bb3776b5f",text:"[board] Start using BoardSize instead of int",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"4fc19c083f3adebbe9b86038df236230220ae41d",text:"[board] Properly take width AND height into account",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"1c642f4bac46fadd9297e23e4aff50ae9d1cfe2c",text:"[connect_4] Start",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Be careful not to break your ",(0,l.kt)("em",{parentName:"p"},"Noughts and Crosses")," code as you modify and generalize the board code!"))),(0,l.kt)("h2",{id:"playing-on-the-board"},"Playing on the board"),(0,l.kt)("p",null,"Again we can reuse the ",(0,l.kt)("inlineCode",{parentName:"p"},"Board")," class of the previous game if we generalize it a bit!",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"draw-the-tokens-that-are-on-the-board"},"Draw the tokens that are on the board"),(0,l.kt)(a.Z,{hash:"871862c787bfff71da0bc5868c6a8a0804e779e0",text:"[Board] Move the board class outside of noughts_and_crosses",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"d2e29143a4b46e812f1cc0ec654f19c31363bde0",text:"[Board] Now has a width AND a height instead of just one size",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"e4ad3bb746e54a6613c753458b88a4185f3fe23e",text:"[Board] Fix: forgot to include <array>",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"6c2aca1ba81743b785706eda60e1f3dc50e79917",text:"[connect_4] Add draw_tokens()",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"add-tokens-to-the-board-by-clicking-on-a-column"},"Add tokens to the board by clicking on a column"),(0,l.kt)(a.Z,{hash:"c01ecf6bb1012eff583b28bf4ae5115d8700e334",text:"[connect_4] Add try_to_play_in_column()",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"d733f448bac68157264492289b4cd257733fd57d  ",text:"[connect_4] Start to be able to play by clicking on the board",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"989cc11a21d812b84e1e8943126867e69e183bd2",text:"[board] Add aspect_ratio() to the public API",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"bbe6b2b0259caa507dd99679150a1f8fc9eed28f  ",text:"[connect_4] Properly implement column_at()",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'Don\'t forget to handle the "error" cases when a column is full or the player did click outside of the board instead of on a column. Once again ',(0,l.kt)("a",{parentName:"p",href:"/Learn--Clean-Code-With-Cpp/lessons/optional"},(0,l.kt)("inlineCode",{parentName:"a"},"std::optional"))," can help you represent that."))),(0,l.kt)("h3",{id:"show-a-preview-of-where-the-player-is-about-to-play"},"Show a preview of where the player is about to play"),(0,l.kt)(a.Z,{hash:"f838168c71f05d960efe102518af67610f804b82",text:"[connect_4] Move code to the function preview_token_at()",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"e9b12332c730c6a87aa3b810262d80249dd74770",text:"[connect_4::preview_token_at] Fix: forgot to check that row was not null",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"check-for-the-end-of-the-game"},"Check for the end of the game"),(0,l.kt)("p",null,"This is gonna be very similar to what we did for ",(0,l.kt)("em",{parentName:"p"},"Noughts and Crosses"),"."),(0,l.kt)(a.Z,{hash:"264ca4f749a984e7d22c91874646c68288cc60ec",text:"[board] Move board_is_full() out of noughts_and_crosses",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"2205e7db3334857db71971039c060d506b0de6ec",text:"[connect_4] Start implementing game_is_over()",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"034547d983453d1740a20f7ee5e60e6561a4502f",text:"[connect_4] Add winner_on_line() and start using it",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"a111631512cb60e4acaa99db3d5f8f41cc54b1e2  ",text:"[connect_4] Add check_for_winner(), winner_on_rows(), winner_on_columns()",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"66a1221c08ac32e09be5fdf8a941101fbe6f9ccf",text:"[connect_4] check_for_winner() is done",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"2babce698bf81ac23ba2fdbb942e9a84c24c3404",text:"[connect_4] Add winner_on_lines() to remove duplicated code",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"final-touches"},"Final touches"),(0,l.kt)(a.Z,{hash:"9f4c6300dedfe3a95eee7c3ef5ac321177976b3d",text:"[connect_4] Pause the game for 2 seconds when it is over",mdxType:"CommitLink"}),(0,l.kt)("br",null),(0,l.kt)(a.Z,{hash:"a585acd1fd0f4c44d49be7f102350b79929b95ad",text:"[menu] Add connect_4",mdxType:"CommitLink"}),(0,l.kt)("br",null))}g.isMDXComponent=!0}}]);