"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[5384],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],s={title:"Use Git",benefit:5,easiness:4,level:1,bias:1,tags:["Tools","Git"]},l=void 0,p={unversionedId:"lessons/git",id:"lessons/git",title:"Use Git",description:"Brief",source:"@site/../../content/lessons/git.md",sourceDirName:"lessons",slug:"/lessons/git",permalink:"/Learn--Clean-Code-With-Cpp/lessons/git",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"},{label:"Git",permalink:"/Learn--Clean-Code-With-Cpp/tags/git"}],version:"current",frontMatter:{title:"Use Git",benefit:5,easiness:4,level:1,bias:1,tags:["Tools","Git"]},sidebar:"lessons",previous:{title:"Use an IDE",permalink:"/Learn--Clean-Code-With-Cpp/lessons/ide"},next:{title:"Use a debugger",permalink:"/Learn--Clean-Code-With-Cpp/lessons/debugger"}},c=[{value:"Brief",id:"brief",children:[],level:2},{value:"Why bother ?",id:"why-bother-",children:[],level:2},{value:"The big idea",id:"the-big-idea",children:[],level:2},{value:"Step by step",id:"step-by-step",children:[{value:"Initial setup",id:"initial-setup",children:[],level:3},{value:"Work routine",id:"work-routine",children:[],level:3}],level:2},{value:"Relying on 3rd party software",id:"relying-on-3rd-party-software",children:[],level:2},{value:"Handling conflicts",id:"handling-conflicts",children:[],level:2},{value:"Good practices",id:"good-practices",children:[],level:2}],u={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"brief"},"Brief"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"git")," is probably the most important tool of all in your programmer's toolbelt! It is a software which is able to handle giant history of all the changes you ever made to your code. It is very powerful to work with other developers and split your tasks."),(0,r.kt)("p",null,"There are many other software versioning solutions out there, but git remains the most popular."),(0,r.kt)("h2",{id:"why-bother-"},"Why bother ?"),(0,r.kt)("p",null,"There are a few reasons to learn how to use ",(0,r.kt)("em",{parentName:"p"},"git")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"revert")," : Go back in time if something is broken, to a working state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"checkout")," : Check how the project was at a given date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"commit")," : Be able to work step-by-step by grouping your changes with a description."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"blame")," : Be able to know when a line of code was added, and by whom."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"push")," : Have a copy of your code in a server so that other developers can get it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pull")," : Get changes made by other developers.")),(0,r.kt)("h2",{id:"the-big-idea"},"The big idea"),(0,r.kt)("p",null,"The usual setup when you use git is to create a ",(0,r.kt)("em",{parentName:"p"},"remote depot")," that is used as a central authority (often this is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"github"),", but many other providers exist). Authorized developers ",(0,r.kt)("em",{parentName:"p"},"clone")," the content on their computer, make modifications and ",(0,r.kt)("em",{parentName:"p"},"push")," their changes back to the depot so that everyone can get it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"git depot",src:n(3692).Z,width:"504",height:"410"})),(0,r.kt)("p",null,"It is also possible to work only locally (which is great for a simple test project or TPs). Simply open a command line and type ",(0,r.kt)("inlineCode",{parentName:"p"},"git init"),' and you can skip the "inital setup" from the next section. It is still possible afterwards to publish your local repository to github though.'),(0,r.kt)("h2",{id:"step-by-step"},"Step by step"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"These steps are presented with the command line so that you get a better understanding of git. Yet I strongly recommend that you use a software to abstract this for you. You check the next section for an example."))),(0,r.kt)("h3",{id:"initial-setup"},"Initial setup"),(0,r.kt)("p",null,"You first need to install ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," and go through the setup. Then you can go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"github"),', create a new account, and create a new repository (should be a green button on the "Repositories" left panel). Once created, you will be able to clone it in your computer. '),(0,r.kt)("p",null,"To do so, open a command line in the folder you want you repository to be, and run ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone your_repo_address"),'. Replace "your_repo_address" with the one given by github, when you click on the "code" green button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github clone",src:n(3554).Z,width:"407",height:"266"})),(0,r.kt)("h3",{id:"work-routine"},"Work routine"),(0,r.kt)("p",null,"There are only an handful of commands that are useful on a day-to-day basis, this is how it works :"),(0,r.kt)("p",null,"After making some changes, you have to select the file that you wish to commit to the remote repo. To select all changed file run ",(0,r.kt)("inlineCode",{parentName:"p"},"git add .")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pull",src:n(1602).Z,width:"566",height:"314"})),(0,r.kt)("p",null,"When you are happy with your changes, you can save them in a group that will be storred locally. To do so run ",(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "Place a message about your changes here"'),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pull",src:n(1681).Z,width:"439",height:"315"})),(0,r.kt)("p",null,"Then it is time to make you local commit accessible to others via the remote repository. Simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pull",src:n(642).Z,width:"572",height:"320"})),(0,r.kt)("p",null,"In order to get the latest changes from the remote repository, it is recommended to run frequently ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," (in particular, always before calling git push). If you work with other developers, it is possible that you encounter conflict if you made changes in the same place in the same files. In this case, check the next section about resolving conflicts."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pull",src:n(7703).Z,width:"833",height:"500"})),(0,r.kt)("p",null,"You might also have heard about branches. This is an advanced git feature, you likely not need to use it for your student projects. If you are curious, you can check the ",(0,r.kt)("a",{parentName:"p",href:"/lessons/advanced-git-features"},"advanced git features")," lesson."),(0,r.kt)("h2",{id:"relying-on-3rd-party-software"},"Relying on 3rd party software"),(0,r.kt)("p",null,"There are a lot of softwares to make the previous steps easier to handle. I would recommend ",(0,r.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/"},"gitkraken")," for the job. It is free to use for public repositories, has a nice interface and great set of features. They also have a youtube channel with tons of go-to-the-point ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=v4g6y_HsgpA&list=PLe6EXFvnTV7-_41SpakZoTIYCgX4aMTdU"},"tutorials")," to get started."),(0,r.kt)("h2",{id:"handling-conflicts"},"Handling conflicts"),(0,r.kt)("p",null,"A conflict happen when you made changes in the same place as another developer, but his changes are more recents. In this case, you will have to use an external tool to compare the changes and merge them into a valid file. "),(0,r.kt)("p",null,"Gitkraken his a great tool to handle these situations, check ",(0,r.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/learn/git/tutorials/how-to-resolve-merge-conflict-in-git"},"this tutorial")," to get started."),(0,r.kt)("h2",{id:"good-practices"},"Good practices"),(0,r.kt)("p",null,"As soon as you have made meaningful progress and the code compiles, make a commit!"),(0,r.kt)("p",null,"Try to avoid putting ",(0,r.kt)("em",{parentName:"p"},"unrelated")," changes in the same commit."))}h.isMDXComponent=!0},1602:function(e,t,n){t.Z=n.p+"assets/images/git-add-8c84cd8e3be423d1fa84a1ed27161ee3.png"},1681:function(e,t,n){t.Z=n.p+"assets/images/git-commit-53942a0a85bcc2e506f189a5b0267799.png"},3692:function(e,t,n){t.Z=n.p+"assets/images/git-depot-947796ca0de692482fd20580691c3f57.png"},7703:function(e,t,n){t.Z=n.p+"assets/images/git-flow-89201120a2726d2b6aad9b47b75e9a07.png"},642:function(e,t,n){t.Z=n.p+"assets/images/git-push-d5e92ea531bd1ea26fb1905e66e997a9.png"},3554:function(e,t,n){t.Z=n.p+"assets/images/github-clone-d480c44f3d61c88a7f76754a1ec97442.png"}}]);