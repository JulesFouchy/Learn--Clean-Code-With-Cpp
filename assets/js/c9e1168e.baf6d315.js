"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4600],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],l={title:"Master your IDE",benefit:4,easiness:4,level:"advanced",tags:["Tools"]},c=void 0,s={unversionedId:"lessons/master-your-ide",id:"lessons/master-your-ide",title:"Master your IDE",description:"Learn the shortcuts",source:"@site/../../content/lessons/master-your-ide.md",sourceDirName:"lessons",slug:"/lessons/master-your-ide",permalink:"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"}],version:"current",frontMatter:{title:"Master your IDE",benefit:4,easiness:4,level:"advanced",tags:["Tools"]},sidebar:"lessons",previous:{title:"Linked lists",permalink:"/Learn--Clean-Code-With-Cpp/lessons/linked-list"},next:{title:"Measuring performance",permalink:"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance"}},u=[{value:"Learn the shortcuts",id:"learn-the-shortcuts",children:[],level:2},{value:"Adapt the Settings",id:"adapt-the-settings",children:[],level:2},{value:"A few great actions",id:"a-few-great-actions",children:[{value:"Select multiple occurences of the same word",id:"select-multiple-occurences-of-the-same-word",children:[],level:3},{value:"Delete the current line",id:"delete-the-current-line",children:[],level:3},{value:"Move the current line up",id:"move-the-current-line-up",children:[],level:3},{value:"Duplicate the current line",id:"duplicate-the-current-line",children:[],level:3},{value:"Go to a file",id:"go-to-a-file",children:[],level:3},{value:"Switch between a header file and the corresponding .cpp file",id:"switch-between-a-header-file-and-the-corresponding-cpp-file",children:[],level:3},{value:"Close all open tabs",id:"close-all-open-tabs",children:[],level:3},{value:"Save all open tabs",id:"save-all-open-tabs",children:[],level:3},{value:"Launch the project",id:"launch-the-project",children:[],level:3},{value:"Build the project",id:"build-the-project",children:[],level:3},{value:"Debug the project",id:"debug-the-project",children:[],level:3}],level:2},{value:"Go to definition",id:"go-to-definition",children:[],level:2},{value:"Find all occurences",id:"find-all-occurences",children:[],level:2},{value:"Search for a word in the current file",id:"search-for-a-word-in-the-current-file",children:[],level:2},{value:"Search for a word in the whole project",id:"search-for-a-word-in-the-whole-project",children:[],level:2},{value:"Rename",id:"rename",children:[],level:2},{value:"Putting multiple cursors at once",id:"putting-multiple-cursors-at-once",children:[],level:2},{value:"Opening a new window",id:"opening-a-new-window",children:[],level:2},{value:"Opening another project / folder",id:"opening-another-project--folder",children:[],level:2}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"learn-the-shortcuts"},"Learn the shortcuts"),(0,i.kt)("p",null,"My tip is to try, once in a while, to pick an action that you often need (like deleting a whole line, selecting all the occurences of a word in the text, opening the Settings menu, ",(0,i.kt)("em",{parentName:"p"},"etc."),") and go search for the shortcut (either on the Internet or in the great VS Code shortcut menu (in File->Preferences->Keyboard Shortcuts)).",(0,i.kt)("br",null),"\nAnd if you don't like the default shortcut, you can always change it!"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Take the time to learn! Next time you say "Oh I wish I knew how to do ',(0,i.kt)("em",{parentName:"p"},"xxx"),' faster!" take the time to learn how to do it! It will save you a lot of time later down the road!',(0,i.kt)("br",null),"\nYou can also discover shortcuts by watching other people write code. Take the time to ask them what the shortcut is, or go search for it!"))),(0,i.kt)("h2",{id:"adapt-the-settings"},"Adapt the Settings"),(0,i.kt)("p",null,"Take the time to open the ",(0,i.kt)("em",{parentName:"p"},"Settings")," menu of your IDE, and read through it! You will discover a lot of the hidden functionalities of your IDE, and you might be able to change its behaviour to better suit your needs! I often feel silly when I discover that the functionality I was dreaming of was actually available, waiting for me to enable it."),(0,i.kt)("p",null,"The same is true for the extensions you use: they can be configured in a lot of different ways, so check out their settings!",(0,i.kt)("br",null),"\n(For example, did you know that you can tell the CMake extension where your CMakeLists.txt is? It doesn't have to be at the root of your project!)"),(0,i.kt)("h2",{id:"a-few-great-actions"},"A few great actions"),(0,i.kt)("p",null,"Do you know how to do each of these? If not, try to learn them one by one:"),(0,i.kt)("h3",{id:"select-multiple-occurences-of-the-same-word"},"Select multiple occurences of the same word"),(0,i.kt)("h3",{id:"delete-the-current-line"},"Delete the current line"),(0,i.kt)("h3",{id:"move-the-current-line-up"},"Move the current line up"),(0,i.kt)("h3",{id:"duplicate-the-current-line"},"Duplicate the current line"),(0,i.kt)("h3",{id:"go-to-a-file"},"Go to a file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CTRL")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"P")),(0,i.kt)("h3",{id:"switch-between-a-header-file-and-the-corresponding-cpp-file"},"Switch between a header file and the corresponding .cpp file"),(0,i.kt)("h3",{id:"close-all-open-tabs"},"Close all open tabs"),(0,i.kt)("h3",{id:"save-all-open-tabs"},"Save all open tabs"),(0,i.kt)("h3",{id:"launch-the-project"},"Launch the project"),(0,i.kt)("h3",{id:"build-the-project"},"Build the project"),(0,i.kt)("h3",{id:"debug-the-project"},"Debug the project"),(0,i.kt)("h2",{id:"go-to-definition"},"Go to definition"),(0,i.kt)("h2",{id:"find-all-occurences"},"Find all occurences"),(0,i.kt)("h2",{id:"search-for-a-word-in-the-current-file"},"Search for a word in the current file"),(0,i.kt)("h2",{id:"search-for-a-word-in-the-whole-project"},"Search for a word in the whole project"),(0,i.kt)("h2",{id:"rename"},"Rename"),(0,i.kt)("h2",{id:"putting-multiple-cursors-at-once"},"Putting multiple cursors at once"),(0,i.kt)("h2",{id:"opening-a-new-window"},"Opening a new window"),(0,i.kt)("h2",{id:"opening-another-project--folder"},"Opening another project / folder"))}d.isMDXComponent=!0}}]);