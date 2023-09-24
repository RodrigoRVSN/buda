"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={},o="Single Responsibility Principle (SRP)",l={unversionedId:"SOLID/single_responsibility_principle/README",id:"SOLID/single_responsibility_principle/README",title:"Single Responsibility Principle (SRP)",description:"What is this?",source:"@site/docs/SOLID/single_responsibility_principle/README.md",sourceDirName:"SOLID/single_responsibility_principle",slug:"/SOLID/single_responsibility_principle/",permalink:"/buda/docs/SOLID/single_responsibility_principle/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/SOLID/single_responsibility_principle/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open-closed principle (OCP)",permalink:"/buda/docs/SOLID/open_closed_principle/"},next:{title:"\ud83d\udcd6 Books annotations and exercises",permalink:"/buda/docs/books/"}},c={},s=[{value:"What is this?",id:"what-is-this",level:2},{value:"Why use this ?",id:"why-use-this-",level:2},{value:"Examples (Java)",id:"examples-java",level:2},{value:"Bad example",id:"bad-example",level:3},{value:"Good example",id:"good-example",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-responsibility-principle-srp"},"Single Responsibility Principle (SRP)"),(0,r.kt)("h2",{id:"what-is-this"},"What is this?"),(0,r.kt)("p",null,"This principle says: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A module should have one, and just one reason to be changed")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"why-use-this-"},"Why use this ?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Helps the maintenance"),(0,r.kt)("li",{parentName:"ul"},"Help to make a reusable code"),(0,r.kt)("li",{parentName:"ul"},"Less git conflicts")),(0,r.kt)("h2",{id:"examples-java"},"Examples (Java)"),(0,r.kt)("h3",{id:"bad-example"},"Bad example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Facture {\n    private Book book;\n    private int quantity;\n    private double percDiscount;\n    private double percTax;\n    private double total;\n\n    public Facture(Book book, int quantity, double percDiscount, double percTax) {\n        this.book = book;\n        this.quantity = quantity;\n        this.percDiscount = percDiscount;\n        this.percTax = percTax;\n        this.total = this.calculateTotal();\n    }\n\n    public double calculateTotal() {\n        double price = ((book.price - book.price * percDiscount) * this.quantity);\n        double taxPrice = price * (1 + percTax);\n        return taxPrice;\n    }\n\n    // Print facture should not be the Facture class responsability!\n    public void printFacture() {\n        // do something to print the facture\n    }\n\n    // Save facture should not be the Facture class responsability!\n    public void saveToFile(String nomeArquivo) {\n        // do something to save the file\n    }\n}\n")),(0,r.kt)("h3",{id:"good-example"},"Good example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Print Facture now have his own class and responsability!\npublic class PrintFacture {\n  private Facture facture;\n\n  public PrintFacture(Facture facture) {\n    this.facture = facture;\n  }\n\n  public void printFacture() {\n        // do something to print the facture\n  }\n}\n\n// Save Facture now have his own class and responsability!\npublic class SaveFacture {\n  Facture facture;\n\n  public SaveFacture(Facture facture) {\n    this.facture = facture;\n  }\n\n  public void saveToFile(String filename) {\n        // do something to save the file\n  }\n}\n")))}d.isMDXComponent=!0}}]);