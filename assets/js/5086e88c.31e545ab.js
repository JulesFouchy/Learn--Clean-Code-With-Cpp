"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[7269],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3136:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(6010),l={note:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},o={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function i(e){var t=e.children,n=e.type,i=e.title,s=void 0===i?n:i,c=e.icon,u=void 0===c?l[n]:c;return r.createElement("div",{className:(0,a.Z)("admonition","admonition-"+n,"alert","alert--"+o[n])},r.createElement("div",{className:"admonition-heading"},r.createElement("h5",null,r.createElement("span",{className:"admonition-icon"},u),s)),r.createElement("div",{className:"admonition-content"},t))}var s=n(7988);function c(e){var t=e.resources;return r.createElement(i,{type:"info",title:"Going Further"},t.map((function(e){return r.createElement("p",null,(0,s.Z)(e))})))}},7988:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.title,n=e.author,a=e.link,l=e.duration,o=e.description;return r.createElement("span",null,r.createElement("a",{href:a,target:"_blank"},n,", ",r.createElement("i",null,t)),l&&r.createElement("span",null," (",l,")"),o&&r.createElement("span",null," ",o))}},675:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(4137)),o=n(3136),i=["components"],s={title:"Split problems in small pieces",benefit:5,easiness:1,level:"practices-and-patterns",tags:["Workflow"]},c=void 0,u={unversionedId:"lessons/split-problems-in-small-pieces",id:"lessons/split-problems-in-small-pieces",title:"Split problems in small pieces",description:"Brief",source:"@site/../../content/lessons/split-problems-in-small-pieces.md",sourceDirName:"lessons",slug:"/lessons/split-problems-in-small-pieces",permalink:"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces",tags:[{label:"Workflow",permalink:"/Learn--Clean-Code-With-Cpp/tags/workflow"}],version:"current",frontMatter:{title:"Split problems in small pieces",benefit:5,easiness:1,level:"practices-and-patterns",tags:["Workflow"]},sidebar:"lessons",previous:{title:"Space out your code",permalink:"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code"},next:{title:"State and Strategy",permalink:"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy"}},p=[{value:"Brief",id:"brief",children:[],level:2},{value:"Take small steps",id:"take-small-steps",children:[],level:2},{value:"Create abstractions",id:"create-abstractions",children:[],level:2},{value:"Going further",id:"going-further",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"brief"},"Brief"),(0,l.kt)("p",null,"If I were to sum up all the previous lessons, the most important takeaway would be: ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Write small things!"))," Small functions, small classes. Create a lot of small abstractions that help you reason about your code."),(0,l.kt)("h2",{id:"take-small-steps"},"Take small steps"),(0,l.kt)("p",null,"When you are faced with a big programming task, if you don't know where to start try to split up the problem!"),(0,l.kt)("p",null,"Think about the smallest next step that you can take, that will produce a visible (testable) result and will get you ever so slightly closer to your final goal. Once split in small enough pieces, any problem should be manageable."),(0,l.kt)("p",null,"I personally like to do the visual steps first, because then it is easier to debug / see your progress and it is more rewarding, you really feel like you are getting somewhere once something is displayed on the screen."),(0,l.kt)("h2",{id:"create-abstractions"},"Create abstractions"),(0,l.kt)("p",null,"Abstractions can make your code harder to understand at first glance, but they also make it easier to change (and therefore to manipulate)."),(0,l.kt)("h2",{id:"going-further"},"Going further"),(0,l.kt)(o.Z,{resources:[{title:"SOLID, Revisited",author:"Tony Van Eerd",link:"https://youtu.be/glYq-dvgby4",duration:"1h30"}],mdxType:"GoingFurther"}))}d.isMDXComponent=!0}}]);