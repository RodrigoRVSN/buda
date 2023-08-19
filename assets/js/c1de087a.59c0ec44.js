"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[390],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,b=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return t?n.createElement(b,l(l({ref:a},p),{},{components:t})):n.createElement(b,l({ref:a},p))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6477:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const i={},l="Databases",s={unversionedId:"concepts/Database/README",id:"concepts/Database/README",title:"Databases",description:"Relational",source:"@site/docs/concepts/Database/README.md",sourceDirName:"concepts/Database",slug:"/concepts/Database/",permalink:"/buda/docs/concepts/Database/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/concepts/Database/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Domain Driven Design (DDD)",permalink:"/buda/docs/concepts/DDD/"},next:{title:"Test Driven Development (TDD)",permalink:"/buda/docs/concepts/TDD/"}},o={},d=[{value:"Relational",id:"relational",level:2},{value:"What is?",id:"what-is",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Examples",id:"examples",level:3},{value:"Non-Relational",id:"non-relational",level:2},{value:"Advantages",id:"advantages-1",level:3},{value:"Types of non-relational databases",id:"types-of-non-relational-databases",level:3},{value:"Examples",id:"examples-1",level:3}],p={toc:d},c="wrapper";function u(e){let{components:a,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databases"},"Databases"),(0,r.kt)("h2",{id:"relational"},"Relational"),(0,r.kt)("h3",{id:"what-is"},"What is?"),(0,r.kt)("p",null,"A relational database is a type of database that organizes data into tables and establishes relationships between those tables using keys. Keys are unique identifiers that are used to link records between tables, creating relationships."),(0,r.kt)("p",null,"When a unique identifier, known as a ",(0,r.kt)("inlineCode",{parentName:"p"},"primary key (PK)"),", is used in another table to reference a record, it is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"foreign key (FK)")," in the associated table."),(0,r.kt)("p",null,"The connections between primary and foreign keys create relationships between tables, allowing for efficient data retrieval and manipulation."),(0,r.kt)("div",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Relational database illustration example",src:t(2449).Z,width:"587",height:"195"}))),(0,r.kt)("h3",{id:"advantages"},"Advantages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Referential Integrity"),": The use of primary and foreign keys enforces rules that maintain data accuracy. When a record is updated/deleted, ",(0,r.kt)("strong",{parentName:"p"},"all related records must also be changed"),"."),(0,r.kt)("p",null,"Foreign keys in a table must have corresponding primary keys in the referenced table, ensuring the integrity and validity of the relationships."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Microsoft SQL Server, Oracle, PostgreSQL, SQLite, MySQL, Maria DB."),(0,r.kt)("h2",{id:"non-relational"},"Non-Relational"),(0,r.kt)("p",null,"Aka NoSQL databases, are a type of database flexible to storing and retrieving data. Unlike relational database, they don't have predefined relationships and fixed table structures."),(0,r.kt)("p",null,"Instead of using tables, non-relational databases use various data models, such as key-value pairs, documents, graphs, or column families, to organize and represent data."),(0,r.kt)("h3",{id:"advantages-1"},"Advantages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Flexibility"),": they have flexibility in data modeling, allowing developers to store and retrieve data in a way that best suits the application needs. "),(0,r.kt)("h3",{id:"types-of-non-relational-databases"},"Types of non-relational databases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Document data stores"),": JSON-like documents structured."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Columnar data stores"),": Organized in columns, similar to relational database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Key-Value Stores"),": These databases store data as key-value pairs, making them ideal for caching, session management, and simple data storage and retrieval."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Graph Databases"),": They excel at storing and querying highly interconnected data, making them suitable for applications involving social networks, recommendation engines, and complex relationships.")),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"MongoDB, Apache Cassandra, Redis, DynamoDB, Couchbase."))}u.isMDXComponent=!0},2449:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/relational-database-illustration-ede6dfe5c697142f52ec7094ca6c4307.png"}}]);