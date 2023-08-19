"use strict";(self.webpackChunkbuda=self.webpackChunkbuda||[]).push([[297],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9873:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={},i="Domain Driven Design (DDD)",s={unversionedId:"concepts/DDD/README",id:"concepts/DDD/README",title:"Domain Driven Design (DDD)",description:"- Which is an approach to software development that focuses on modeling the core domain of a business application and aligning the software design with the business domain.",source:"@site/docs/concepts/DDD/README.md",sourceDirName:"concepts/DDD",slug:"/concepts/DDD/",permalink:"/buda/docs/concepts/DDD/",draft:!1,editUrl:"https://github.com/RodrigoRVSN/buda/docs/concepts/DDD/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Next algorithms to study",permalink:"/buda/docs/books/grooking_algorithms/Next-steps/"},next:{title:"Databases",permalink:"/buda/docs/concepts/Database/"}},p={},l=[{value:"Some key concepts of DDD:",id:"some-key-concepts-of-ddd",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"domain-driven-design-ddd"},"Domain Driven Design (DDD)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Which is an approach to software development that focuses on modeling the core domain of a business application and aligning the software design with the business domain.")),(0,o.kt)("hr",null),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DDD ilustration",src:a(6124).Z,width:"225",height:"225"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"some-key-concepts-of-ddd"},"Some key concepts of DDD:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Domain"),": The domain represents the problem space or the subject area to which the software application relates. It comprises the business rules, concepts, and processes that are unique to the specific application. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ubiquitous Language"),": DDD emphasizes the use of a shared language, known as the ubiquitous language, between domain experts and developers. This language forms a bridge between the technical and business domains and ensures a common understanding of the domain model. ",(0,o.kt)("em",{parentName:"p"},'Ex.: In a bank, experts and developers use term "Account" to refer to a customer bank account.'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bounded Context"),": In complex domains, different parts of the system may have distinct models and terminologies. It allows different parts of the system to have their own domain models that are isolated from each other. ",(0,o.kt)("em",{parentName:"p"},"Ex.: In a ecommerce, Order Management and Customer Management has its own domain model and logic"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Aggregate"),": An aggregate is a cluster of related domain objects treated as a single unit. It ensures consistency and enforces business rules within its boundaries. Aggregates have a root entity, known as the aggregate root, which acts as the entry point for accessing and modifying the internal objects.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Entities and Value Objects"),": Entities represent objects with unique identities and are defined by their attributes and behavior. Value objects, on the other hand, are objects without identities and are defined by their attributes only. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Domain Services:")," Domain services encapsulate complex operations or behaviors that do not naturally fit within a specific entity or value object. They provide operations that act on multiple objects or orchestrate interactions between different aggregates. ",(0,o.kt)("em",{parentName:"p"},"Ex: In a shopping, PaymentService can handle complex operations."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Repositories"),": Repositories provide an abstraction for accessing and persisting domain objects.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Domain Events"),": Domain events represent significant changes or occurrences within the domain. They capture and communicate important domain-specific information that other parts of the system can react to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Context Mapping"),": Context mapping deals with integrating different bounded contexts within a system. It defines explicit relationships, such as partnerships, shared kernel, customer-supplier, and others, to manage the communication and collaboration between different domains.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Strategic Design"),": Strategic design in DDD focuses on long-term planning and aligning the software design with the business goals. It involves identifying and refining the core domain, as well as managing supporting and generic subdomains."))))}d.isMDXComponent=!0},6124:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABg1BMVEX///9Q48K46YbITD31piMAAAC564VO5cNJ5sPJSjtS6cfJSTrLTT5T68lL5MRJ58S+7ILQTz//riX7qiRV8c686YPKQzewxYRO28L/9/m574bKQDZ6yqtsz7P/sSVO3r695ILFQz/BUUk8q5JHyawYRTuvyobd6OWT1sbz8/Nf48VL1LUpdGPe4uFH4MZd1buQyp6hzZOy14iUyJyw1Iq434Wgx5SNxaCwuYCzm3Sw3Yy0hGvFSEKePDC7RznAVUq+blfkojzZn0nwqywQLygxjHix5o6zkXG7YVi4al7EgVTFjFnH/ZG+29TF3dc2mYN71sGbxHGvqHu1fmdlJh/Sm09xTRAjLBmN1cQsfWsTNS1Bup8eVklSHxmp3M9GWTNed0QkZ1iDMiikPjJ2LSQ/GBO2fBpcPg0mGQXalB+jbxc5JggKHhl8nVptik+IrGMuEQ4dCwnpWUemcRgIFhNackFDVjEyQCUcJBSCWBNIMAodEwT/vijimSDHiR1UOQwkDQvL9CvsAAAgAElEQVR4nOWdi0MSyxrAL8qwuLIosHqSlFVZSgWjTOrUEeomlJ2jIkUoDx+goICvEjMssT/9frOwPGdgQexx7nc6sCwI+9vvObOzM//5z63LyPT0/dnVlZWtra2pqY2Njakp2FpZWZ29Pz09cvs/f5syMj17f2VqY21mRqVnGK0kjFbeYPSqmZm1jamV+7O/JejI7OoWsKm0AwMAoyILYMPbKuDcWp39nShHZlemnAIcu5ZC1kAKoIJzauW3oATdTTkZ0JtCuFp9Oqd+cV2C8tZm9O3TVSlTP7P2y6oS4wnaG+DJkFrhl4QcWV0TBpT6XSvRDghrq78U48jslnOgHDHtpWfWLtYplGXrWXiKyhlmwLn1yyhyenVDVZUQ7F6MyAAg8hWJmNIDZ41y8kuJQsX7RBm6ARXe3lid/tlwICMra/qB6iOzH9pVLGPnOKuNV7GCwAl20B1nFzg+7uNUnFD6HGe3c3wuypbYOLv0mRrIAf3ays/W4/QKmGftubcfqnwRL4oLXuQLx5DoR5FDkbdFcmERIdEWQ1Ybw9usfByhsBV5RSRwPocQidi4WA75ahHBI50rP1OPBL4SIcMhezTGhyOcyqHi4377oZ6P82E/H3HwUUwYtUZ4wfbAK7JI4H1hIWflw2GeO6x3XRXzExmBj5QbMKGD54HQxjt8PBuNxw59fCwSF/FLbxQIVUAI2xBoDqNMkTAi8DZbPJ6zNgQjyB8/h3Fkdo2c++oIxUOr4PAxAlirEC4RsnwEE7JWzisySAXaw4QRvyha7aSvZLRrPz6uzm402meJMFdFGOajh/Yo8kVzdjsQxkFpnIiiVhQVkd2a471+FlmjKCx4Bc5vs8PHyN/KDGzM/lC+6SmBmt2FsMpqZVmHXfTxeMNvc0TjKp8tZuXFmAjpgfPHHP4ob42B3Vrj4K5xv1UICyr4ZExsNNKSaIWpH2eqI6uEAFMRTsrsHMNIGwzLcBxbegn/8AdYjmXgEd6V/rH4/fIf0gRCzo+qc6anqA2+2xWG+SFqHFkVBlofzC3JgHD7avxpCizK7atx1tlh+4Fh9LXS6YnSOm8zqI6sqNoFZCBC6PUP7jidY2OjWJ5Kj2NjTuedB3o9RKx2SbWq26tVpzfa9EAtRhsbffhofs41Pj40WJGh8XHX3Pyjh6NjGLTN0zawcUuW2p6FMnrBOQZsrvGhoSGNRtNTL7AP3hl3AeeYU9C3o8pbstRVepIn4N0BuufjmK0BrR4UMJ8D5Z02ILXCatf5RrYU98Aweufok7nxwVZsNZyD43NPRp2KIRntVpedcUShCzJawHvkGjK3g1dWpusRQCo8kwMbXUWcXlMEiI3z8RyYZtt4JcihobnHSs11YK2L8WZWGSBWX8U4NWZzSyckQA6OY0UqQ+xavJl1KgAE73s6V+17R8fHRwFzUxoa5NxTRR450K2QOjvTOogy+rEnrprY4srtHO/kTkCPZqxO2GOWnBNvQqKA/YHz5eI7+CPS/gqj68mYAkbtTFcQZ2da/hTo76GrLna61nvMy8fbmkDgZDlwfAIKOzoOaDSuo6MevO/YpdlZD5hdx9LLI5e0UcU45HqoQI9MNxBba5BhnI/r+STCZfP5jgutnwS+HH0+N5+fH+UCPevHO1/MR+h8Z71nez3gyh1vXyyfo8+Bi6OdizpbdT12tixeu5D7FQDeGZ0bbPQmVw4h9Lkn8KVneR00iFwXxz2gqZ2ens8nR5+XNReBwPby9pGmB7l2dpYDuYA5UP8Vg3Ojd1oi3lSLLU2U0Y/OE7ODa92FPSxw0WNGnz9vb7tc2+sXrvOL7c/bgSPwwIvAyfbyxWd46To/MptPPn/ZaYw5Q/OjrUz1hobashTVOx+Pk0OiRNjTA4TLXwLL5h0XYOzsHO0sLx+5yoSfT5Y1x5rzo2Vw1p5cgFC8jj9ukjok+BsZastEDwokGGjJSmVCzcmXo+1tzefzo4uTHnS8gzTHEmEAnQTQ8fnF8vbxMmwcf3GRvmcQ1Ej59VKnzg1S/0gFkOjyzJ0nTcqXQPnJDLEUsgPEUsgXOJa6Ang/xNBl1/GJpifggl3Hx5T8qBl6QvZGPorifBGxwwKuqhZlRUJPrX6MqkDpyCpPxcaTxlzcLv0vPUn7pHebVLKD82ONauSEuFe+zNFpjbpVAfTlfHydGpkHT12d1p/tisb19EGdGjmrNx6NyNexBrY6AVwtBxlW9PL2iFeo/hFtUwvtOiJYanXMY4QYsvLxMMfwRWfUdtBenK0AcdZ4FFn9jqorXy0stPtSZ6l2B8sLSOBFfAFSQm47oE5X5QmejUdEPuwvE0IS7MBCNZKYi0/t/7WrOjUyrIoLhzkf8ss25WwzoI5slAEZIeyz8/54pNLj3i4g1NcQSF4/n5ufvwcyP/f8dWlfm4jVniggq81m58tu02a0WakkQvYw7EB81C97NY4xyl0Qg7ye//Pdm7dLLxYWJkqy8GLp7Zt3f86/bgdTM1Qdb0B/4Ir4UkhJBlbaAZwt46k4f5iPR732iolCjFF4TNAimvvzzdvJibt3h/v7+/r6eosCW/39w3fvTky+ffPnXE3DqalUZ0bOH2PFyCGyVg6sDVecXpNtNMpwfoc1zsfLTqgYEHT3x7OXkxPA1ksT4ATKZ3+8Vgg59Kgq+XOi1xu1R8qZug1XHJmSAYWcIHCHyM4i+cIeACoJotCmvfdsaWJ4uI9KJ0vf8PDE0rN7zVJ+RQartMg7fPZDPmZl5UytnVLqiqtVYRTSBB9DZVtQBqgxP3+3NHGXrrsGXd6dWHr3XAljFSIX9vF+m9cuiPLpV5oVpyuZkLX6RG+cLV7AVAoI6vtroQ08GXLhL1BkO4hCJB6NiSp0WD7/giI7HZmqalDgERMOb1ROFA9a+6C554/3CwqMs1H6hhfe/9GacejJA/n82/1WXrRFHOWUMaDITqtslI0iB8/iq/HFU6R/2kqDGvO99xMd8RUZJ97fa2mrQ0/LqZ/jw8jP+8oaUGSnNcUMb/fG7Jx8dV0/2kqD5rm/7g53iFeU4bt/zbVS41A59bNhG1RuKFrOGEriacVGGSEes/M+ZC0DUprzZb7XzybLfAad/NAu4+Sz180ZNeMyIsQJ3o5EvjJGZWCqFeBs5YolH/OFIZJGo8U92rHmpZpGc+/tcDm+GBK7ul4dfmhb+off3mteuGpcYyVDY1SCzW+NofJgMUbVKu9vVLWZbLwvfBjx8aUwOt/0V0GBE1UGakgmDNKDzmDAL6VHaUMnv5I2dVU7KmqcaKFGzbwcULk48vpsMa7iiRvNAVer6lEhB+1Cf1iQw2jTKGO+t3S3OsCUCd3BPcBwBxNYm7revaDboIN9nuKmwbMX9Oh0ic1EjbL77i7da4o4KAdUVhR5X5y3R8vHPdA02EyvVeo+R1SI2nibWPRi/dNmUUbT826hNgHKhJ7T3b2kYW/Tndwz4L1BN9pNJHf3Ng2bid1Tt+c0kfjYm9jc3QzWaLG3f+Ed7bqGJFCFlxA5v9dvi4TLB8407ZhaqbZRkbPbIvHSnzV1Qs3rNxN1GV4m3P242+vxfN/t3UXgl7vIYHDvejyeRFKX3PN4QI+9umQikfT0euo8tn/izetmP+kaKzGx3khYFMRK00DbpJEx7ayoECcaVpAzTVMnNL9+e7c+XICKMKHb4D5Fex6UPE0GYac7CTsNbpQMJnW6IPru2fyePN10GxIIJQz1X3H3bTNnBFcsHarAQW2JkE/O+0yTjFFRIcfy9lysPChZ38wJzfOTjTnQkEiCk330JNyfDGj3tPdTL1ipzgM6BDv1fHIndZuGT4lgIvjp055nz/MJ3mn4juHJ+SaIg0/kxA+Ficjz3vKoP7oSZRVyDBs99Po5hzxit2mqN/9BAAQB5aA9w+7H4OamIfE9+B0ryRBMbp4agqfB5MfdYDJ46u5Nbm4mexMf9yQ3bUT8owni0GiJENp2PDyUB9/SlVhq2HN+uwqJUVucj9pLf9HERs1/ThKLbF2vW0qJoEV4sZvwSAS6XTd+x63b9Rjw+3i7VwdvkxNn/+SfdETNvKwRX5jnrEho2dwfKf4BA2VMGMpRzisXQ/rHdBs1/1EfYyqMUkVTzIc6ubrRSaWOAT8bDKXtqrcbECeaaHHwsVy9eWMRJKriQlmJ5AK8pEIhzgs2JPC8o9SuZ0bHm2iQCkiUvr5KX4ayP5hoosVx2U5Zq8hbIdjIrTyyEstdFz4xyvsP/f5DoWUcpZkogax/YmFhcvIFlsnJhYWJfoWkzQy1Ek85MWYT7XF7OC45o5aYE1flTMGLh3FO9OaEUpuJHmbM8y8UAOr6+iYml17+/c+HV/8tyqsP//z9cmlyob9PQdna/4IeUcvBhov5WBbairFSrw1DKGyqr8OoHCjKl1Ih45yjqVDzmhxFawTatUt/f3i1aDEaTVjU0qPRaFl89eHvJSVt5eFJaurXzMkZnONYLnwY5eUrboTe02IHIlNsC4Iaw3yrMKN5/bYVYF8/4L1axGCNAnsXXwFkSzMYfktFrAQbVTQXicT95aTY2MTYwl7IipFiHSpES00uxkm8binJm4ZKpo6vb/Llh0UiXYVy8cPLyVYuefcN9Rhc5TIsHhW8fke81MmkbbgaVUoVAhRrHIPNWs4UD2kqNL+baH5c/ZNYfU3wSpCgyFbxauIdzRUHH5bb+7wvxpfv9mtMGHKziY8eRuy831uyUXrFbb7X3Lz6F16+MrbmkxiNr162+jJaY6pSgatUKFp1M0NDI6rcbGJZSPheuVuAWpBqXi81O6a+iZcf1Mr4JEb1h5cTzUy1f4nmilCelo5cCKuqhFmrizOVPlIG1OiX63QnTYWaZ82cEAxUgX3W2mpzU737jHYgLqd84KoawroriivVgy7KN0GqqN2H5nvNnHB46YOxLT4sxg9LzULzBM1OB5+Sx2rU1jUja8RxM/Rc2CxR9E28b1OBshrfN7FUSBkUJc45GdLBa2tGaMwKpM/QW03mZ3TA/sl/2vDAGkT1P00sdfgZRYlDlAE3NWa6QlbhnUeUIS5z9CPpf/GhMz6J8QO9DOyfpBiU+RF5vE11Q3iEPPaJGaM0Ksx/UVXYP3kDQIxIP3fDf1GUOD5GJKweSEQZn0cr2Mz3qHG0f/LVTQAB8RUd8S4l2FSVbjVSNaZvlQiocj6nxJn3NBXeyERlLVINdfg9+XA0z53E469qYEyR3ZASZ6BZTzmEvpuZqIw4SYuotAZ/uRFVK9ryNYwRcrjVU+IMXYUT/9wcEBD/oZ1BqhIfEc20UpvOUoyUXM9o7i1QzvHw+y7wYaGdwr6Fe+RDcpHNVCs74go5ktKMlBZI+5c6SvSNYlqk1by0cEox03JZQ3ZDipFqnlPcpO+mYbQK8RX1N8jBj2KmsiNS3PAOOcGa31FSxcQ/7deiNDHSXPEuuaGombtDQpAdkVyyUdM9xYL6Xy52DVCtXnxJ+ZUl8kFRkn6pcFsluiGlca+hNSoWupAoKmL6sECxFHKsqTT1a6TUDN4iEj54RLYHSruw/yXtWE3kfqhWQlEipZ1ofvSABFEcO1w10LJanHNEc6A07elh5gqLTCt5qgV2tlYiJdhAY594XHPEfFEckll13bf6PbIb0uqZvpfkMGMqoGw2e5CS3jWl85ZM3pJXp5FRXWphUdVr/JscTil1zfgYSU/F68HTMyR6/UNiNqQ0DKkqNBUu5QB0BS++Wq6uFlFanQYyeK02XVG1SVMipZk4RHZEqfi+T3oH3JCc718SCamB1FS4tlgsRlPqMov21VmUOctn0GX6wJK+/Pq1YMx8PdinIVLC6fBL4nENkR1RdZ/W+qWMLYGmL/HEUgMpWOlXhA7Uqa9qC0qns9/y+W9IfYUs2cK39OUiUn/LpGl/Sg6nfeSGcGX8Sa2z4apmihhKyUWp+U+iG0K9RrO1wiWONKazkNF0WShgQgsmVH+9vr4+uMp83U9RPZFSu5Evt1FKU2mIFPEubUq+N78hGunw37TDBCs1YjkLmWoITV8L6XQKAm0KohBNiX+Tf+wNJdSQdDiwQevBGCCX3ea3pNOqW6BWpKbCQQrkChNmC2mkzocsCJ4t13lT5lqNrtT7Z+kM5W9fLZAuvvW/JYeaUaKm1kYglJLYKaH0NbGLoY9qpJAgQlhShYzJlE+r85nCmeUsdJU3qvMHIbWxkD3IG9OXVDMlOX3/JDEjkoMpMzNNIyQ2LDTzRDfsoxopTvJYpLLGVCxwig+VTciSVDMlhrUJchAkNi8wISVZEL/F/CexZJu4WUlKT4kfiCf0LjnUzNPSxf02mk7kllPf5H+7WXRXEZKTPrkFRWtAzZL72RhKsiCG0mZuCBZ6A0SyI5KDqcZFbOYyq/9ZIerQSUwWGmIo7X9poQFeZfKpDrv4sViIZU3/W2LzYpyYEJmV4tXtetFTmr/EHDxBCzSQKvYzl7gsk9pPUmgp5I3Fl9Ie9X5xN+0M/U1yREoreJxwo6lU1BSv33N4jjgVg58l8jFSstC8fkGymgVa94XxIGMxWi7PjOpUygRFNqR4Uyabxi+N6gJouFBABePVWYFmycZ/SIVb3wvi1dKhYspn2OKDfJPJlkTIRv1+v8gxIjxZ8ZVG/Sipga95TuxHpBWlpvRX6Ul9dZAPHZgyaD/0Vb3/NbV4kN/ft4T2LdlMBmXSB5nrEAWRXJr2LRC7owalS1CMHQ/gE61saY7JEiFvszniXgfvRw6HzaaiEs4Roze95ZSVnixQqVmuU6msRZ1NF66/hTKLuAWV3QcwZDm7XFyk1aYQTEmEE8RAXyTkrIc8noGRsxWHKgLhlERo5Xl7TvTjwQxekaERkhM+LVkUdWgqFPZTRmM+fxayqKE0vbZks5eXBwXLGboCQrU69PW6QCP8L4mQkvJlQi8QWmNlwqkSoZ9TcQ6f1Wa3+20CVYdEwr4XtHRoQiloGmZToYzl23UKmhcSIWxaLGdq9deiDgtXxgJSk6tv03+Jjt8m4UaZ0OewoljMG6NbKbGfjU4Ihx7KZEPG9NezzFdTZh8TplEBivF8Vr0fAj+0oLPUQSGftVyfkVyRRkjsbyMTMhtVhKDDGM+yeLAQuSuRPDwBCMmA2E4zoRQ21Hz+ypQGW0xdqc9SFnipVkNcTaeMqTNTKpS/MmYyxGBDIySl/GKHYtEPq3QoE4IfCkU/5ONhvks6LNc08GSSkiC8wFt4p1HqejPif0aTMU9s6XegQ1ZELM87HHxFh1NyLEVhKZZG8Gih7vhhG0LO+h34oYqLe31xZGdrIw0btVqtIqeyw1O0ST5sL5beXDqIpdhOwz47qyqNUQdCuabBxQzDlWoaWj4kZnxKPuyop7vuK9rPhxiR4/AU9+UxiuS69OY1jTFFa9i2Qdh+TdNQl1IIu1CXmrIIRw+jBXflS49GvGWx4KobDxiGnRYT1D3f4KVF+mTD13RSlyokvHnbwlS4zkMzwnQWgoSgzoQKKXWmkF+8yocKgBXKpNLG1H4orQ5BVVCAfGFS5/fPGr6kK22LW2ofWkKZNDIZM5epa2TJ7xey2cXLbObqADJ8On1wlkeF9NdCCpkyB+lCNpW5VOfz6Ya0T+72brd9eEttfBPU1qigPriyXCH8WLhcvEx9y+wvXoUy+YzFki3gzlKkBiu9zlwtokJoP93QY9OdNn5b/TTEi4ekfhpTCmUPDkKLCFqB6CoL9cvlYrZgyWdD+/nCdQpajVC/7eclwuw17ExbMpeoro3RlX6a+7fU12a8PrNA2+IKqMAUoSWRkQhT1xYLuGMIFFvIZ75dIRxpQplvltBV6Oobbl/VEHanr+1W+ktBcdDyNR6kCtnQJbQBs6EsJjSpL0OhrPrqcv8aFVIHoesDcNazq2zoOmTKXOYv6/ywS/2lt9TnfYWhr67S8B+ywGPh2oS9zAQxFfdngB9aYPMqbUrjXo0C5JIChFclbth2n/etXrcwha5T0Ea63k99LV4GVku9UegstC/3RxX7qNSEHqluXLeQRmDe6rUndSqPG/Bn+epmPLSmGlIf6fR06drT7V4/VBul1ruxtg1vUtRP3Nb1w54m1w9v9RrwDaR714Bv9Tr+DaQ71/FXpSHQpHfaG4tB7VHsXLo0FmP6tsfTdC5dHE9DGxP1nGgNbY+J6lDaHRNFHupdmqbudse1dSpdHNf2fzA28d8/vvRXHCNMbNz3djpGmDbO+8m/Zpz3/8FY/X/t/Rbl2TD//ffM/Pvve6Leu0a7R/b3u3ft33n/YfWaAv/+e0h/7/uANQruA/4/uJf7974fn6LC2hUTyGVN0zkVmkxj8QvOqVA9L0aN/E7zYtTZX/1M+8SujN9rbpM6wrq5TSjN4N9rfppaI62fn4ZSm/6YOYZedmOOoTrVNE5KR7za/TvNE1UrjfNEVRYLqFfi7c/11WpCM2VzfdVJ41xftDUcGUpvhoT44ofM10YeeyEdAWVuGvLaOpQGRlfm3Fsgz7nX17U59xosjzSZ8DS5rmk+b+IfyudN7K2ZN7Gvu/Mm1gl53kRaXdNq7kvCgRI1I83gWTf3pa6lDvsVzX3ZYKTkCUxpCaP9+UvdJOjEnrseSLdbPz9yI6Ci+UvrdUKZv5SuxPbmoDW48bTHOh1WGn4s7k1u7iU3e4szsuqwYK0mErrqKVoN9TPtKpuDVqkKa6aCrlNi83mE6yKqYRPP9Ozx4Al1i49A4E4aDLrTXWmGXbwXtAdPHk9xml2Dx+0xFDerv0nhPMKNGqFOBk1uCKvamwta50G6j7uGBNrc/K6Dx+RHrLVd5MbrCOhON5OnhsRHFPyuM2zu7e0ZNpObpzo3CiK3YXNz89RTA6hsLuh6aTKhN1WJ7cznbdgLfgoG8WzXnzYTeM7rTWkWaHcSz9kN731Kut3fPxlOd3u/e4IJ9+knQ9CD8HTXno+eT+4qQqXzebehwiZKbGdO9tPvye8fDYlNgwHP120w7Ekzefcaet0f3cHvyWTSjd/b29vdNAQTe0FDr8EDmk4mde7T73tVMUbhnOztqJB2PViyU6Xz6ut2P4J7ne5ixwsmMEsQz84e3DNgnQKtzu2BvTrPx6C79IG9XYRnxfbsGjyn8tTswy3n1aeVa83n1f/PLHXRylZrI8yX1kYA7zLoDMFNN9pLIE8CJRJw+Ng5g+495PFIrwGr15BEmLsXJfa+6+DjSbDVhPt7cV7vvrtLzVxQXhtBmlOXB+FK21iar41Qvb5F/alRuL4FqAgDud2biaBHslMp5xk8e5t7HgiaQdjrwVOZ7+7q4H/Yj3fD50CtweCupEKF61sIcZFVCY54PO7nGJ+80EiL9S2q1yipN2+Fa5SU5inH5qeDyGIoTUauM1RW7JAyv5QRddVLeBQ3Fa9RwvnxKp0C8lv9h34uYlW6TCB5iJTkiu2sM6NzY4+Cx7aXYVG8zgx/6D+UlhXjeWtMvoOk9TozNWsFNSC2sVZQsZbREdYDaM6neK0gVjzEt/4IOVGwx+R7ZBStvbZKJfy11nviwg4hHOOFXCQSiatK98goWpeses0utnjXKSv75i+1ZtehzWZDgpCzSzfFSoTK1uyqWnfNDudGcERsDns7K+f9mHXXuGiOZ3ibX4WkWZ0lQoXrrlXslBGRSuWNi2IclQ31l1k7T7qLkPVHhBIhjqWKV5SV1z8EQs5n41mWt/nYthB/xPqH9tJjaa0Au9DG+odyhwYQAhuPFwGJsVVa7PIali87XMOyeDiV/N3WcrKzsg75CF5bkPPHKmsB/yLrkBKkrSWBpeY+JozjxQXx6slVp+3Ga8kudGEt2QZpby3Z4pBMIGTxoslcFNVemrrZesDz3VkPuE7aXQ9YKm0YMQcGCmnHa+Vqvu3nr+ncCNjums6lK4oCnoI+GhW4+i/82ety10sH63JXVW8sS/jKn7u2euPhdLC2Om3scPmsPXjagaV2COhqGmPKY4HbFdq1GllaWmoH3kaUFhZKuQ6jCJE8kKiixqaWqll2ueqiZTUybCs7AZoWWbBuaFB7Mt0CEdIGVY0a1zr68iVQncw1gYCmsr2+vB5QUojON00SEmDbYbQis/TmcAnR+ZjW8L841mhOkKS30j/z+bG5tG0uEVbe7CGqVDP+2NkCUOvsIIxWIZLH9FUEUuM8yVQ1J+v4oI9cPefrF4HlnZ3PFycB0On58UXP0cX68bJEaN65uDhZPj5edx3DRsPXaIbmmyZB6QBmbgSIEVtoEbxxdK7RVM3H29hAzcvnO+bAl57zzz0BtHx+vHzx2RVYd2nWTzCh6+h82YXMO19g33LPRYOBzo228EDQ4E0BFRiqimGcj12DGiKhqyfn0oCyzk/MPWh55xg24dGsOTqXCC/Oj49R4PwI8NaPapOPZtD12Mn8AEAFhopN1fmwjhGsFLvgeuALEH7BhK4qQvPRTpHw+OTkqOf8yNwzHjj/4qrja2WgXTBRGbGVFjHj2JM6xovznp6di+XP2OV6touEO5jw5KLH/CUQ+LL8xXW8s+zKmUGHJ5+Xl3Pl0Ap8T8Za83VHgxKis0XSKOnx6VwVo6bnHKFzePqMIGfsAOGFOZALbAc05mOEjs2B7eVtl3kbIYg0YMI7sE8j8809VaA/SBM3i6I1iK3yYlH0ztFH4xVIM+7LwE+Q93HqN/dITQupkSG9Zy7ukxKKuZQtNIPjj0ZbJYgS4FrXABWk/qIw+jtjj58PdVySa4aG5h6P3VGivxsm+kZpVaOWGbVYka6h9hq3RTzNkAurT6uIr/NalIq4pfCXJY8cfTI3Xp8/mop5cHzuyagi7yudya0uA4KsCq1DagXyztjDR8/HwWBbcYLqhsafP3qo1Dgl0QodtQdbSevcXwspOIFy3gWYQ6RuCw1mGxp3zQOdU2gD78alKF2mFTpj5Uj0D+44x0aBc841Pj40WJGh8XHXHLCNjjnvPNC3c+ZU2AW7GmOqZWRF1ebB4CImHeMAAAKMSURBVB7bAT0GdY6NjWJ5KD2OjTkxmn6AoV6RpYlWtdJ9F6xIe5ZaQ6qvlZYlJw3wtixUlumpTg+tK8IwU7dmobKMrAptemMXZUBYvU0LlaU9NbJMw6c7NYIfocCijKw6B5QepSCCsDWftts7QmQGnD9EgUWZnlKY/lkr8npz0kLLcr8yF8aXNkszNqsoHc6NohV+lAJLMruhSI2s1cbzKpuD51SiwAkCWKgdHnlR5FTSruJmS2EGNm45hDbKyOyagkoVCPG4kBwbPYyhaBRxvCPsC/PxiM1W3MU5YjEb+d7AKj7t2uyPM9CKTK84WzJKhCr7IZOL8qJXiIhsRAz7ojmejduLu3J23i+24HOu/FgDrWFsYatFQvHQjmKxWE4I+0QbH/b54zzDCcVdPhSzNvNECDA/jU8JIxByHO+z8Qjcz8qKXocfE8Z4zioiu12w2kU26vVTPfFn82EZWVnT00sA1nro98dzIh93iI44y9mQwIfDArJaD5kY3iWgqGijKXFAv3arNahSmV7dUFFrADHscOBpfVVhm0OawJ9lrVZOjOGBk2FbWMVFYzY/EZDRqjZWf7b+ZBmZ3QJjJUKyeHwrfofn8HrtLB7ZwcJePF+xtIsDIeCBeW79lPhJlZHVNWGgw3ZHg2gHhLUfWL8olZHZlTVBq7icowmj1QprK7+W+iqCIWcYxV1WJDz9zK+LV5SR2dUp58BAB5QM6N85tfpr45UEVDnlFNrABLgBwTn1iyuvTkCXWxvOGQgaAEojZTCaVjWztrH1e+iuXkamZ1dXpjbWZmaABSIIFvBSbWmLUc0A29TK6uz070hXJSPT0/fvr66sbG1tTU1tbGxMTcHWysrq/fvTPwLtf1Pz2XHjXeZSAAAAAElFTkSuQmCC"}}]);