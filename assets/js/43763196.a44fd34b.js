"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=s,d=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return n?r.createElement(d,a(a({ref:t},b),{},{components:n})):r.createElement(d,a({ref:t},b))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const o={},a="Observer",i={unversionedId:"design_patterns/behavioral/Observer/README",id:"design_patterns/behavioral/Observer/README",title:"Observer",description:"What is?",source:"@site/docs/design_patterns/behavioral/Observer/README.md",sourceDirName:"design_patterns/behavioral/Observer",slug:"/design_patterns/behavioral/Observer/",permalink:"/docs/design_patterns/behavioral/Observer/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/design_patterns/behavioral/Observer/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/docs/design_patterns/behavioral/Command/"},next:{title:"Strategy",permalink:"/docs/design_patterns/behavioral/Strategy/"}},c={},l=[{value:"What is?",id:"what-is",level:2},{value:"What this pattern solve?",id:"what-this-pattern-solve",level:2},{value:"Steps",id:"steps",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Example (Typescript)",id:"example-typescript",level:2}],b={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"observer"},"Observer"),(0,s.kt)("h2",{id:"what-is"},"What is?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"With this pattern, we define a subscription to notify multiple objects about the events of the object they're observing."),(0,s.kt)("li",{parentName:"ul"},"The object notifying about the changes is called publisher and the interested objects are called subscribers.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"what-this-pattern-solve"},"What this pattern solve?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To notify an update to others, we need to use this pattern to make an observer who will send the updates to specific objects interesteds in this feedback."),(0,s.kt)("li",{parentName:"ul"},"Without that, we could waste resources sending notifications to the wrong objects, or wasting time making the interested object checking the interested object.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"steps"},"Steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Make an array field for storing a list of references to Subscribers."),(0,s.kt)("li",{parentName:"ul"},"Create methods which allow add and remove the subscribers from the list."),(0,s.kt)("li",{parentName:"ul"},"Create a method in Publisher to notify the Subscribers"),(0,s.kt)("li",{parentName:"ul"},"Create a method in the subscriber interface to update")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"when-to-use"},"When to use"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When a change in a object require a change in another object"),(0,s.kt)("li",{parentName:"ul"},"When some objects needs to observe others in specific cases")),(0,s.kt)("h2",{id:"example-typescript"},"Example (Typescript)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/* eslint-disable */\n\n/**\n * The Subject interface declares a set of methods for managing subscribers.\n */\n interface Subject {\n  // Attach an observer to the subject.\n  attach(observer: Observer): void;\n\n  // Detach an observer from the subject.\n  detach(observer: Observer): void;\n\n  // Notify all observers about an event.\n  notify(): void;\n}\n\n/**\n* The Subject owns some important state and notifies observers when the state\n* changes.\n*/\nclass ConcreteSubject implements Subject {\n  /**\n   * @type {number} For the sake of simplicity, the Subject's state, essential\n   * to all subscribers, is stored in this variable.\n   */\n  public state!: number;\n\n  /**\n   * @type {Observer[]} List of subscribers. In real life, the list of\n   * subscribers can be stored more comprehensively (categorized by event\n   * type, etc.).\n   */\n  private observers: Observer[] = [];\n\n  /**\n   * The subscription management methods.\n   */\n  public attach(observer: Observer): void {\n      const isExist = this.observers.some((obs) => obs === observer);\n      if (isExist) {\n          return console.log('Subject: Observer has been attached already.');\n      }\n\n      console.log('Subject: Attached an observer.');\n      this.observers.push(observer);\n  }\n\n  public detach(observer: Observer): void {\n      const observerIndex = this.observers.indexOf(observer);\n      if (observerIndex === -1) {\n          return console.log('Subject: Nonexistent observer.');\n      }\n\n      this.observers.splice(observerIndex, 1);\n      console.log('Subject: Detached an observer.');\n  }\n\n  /**\n   * Trigger an update in each subscriber.\n   */\n  public notify(): void {\n      console.log('Subject: Notifying observers...');\n      for (const observer of this.observers) {\n          observer.update(this);\n      }\n  }\n\n  /**\n   * Usually, the subscription logic is only a fraction of what a Subject can\n   * really do. Subjects commonly hold some important business logic, that\n   * triggers a notification method whenever something important is about to\n   * happen (or after it).\n   */\n  public someBusinessLogic(): void {\n      console.log('\\nSubject: I\\'m doing something important.');\n      this.state = Math.floor(Math.random() * (10 + 1));\n\n      console.log(`Subject: My state has just changed to: ${this.state}`);\n      this.notify();\n  }\n}\n\n/**\n* The Observer interface declares the update method, used by subjects.\n*/\ninterface Observer {\n  // Receive update from subject.\n  update(subject: Subject): void;\n}\n\n/**\n* Concrete Observers react to the updates issued by the Subject they had been\n* attached to.\n*/\nclass ConcreteObserverA implements Observer {\n  public update(subject: Subject): void {\n      if (subject instanceof ConcreteSubject && subject.state < 3) {\n          console.log('ConcreteObserverA: Reacted to the event.');\n      }\n  }\n}\n\nclass ConcreteObserverB implements Observer {\n  public update(subject: Subject): void {\n      if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {\n          console.log('ConcreteObserverB: Reacted to the event.');\n      }\n  }\n}\n\n/**\n* The client code.\n*/\n\nconst subject = new ConcreteSubject();\n\nconst observer1 = new ConcreteObserverA();\nsubject.attach(observer1);\n\nconst observer2 = new ConcreteObserverB();\nsubject.attach(observer2);\n\nsubject.someBusinessLogic();\nsubject.someBusinessLogic();\n\nsubject.detach(observer2);\n\nsubject.someBusinessLogic();\n")))}h.isMDXComponent=!0}}]);