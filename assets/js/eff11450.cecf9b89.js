"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[914],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=m(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||g[u]||l;return a?n.createElement(c,p(p({ref:e},d),{},{components:a})):n.createElement(c,p({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},518:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},p="\ud83e\uddd0 Big O - Asymptotic Complexity (O(x))",i={unversionedId:"data_structure/big-o/README",id:"data_structure/big-o/README",title:"\ud83e\uddd0 Big O - Asymptotic Complexity (O(x))",description:"All code has a complexity, like:",source:"@site/docs/data_structure/big-o/README.md",sourceDirName:"data_structure/big-o",slug:"/data_structure/big-o/",permalink:"/docs/data_structure/big-o/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/data_structure/big-o/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfb2 Data Structures",permalink:"/docs/data_structure/"},next:{title:"\ud83c\udf10 Graphs",permalink:"/docs/data_structure/graphs/"}},o={},m=[{value:"All code has a complexity, like:",id:"all-code-has-a-complexity-like",level:3}],d={toc:m},k="wrapper";function g(t){let{components:e,...l}=t;return(0,r.kt)(k,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-big-o---asymptotic-complexity-ox"},"\ud83e\uddd0 Big O - Asymptotic Complexity (O(x))"),(0,r.kt)("h3",{id:"all-code-has-a-complexity-like"},"All code has a complexity, like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(log n) - Logaritmics")," \u2192 Performatic, option to loop performatively. ",(0,r.kt)("strong",{parentName:"p"},"Example"),": binary search.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(1) - Constant")," -> Complexity doesn't change independent of the input param. ",(0,r.kt)("strong",{parentName:"p"},"Example"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"IF"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(n) - Linear")," \u2192 More values, less performance. ",(0,r.kt)("strong",{parentName:"p"},"Example"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(n\xb2) - Exponencial")," \u2192 Repetition inside repetition. Will repeat each element again. ",(0,r.kt)("strong",{parentName:"p"},"Example"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(n\xb3)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(2^n)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(3^n)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"O(n!) - Fatorial")," -> The worst.  ",(0,r.kt)("strong",{parentName:"p"},"Example"),": Recursive function. "))),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Big O Notation"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Computations for 10 elements"),(0,r.kt)("th",{parentName:"tr",align:null},"Computations for 100 elements"),(0,r.kt)("th",{parentName:"tr",align:null},"Computations for 1000 elements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Constant"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O(log N)")),(0,r.kt)("td",{parentName:"tr",align:null},"Logarithmic"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O(N)")),(0,r.kt)("td",{parentName:"tr",align:null},"Linear"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O(N log N)")),(0,r.kt)("td",{parentName:"tr",align:null},"n log(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"600"),(0,r.kt)("td",{parentName:"tr",align:null},"9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O(N^2)")),(0,r.kt)("td",{parentName:"tr",align:null},"Quadratic"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"1000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O(2^N)")),(0,r.kt)("td",{parentName:"tr",align:null},"Exponential"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"1.26e+29"),(0,r.kt)("td",{parentName:"tr",align:null},"1.07e+301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O(N!)")),(0,r.kt)("td",{parentName:"tr",align:null},"Factorial"),(0,r.kt)("td",{parentName:"tr",align:null},"3628800"),(0,r.kt)("td",{parentName:"tr",align:null},"9.3e+157"),(0,r.kt)("td",{parentName:"tr",align:null},"4.02e+2567")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Complexity Chart",src:a(2178).Z,width:"1048",height:"620"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"data-structure-operations-complexity"},"Data Structure Operations Complexity"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Structure"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Access"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Search"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Insertion"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deletion"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Stack")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Queue")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Linked List")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Binary Search Tree")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"In case of balanced tree costs would be O(log(n))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"AVL Tree")),(0,r.kt)("td",{parentName:"tr",align:"center"},"log(n)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"log(n)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"log(n)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"log(n)"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}g.isMDXComponent=!0},2178:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/big-o-example-259cc1590d1f485864d2fadc0368a04c.png"}}]);