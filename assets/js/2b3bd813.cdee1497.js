"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Test Driven Development (TDD)",c={unversionedId:"concepts/TDD/README",id:"concepts/TDD/README",title:"Test Driven Development (TDD)",description:"It's a methodology that focuses in creating the tests before developing the code. It originated from Agile and XP (Extreme Programming) practices.",source:"@site/docs/concepts/TDD/README.md",sourceDirName:"concepts/TDD",slug:"/concepts/TDD/",permalink:"/docs/concepts/TDD/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/concepts/TDD/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/docs/concepts/Database/"},next:{title:"\ud83c\udfb2 Data Structures",permalink:"/docs/data_structure/"}},s={},l=[{value:"The cycle Red-Green-Refactor:",id:"the-cycle-red-green-refactor",level:2},{value:"Benefits of TDD",id:"benefits-of-tdd",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-driven-development-tdd"},"Test Driven Development (TDD)"),(0,a.kt)("p",null,"It's a methodology that focuses in creating the tests before developing the code. It originated from Agile and XP (Extreme Programming) practices."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"the-cycle-red-green-refactor"},"The cycle Red-Green-Refactor:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",{parentName:"p"},"Red"),": Create precise tests that define the desired behavior or functionality to be implemented. Since no code has been written yet, the test will fail.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",{parentName:"p"},"Green"),": Write the simplest code necessary to make the failing test pass. The goal is to make the test pass and achieve the desired behavior. At this stage, code quality and efficiency are not the primary concerns.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udee0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Refactor"),": Once the test is passing, you can safely refactor your code to improve its design, architecture, and performance. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud83c\udf00 ",(0,a.kt)("strong",{parentName:"p"},"Repeat"),": The Red-Green-Refactor cycle is repeated for each new feature or functionality to be implemented. This iterative process gradually builds up a comprehensive suite of tests and high-quality code."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"benefits-of-tdd"},"Benefits of TDD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Improve code quality")," driving a cleaner and more maintainable code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reduce debugging time")," catching and fixing issues early"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Increase confidence")," working as a documentation and testing the code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Makes refactoring safer")," since you're writing the test cases first."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Faster development")," in the long run.")))}u.isMDXComponent=!0}}]);