"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},l="flutter",a={unversionedId:"notes/flutter",id:"notes/flutter",title:"flutter",description:"Conditional Widget",source:"@site/docs/notes/flutter.md",sourceDirName:"notes",slug:"/notes/flutter",permalink:"/docs/notes/flutter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"css",permalink:"/docs/notes/css"},next:{title:"git",permalink:"/docs/notes/git"}},c={},u=[{value:"Conditional Widget",id:"conditional-widget",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flutter"},"flutter"),(0,o.kt)("h2",{id:"conditional-widget"},"Conditional Widget"),(0,o.kt)("p",null,"child \uc5d0 \ucee8\ub514\uc154\ub110 \uc704\uc82f \uc9c0\uc815"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"true ? Text('xxx') : null\n")),(0,o.kt)("p",null,"children \uc5d0 \ucee8\ub514\uc154\ub110 \uc704\uc82f \ucd94\uac00"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if(true) ...[\n    Text('1'),\n    Text('2'),\n]\n")),(0,o.kt)("p",null,"\ub610\ub294"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if(true) ...[\n    Text('1'),\n    Text('2'),\n] else ...[\n    Text('3'),\n    Text('4'),\n]\n")))}s.isMDXComponent=!0}}]);