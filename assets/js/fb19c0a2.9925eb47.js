"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1093],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=s.createContext({}),p=function(e){var t=s.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(r.Provider,{value:t},e.children)},C={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,c=u["".concat(r,".").concat(g)]||u[g]||C[g]||a;return n?s.createElement(c,o(o({ref:t},d),{},{components:n})):s.createElement(c,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8442:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(7294),i=n(4820);function a(e){var t=e.slug,n=e.text,a=e.anchor,o=i.find((function(e){return e.slug===t}));if(void 0===o)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return s.createElement("a",{href:o.link+(a||"")},n||o.title)}},1114:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(7294);function i(e){var t="https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commit/"+e.hash;return s.createElement("a",{href:t,target:"_blank"},s.createElement("i",null,"Commit"))}},1772:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return C},toc:function(){return u},default:function(){return c}});var s=n(7462),i=n(3366),a=(n(7294),n(4137)),o=(n(6894),n(1114)),l=n(8442),r=["components"],p={title:"Noughts and Crosses"},d=void 0,C={unversionedId:"assignment/noughts-and-crosses",id:"assignment/noughts-and-crosses",title:"Noughts and Crosses",description:"Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click on the window to play!",source:"@site/../../content/assignment/05-noughts-and-crosses.md",sourceDirName:"assignment",slug:"/assignment/noughts-and-crosses",permalink:"/Learn--Clean-Code-With-Cpp/assignment/noughts-and-crosses",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Noughts and Crosses"},sidebar:"assignment",previous:{title:"Adding a menu",permalink:"/Learn--Clean-Code-With-Cpp/assignment/adding-a-menu"},next:{title:"connect-4",permalink:"/Learn--Clean-Code-With-Cpp/assignment/connect-4"}},u=[{value:"Adding the library",id:"adding-the-library",children:[],level:2},{value:"First steps",id:"first-steps",children:[],level:2},{value:"Drawing a board",id:"drawing-a-board",children:[],level:2}],g={toc:u};function c(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,s.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click on the window to play!"),(0,a.kt)("p",null,"We are gonna use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6"},(0,a.kt)("em",{parentName:"a"},"p6")," library")," which makes it very easy. Its API is strongely inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://p5js.org/"},(0,a.kt)("em",{parentName:"a"},"p5.js"))," which you might be familiar with."),(0,a.kt)("p",null,"TODO PUT A GIF OF THE GAME BEING PLAYED"),(0,a.kt)("h2",{id:"adding-the-library"},"Adding the library"),(0,a.kt)("p",null,"First you will need to add the library to your project. This might be a great time to read the lessons on ",(0,a.kt)(l.Z,{text:"CMake",slug:"cmake",mdxType:"LessonLink"})," and ",(0,a.kt)(l.Z,{text:"Git submodules",slug:"git-submodules",mdxType:"LessonLink"}),".",(0,a.kt)("br",null),"\nAlso the examples of the library might help you getting started. (In order to find them, browse ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6"},"the GitHub of the library"),".)"),(0,a.kt)(o.Z,{hash:"458a5603ddc711b293543ae9fd1ae6a98ceab45e",mdxType:"CommitLink"}),(0,a.kt)("h2",{id:"first-steps"},"First steps"),(0,a.kt)("p",null,"In order to get familiar with the library, start by trying to do some very simple things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First create a window"),(0,a.kt)("li",{parentName:"ul"},"Then display a square in that window")),(0,a.kt)("p",null,"Again, the library provides all the examples you will need to do that \ud83d\ude09"),(0,a.kt)("h2",{id:"drawing-a-board"},"Drawing a board"),(0,a.kt)("p",null,"We need a ",(0,a.kt)("em",{parentName:"p"},"3 by 3")," board. We will make our function a little more general than that since making an ",(0,a.kt)("em",{parentName:"p"},"n by n")," board is as simple as a ",(0,a.kt)("em",{parentName:"p"},"3 by 3"),".\nBut handling a board that is not square adds a little bit of complexity, and since we don't need it for now we will only make a function that can draw square boards, with as many rows as columns."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void draw_board(int size, p6::Context& p6)\n{\n    // TODO\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5962).Z})),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ","[map]","(TODO link to the doc) function from ",(0,a.kt)("em",{parentName:"p"},"p6")," might be useful to convert your loop indices into a position in the window."))),(0,a.kt)(o.Z,{hash:"a9f374bd92e8dd2503c35d2b868be469c00fdceb",mdxType:"CommitLink"}))}c.isMDXComponent=!0},6894:function(e,t,n){n.d(t,{ZP:function(){return r}});var s=n(7462),i=n(3366),a=(n(7294),n(4137)),o=["components"],l={toc:[]};function r(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"I encourage you to first try to code without reading the guided steps that follow! Think of the different functions that you need to write, and try to implement them!",(0,a.kt)("br",null),"\nOnly when you are stuck are you allowed to keep reading \ud83d\ude09 And read only enough to get unstuck! Then try to keep coding by yourself \ud83d\ude01 (until you are stuck again)"))))}r.isMDXComponent=!0},5962:function(e,t,n){t.Z=n.p+"assets/images/board-62a48f836cc4a4322ef3ad6c21a701f2.png"},4820:function(e){e.exports=JSON.parse('[{"title":"Use an IDE","benefit":5,"easiness":5,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1,"points":0.625},{"title":"Use Git","benefit":5,"easiness":4,"level":1,"bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.9875,"points":1.25},{"title":"Use a debugger","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":0.9875,"points":1.25},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9875,"points":1.25},{"title":"Static analysis and Sanitizers","benefit":5,"easiness":3,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysis-and-sanitizers","slug":"static-analysis-and-sanitizers","priority":0.975,"points":1.875},{"title":"Naming","benefit":5,"easiness":1,"level":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95,"points":3.125},{"title":"Consistency in style","benefit":2,"easiness":5,"level":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.8875000000000001,"points":0.625},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":2,"bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/free-functions","slug":"free-functions","priority":0.775,"points":0.5172413793103449},{"title":"Design Cohesive Classes","benefit":5,"easiness":3,"level":2,"bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-great-classes","slug":"design-great-classes","priority":0.775,"points":0.5172413793103449},{"title":"When to use structs","benefit":5,"easiness":3,"level":2,"bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/when-to-use-structs","slug":"when-to-use-structs","priority":0.775,"points":0.5172413793103449},{"title":"Write small functions","benefit":5,"easiness":3,"level":2,"bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775,"points":0.5172413793103449},{"title":"Make it work, then make it good","benefit":5,"easiness":3,"level":2,"bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.775,"points":0.5172413793103449},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-repeat-yourself","slug":"dont-repeat-yourself","priority":0.7625000000000001,"points":0.6896551724137931},{"title":"Enums","benefit":4,"easiness":5,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001,"points":0.1724137931034483},{"title":"Orthogonality","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/orthogonality","slug":"orthogonality","priority":0.7625000000000001,"points":0.6896551724137931},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.75,"points":0.8620689655172413},{"title":"std::vector","benefit":5,"easiness":5,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":0.6,"points":0.03125},{"title":"Documentation","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.575,"points":0.09375},{"title":"Stack vs Heap","benefit":5,"easiness":3,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.575,"points":0.09375},{"title":"Use libraries","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575,"points":0.09375},{"title":"assert","benefit":4,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.5625,"points":0.03125},{"title":"auto","benefit":4,"easiness":5,"level":3,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.5625,"points":0.03125},{"title":"Testing","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625,"points":0.125},{"title":"Type design","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625,"points":0.125},{"title":"Dependencies","benefit":5,"easiness":1,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependencies","slug":"dependencies","priority":0.55,"points":0.15625},{"title":"Lambda functions","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.55,"points":0.0625},{"title":"Master your IDE","benefit":4,"easiness":4,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.55,"points":0.0625},{"title":"std::optional","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.55,"points":0.0625},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55,"points":0.0625},{"title":"Strong Typing","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55,"points":0.0625},{"title":"Code reviews","benefit":4,"easiness":3,"level":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375,"points":0.09375},{"title":"const","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.5375,"points":0.09375},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.5375,"points":0.09375},{"title":"Git submodules","benefit":4,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375,"points":0.09375},{"title":"STL algorithms","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.5375,"points":0.09375},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.525,"points":0.125},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.525,"points":0.03125},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525,"points":0.03125},{"title":"Markdown","benefit":3,"easiness":5,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.525,"points":0.03125},{"title":"Range-based for loop","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.525,"points":0.03125},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.525,"points":0.03125},{"title":"Error Handling","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125,"points":0.0625},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125,"points":0.0625},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5,"points":0.09375},{"title":"CMake","benefit":3,"easiness":3,"level":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.5,"points":0.09375},{"title":"Functional programming","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5,"points":0.09375},{"title":"Move semantics","benefit":3,"easiness":3,"level":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5,"points":0.09375},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.5,"points":0.09375},{"title":"State and Strategy","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5,"points":0.09375},{"title":"std::variant","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5,"points":0.09375},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875,"points":0.125},{"title":"Multithreading","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875,"points":0.125},{"title":"Polymorphism","benefit":3,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875,"points":0.125},{"title":"Watch conferences","benefit":5,"easiness":3,"level":4,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.375,"points":0.09375},{"title":"Write libraries","benefit":5,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.375,"points":0.09375},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.36250000000000004,"points":0.125},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.36250000000000004,"points":0.03125},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.35000000000000003,"points":0.0625},{"title":"Static site generators","benefit":4,"easiness":3,"level":4,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.3375,"points":0.09375},{"title":"Deleted functions","benefit":3,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.325,"points":0.03125},{"title":"Type erasure","benefit":4,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.325,"points":0.125},{"title":"wasm and electron","benefit":4,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.325,"points":0.125},{"title":"Scope guard","benefit":3,"easiness":4,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.3125,"points":0.0625},{"title":"C++ casts","benefit":3,"easiness":3,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.30000000000000004,"points":0.09375},{"title":"Measuring performance","benefit":3,"easiness":3,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.30000000000000004,"points":0.09375},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.30000000000000004,"points":0.09375},{"title":"<random>","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.30000000000000004,"points":0.09375},{"title":"Linked lists","benefit":2,"easiness":5,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.28750000000000003,"points":0.03125},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.2625,"points":0.09375},{"title":"friend","benefit":1,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.25,"points":0.03125},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.25,"points":0.125},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":5,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.05,"points":0.16666666666666666},{"title":"#if defined()","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.05,"points":0.16666666666666666},{"title":"Trailing return type","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.05,"points":0.16666666666666666}]')}}]);