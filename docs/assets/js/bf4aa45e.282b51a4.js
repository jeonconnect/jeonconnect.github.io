"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[6803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},c="jwt",l={unversionedId:"notes/jwt",id:"notes/jwt",title:"jwt",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c payload \ud30c\uc2f1\ud558\uae30",source:"@site/docs/notes/jwt.md",sourceDirName:"notes",slug:"/notes/jwt",permalink:"/docs/notes/jwt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"javascript",permalink:"/docs/notes/javascript"},next:{title:"libgdx",permalink:"/docs/notes/libgdx"}},i={},s=[{value:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c payload \ud30c\uc2f1\ud558\uae30",id:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c-payload-\ud30c\uc2f1\ud558\uae30",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jwt"},"jwt"),(0,o.kt)("h2",{id:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c-payload-\ud30c\uc2f1\ud558\uae30"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c payload \ud30c\uc2f1\ud558\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const base64Url = jwt.split('.')[1];\nonst base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');\nconst jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {\n    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);\n}).join(''))\nconst result = JSON.parse(jsonPayload);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/38552302"},"https://stackoverflow.com/a/38552302"))))}u.isMDXComponent=!0}}]);