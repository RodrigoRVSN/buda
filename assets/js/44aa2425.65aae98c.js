"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?o.createElement(g,a(a({ref:t},m),{},{components:n})):o.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},a="Command",s={unversionedId:"design_patterns/behavioral/Command/README",id:"design_patterns/behavioral/Command/README",title:"Command",description:"What is?",source:"@site/docs/design_patterns/behavioral/Command/README.md",sourceDirName:"design_patterns/behavioral/Command",slug:"/design_patterns/behavioral/Command/",permalink:"/buda/docs/design_patterns/behavioral/Command/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/design_patterns/behavioral/Command/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc68\u200d\ud83c\udfa8 Design Patterns",permalink:"/buda/docs/design_patterns/"},next:{title:"Observer",permalink:"/buda/docs/design_patterns/behavioral/Observer/"}},l={},c=[{value:"What is?",id:"what-is",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Example",id:"example",level:2}],m={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command"},"Command"),(0,r.kt)("h2",{id:"what-is"},"What is?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With this pattern, we decouple the Receiver from the Sender."),(0,r.kt)("li",{parentName:"ul"},"The command class methods are abstract, so the classes that implement this command interface have their own implementation.")),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decoupling, the methods have a better modularity"),(0,r.kt)("li",{parentName:"ul"},"Flexibility: New commands can being added without modifying existing code"),(0,r.kt)("li",{parentName:"ul"},"Extensibility, we can add new features through new commands")),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The method could be applied in a home automation, where I create the methods responsible for turn on and off the lights of the home using a remote control."),(0,r.kt)("li",{parentName:"ul"},"Transactional systems, tracking, logging and adding more information."),(0,r.kt)("li",{parentName:"ul"},"Game development, handling the user actions"),(0,r.kt)("li",{parentName:"ul"},"GUI applications, handling the user interactions")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/* Define the command interface with the abstract method \"execute\" */\ninterface Command {\n  execute(): void;\n}\n\n/* Implements the command class and executes using its own abstract method \"execute\" */\nclass TurnOnLightsCommand implements Command {\n  constructor(private light: Light) {} // Constructor to store the instance of the class Light\n\n  execute() {\n    this.light.turnOn(); // Execute the turnOn method of the class Light\n  }\n}\n\n/* Implements the command class and executes using its own abstract method \"execute\" */\nclass TurnOffLightsCommand implements Command {\n  constructor(private light: Light) {} // Constructor to store the instance of the class Light\n\n  execute() {\n    this.light.turnOff(); // Execute the turnOff method of the class Light\n  }\n}\n\nclass Light {\n  constructor(private location: string, private isOn: boolean = false) {}\n\n  turnOn() {\n    this.isOn = true;\n    console.log(`Light in ${this.location} turned on.`);\n  }\n\n  turnOff() {\n    this.isOn = false;\n    console.log(`Light in ${this.location} turned off.`);\n  }\n\n  getStatus() {\n    return this.isOn ? 'on' : 'off';\n  }\n}\n\n/* Create instances for the living room and the room */\nconst livingRoomLight = new Light('living room');\nconst roomLight = new Light('room');\n\n/* Create instances of the command classes, providing the corresponding Light instances */\nconst turnOnLivingRoomLight = new TurnOnLightsCommand(livingRoomLight);\nconst turnOffLivingRoomLight = new TurnOffLightsCommand(livingRoomLight);\n\nconst turnOnRoomLight = new TurnOnLightsCommand(roomLight);\nconst turnOffRoomLight = new TurnOffLightsCommand(roomLight);\n\nturnOnLivingRoomLight.execute();\nturnOffLivingRoomLight.execute();\n\nturnOnRoomLight.execute();\nturnOffRoomLight.execute();\n\nconsole.log('Lights Status:');\nconsole.log(`Living Room Light: ${livingRoomLight.getStatus()}`);\nconsole.log(`Room Light: ${roomLight.getStatus()}`);\n")))}h.isMDXComponent=!0}}]);