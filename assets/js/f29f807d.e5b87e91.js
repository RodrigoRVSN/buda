"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},s="Adapter",l={unversionedId:"design_patterns/structural/Adapter/README",id:"design_patterns/structural/Adapter/README",title:"Adapter",description:"What is?",source:"@site/docs/design_patterns/structural/Adapter/README.md",sourceDirName:"design_patterns/structural/Adapter",slug:"/design_patterns/structural/Adapter/",permalink:"/buda/docs/design_patterns/structural/Adapter/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/design_patterns/structural/Adapter/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Singleton",permalink:"/buda/docs/design_patterns/creational/Singleton/"},next:{title:"Bridge",permalink:"/buda/docs/design_patterns/structural/Brigde/"}},o={},c=[{value:"What is?",id:"what-is",level:2},{value:"What this pattern solve?",id:"what-this-pattern-solve",level:2},{value:"Steps",id:"steps",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Example (Typescript)",id:"example-typescript",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adapter"},"Adapter"),(0,r.kt)("h2",{id:"what-is"},"What is?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With this pattern we allow objects with different interfaces collaborate  ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-this-pattern-solve"},"What this pattern solve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we need to make a different implementation in a class, we could have a problem if the behavior of this class was made to make something different, so we need to adapt this behavior to our use.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identify if we have 2 classes with incompatible interfaces"),(0,r.kt)("li",{parentName:"ul"},"Declare client interface and declare how to communicate with the service"),(0,r.kt)("li",{parentName:"ul"},"Create adapter class following the client interface"),(0,r.kt)("li",{parentName:"ul"},"Add a field to the adapter to store the service reference"),(0,r.kt)("li",{parentName:"ul"},"Use the adapter via client interface, without affecting the client code")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When we want to use a existing class but the interface is not compatible with what we need"),(0,r.kt)("li",{parentName:"ul"},"When we want to reuse a class and add a method, that can't be added direct in the Super Class")),(0,r.kt)("h2",{id:"example-typescript"},"Example (Typescript)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * The Target defines the domain-specific interface used by the client code.\n */\n class Target {\n  public request(): string {\n      return 'Target: The default target\\'s behavior.';\n  }\n}\n\n/**\n* The Adaptee contains some useful behavior, but its interface is incompatible\n* with the existing client code. The Adaptee needs some adaptation before the\n* client code can use it.\n*/\nclass Adaptee {\n  public specificRequest(): string {\n      return 'bla bla bla';\n  }\n}\n\n/**\n* The Adapter makes the Adaptee's interface compatible with the Target's\n* interface.\n*/\nclass Adapter extends Target {\n  private adaptee: Adaptee;\n\n  constructor(adaptee: Adaptee) {\n      super();\n      this.adaptee = adaptee;\n  }\n\n  public request(): string {\n      const result = this.adaptee.specificRequest().split('').reverse().join('');\n      return `Adapter: (TRANSLATED) ${result}`;\n  }\n}\n\n/**\n* The client code supports all classes that follow the Target interface.\n*/\nfunction clientCode(target: Target) {\n  console.log(target.request());\n}\n\nconsole.log('Client: I can work just fine with the Target objects:');\nconst target = new Target();\nclientCode(target);\n\nconsole.log('');\n\nconst adaptee = new Adaptee();\nconsole.log('Client: The Adaptee class has a weird interface. See, I don\\'t understand it:');\nconsole.log(`Adaptee: ${adaptee.specificRequest()}`);\n\nconsole.log('Client: But I can work with it via the Adapter:');\nconst adapter = new Adapter(adaptee);\nclientCode(adapter);\n")))}u.isMDXComponent=!0}}]);