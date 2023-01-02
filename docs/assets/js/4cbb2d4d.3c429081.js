"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[6255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},o="gradle",i={unversionedId:"notes/gradle",id:"notes/gradle",title:"gradle",description:"JVM \uc9c0\uc815\ud558\uc5ec \uc2e4\ud589",source:"@site/docs/notes/gradle.md",sourceDirName:"notes",slug:"/notes/gradle",permalink:"/docs/notes/gradle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git",permalink:"/docs/notes/git"},next:{title:"intellij",permalink:"/docs/notes/intellij"}},c={},p=[{value:"JVM \uc9c0\uc815\ud558\uc5ec \uc2e4\ud589",id:"jvm-\uc9c0\uc815\ud558\uc5ec-\uc2e4\ud589",level:2},{value:"java \ucef4\ud30c\uc77c \uc778\ucf54\ub529 \uc9c0\uc815",id:"java-\ucef4\ud30c\uc77c-\uc778\ucf54\ub529-\uc9c0\uc815",level:2},{value:"gradle.bat \uc2e4\ud589\uc2dc \ud55c\uae00 \uae68\uc9d0 \ucc98\ub9ac",id:"gradlebat-\uc2e4\ud589\uc2dc-\ud55c\uae00-\uae68\uc9d0-\ucc98\ub9ac",level:2},{value:"gradle CLI \ubcc0\uc218 \uc9c0\uc815",id:"gradle-cli-\ubcc0\uc218-\uc9c0\uc815",level:2},{value:"Build Cache \uc124\uc815",id:"build-cache-\uc124\uc815",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gradle"},"gradle"),(0,a.kt)("h2",{id:"jvm-\uc9c0\uc815\ud558\uc5ec-\uc2e4\ud589"},"JVM \uc9c0\uc815\ud558\uc5ec \uc2e4\ud589"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gradle clean -Dorg.gradle.java.home=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home\n")),(0,a.kt)("h2",{id:"java-\ucef4\ud30c\uc77c-\uc778\ucf54\ub529-\uc9c0\uc815"},"java \ucef4\ud30c\uc77c \uc778\ucf54\ub529 \uc9c0\uc815"),(0,a.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \ud615\uc2dd\uc73c\ub85c \uc778\ucf54\ub529\uc744 \uba85\uc2dc\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tasks {\n    javadoc {\n        options.encoding = "UTF-8"\n    }\n    compileJava {\n        options.encoding = "UTF-8"\n    }\n    compileTestJava {\n        options.encoding = "UTF-8"\n    }\n}\n')),(0,a.kt)("h2",{id:"gradlebat-\uc2e4\ud589\uc2dc-\ud55c\uae00-\uae68\uc9d0-\ucc98\ub9ac"},"gradle.bat \uc2e4\ud589\uc2dc \ud55c\uae00 \uae68\uc9d0 \ucc98\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/notes/java#set-kor"},"\ucc38\uc870"))),(0,a.kt)("h2",{id:"gradle-cli-\ubcc0\uc218-\uc9c0\uc815"},"gradle CLI \ubcc0\uc218 \uc9c0\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gradle --project-prop key=value taskname\ngradle --system-prop key=value taskname\n")),(0,a.kt)("h2",{id:"build-cache-\uc124\uc815"},"Build Cache \uc124\uc815"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gradle.properties")," \uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"org.gradle.caching=true\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"settings.gradle.kts")," \uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc2dd\uc73c\ub85c \uc124\uc815\uc744 \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'buildCache {\n    local {\n        directory = File(rootDir, "build-cache")\n        removeUnusedEntriesAfterDays = 30\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"groovy DSL\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"settngs.gradle")," \uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"buildCache {\n    local {\n        directory = new File(rootDir, 'build-cache')\n        removeUnusedEntriesAfterDays = 30\n    }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc124\uc815\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uae30\ubcf8\uc124\uc815\uc774 \uc0ac\uc6a9\ub418\ub294\ub370, \uc0ac\uc6a9\uc790\uc758 Gradle Home \uc5d0 \uce90\uc2dc\uac00 \uc800\uc7a5\ub41c\ub2e4."))),(0,a.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/build_cache.html"},"https://docs.gradle.org/current/userguide/build_cache.html"))))}u.isMDXComponent=!0}}]);