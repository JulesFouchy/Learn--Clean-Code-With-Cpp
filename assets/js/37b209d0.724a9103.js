(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1316],{2666:function(e,s,n){e.exports={src:{srcSet:n.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg 1200w",images:[{path:n.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg",width:1200,height:720}],src:n.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg",toString:function(){return n.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg"},placeholder:void 0,width:1200,height:720},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAACAgIABwAAAAAAAAAAAAABAgADBBEFBgcSIVGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAMAwEAAhEDEQA/AJT08xr7eQ+Jut4rwnsspyECgs57NoR60Tv5JYB4iJM2j//Z",palette:null}},8442:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var t=n(7294),l=n(4820);function i(e){var s=e.slug,n=e.text,i=e.anchor,a=l.find((function(e){return e.slug===s}));if(void 0===a)throw console.error('Broken link to inexistant lesson "'+s+'"'),"";return t.createElement("a",{href:a.link+(i||"")},n||a.title)}},5131:function(e,s,n){"use strict";n.r(s),n.d(s,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return C},default:function(){return g}});var t=n(7462),l=n(3366),i=(n(7294),n(4137)),a=n(5944),o=n(8442),r=["components"],p={title:"Use libraries",benefit:5,easiness:3,level:"practices-and-patterns",tags:["Clean Code"]},d=void 0,u={unversionedId:"lessons/use-libraries",id:"lessons/use-libraries",title:"Use libraries",description:"Brief",source:"@site/../../content/lessons/use-libraries.md",sourceDirName:"lessons",slug:"/lessons/use-libraries",permalink:"/Learn--Clean-Code-With-Cpp/lessons/use-libraries",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Use libraries",benefit:5,easiness:3,level:"practices-and-patterns",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Testing",permalink:"/Learn--Clean-Code-With-Cpp/lessons/testing"},next:{title:"Watch conferences",permalink:"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences"}},C=[{value:"Brief",id:"brief",children:[],level:2},{value:"How to",id:"how-to",children:[{value:"Build from source",id:"build-from-source",children:[],level:3},{value:"Add them to your project with CMake",id:"add-them-to-your-project-with-cmake",children:[],level:3},{value:"Read the documentation",id:"read-the-documentation",children:[],level:3}],level:2}],c={toc:C};function g(e){var s=e.components,p=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},c,p,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"brief"},"Brief"),(0,i.kt)("p",null,"In the real world no one writes ",(0,i.kt)("em",{parentName:"p"},"everything")," from scratch. If you need a feature, most likely other people have had the same need before you, and chances are they made a library out of it! If you need a big thing and are almost ready to spend the next three months implementing it, it might be wise to first have a look on the internet and see if some solution already exists. Most often you will discover that there is even several of them and you will have the leisure to pick and chose the one that seems to best suit your needs."),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"build-from-source"},"Build from source"),(0,i.kt)("p",null,"Building from source means that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"anyone simply has to clone your project and is guaranteed to have all the dependencies"),(0,i.kt)("li",{parentName:"ul"},"you never have any version conflict"),(0,i.kt)("li",{parentName:"ul"},"you can tweak the libraries if you need to (and if their license allows so)"),(0,i.kt)("li",{parentName:"ul"},"you have quick access to the source code to read it and your IDE can jump to it")),(0,i.kt)("p",null,"To add a library to your project you can simply download the folder and copy it into your project, but a better practice is to use a ",(0,i.kt)(o.Z,{text:"Git submodule",slug:"git-submodules",mdxType:"LessonLink"}),"."),(0,i.kt)("h3",{id:"add-them-to-your-project-with-cmake"},"Add them to your project with CMake"),(0,i.kt)("p",null,"If the library provides good CMake support, all you should have to do is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmake"},"add_subdirectory(libname)\ntarget_link_libraries(${PROJECT_NAME} PRIVATE libname)\n")),(0,i.kt)("p",null,"If not, then you will have to define the target and its requirements yourself. For that, check out ",(0,i.kt)(o.Z,{text:"the lesson on CMake for library authors",slug:"cmake",anchor:"#cmake-for-library-authors",mdxType:"LessonLink"}),"."),(0,i.kt)("h3",{id:"read-the-documentation"},"Read the documentation"),(0,i.kt)("p",null,"Read the doc! Really! Or at least all the tutorial and introduction parts!",(0,i.kt)("br",null),"\nWhenever I finally take the time to sit down and go through the documentation of a library I use, I always end up cursing myself for not doing it earlier because I learn so much while reading it and I realize it would have saved me a lot of debugging time if I had read it before trying to blindly use the library! Plus you will discover amazing features that you were not even aware of!"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Take the time and ",(0,i.kt)("strong",{parentName:"p"},"Read the Fucking Manual"),". Programing is a slow and patient process. You will save time later down the road if you take the time to do things properly from the get go."))),(0,i.kt)(a.Z,{img:n(2666),mdxType:"Image"}))}g.isMDXComponent=!0},4820:function(e){"use strict";e.exports=JSON.parse('[{"title":"Advanced Git features","benefit":3,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":null},{"title":"std::array","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/array","slug":"array","priority":null},{"title":"assert","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":null},{"title":"auto","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":null},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":null},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":"useless","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":null},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":null},{"title":"Classes and Structs","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/classes-and-structs","slug":"classes-and-structs","priority":null},{"title":"CMake","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":null},{"title":"Code reviews","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":null},{"title":"The Command pattern","benefit":5,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":null},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":null},{"title":"Consistency in style","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":null},{"title":"const","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":null},{"title":"C++ casts","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":null},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":null},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":null},{"title":"Use a debugger","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":null},{"title":"Deleted functions","benefit":3,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":null},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":null},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":"clean-code","bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":null},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":null},{"title":"Documentation","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":null},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":null},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":null},{"title":"Enums","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":null},{"title":"Error Handling","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":null},{"title":"for","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/for","slug":"for","priority":null},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":null},{"title":"friend","benefit":1,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":null},{"title":"Functional programming","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":null},{"title":"Functions","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/functions","slug":"functions","priority":null},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":null},{"title":"Git submodules","benefit":4,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":null},{"title":"Use Git","benefit":5,"easiness":4,"level":"tools","bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":null},{"title":"Use an IDE","benefit":5,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":null},{"title":"#if defined()","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":null},{"title":"if","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/if","slug":"if","priority":null},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":null},{"title":"Inheritance","benefit":2,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/inheritance","slug":"inheritance","priority":null},{"title":"Install a compiler","benefit":5,"easiness":5,"level":"tools","bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":null},{"title":"Internet Search","benefit":5,"easiness":3,"level":"tools","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/internet","slug":"internet","priority":null},{"title":"Iterators","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/iterators","slug":"iterators","priority":null},{"title":"l-values and r-values","benefit":3,"easiness":2,"level":"advanced","link":"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values","slug":"l-values-and-r-values","priority":null},{"title":"Lambda functions","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":null},{"title":"Linked lists","benefit":2,"easiness":5,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":null},{"title":"Macros","benefit":1,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/macros","slug":"macros","priority":null},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":"clean-code","bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":null},{"title":"Markdown","benefit":3,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":null},{"title":"Master your IDE","benefit":4,"easiness":4,"level":"advanced","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":null},{"title":"Measuring performance","benefit":3,"easiness":3,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":null},{"title":"Minimize dependencies","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":null},{"title":"Move semantics","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":null},{"title":"Multithreading","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":null},{"title":"namespace","benefit":3,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/namespace","slug":"namespace","priority":null},{"title":"Naming","benefit":5,"easiness":1,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":null},{"title":"Operator Overloading","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/operator-overloading","slug":"operator-overloading","priority":null},{"title":"std::optional","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":null},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":null},{"title":"Polymorphism","benefit":3,"easiness":2,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":null},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":null},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":"clean-code","bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":null},{"title":"<random>","benefit":3,"easiness":3,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":null},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":null},{"title":"References","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/references","slug":"references","priority":null},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":null},{"title":"Scope guard","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":null},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":null},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":null},{"title":"Space out your code","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":null},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":null},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":null},{"title":"State and Strategy","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":null},{"title":"Use static analysers","benefit":5,"easiness":3,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":null},{"title":"Static site generators","benefit":4,"easiness":3,"level":"good-to-know","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":null},{"title":"static","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/static","slug":"static","priority":null},{"title":"std::function","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":null},{"title":"STL algorithms","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":null},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":null},{"title":"Strong Types","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":null},{"title":"Structured bindings","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/structured-bindings","slug":"structured-bindings","priority":null},{"title":"Templates","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/templates","slug":"templates","priority":null},{"title":"Testing","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":null},{"title":"Trailing return type","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":null},{"title":"Type erasure","benefit":4,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":null},{"title":"Use libraries","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":null},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":"clean-code","bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":null},{"title":"Variables","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/variables","slug":"variables","priority":null},{"title":"std::variant","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":null},{"title":"std::vector","benefit":5,"easiness":5,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":null},{"title":"wasm and electron","benefit":4,"easiness":2,"level":"advanced","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":null},{"title":"Watch conferences","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":null},{"title":"Write debug tools","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-debug-tools","slug":"write-debug-tools","priority":null},{"title":"Write libraries","benefit":5,"easiness":3,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":null},{"title":"Write small functions","benefit":5,"easiness":3,"level":"clean-code","bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":null}]')}}]);