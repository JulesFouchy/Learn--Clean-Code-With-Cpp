"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[5561],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7598:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),s=["components"],a={title:"Avoid dead code",benefit:2,easiness:3,order:3,tags:["Style"]},c=void 0,d={unversionedId:"lessons/dead-code",id:"lessons/dead-code",isDocsHomePage:!1,title:"Avoid dead code",description:"Don't leave commented out blocks in your code.",source:"@site/docs/lessons/dead-code.md",sourceDirName:"lessons",slug:"/lessons/dead-code",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/dead-code",tags:[{label:"Style",permalink:"/Learn--Cpp-And-Dev-Practices/docs/tags/style"}],version:"current",frontMatter:{title:"Avoid dead code",benefit:2,easiness:3,order:3,tags:["Style"]},sidebar:"lessons",previous:{title:"Trailing return type",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/trailing-return-type"},next:{title:"Avoid nested namespaces",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/against-nested-namespaces"}},l=[],m={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Don't leave commented out blocks in your code.\nIf for some reason you want to do so, then leave a comment at the top explaining your reason ; otherwise it is very hard for readers to know what the purpose of that code is and what to do with it : is it still relevant ? is it another option ? or is it just junk ?"),(0,i.kt)("p",null,"Example :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'void Start()\n{\n    // Utils.SetEnglishLanguage();\n\n    // SetupSavedReportsFolder();\n\n    // var commandLine = GetCommandLine();\n    // _commandLineArguments = new CommandLineArguments(commandLine);\n\n    // // set a specific GUID for the first report\n    // if (_commandLineArguments.ContainsKey("ReportGuid"))\n    //     BloombergUnityClient.Instance.ReportGuid = Guid.Parse(_commandLineArguments["ReportGuid"]);\n\n    // // set a specific address to send the report to.\n    // if (_commandLineArguments.ContainsKey("ServerAddress"))\n    //     BloombergUnityClient.Instance.config.bloombergServerHost = _commandLineArguments["ServerAddress"];\n\n    // // set a specific TCP port to send the report to.\n    // if (_commandLineArguments.ContainsKey("ServerPort"))\n    //     BloombergUnityClient.Instance.config.bloombergServerPort = Convert.ToUInt16(_commandLineArguments["ServerPort"]);\n\n    // // set the Transmission mode to be use to send the report\n    // if (_commandLineArguments.ContainsKey("TransmissionMode"))\n    //     BloombergUnityClient.Instance.config.transmissionMode = (BloombergTransmissionMode) Enum.Parse(typeof(BloombergTransmissionMode), _commandLineArguments["TransmissionMode"]);\n\n    // // URL to use to get temporary access to write objects (breport)\n    // if (_commandLineArguments.ContainsKey("S3_MainAPIUrl"))\n    //     BloombergUnityClient.Instance.S3_MainAPIUrl = _commandLineArguments["S3_MainAPIUrl"];\n\n    // // UbiServices specific to initialize the session\n    // if (_commandLineArguments.ContainsKey("US_ApplicationId"))\n    // {\n    //     try\n    //     {\n    //         _ubiServices = new UbiServices();\n    //         _ubiServices?.Initialize(_commandLineArguments["US_ApplicationId"], _commandLineArguments["US_Email"], _commandLineArguments["US_Password"]);\n    //     }\n    //     catch (Exception e)\n    //     {\n    //         Debug.LogWarning($"UbiServices creation failed /r/n {e}");\n    //     }\n    // }\n\n    BloombergBootstrap.Bootstrap();\n    Reporter.Initialize();\n    SetCommandLine();\n    SetSettings();\n    Application.logMessageReceivedThreaded += OnLog;\n}\n')))}p.isMDXComponent=!0}}]);