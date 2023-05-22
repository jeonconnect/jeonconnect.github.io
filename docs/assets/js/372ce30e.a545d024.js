"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[7809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="kotlin",c={unversionedId:"notes/kotlin",id:"notes/kotlin",title:"kotlin",description:"java \uc758 await / notify \uad6c\ud604",source:"@site/docs/notes/kotlin.md",sourceDirName:"notes",slug:"/notes/kotlin",permalink:"/docs/notes/kotlin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jwt",permalink:"/docs/notes/jwt"},next:{title:"libgdx",permalink:"/docs/notes/libgdx"}},l={},p=[{value:"java \uc758 await / notify \uad6c\ud604",id:"java-\uc758-await--notify-\uad6c\ud604",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kotlin"},"kotlin"),(0,o.kt)("h2",{id:"java-\uc758-await--notify-\uad6c\ud604"},"java \uc758 await / notify \uad6c\ud604"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"private val lock = ReentrantLock()\nprivate val condition = lock.newCondition()\n\nlock.withLock {           // like synchronized(lock)\n    condition.await()     // like wait()\n}\n\nlock.withLock {           // like synchronized(lock)\n    condition.signal(1000L, TimeUnit.MILLISECONDS)    // like notify()\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/49699398"},"https://stackoverflow.com/a/49699398"))))}u.isMDXComponent=!0}}]);