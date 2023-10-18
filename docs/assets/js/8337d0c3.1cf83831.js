"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[3676],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},a="git",c={unversionedId:"notes/git",id:"notes/git",title:"git",description:"\uc124\uc815",source:"@site/docs/notes/git.md",sourceDirName:"notes",slug:"/notes/git",permalink:"/docs/notes/git",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flutter",permalink:"/docs/notes/flutter"},next:{title:"gradle",permalink:"/docs/notes/gradle"}},l={},u=[{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"\uc124\uc815\ud56d\ubaa9 \uc81c\uac70",id:"\uc124\uc815\ud56d\ubaa9-\uc81c\uac70",level:3},{value:"\ud2b9\uc815 commit \uc5d0 \ub300\ud55c \uc791\uc5c5",id:"\ud2b9\uc815-commit-\uc5d0-\ub300\ud55c-\uc791\uc5c5",level:2},{value:"\ud2b9\uc815 commit \uccb4\ud06c\uc544\uc6c3",id:"\ud2b9\uc815-commit-\uccb4\ud06c\uc544\uc6c3",level:3},{value:"\ud2b9\uc815 commit \uc744 \uc0c8\ub85c\uc6b4 branch \ub85c \uc0dd\uc131\ud558\uba70 \uccb4\ud06c\uc544\uc6c3",id:"\ud2b9\uc815-commit-\uc744-\uc0c8\ub85c\uc6b4-branch-\ub85c-\uc0dd\uc131\ud558\uba70-\uccb4\ud06c\uc544\uc6c3",level:3},{value:"\ud2b9\uc815 commit \uc2dc\uc810\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8 \ub418\ub3cc\ub9ac\uae30",id:"\ud2b9\uc815-commit-\uc2dc\uc810\uc73c\ub85c-\ud504\ub85c\uc81d\ud2b8-\ub418\ub3cc\ub9ac\uae30",level:3}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git"},"git"),(0,o.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,o.kt)("h3",{id:"\uc124\uc815\ud56d\ubaa9-\uc81c\uac70"},"\uc124\uc815\ud56d\ubaa9 \uc81c\uac70"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--unset")," \uc2a4\uc704\uce58\ub97c \uc0ac\uc6a9\ud55c\ub2e4.\n\ub2e4\uc74c \uc608\uc2dc\ub97c \ucc38\uace0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git config --global --unset user.name\n")),(0,o.kt)("h2",{id:"\ud2b9\uc815-commit-\uc5d0-\ub300\ud55c-\uc791\uc5c5"},"\ud2b9\uc815 commit \uc5d0 \ub300\ud55c \uc791\uc5c5"),(0,o.kt)("h3",{id:"\ud2b9\uc815-commit-\uccb4\ud06c\uc544\uc6c3"},"\ud2b9\uc815 commit \uccb4\ud06c\uc544\uc6c3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <commit-id-sha>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ucee4\ubc0b \uc2dc\uc810\uc758 \ud504\ub85c\uc81d\ud2b8 \uc0c1\ud0dc\ub97c \ud655\uc778\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4. "),(0,o.kt)("li",{parentName:"ul"},"detached HEAD mode \uc0c1\ud0dc\ub85c \ub418\uba70, \uc774 \uc0c1\ud0dc\uc5d0\uc11c \uc218\uc815\uc744 \ud574\uc11c\ub294 \uc548\ub41c\ub2e4. ")),(0,o.kt)("h3",{id:"\ud2b9\uc815-commit-\uc744-\uc0c8\ub85c\uc6b4-branch-\ub85c-\uc0dd\uc131\ud558\uba70-\uccb4\ud06c\uc544\uc6c3"},"\ud2b9\uc815 commit \uc744 \uc0c8\ub85c\uc6b4 branch \ub85c \uc0dd\uc131\ud558\uba70 \uccb4\ud06c\uc544\uc6c3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout -b <new-branch-name> <commit-id-sha>\n")),(0,o.kt)("h3",{id:"\ud2b9\uc815-commit-\uc2dc\uc810\uc73c\ub85c-\ud504\ub85c\uc81d\ud2b8-\ub418\ub3cc\ub9ac\uae30"},"\ud2b9\uc815 commit \uc2dc\uc810\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8 \ub418\ub3cc\ub9ac\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git reset --hard <commit-id-sha>\n")))}p.isMDXComponent=!0}}]);