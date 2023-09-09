"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="java",p={unversionedId:"notes/java",id:"notes/java",title:"java",description:"OpenJDK \uc124\uce58",source:"@site/docs/notes/java.md",sourceDirName:"notes",slug:"/notes/java",permalink:"/docs/notes/java",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intellij",permalink:"/docs/notes/intellij"},next:{title:"javascript",permalink:"/docs/notes/javascript"}},i={},u=[{value:"OpenJDK \uc124\uce58",id:"openjdk-\uc124\uce58",level:2},{value:"Vendors",id:"vendors",level:3},{value:"Microsoft",id:"microsoft",level:4},{value:"Adoptium",id:"adoptium",level:4},{value:"MacOS",id:"macos",level:3},{value:"ubuntu",id:"ubuntu",level:3},{value:"\ud55c\uae00\uc774 \uc798\ubabb \ucd9c\ub825\ub418\ub294 \ubb38\uc81c \uc218\uc815",id:"set-kor",level:2},{value:"\ud1b0\ucea3 \ucd9c\ub825\uc5d0\uc11c \ud55c\uae00\uc774 \uae68\uc9c0\ub294 \ubb38\uc81c \uc218\uc815",id:"\ud1b0\ucea3-\ucd9c\ub825\uc5d0\uc11c-\ud55c\uae00\uc774-\uae68\uc9c0\ub294-\ubb38\uc81c-\uc218\uc815",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java"},"java"),(0,a.kt)("h2",{id:"openjdk-\uc124\uce58"},"OpenJDK \uc124\uce58"),(0,a.kt)("h3",{id:"vendors"},"Vendors"),(0,a.kt)("h4",{id:"microsoft"},"Microsoft"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/java/openjdk/download"},"Download the Microsoft Build of OpenJDK | Microsoft Learn"))),(0,a.kt)("h4",{id:"adoptium"},"Adoptium"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://adoptium.net/"},"Home | Adoptium"))),(0,a.kt)("h3",{id:"macos"},"MacOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"brew \ub97c \ud1b5\ud574 \uc124\uce58\ud55c\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew tap AdoptOpenJDK/openjdk\nbrew install --cask adoptopenjdk8-openj9\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc124\uce58\ud560 \ubc84\uc804\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AdoptOpenJDK/homebrew-openjdk#available-versions"},"https://github.com/AdoptOpenJDK/homebrew-openjdk#available-versions")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Cask adoptopenjdk8 exists in multiple taps")," \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc870\uce58\ud55c\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rm /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask-versions/Casks/adoptopenjdk8.rb\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AdoptOpenJDK/homebrew-openjdk/issues/106"},"https://github.com/AdoptOpenJDK/homebrew-openjdk/issues/106")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc124\uce58\ub418\uc5b4\uc788\ub294 JDK \ub9ac\uc2a4\ud2b8 \ud655\uc778"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"/usr/libexec/java_home -V\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shell profile \uc124\uc815"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_292`\n")))),(0,a.kt)("h3",{id:"ubuntu"},"ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt-get install openjdk-17-jdk\n")),(0,a.kt)("h2",{id:"set-kor"},"\ud55c\uae00\uc774 \uc798\ubabb \ucd9c\ub825\ub418\ub294 \ubb38\uc81c \uc218\uc815"),(0,a.kt)("p",null,"\uc2dc\uc2a4\ud15c \ud658\uacbd\ubcc0\uc218\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"JAVA_OPTS")," \ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"-Dfile.encoding=UTF-8")," \ub85c \uc124\uc815\ud55c\ub2e4."),(0,a.kt)("h2",{id:"\ud1b0\ucea3-\ucd9c\ub825\uc5d0\uc11c-\ud55c\uae00\uc774-\uae68\uc9c0\ub294-\ubb38\uc81c-\uc218\uc815"},"\ud1b0\ucea3 \ucd9c\ub825\uc5d0\uc11c \ud55c\uae00\uc774 \uae68\uc9c0\ub294 \ubb38\uc81c \uc218\uc815"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"%TOMCAT_HOME%\\conf\\logging.properties")," \uc5d0\uc11c \ucf58\uc194\uc5d0 \ub300\ud55c \uc778\ucf54\ub529\uc744 EUC-KR \ub85c \ubc14\uafbc\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java.util.logging.ConsoleHandler.encoding = EUC-KR\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.itcode.dev/posts/2021/05/22/tomcat-encoding-euckr"},"Tomcat(\ud1b0\ucea3) \ucf58\uc194\ucc3d \ud55c\uae00 \uc778\ucf54\ub529 \uae68\uc9d0 \ud604\uc0c1 \ud574\uacb0\ud558\uae30 - \ud835\udf45\ubc88\uc9f8 \uc54c\ud30c\uce74\uc758 \uac1c\ubc1c \ub099\uc11c\uc7a5 (itcode.dev)"))))}c.isMDXComponent=!0}}]);