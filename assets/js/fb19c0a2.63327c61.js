"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1093],{8442:function(e,n,t){t.d(n,{Z:function(){return l}});var s=t(7294),i=t(4820);function l(e){var n=e.slug,t=e.text,l=e.anchor,a=i.find((function(e){return e.slug===n}));if(void 0===a)throw console.error('Broken link to inexistant lesson "'+n+'"'),"";return s.createElement("a",{href:a.link+(l||"")},t||a.title)}},1114:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(7294);function i(e){var n=e.hash,t=e.text,i="https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commit/"+n;return s.createElement("a",{href:i,target:"_blank"},s.createElement("i",null,"Commit"),t&&s.createElement("span",null,": ",t))}},1772:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return h},default:function(){return g}});var s=t(7462),i=t(3366),l=(t(7294),t(4137)),a=(t(6894),t(1114)),o=t(8442),r=t(2380),d=["components"],p={title:"Noughts and Crosses"},c=void 0,u={unversionedId:"assignment/noughts-and-crosses",id:"assignment/noughts-and-crosses",title:"Noughts and Crosses",description:"Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click in the window to play!",source:"@site/../../content/assignment/05-noughts-and-crosses.md",sourceDirName:"assignment",slug:"/assignment/noughts-and-crosses",permalink:"/Learn--Clean-Code-With-Cpp/assignment/noughts-and-crosses",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Noughts and Crosses"},sidebar:"assignment",previous:{title:"Adding a menu",permalink:"/Learn--Clean-Code-With-Cpp/assignment/adding-a-menu"},next:{title:"Connect 4",permalink:"/Learn--Clean-Code-With-Cpp/assignment/connect-4"}},h=[{value:"Adding the library",id:"adding-the-library",children:[],level:2},{value:"First steps",id:"first-steps",children:[],level:2},{value:"Drawing a board",id:"drawing-a-board",children:[],level:2},{value:"Detecting which cell is hovered",id:"detecting-which-cell-is-hovered",children:[],level:2},{value:"Drawing the noughts and crosses",id:"drawing-the-noughts-and-crosses",children:[],level:2},{value:"Storing the state of the game",id:"storing-the-state-of-the-game",children:[],level:2},{value:"Placing noughts and crosses",id:"placing-noughts-and-crosses",children:[],level:2},{value:"Previewing the placement",id:"previewing-the-placement",children:[],level:2},{value:"Checking for the end of the game",id:"checking-for-the-end-of-the-game",children:[{value:"Checking that the board is full",id:"checking-that-the-board-is-full",children:[],level:3},{value:"Checking that a player has won",id:"checking-that-a-player-has-won",children:[],level:3}],level:2},{value:"Refactoring",id:"refactoring",children:[],level:2}],C={toc:h};function g(e){var n=e.components,p=(0,i.Z)(e,d);return(0,l.kt)("wrapper",(0,s.Z)({},C,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click in the window to play!"),(0,l.kt)("p",null,"We are gonna use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6"},(0,l.kt)("em",{parentName:"a"},"p6")," library")," which makes it very easy. Its API is strongely inspired by ",(0,l.kt)("a",{parentName:"p",href:"https://p5js.org/"},(0,l.kt)("em",{parentName:"a"},"p5.js"))," which you might already be familiar with."),(0,l.kt)("img",{src:"/Learn--Clean-Code-With-Cpp/img/noughts-and-crosses.gif",style:{width:"50%"}}),(0,l.kt)("h2",{id:"adding-the-library"},"Adding the library"),(0,l.kt)("p",null,"First you will need to add the library to your project. This might be a great time to read the lessons on ",(0,l.kt)(o.Z,{text:"CMake",slug:"cmake",mdxType:"LessonLink"})," and ",(0,l.kt)(o.Z,{text:"Git submodules",slug:"git-submodules",mdxType:"LessonLink"}),".",(0,l.kt)("br",null),"\nAlso the examples of the library might help you getting started. (In order to find them, browse ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6"},"the GitHub of the library"),")."),(0,l.kt)(a.Z,{hash:"9f1fdf44859f1576d783abb4b3c13526316d5dd3",mdxType:"CommitLink"}),(0,l.kt)("h2",{id:"first-steps"},"First steps"),(0,l.kt)("p",null,"In order to get familiar with the library, start by trying to do some very simple things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First create a window"),(0,l.kt)("li",{parentName:"ul"},"Then display a square in that window")),(0,l.kt)("p",null,"Again, the library provides all the examples you will need to do that \ud83d\ude09"),(0,l.kt)("h2",{id:"drawing-a-board"},"Drawing a board"),(0,l.kt)("p",null,"We need a ",(0,l.kt)("em",{parentName:"p"},"3 by 3")," board. We will make our function a little more general than that since making an ",(0,l.kt)("em",{parentName:"p"},"n by n")," board is as simple as a ",(0,l.kt)("em",{parentName:"p"},"3 by 3"),".\nBut handling a board that is not square adds a little bit of complexity, and since we don't need it for now we will only make a function that can draw square boards, with as many rows as columns."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void draw_board(int size, p6::Context& ctx)\n{\n    // TODO\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(8997).Z,width:"2000",height:"835"})),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/p6-docs/reference/math#map"},"map")," function from ",(0,l.kt)("em",{parentName:"p"},"p6")," might be useful to convert your loop indices into a position in the window."))),(0,l.kt)(a.Z,{hash:"e643b41a4b81f4c66642239d03746bb13ccd600f",mdxType:"CommitLink"}),(0,l.kt)("h2",{id:"detecting-which-cell-is-hovered"},"Detecting which cell is hovered"),(0,l.kt)("p",null,"In order to click and place our noughts and crosses we first need to be able to know which cell is currently hovered by the mouse."),(0,l.kt)("p",null,"This time I want to give you a little more room to think about the design, so I am not going to give you the signature of the function(s) you need to write."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tip n\xb01"),(0,l.kt)("div",null,"What will you return from this function? Or in other words: ",(0,l.kt)("i",null,"how do you represent a cell?"),(0,l.kt)("br",null),"It is probably a good occasion to create a little struct (see ",(0,l.kt)(o.Z,{slug:"use-structs-to-group-data",mdxType:"LessonLink"}),")"),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"My solution"),(0,l.kt)("div",null,"I chose to represent a cell with a 2D index:",(0,l.kt)(r.Z,{language:"cpp",mdxType:"CodeBlock"},"struct CellIndex {\n    int x;\n    int y;\n};"),"It starts as (0, 0) in the bottom left and increases one by one. I then added functions that convert from cell_index to position in the window and vice-versa which allows we to do both my drawing and my hover detection with this CellIndex type."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tip n\xb02"),(0,l.kt)("div",null,"It is possible that there is no cell under the mouse, if we are outside the board. How will you handle that?",(0,l.kt)("br",null),"Your return type probably needs to be able to indicate the absence of a cell.",(0,l.kt)("br",null),"Since C++17 we have ",(0,l.kt)(o.Z,{slug:"optional",mdxType:"LessonLink"})," that is made exactly for that purpose!")),(0,l.kt)(a.Z,{hash:"6dbc007e3f95dfe7c71006f3f52e042f0b6197b2",mdxType:"CommitLink"}),(0,l.kt)("h2",{id:"drawing-the-noughts-and-crosses"},"Drawing the noughts and crosses"),(0,l.kt)("p",null,"Add two functions ",(0,l.kt)("inlineCode",{parentName:"p"},"draw_nought")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"draw_cross"),". You are free to draw them as you want (actually they don't even need to be noughts and crosses)."),(0,l.kt)(a.Z,{hash:"54c9d01993848c70cd045bb497984caecc87a43c",mdxType:"CommitLink"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(273).Z,width:"2000",height:"838"})),(0,l.kt)("h2",{id:"storing-the-state-of-the-game"},"Storing the state of the game"),(0,l.kt)("p",null,"Now to start playing we need to be able to remember where noughts and crosses have been added to the board. Basically we need a ",(0,l.kt)("inlineCode",{parentName:"p"},"Board")," object that, for any given cell, can tell us if there is a cross, a nought, or nothing on that cell."),(0,l.kt)("p",null,"To make the syntax really nice we are gonna wrap a ",(0,l.kt)("inlineCode",{parentName:"p"},"std::array")," in our own ",(0,l.kt)("inlineCode",{parentName:"p"},"Board")," type and add a ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," operator so that we can index into it using 2D indices:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class Player {\n    Noughts,\n    Crosses,\n};\n\ntemplate<int size>\nclass Board {\npublic:\n    std::optional<Player>& operator[](CellIndex index)\n    {\n        // TODO\n    }\n\n    const std::optional<Player>& operator[](CellIndex index) const\n    {\n        // TODO\n    }\n\nprivate:\n    // TODO\n};\n")),(0,l.kt)("p",null,"Then we can draw all the noughts and crosses that are stored in this board:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template<int size>\nvoid draw_noughts_and_crosses(const Board<size>& board, p6::Context& ctx)\n{\n    // TODO\n}\n")),(0,l.kt)(a.Z,{hash:"7c8a5badc8a058465cd72b4cbb882e63bd4eb664",mdxType:"CommitLink"}),(0,l.kt)("h2",{id:"placing-noughts-and-crosses"},"Placing noughts and crosses"),(0,l.kt)("p",null,"Then, when the player clicks on a cell, we want to add a nought or a cross in that cell.",(0,l.kt)("br",null),"\nThis can be done in the ",(0,l.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/p6-docs/reference/events#mouse_pressed"},"mouse_pressed")," function of the p6 context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    // ...\n    ctx.mouse_pressed = [&](p6::MouseButton event) {\n        // TODO\n    };\n}\n")),(0,l.kt)(a.Z,{hash:"63d8cc096ed71e840136e4bece45780cb197ac60",mdxType:"CommitLink"}),(0,l.kt)("h2",{id:"previewing-the-placement"},"Previewing the placement"),(0,l.kt)("p",null,"When the player is hovering a cell we want to show what symbol they are about to put. This helps with the readability of the game."),(0,l.kt)(a.Z,{hash:"6036dd33652b03c45774c7563c3f759e05ad066c",mdxType:"CommitLink"}),(0,l.kt)("h2",{id:"checking-for-the-end-of-the-game"},"Checking for the end of the game"),(0,l.kt)("p",null,"We are almost done! We just have to check if one of the player has won, or if the game is over because the board is full."),(0,l.kt)("h3",{id:"checking-that-the-board-is-full"},"Checking that the board is full"),(0,l.kt)(a.Z,{hash:"b06fcb78ed03127742838a89ecf1762bec0a9167",mdxType:"CommitLink"}),(0,l.kt)("h3",{id:"checking-that-a-player-has-won"},"Checking that a player has won"),(0,l.kt)("p",null,"We need to check all the rows, all the columns, and all the diagonals. How are you gonna reuse the same code for the rows, the columns and the diagonals? This is not an easy question!"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tip"),"You can use ",(0,l.kt)(o.Z,{slug:"std-function",mdxType:"LessonLink"}),".",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"More details"),"What differs between the rows, the columns and the diagonals is the way we index into the board. Basically we want a way to loop over any line. Well, we are gonna pass that behaviour to the function through a ",(0,l.kt)("i",null,"std::function"),":",(0,l.kt)(r.Z,{language:"cpp",mdxType:"CodeBlock"},"std::optional<Player> check_for_winner_on_line(const Board<board_size>& board, std::function<CellIndex(int)> index_generator)\n{\n    // TODO\n}"))),(0,l.kt)(a.Z,{hash:"1d4e373e08f3b0b4c150f6f1e25d68c49fd6ac88",mdxType:"CommitLink"}),(0,l.kt)("h2",{id:"refactoring"},"Refactoring"),(0,l.kt)("p",null,"Congrats, you have finished a pretty nice game! Now all that there is left to do is to move your code into its own file and add this game to the menu."),(0,l.kt)(a.Z,{hash:"d79e7f02920fea4ff9aabc3d80d27b2ba839756c",mdxType:"CommitLink"}))}g.isMDXComponent=!0},6894:function(e,n,t){t.d(n,{ZP:function(){return r}});var s=t(7462),i=t(3366),l=(t(7294),t(4137)),a=["components"],o={toc:[]};function r(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,s.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"I encourage you to first try to code without reading the guided steps that follow! Think of the different functions that you need to write, and try to implement them!",(0,l.kt)("br",null),"\nOnly when you are stuck are you allowed to keep reading \ud83d\ude09 And read only enough to get unstuck! Then try to keep coding by yourself \ud83d\ude01 (until you are stuck again)."))))}r.isMDXComponent=!0},8997:function(e,n,t){n.Z=t.p+"assets/images/board-62a48f836cc4a4322ef3ad6c21a701f2.png"},273:function(e,n,t){n.Z=t.p+"assets/images/noughts-and-crosses-drawing-79f72d390fb5643610ef351bf75ed4d1.png"},4820:function(e){e.exports=JSON.parse('[{"title":"Advanced Git features","benefit":3,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":null},{"title":"std::array","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/array","slug":"array","priority":null},{"title":"assert","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":null},{"title":"auto","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":null},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":null},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":"useless","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":null},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":null},{"title":"Classes and Structs","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/classes-and-structs","slug":"classes-and-structs","priority":null},{"title":"CMake","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":null},{"title":"Code reviews","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":null},{"title":"The Command pattern","benefit":5,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":null},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":null},{"title":"Consistency in style","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":null},{"title":"const","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":null},{"title":"C++ casts","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":null},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":null},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":null},{"title":"Use a debugger","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":null},{"title":"Deleted functions","benefit":3,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":null},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":null},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":"clean-code","bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":null},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":null},{"title":"Documentation","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":null},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":null},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":null},{"title":"Enums","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":null},{"title":"Error Handling","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":null},{"title":"for","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/for","slug":"for","priority":null},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":null},{"title":"friend","benefit":1,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":null},{"title":"Functional programming","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":null},{"title":"Functions","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/functions","slug":"functions","priority":null},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":null},{"title":"Git submodules","benefit":4,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":null},{"title":"Use Git","benefit":5,"easiness":4,"level":"tools","bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":null},{"title":"Use an IDE","benefit":5,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":null},{"title":"#if defined()","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":null},{"title":"if","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/if","slug":"if","priority":null},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":null},{"title":"Inheritance","benefit":2,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/inheritance","slug":"inheritance","priority":null},{"title":"Install a compiler","benefit":5,"easiness":5,"level":"tools","bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":null},{"title":"Internet Search","benefit":5,"easiness":3,"level":"tools","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/internet","slug":"internet","priority":null},{"title":"Iterators","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/iterators","slug":"iterators","priority":null},{"title":"l-values and r-values","benefit":3,"easiness":2,"level":"advanced","link":"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values","slug":"l-values-and-r-values","priority":null},{"title":"Lambda functions","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":null},{"title":"Linked lists","benefit":2,"easiness":5,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":null},{"title":"Macros","benefit":1,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/macros","slug":"macros","priority":null},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":"clean-code","bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":null},{"title":"Markdown","benefit":3,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":null},{"title":"Master your IDE","benefit":4,"easiness":4,"level":"advanced","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":null},{"title":"Measuring performance","benefit":3,"easiness":3,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":null},{"title":"Minimize dependencies","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":null},{"title":"Move semantics","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":null},{"title":"Multithreading","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":null},{"title":"namespace","benefit":3,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/namespace","slug":"namespace","priority":null},{"title":"Naming","benefit":5,"easiness":1,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":null},{"title":"Operator Overloading","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/operator-overloading","slug":"operator-overloading","priority":null},{"title":"std::optional","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":null},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":null},{"title":"Polymorphism","benefit":3,"easiness":2,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":null},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":null},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":"clean-code","bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":null},{"title":"<random>","benefit":3,"easiness":3,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":null},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":null},{"title":"References","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/references","slug":"references","priority":null},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":null},{"title":"Scope guard","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":null},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":null},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":null},{"title":"Space out your code","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":null},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":null},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":null},{"title":"State and Strategy","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":null},{"title":"Use static analysers","benefit":5,"easiness":3,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":null},{"title":"Static site generators","benefit":4,"easiness":3,"level":"good-to-know","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":null},{"title":"static","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/static","slug":"static","priority":null},{"title":"std::function","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":null},{"title":"STL algorithms","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":null},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":null},{"title":"Strong Types","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":null},{"title":"Structured bindings","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/structured-bindings","slug":"structured-bindings","priority":null},{"title":"Templates","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/templates","slug":"templates","priority":null},{"title":"Testing","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":null},{"title":"Trailing return type","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":null},{"title":"Type erasure","benefit":4,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":null},{"title":"Use libraries","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":null},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":"clean-code","bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":null},{"title":"Variables","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/variables","slug":"variables","priority":null},{"title":"std::variant","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":null},{"title":"std::vector","benefit":5,"easiness":5,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":null},{"title":"wasm and electron","benefit":4,"easiness":2,"level":"advanced","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":null},{"title":"Watch conferences","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":null},{"title":"Write debug tools","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-debug-tools","slug":"write-debug-tools","priority":null},{"title":"Write libraries","benefit":5,"easiness":3,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":null},{"title":"Write small functions","benefit":5,"easiness":3,"level":"clean-code","bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":null}]')}}]);