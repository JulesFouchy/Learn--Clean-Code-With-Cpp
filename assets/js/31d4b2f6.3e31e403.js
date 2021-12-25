"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[7809],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5787:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"Adding tests"},c=void 0,l={unversionedId:"assignment/adding-tests",id:"assignment/adding-tests",title:"Adding tests",description:"We will go back to our Hangman game and add a few tests. Tests are very important and a huge part of the job of every developer. To learn why tests are so great and how to write them, first read the lesson.",source:"@site/../../content/assignment/07-adding-tests.md",sourceDirName:"assignment",slug:"/assignment/adding-tests",permalink:"/Learn--Cpp-And-Dev-Practices/assignment/adding-tests",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Adding tests"},sidebar:"assignment",previous:{title:"connect-4",permalink:"/Learn--Cpp-And-Dev-Practices/assignment/connect-4"},next:{title:"An AI for Hangman",permalink:"/Learn--Cpp-And-Dev-Practices/assignment/ai-for-hangman"}},d=[],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will go back to our ",(0,a.kt)("em",{parentName:"p"},"Hangman")," game and add a few tests. Tests are very important and a huge part of the job of every developer. To learn why tests are so great and how to write them, first ",(0,a.kt)("a",{parentName:"p",href:"../lessons/testing"},"read the lesson"),"."),(0,a.kt)("p",null,"TODO SHOW HOW TO TEST SOME SIMPLE FUNCTIONS"),(0,a.kt)("p",null,"The most interesting tests will be for the logging functions like ",(0,a.kt)("inlineCode",{parentName:"p"},"show_word_to_guess_with_missing_letters()"),". How can we know what has been outputed to ",(0,a.kt)("inlineCode",{parentName:"p"},"std::cout"),"? It is tricky and even if there was a way, this is not the right approach!\nOur function ",(0,a.kt)("inlineCode",{parentName:"p"},"show_word_to_guess_with_missing_letters()")," is inherently hard to test because it has side-effects! If we tweak our function and move the side-effect outside of it, it will become a ",(0,a.kt)("em",{parentName:"p"},"pure function")," that is much easier to test. It will also become more general, and easier to reason about! Many good reasons to get rid of the side-effects!"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You will often find that trying to design a function to make it testable also forces you to design a better function in the first place \ud83d\ude09"))),(0,a.kt)("p",null,"In its previous version ",(0,a.kt)("inlineCode",{parentName:"p"},"show_word_to_guess_with_missing_letters()")," had two reasons to change: if we wanted to change how the string is formated, and if we wanted to change the way we output it to the user! It didn't respect the Single Responsibility Principle!"),(0,a.kt)("p",null,"Now we will split this into two simpler chunks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::string format_word_to_guess_with_missing_letters(const std::string& word, const std::vector<bool>& letters_guessed) {\n    // TODO: return the string instead of outputing it to std::cout\n}\n")),(0,a.kt)("p",null,"and the act of outputting to std::cout is already so simple that we can use it directly in the main code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"pick_a_word_to_guess();\nwhile (player_is_alive() && !player_has_won()) {\n    show_number_of_lives();\n    std::cout << format_word_to_guess_with_missing_letters(word_to_guess, letters_guessed);\n// ...\n")),(0,a.kt)("p",null,"It might feel silly to add tests to a code that we already know to work. And even though it kinda is, there is still a lot of benefits to writing tests afterwards:\ncommon misconception: the main goal of tests is not to prove that the code you just wrote is correct (we trust you on that, even though tests can help you writing your code), they are mainly here to make sure that whenever anyone changes the code, it ",(0,a.kt)("strong",{parentName:"p"},"remains")," correct!\n(But if you can write the tests as you write the code it is even better because they will help you write and debug your code, and you are less likely to forget to test an edge case)\nAnd since we will modify our ",(0,a.kt)("em",{parentName:"p"},"Hangman")," in the next section, now is a good time to add tests to it."))}p.isMDXComponent=!0}}]);