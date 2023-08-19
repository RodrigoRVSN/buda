"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={},l="\ud83c\udf10 Graphs",s={unversionedId:"data_structure/graphs/README",id:"data_structure/graphs/README",title:"\ud83c\udf10 Graphs",description:"- Abstract data type, made by a even V, E, with V being Vertices and E being Edges",source:"@site/docs/data_structure/graphs/README.md",sourceDirName:"data_structure/graphs",slug:"/data_structure/graphs/",permalink:"/docs/data_structure/graphs/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/data_structure/graphs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd0 Big O - Asymptotic Complexity (O(x))",permalink:"/docs/data_structure/big-o/"},next:{title:"\ud83d\udd17 Lists",permalink:"/docs/data_structure/lists/"}},o={},c=[{value:"\ud83e\udd14 Examples of uses",id:"-examples-of-uses",level:2},{value:"Graphs directed",id:"graphs-directed",level:2},{value:"Graphs not directed",id:"graphs-not-directed",level:2},{value:"Adjacency list",id:"adjacency-list",level:2},{value:"Adjacency matrix",id:"adjacency-matrix",level:2},{value:"Depth-First Search - Stack",id:"depth-first-search---stack",level:2},{value:"Breadth-First Search - Queue",id:"breadth-first-search---queue",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-graphs"},"\ud83c\udf10 Graphs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Abstract data type, made by a even ",(0,n.kt)("strong",{parentName:"li"},"V, E"),", with V being ",(0,n.kt)("strong",{parentName:"li"},"Vertices")," and E being ",(0,n.kt)("strong",{parentName:"li"},"Edges")," "),(0,n.kt)("li",{parentName:"ul"},"Could be ",(0,n.kt)("strong",{parentName:"li"},"Directed or Digraph")," when Edges ",(0,n.kt)("strong",{parentName:"li"},"has directions")),(0,n.kt)("li",{parentName:"ul"},"Could be ",(0,n.kt)("strong",{parentName:"li"},"No directed")," with ",(0,n.kt)("strong",{parentName:"li"},"no directions")),(0,n.kt)("li",{parentName:"ul"},"Edges can have ",(0,n.kt)("strong",{parentName:"li"},"weight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Order"),": Number of vertices")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Graphs Example",src:a(6155).Z,width:"1400",height:"478"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-examples-of-uses"},"\ud83e\udd14 Examples of uses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Social media (like Facebook)"),(0,n.kt)("li",{parentName:"ul"},"Maps"),(0,n.kt)("li",{parentName:"ul"},"Web pages"),(0,n.kt)("li",{parentName:"ul"},"Subway")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"graphs-directed"},"Graphs directed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connection ",(0,n.kt)("strong",{parentName:"li"},"output")," -> ",(0,n.kt)("strong",{parentName:"li"},"Adjacents")),(0,n.kt)("li",{parentName:"ul"},"If has ",(0,n.kt)("strong",{parentName:"li"},"connections"),", the elements connected are called ",(0,n.kt)("strong",{parentName:"li"},"neighbors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Grade of a vertice")," it's the ",(0,n.kt)("strong",{parentName:"li"},"number of edges")," leaving the vertex + number of edges that arrive at the vertex\n(",(0,n.kt)("strong",{parentName:"li"},"adjacents vertices"),")"),(0,n.kt)("li",{parentName:"ul"},"It's ",(0,n.kt)("strong",{parentName:"li"},"strongly connected")," if each edge can be ",(0,n.kt)("strong",{parentName:"li"},"reachable")," from ",(0,n.kt)("strong",{parentName:"li"},"any")," other")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"graphs-not-directed"},"Graphs not directed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Symmetrical"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Grade of a vertice")," it's the ",(0,n.kt)("strong",{parentName:"li"},"number of edges")," that affect him (",(0,n.kt)("strong",{parentName:"li"},"adjacents vertices"),")"),(0,n.kt)("li",{parentName:"ul"},"Is ",(0,n.kt)("strong",{parentName:"li"},"connected")," if each pair of vertices is connected ",(0,n.kt)("strong",{parentName:"li"},"by a path"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"adjacency-list"},"Adjacency list"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stack of ",(0,n.kt)("strong",{parentName:"li"},"linked lists")," with all the adjacents vertices."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disadvantage"),": to know if a Edge (u, v) exists, we need to make a ",(0,n.kt)("strong",{parentName:"li"},"search")," in the list of adjacents.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adjacency List to Graphs",src:a(9188).Z,width:"850",height:"290"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"adjacency-matrix"},"Adjacency matrix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Best to small graphs"),(0,n.kt)("li",{parentName:"ul"},"Use a ",(0,n.kt)("strong",{parentName:"li"},"matrix format"),", with a ",(0,n.kt)("strong",{parentName:"li"},"V x V dimension")," (Vertice x Vertice)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1: adjacency")," with the value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"0: no adjacency")," with the value")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adjacency List to Graphs",src:a(9875).Z,width:"544",height:"310"})),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"searchs"},"Searchs"),(0,n.kt)("h2",{id:"depth-first-search---stack"},"Depth-First Search - Stack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Similar to pre-order search in trees")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Visit a adjacent")," node ",(0,n.kt)("strong",{parentName:"li"},"not visited")," and push him on the stack."),(0,n.kt)("li",{parentName:"ol"},"If ",(0,n.kt)("strong",{parentName:"li"},"has not adjacents not visited"),", pop the value"),(0,n.kt)("li",{parentName:"ol"},"If Rule 1 and Rule 2 is not the case, the search is finished. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Depth Search",src:a(6442).Z,width:"259",height:"194"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"breadth-first-search---queue"},"Breadth-First Search - Queue"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Visit a adjacent not visited, mark and push")," on the queue."),(0,n.kt)("li",{parentName:"ol"},"If ",(0,n.kt)("strong",{parentName:"li"},"has not a adjacent node, dequeue")),(0,n.kt)("li",{parentName:"ol"},"If Rule 1 and Rule 2 is not the case, the search is finished.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Breadth Searc",src:a(8116).Z,width:"1717",height:"793"})))}u.isMDXComponent=!0},9188:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graphs-adjacency-list-example-e147bf336a5fc399eb615fa372ab777e.png"},8116:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graphs-breadth-search-example-bb1e6a694dafd3fa687b2886ae5a9647.png"},6442:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},6155:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graphs-example-2526274bd5e806b4dd3a280fad27c3ea.png"},9875:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graphs-matrix-list-example-84cef1e8edaeb44193d2d24bd2a2dd74.png"}}]);