"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[7292],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3136:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(7294),a=n(6010),o={note:i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},r={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function s(e){var t=e.children,n=e.type,s=e.title,l=void 0===s?n:s,c=e.icon,u=void 0===c?o[n]:c;return i.createElement("div",{className:(0,a.Z)("admonition","admonition-"+n,"alert","alert--"+r[n])},i.createElement("div",{className:"admonition-heading"},i.createElement("h5",null,i.createElement("span",{className:"admonition-icon"},u),l)),i.createElement("div",{className:"admonition-content"},t))}var l=n(7988);function c(e){var t=e.resources;return i.createElement(s,{type:"info",title:"Going Further"},t.map((function(e){return i.createElement("p",null,(0,l.Z)(e))})))}},7988:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(7294);function a(e){var t=e.title,n=e.author,a=e.link,o=e.duration,r=e.description;return i.createElement("span",null,i.createElement("a",{href:a,target:"_blank"},n,", ",i.createElement("i",null,t)),o&&i.createElement("span",null," (",o,")"),r&&i.createElement("span",null," ",r))}},3198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var i=n(7462),a=n(3366),o=(n(7294),n(4137)),r=n(3136),s=["components"],l={title:"Write small functions",benefit:5,easiness:3,level:"clean-code",bias:2,tags:["Clean Code"]},c=void 0,u={unversionedId:"lessons/write-small-functions",id:"lessons/write-small-functions",title:"Write small functions",description:"Write the functions you wish to see in the world \u2013 Tony Van Eerd",source:"@site/../../content/lessons/write-small-functions.md",sourceDirName:"lessons",slug:"/lessons/write-small-functions",permalink:"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Write small functions",benefit:5,easiness:3,level:"clean-code",bias:2,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Use structs to group data",permalink:"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data"},next:{title:"Avoid dead code",permalink:"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code"}},m=[{value:"Brief",id:"brief",children:[],level:2},{value:"Details",id:"details",children:[],level:2},{value:"Going further",id:"going-further",children:[],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Write the functions you wish to see in the world \u2013 ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/glYq-dvgby4?t=2721"},(0,o.kt)("em",{parentName:"a"},"Tony Van Eerd")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#f3-keep-functions-short-and-simple"},"F.3: Keep functions short and simple."))),(0,o.kt)("h2",{id:"brief"},"Brief"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Small functions")," are way easier to read and reason about.",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},"Small functions")," describe your intent, and allow you to change the implementation behind it easily.",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},"Small functions")," facilitate future refactorings because the logic is already split into atomic parts.",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},"Small functions")," are easier to search for in the codebase.",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},"Small functions")," force you to give meaning by giving names, not only to the action (the function) but also to its parameters; for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void do_something(Thread& thread, bool is_main_thread) { /*...*/ }\n\nfor (size_t i = 0; i < threads.size(); ++i) {\n    do_something(threads[i],\n                 i == 0); // Thanks to the parameter name we know that `i == 0` actually checks to see if the current thread is the main thread\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rf-single"},(0,o.kt)("strong",{parentName:"a"},"Important:")," Here is what the Core Guidelines have to say about small functions.")),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,"I used to write long functions like this one, using comments to indicate the different parts of the function. I did not want to write intermediate functions because it felt silly to me to create functions that I would only use once."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void View::imgui_window(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit) \n{ \n    if (_is_open) { \n        ImGui::Begin(_name.c_str(), &_is_open, ImGuiWindowFlags_NoScrollbar); \n        // Store window size \n        const auto size = ImGui::GetContentRegionAvail(); \n        if (size.x >= 1.f && size.y >= 1.f) { \n            _size.emplace( \n                static_cast<ImageSize::DataType>(size.x), \n                static_cast<ImageSize::DataType>(size.y)); \n        } \n        else { \n            _size.reset(); \n        } \n        // Store window position \n        _position = ImGui::GetCursorScreenPos(); \n \n        if (_size.has_value()) { \n            // Display the image \n            const auto fitted_image_size = need_to_fit \n                                               ? ImageSizeU::fit_into(*_size, image_size) \n                                               : static_cast<ImageSizeT<float>>(*_size); \n            ImGuiExtras::image_centered(image_texture_id, {fitted_image_size.width(), fitted_image_size.height()}); \n            _is_hovered = ImGui::IsItemHovered(); \n        } \n        else { \n            _is_hovered = false; \n        } \n        ImGui::End(); \n    } \n    else { \n        _size.reset(); \n        _is_hovered = false; \n    } \n} \n")),(0,o.kt)("p",null,"But I had to admit that I was having trouble reading those long functions, and that maybe everyone else was right.\nThe same code as above would look like this once split into more atomic parts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void View::imgui_window(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit)\n{\n    if (_is_open) {\n        ImGui::Begin(_name.c_str(), &_is_open, ImGuiWindowFlags_NoScrollbar);\n        store_window_size();\n        store_window_position();\n        display_image(image_texture_id, image_size, need_to_fit);\n        ImGui::End();\n    }\n    else {\n        _size.reset();\n        _is_hovered = false;\n    }\n}\n\nvoid View::store_window_size()\n{\n    const auto size = ImGui::GetContentRegionAvail();\n    if (size.x >= 1.f && size.y >= 1.f) {\n        _size.emplace(\n            static_cast<ImageSize::DataType>(size.x),\n            static_cast<ImageSize::DataType>(size.y));\n    }\n    else {\n        _size.reset();\n    }\n}\n\nvoid View::store_window_position()\n{\n    _position = ImGui::GetCursorScreenPos();\n}\n\nvoid View::display_image(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit)\n{\n    if (_size.has_value()) {\n        const auto fitted_image_size = need_to_fit\n                                           ? ImageSizeU::fit_into(*_size, image_size)\n                                           : static_cast<ImageSizeT<float>>(*_size);\n        ImGuiExtras::image_centered(image_texture_id, {fitted_image_size.width(), fitted_image_size.height()});\n        _is_hovered = ImGui::IsItemHovered();\n    }\n    else {\n        _is_hovered = false;\n    }\n}\n")),(0,o.kt)("h2",{id:"going-further"},"Going further"),(0,o.kt)(r.Z,{resources:[{title:"SOLID, Revisited",author:"Tony Van Eerd",link:"https://youtu.be/glYq-dvgby4",duration:"1h30"}],mdxType:"GoingFurther"}))}p.isMDXComponent=!0}}]);