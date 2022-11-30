"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[6255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="gradle",i={unversionedId:"notes/gradle",id:"notes/gradle",title:"gradle",description:"java \ucef4\ud30c\uc77c \uc778\ucf54\ub529 \uc9c0\uc815",source:"@site/docs/notes/gradle.md",sourceDirName:"notes",slug:"/notes/gradle",permalink:"/docs/notes/gradle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git",permalink:"/docs/notes/git"},next:{title:"intellij",permalink:"/docs/notes/intellij"}},c={},p=[{value:"java \ucef4\ud30c\uc77c \uc778\ucf54\ub529 \uc9c0\uc815",id:"java-\ucef4\ud30c\uc77c-\uc778\ucf54\ub529-\uc9c0\uc815",level:2},{value:"gradle.bat \uc2e4\ud589\uc2dc \ud55c\uae00 \uae68\uc9d0 \ucc98\ub9ac",id:"gradlebat-\uc2e4\ud589\uc2dc-\ud55c\uae00-\uae68\uc9d0-\ucc98\ub9ac",level:2},{value:"gradle \ucee4\ub9e8\ub4dc\ub77c\uc778 \uc2e4\ud589\uc2dc \ud30c\ub77c\ubbf8\ud130 \uc804\ub2ec",id:"gradle-\ucee4\ub9e8\ub4dc\ub77c\uc778-\uc2e4\ud589\uc2dc-\ud30c\ub77c\ubbf8\ud130-\uc804\ub2ec",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gradle"},"gradle"),(0,a.kt)("h2",{id:"java-\ucef4\ud30c\uc77c-\uc778\ucf54\ub529-\uc9c0\uc815"},"java \ucef4\ud30c\uc77c \uc778\ucf54\ub529 \uc9c0\uc815"),(0,a.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \ud615\uc2dd\uc73c\ub85c \uc778\ucf54\ub529\uc744 \uba85\uc2dc\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tasks {\n    javadoc {\n        options.encoding = "UTF-8"\n    }\n    compileJava {\n        options.encoding = "UTF-8"\n    }\n    compileTestJava {\n        options.encoding = "UTF-8"\n    }\n}\n')),(0,a.kt)("h2",{id:"gradlebat-\uc2e4\ud589\uc2dc-\ud55c\uae00-\uae68\uc9d0-\ucc98\ub9ac"},"gradle.bat \uc2e4\ud589\uc2dc \ud55c\uae00 \uae68\uc9d0 \ucc98\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/notes/java#set-kor"},"\ucc38\uc870"))),(0,a.kt)("h2",{id:"gradle-\ucee4\ub9e8\ub4dc\ub77c\uc778-\uc2e4\ud589\uc2dc-\ud30c\ub77c\ubbf8\ud130-\uc804\ub2ec"},"gradle \ucee4\ub9e8\ub4dc\ub77c\uc778 \uc2e4\ud589\uc2dc \ud30c\ub77c\ubbf8\ud130 \uc804\ub2ec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gradle -Pparamkey=paramvalue taskname\n")))}s.isMDXComponent=!0}}]);