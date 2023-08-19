"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},l="Single Responsibility Principle (SRP)",o={unversionedId:"SOLID/single_responsibility_principle/README",id:"SOLID/single_responsibility_principle/README",title:"Single Responsibility Principle (SRP)",description:"What is this?",source:"@site/docs/SOLID/single_responsibility_principle/README.md",sourceDirName:"SOLID/single_responsibility_principle",slug:"/SOLID/single_responsibility_principle/",permalink:"/docs/SOLID/single_responsibility_principle/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/SOLID/single_responsibility_principle/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open-closed principle (OCP)",permalink:"/docs/SOLID/open_closed_principle/"},next:{title:"\ud83d\udcd6 Books annotations and exercises",permalink:"/docs/books/"}},c={},p=[{value:"What is this?",id:"what-is-this",level:2},{value:"Why?",id:"why",level:2},{value:"Examples (Java)",id:"examples-java",level:2},{value:"Bad example",id:"bad-example",level:3},{value:"Good example",id:"good-example",level:3}],s={toc:p},u="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"single-responsibility-principle-srp"},"Single Responsibility Principle (SRP)"),(0,i.kt)("h2",{id:"what-is-this"},"What is this?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This principle say: ")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A class should do just one thing, and should have just one motive to be changed")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Helps the maintenance"),(0,i.kt)("li",{parentName:"ul"},"Help to refactor"),(0,i.kt)("li",{parentName:"ul"},"Help to make a reusable code"),(0,i.kt)("li",{parentName:"ul"},"Less git conflicts")),(0,i.kt)("h2",{id:"examples-java"},"Examples (Java)"),(0,i.kt)("h3",{id:"bad-example"},"Bad example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'public class Facture {\n    private Book book;\n    private int quantity;\n    private double percDiscount;\n    private double percTax;\n    private double total;\n\n    public Facture(Book book, int quantity, double percDiscount, double percTax) {\n        this.book = book;\n        this.quantity = quantity;\n        this.percDiscount = percDiscount;\n        this.percTax = percTax;\n        this.total = this.calculateTotal();\n    }\n\n    public double calculateTotal() {\n        double price = ((book.price - book.price * percDiscount) * this.quantity);\n        double taxPrice = price * (1 + percTax);\n        return taxPrice;\n    }\n\n    // Print facture should not be the Facture class responsability!\n    public void printFacture() {\n        System.out.println(quantity + "x " + book.nome + " " + book.price + "$");\n        System.out.println("Discount percentage: " + percDiscount);\n        System.out.println("Tax percentage: " + percTax);\n        System.out.println("Total: " + total);\n    }\n\n    // Save facture should not be the Facture class responsability!\n    public void salveToFile(String nomeArquivo) {\n        // bla bla bla\n    }\n}\n')),(0,i.kt)("h3",{id:"good-example"},"Good example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Print Facture now have his own class and responsability!\npublic class PrintFacture {\n  private Facture facture;\n\n  public PrintFacture(Facture facture) {\n    this.facture = facture;\n  }\n\n  public void printFacture() {\n    System.out.println(quantity + "x " + book.nome + " " + book.price + "$");\n    System.out.println("Discount percentage: " + percDiscount);\n    System.out.println("Tax percentage: " + percTax);\n    System.out.println("Total: " + total);\n  }\n}\n\n// Save Facture now have his own class and responsability!\npublic class SaveFacture {\n  Facture facture;\n\n  public SaveFacture(Facture facture) {\n    this.facture = facture;\n  }\n\n  public void saveToFile(String filename) {\n    // bla bla bla\n  }\n}\n')))}b.isMDXComponent=!0}}]);