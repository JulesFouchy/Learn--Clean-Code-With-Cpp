"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[5384],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=i.createContext({}),p=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,g=u["".concat(r,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8442:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(7294),s=n(4820);function a(e){var t=e.slug,n=e.text,a=e.anchor,o=s.find((function(e){return e.slug===t}));if(void 0===o)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return i.createElement("a",{href:o.link+(a||"")},n||o.title)}},940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var i=n(7462),s=n(3366),a=(n(7294),n(4137)),o=n(8442),l=["components"],r={title:"Use Git",benefit:5,easiness:4,level:1,bias:1,tags:["Tools","Git"]},p=void 0,d={unversionedId:"lessons/git",id:"lessons/git",title:"Use Git",description:"Brief",source:"@site/../../content/lessons/git.md",sourceDirName:"lessons",slug:"/lessons/git",permalink:"/Learn--Clean-Code-With-Cpp/lessons/git",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"},{label:"Git",permalink:"/Learn--Clean-Code-With-Cpp/tags/git"}],version:"current",frontMatter:{title:"Use Git",benefit:5,easiness:4,level:1,bias:1,tags:["Tools","Git"]},sidebar:"lessons",previous:{title:"Use an IDE",permalink:"/Learn--Clean-Code-With-Cpp/lessons/ide"},next:{title:"Use a debugger",permalink:"/Learn--Clean-Code-With-Cpp/lessons/debugger"}},c=[{value:"Brief",id:"brief",children:[],level:2},{value:"Why bother?",id:"why-bother",children:[],level:2},{value:"Good practices",id:"good-practices",children:[{value:"Small commits",id:"small-commits",children:[],level:3},{value:"Clear messages and descriptions",id:"clear-messages-and-descriptions",children:[],level:3},{value:"Don&#39;t commit broken code",id:"dont-commit-broken-code",children:[],level:3},{value:"Double check",id:"double-check",children:[],level:3}],level:2},{value:"Using a graphical interface",id:"using-a-graphical-interface",children:[],level:2},{value:".gitignore",id:"gitignore",children:[],level:2},{value:"How to use git",id:"how-to-use-git",children:[{value:"Overview",id:"overview",children:[],level:3},{value:"Initial setup",id:"initial-setup",children:[],level:3},{value:"Work routine",id:"work-routine",children:[],level:3}],level:2},{value:"Resolving conflicts",id:"resolving-conflicts",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"git")," is probably the most important tool of all in your programmer toolbelt! It is a software which is able to handle a giant history of all the changes you ever made to your code. It is very powerful to work with other developers and split your tasks.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"why-bother"},"Why bother?"),(0,a.kt)("p",null,"There are a few reasons to use ",(0,a.kt)("em",{parentName:"p"},"git"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"revert"),": Go back in time to a working state if you broke something."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"checkout"),": Check how the project was at a given date."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"commit"),": Be able to work step-by-step by grouping your changes with a description."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"blame"),": Be able to know when a line of code was added, and by whom."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"push"),": Have a copy of your code on a server so that other developers can get it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pull"),": Get changes made by other developers.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A joke with a lot of truth in it",src:n(4812).Z,width:"921",height:"596"})),(0,a.kt)("h2",{id:"good-practices"},"Good practices"),(0,a.kt)("h3",{id:"small-commits"},"Small commits"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Guideline")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"As soon as you have made some progress and the code compiles, make a commit!"),(0,a.kt)("p",{parentName:"div"},"Try to avoid putting ",(0,a.kt)("em",{parentName:"p"},"unrelated")," changes in the same commit: split them over several commits."))),(0,a.kt)("h3",{id:"clear-messages-and-descriptions"},"Clear messages and descriptions"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Guideline")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Don't be lazy, write actual sentences without stripping words!",(0,a.kt)("br",null),"\nIn the description, explain ",(0,a.kt)("em",{parentName:"p"},"why")," you are making the change.",(0,a.kt)("br",null),"\nBe clear about which part of the code is affected by the changes. I (and others) like to put this inside ","[ ]"," at the beginning of the message.",(0,a.kt)("br",null),"\nIt is great to distinguish different types of commit by starting the message with a keyword:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Add"),": adds a new feature / class / function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Update"),": improves / changes an existing feature / class / function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fix"),": fixes a bug."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"etc."))),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"You can also use ",(0,a.kt)("a",{parentName:"strong",href:"https://gitmoji.dev/"},"\ud83d\ude0e Gitmoji \ud83d\ude0e")),", a standard set of emojis to indicate the kind of commit you are making."))),(0,a.kt)("p",null,"Here are some example messages I would write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2728 [guess_the_number] Add get_int_from_user()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u267b\ufe0f [CMake] Modernize set(EXECUTABLE_OUTPUT_PATH ...)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ud83d\udc1b [hangman] Fix missing include\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u267b\ufe0f [board] Start using BoardSize instead of int\n")),(0,a.kt)("h3",{id:"dont-commit-broken-code"},"Don't commit broken code"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Guideline")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Always make sure the code compiles before commiting it!",(0,a.kt)("br",null),"\nThis can especially happen after a merge or a conflict resolution: so please check that the code is still working before commiting the resolved conflict!"))),(0,a.kt)("h3",{id:"double-check"},"Double check"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Guideline")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Read all your changes before commiting them! It will make sure you don't commit temporary debug code (as I have done way too many times), and it is a good opportunity to review all your changes and make sure you are happy with them."),(0,a.kt)("p",{parentName:"div"},"It is also a good opportunity to make sure you are not commiting files you are not suposed to, like your ",(0,a.kt)("em",{parentName:"p"},"build")," folder."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"TIP:"))," Using a graphical interface will greatly help you in that task."))),(0,a.kt)("h2",{id:"using-a-graphical-interface"},"Using a graphical interface"),(0,a.kt)("p",null,"There are a lot of apps that make the steps of the next sections easier to do and monitor. I would recommend ",(0,a.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/"},"GitKraken")," for the job. It is free to use for public repositories, has a nice interface and a great set of features. They also have ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=v4g6y_HsgpA&list=PLe6EXFvnTV7-_41SpakZoTIYCgX4aMTdU"},"a Youtube channel")," with tons of concise tutorials to get started."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NB:")," Another great git UI is ",(0,a.kt)("a",{parentName:"p",href:"https://git-fork.com/"},"Fork")," if you are tired of how laggy GitKraken can sometimes be. (But unfortunately it is not available on Linux). "),(0,a.kt)("h2",{id:"gitignore"},".gitignore"),(0,a.kt)("p",null,"There are a few files that you don't want to commit to your repository. For example all the ",(0,a.kt)("em",{parentName:"p"},"build")," files generated by CMake, or the executable that you built for ",(0,a.kt)("em",{parentName:"p"},"your")," machine. To tell git to ignore them you simply have to add a file named ",(0,a.kt)("em",{parentName:"p"},".gitignore")," at the root of your repository and list all the files and folders you want to ignore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".gitignore"',title:'".gitignore"'},"# Build files #\nbin/\nbuild/\n\n# User settings #\n.vscode/\n\n# OS-generated files #\n.DS_Store\n.DS_Store?\n._*\n.Spotlight-V100\n.Trashes\nehthumbs.db\nThumbs.db\n")),(0,a.kt)("p",null,"If you are using something like GitKraken you can also right-click on the file or folder and select ",(0,a.kt)("em",{parentName:"p"},"Ignore"),"."),(0,a.kt)("h2",{id:"how-to-use-git"},"How to use git"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The steps are presented with the command line so that you get a better understanding of ",(0,a.kt)("em",{parentName:"p"},"git"),". Yet we strongly recommend that you use a graphical interface like GitKraken to simplify this for you."))),(0,a.kt)("p",null,"The usual setup when you use ",(0,a.kt)("em",{parentName:"p"},"git")," is to create a ",(0,a.kt)("em",{parentName:"p"},"remote depot")," that is used as a central authority (often this is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),", but many other providers exist like ",(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/"},"GitLab"),"). Authorized developers ",(0,a.kt)("em",{parentName:"p"},"clone")," the content on their computer, make modifications, and ",(0,a.kt)("em",{parentName:"p"},"push")," their changes back to the depot so that everyone can get it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"git depot",src:n(3692).Z,width:"504",height:"410"})),(0,a.kt)("p",null,"It is also possible to work only locally (which is great for a simple test project or exercises). Simply open a command line and type ",(0,a.kt)("inlineCode",{parentName:"p"},"git init"),' and you can skip the "inital setup" from the next section. It is still possible afterwards to publish your local repository to GitHub though.'),(0,a.kt)("h3",{id:"initial-setup"},"Initial setup"),(0,a.kt)("p",null,"You first need to install ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},(0,a.kt)("em",{parentName:"a"},"git"))," and go through the setup. Then you can go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),', create a new account, and create a new repository (should be a green button on the "Repositories" left panel). Once created, you will be able to clone it on your computer. '),(0,a.kt)("p",null,"To do so, open a command line in the folder you want you repository to be in, and run ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone your_repo_url"),'. Replace "your_repo_url" with the one given by GitHub when you click on the green "Code" button.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github clone",src:n(3554).Z,width:"407",height:"266"})),(0,a.kt)("h3",{id:"work-routine"},"Work routine"),(0,a.kt)("p",null,"There are only a handful of commands that are useful on a day-to-day basis. Here is how it works:"),(0,a.kt)("p",null,"After making some changes, you have to select the files that you want to commit to the remote repo. To select all changed files run ",(0,a.kt)("inlineCode",{parentName:"p"},"git add .")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pull",src:n(1602).Z,width:"566",height:"314"})),(0,a.kt)("p",null,"When you are happy with your changes, you can save them in a group that will be stored locally. To do so run ",(0,a.kt)("inlineCode",{parentName:"p"},'git commit -m "Place a description of your changes here"'),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pull",src:n(1681).Z,width:"439",height:"315"})),(0,a.kt)("p",null,"Then it is time to make you local commit accessible to others via the remote repository. Simply run ",(0,a.kt)("inlineCode",{parentName:"p"},"git push"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pull",src:n(642).Z,width:"572",height:"320"})),(0,a.kt)("p",null,"In order to get the latest changes from the remote repository it is recommended to frequently run ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," (in particular, always before calling ",(0,a.kt)("inlineCode",{parentName:"p"},"git push"),"). If you work with other developers it is possible that you encounter conflicts if you made changes at the same place in the same files. In this case, check out the section about resolving conflicts."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pull",src:n(7703).Z,width:"833",height:"500"})),(0,a.kt)("p",null,"You might also have heard about branches. This is an advanced ",(0,a.kt)("em",{parentName:"p"},"git")," feature, you likely don't need to use it for your first student projects. If you are curious check out the ",(0,a.kt)(o.Z,{slug:"advanced-git-features",mdxType:"LessonLink"}),"."),(0,a.kt)("h2",{id:"resolving-conflicts"},"Resolving conflicts"),(0,a.kt)("p",null,"A conflict happens when you made changes in the same place as another developer. In this case you will have to use an external tool to compare the changes and merge them into a valid file. "),(0,a.kt)("p",null,"GitKraken is a great tool to handle these situations: check out ",(0,a.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/learn/git/tutorials/how-to-resolve-merge-conflict-in-git"},"this tutorial")," to get started."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"NB: There are many other software versioning solutions out there, but ",(0,a.kt)("em",{parentName:"li"},"git")," is by far the most popular one.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},1602:function(e,t,n){t.Z=n.p+"assets/images/git-add-8c84cd8e3be423d1fa84a1ed27161ee3.png"},1681:function(e,t,n){t.Z=n.p+"assets/images/git-commit-53942a0a85bcc2e506f189a5b0267799.png"},3692:function(e,t,n){t.Z=n.p+"assets/images/git-depot-947796ca0de692482fd20580691c3f57.png"},7703:function(e,t,n){t.Z=n.p+"assets/images/git-flow-89201120a2726d2b6aad9b47b75e9a07.png"},642:function(e,t,n){t.Z=n.p+"assets/images/git-push-d5e92ea531bd1ea26fb1905e66e997a9.png"},3554:function(e,t,n){t.Z=n.p+"assets/images/github-clone-d480c44f3d61c88a7f76754a1ec97442.png"},4812:function(e,t,n){t.Z=n.p+"assets/images/version-control-flowchart-88726a1f36f4470cbc81096f28e0b87d.png"},4820:function(e){e.exports=JSON.parse('[{"title":"Install a compiler","benefit":5,"easiness":5,"level":1,"bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":1,"points":0.5},{"title":"Use an IDE","benefit":5,"easiness":5,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1,"points":0.5},{"title":"Use Git","benefit":5,"easiness":4,"level":1,"bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.9875,"points":1},{"title":"Use a debugger","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":0.9875,"points":1},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9875,"points":1},{"title":"Use static analysers","benefit":5,"easiness":3,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":0.975,"points":1.5},{"title":"Naming","benefit":5,"easiness":1,"level":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95,"points":2.5},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":1,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.9375,"points":1.5},{"title":"Consistency in style","benefit":2,"easiness":5,"level":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.8875000000000001,"points":0.5},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":2,"bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.7875000000000001,"points":0.7142857142857143},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":2,"bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":0.775,"points":1.0714285714285714},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":2,"bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":0.775,"points":1.0714285714285714},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":2,"bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":0.775,"points":1.0714285714285714},{"title":"Write small functions","benefit":5,"easiness":3,"level":2,"bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775,"points":1.0714285714285714},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":0.7625000000000001,"points":1.4285714285714286},{"title":"Enums","benefit":4,"easiness":5,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001,"points":0.35714285714285715},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.75,"points":1.7857142857142858},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.7250000000000001,"points":1.4285714285714286},{"title":"std::vector","benefit":5,"easiness":5,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":0.6,"points":0.045454545454545456},{"title":"Minimize dependencies","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":0.575,"points":0.13636363636363635},{"title":"Strong Types","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":0.575,"points":0.13636363636363635},{"title":"Use libraries","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575,"points":0.13636363636363635},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.5625,"points":0.045454545454545456},{"title":"Testing","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625,"points":0.18181818181818182},{"title":"Lambda functions","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.55,"points":0.09090909090909091},{"title":"Master your IDE","benefit":4,"easiness":4,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.55,"points":0.09090909090909091},{"title":"std::optional","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.55,"points":0.09090909090909091},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55,"points":0.09090909090909091},{"title":"Code reviews","benefit":4,"easiness":3,"level":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375,"points":0.13636363636363635},{"title":"const","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.5375,"points":0.13636363636363635},{"title":"Documentation","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.5375,"points":0.13636363636363635},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.5375,"points":0.13636363636363635},{"title":"Git submodules","benefit":4,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375,"points":0.13636363636363635},{"title":"STL algorithms","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.5375,"points":0.13636363636363635},{"title":"assert","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.525,"points":0.045454545454545456},{"title":"auto","benefit":3,"easiness":5,"level":3,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.525,"points":0.045454545454545456},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.525,"points":0.045454545454545456},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525,"points":0.045454545454545456},{"title":"Markdown","benefit":3,"easiness":5,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.525,"points":0.045454545454545456},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.525,"points":0.045454545454545456},{"title":"std::function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":0.525,"points":0.045454545454545456},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":0.5125,"points":0.09090909090909091},{"title":"Error Handling","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125,"points":0.09090909090909091},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125,"points":0.09090909090909091},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5,"points":0.13636363636363635},{"title":"CMake","benefit":3,"easiness":3,"level":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.5,"points":0.13636363636363635},{"title":"Functional programming","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5,"points":0.13636363636363635},{"title":"Move semantics","benefit":3,"easiness":3,"level":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5,"points":0.13636363636363635},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.5,"points":0.13636363636363635},{"title":"State and Strategy","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5,"points":0.13636363636363635},{"title":"std::variant","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5,"points":0.13636363636363635},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875,"points":0.18181818181818182},{"title":"Multithreading","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875,"points":0.18181818181818182},{"title":"Polymorphism","benefit":3,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875,"points":0.18181818181818182},{"title":"Space out your code","benefit":2,"easiness":5,"level":3,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":0.4875,"points":0.045454545454545456},{"title":"Watch conferences","benefit":5,"easiness":3,"level":4,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.3749999999999999,"points":0.057692307692307696},{"title":"Write libraries","benefit":5,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.3749999999999999,"points":0.057692307692307696},{"title":"The Command pattern","benefit":5,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":0.36249999999999993,"points":0.07692307692307693},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.36249999999999993,"points":0.07692307692307693},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.36249999999999993,"points":0.019230769230769232},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.3499999999999999,"points":0.038461538461538464},{"title":"Static site generators","benefit":4,"easiness":3,"level":4,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.3374999999999999,"points":0.057692307692307696},{"title":"Deleted functions","benefit":3,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.32499999999999996,"points":0.019230769230769232},{"title":"Type erasure","benefit":4,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.32499999999999996,"points":0.07692307692307693},{"title":"wasm and electron","benefit":4,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.32499999999999996,"points":0.07692307692307693},{"title":"Scope guard","benefit":3,"easiness":4,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.31249999999999994,"points":0.038461538461538464},{"title":"C++ casts","benefit":3,"easiness":3,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.29999999999999993,"points":0.057692307692307696},{"title":"Measuring performance","benefit":3,"easiness":3,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.29999999999999993,"points":0.057692307692307696},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.29999999999999993,"points":0.057692307692307696},{"title":"<random>","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.29999999999999993,"points":0.057692307692307696},{"title":"Linked lists","benefit":2,"easiness":5,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.2874999999999999,"points":0.019230769230769232},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.26249999999999996,"points":0.057692307692307696},{"title":"friend","benefit":1,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.24999999999999994,"points":0.019230769230769232},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.24999999999999994,"points":0.07692307692307693},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":5,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.04999999999999999,"points":0},{"title":"#if defined()","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.04999999999999999,"points":0},{"title":"Trailing return type","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.04999999999999999,"points":0}]')}}]);