"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[6226],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(t),u=o,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return t?a.createElement(k,r(r({ref:n},s),{},{components:t})):a.createElement(k,r({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const l={},r="node.js",i={unversionedId:"notes/nodejs",id:"notes/nodejs",title:"node.js",description:"npm ERR! code ERESOLVE",source:"@site/docs/notes/nodejs.md",sourceDirName:"notes",slug:"/notes/nodejs",permalink:"/docs/notes/nodejs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"netty",permalink:"/docs/notes/netty"},next:{title:"pdf",permalink:"/docs/notes/pdf"}},p={},d=[{value:"npm ERR! code ERESOLVE",id:"npm-err-code-eresolve",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3},{value:"ES\ubaa8\ub4c8 \uc0ac\uc6a9\ud558\uae30",id:"es\ubaa8\ub4c8-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ubc29\ubc951 - \uac1c\ubcc4 \ud30c\uc77c\uc5d0 \uc801\uc6a9",id:"\ubc29\ubc951---\uac1c\ubcc4-\ud30c\uc77c\uc5d0-\uc801\uc6a9",level:3},{value:"\ubc29\ubc952 - \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9",id:"\ubc29\ubc952---\uc804\uccb4-\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc801\uc6a9",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0-1",level:3},{value:"ERR_MODULE_NOT_FOUND",id:"err_module_not_found",level:3},{value:"scripts \uc21c\ucc28\uc2e4\ud589\uacfc \ubcd1\ub82c\uc2e4\ud589",id:"scripts-\uc21c\ucc28\uc2e4\ud589\uacfc-\ubcd1\ub82c\uc2e4\ud589",level:2},{value:"cli \uac1c\ubc1c",id:"cli-\uac1c\ubc1c",level:2},{value:"DOM \uc2dc\ubbac\ub808\uc774\uc158",id:"dom-\uc2dc\ubbac\ub808\uc774\uc158",level:2},{value:"jsdom \uacfc node-canvas \uc5f0\ub3d9",id:"jsdom-\uacfc-node-canvas-\uc5f0\ub3d9",level:3}],s={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodejs"},"node.js"),(0,o.kt)("h2",{id:"npm-err-code-eresolve"},"npm ERR! code ERESOLVE"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," \uc2e4\ud589\uc2dc \uc758\uc874\uad00\uacc4\ub97c \uc815\ub9ac\ud558\ub294\ub370 \uc2e4\ud328\ud558\ub294 \uacbd\uc6b0 \ub2e4\uc74c\uc758 \uc120\ud0dd\uc9c0\uac00 \uc788\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm install --force")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," \uc5d0 \uba87 \uac00\uc9c0\uc758 \ub2e4\ub978 \uc758\uc874\uc131\uc774 \ucd94\uac00\ub41c\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm install --legacy-peer-deps")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"peerDependencies")," \uac00 \ub9de\uc9c0 \uc54a\uc544\ub3c4 \ubb34\uc2dc\ud55c\ub2e4. (npm 4~6 \ubc84\uc804 \uae30\ubcf8 \ub3d9\uc791)")),(0,o.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://velog.io/@yonyas/Fix-the-upstream-dependency-conflict-installing-NPM-packages-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%EA%B8%B0"},"npm install ",(0,o.kt)("inlineCode",{parentName:"a"},"--force")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"--legacy-peer-deps")," \ucc28\uc774\uc810 (velog.io)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.korecmblog.com/ERESOLVE-unable-to-resolve-dependency-tree/"},"ERESOLVE unable to resolve dependency tree \ud574\uacb0\ud558\uae30 (korecmblog.com)"))),(0,o.kt)("h2",{id:"es\ubaa8\ub4c8-\uc0ac\uc6a9\ud558\uae30"},"ES\ubaa8\ub4c8 \uc0ac\uc6a9\ud558\uae30"),(0,o.kt)("h3",{id:"\ubc29\ubc951---\uac1c\ubcc4-\ud30c\uc77c\uc5d0-\uc801\uc6a9"},"\ubc29\ubc951 - \uac1c\ubcc4 \ud30c\uc77c\uc5d0 \uc801\uc6a9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"es\ubaa8\ub4c8 \uc801\uc6a9\ud558\ub824\ub294 \ud30c\uc77c \ud655\uc7a5\uc790\ub97c ",(0,o.kt)("inlineCode",{parentName:"li"},".mjs")," \ub85c \ubc14\uafbc\ub2e4.")),(0,o.kt)("h3",{id:"\ubc29\ubc952---\uc804\uccb4-\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc801\uc6a9"},"\ubc29\ubc952 - \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," \uc5d0 ",(0,o.kt)("inlineCode",{parentName:"li"},'"type" : "module"')," \uc744 \uc9c0\uc815\ud55c\ub2e4.")),(0,o.kt)("h3",{id:"\ucc38\uace0-1"},"\ucc38\uace0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.daleseo.com/js-node-es-modules/"},"Node.js\uc5d0\uc11c ES \ubaa8\ub4c8(import/export) \uc0ac\uc6a9\ud558\uae30 | Engineering Blog by Dale Seo"))),(0,o.kt)("h3",{id:"err_module_not_found"},"ERR_MODULE_NOT_FOUND"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"JavaScript \ubc0f TypeScript\uc5d0\uc11c\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ubaa8\ub4c8\uc744 \uc784\ud3ec\ud2b8\ud560 \ub54c \ud30c\uc77c \ud655\uc7a5\uc790\ub97c \uc0dd\ub7b5\ud569\ub2c8\ub2e4. \uc774\ub294 Node.js\uc640 \ub300\ubd80\ubd84\uc758 \ubc88\ub4e4\ub7ec(Bundler, \uc608: webpack, rollup \ub4f1)\uac00 \ud30c\uc77c \ud655\uc7a5\uc790\ub97c \uc790\ub3d9\uc73c\ub85c \ud574\uc11d\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 Node.js\uc758 ES Modules \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 \ud655\uc7a5\uc790\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ESM(EcmaScript Modules)\uc740 JavaScript\uc5d0\uc11c \uacf5\uc2dd\uc801\uc73c\ub85c \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ud45c\uc900\uc785\ub2c8\ub2e4. Node.js\uc5d0\uc11c\ub294 \ubc84\uc804 14\ubd80\ud130 ESM\uc744 \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\uc6d0\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \ud45c\uc900\uc5d0 \ub530\ub974\uba74 \ubaa8\ub4c8\uc744 \uc784\ud3ec\ud2b8\ud560 \ub54c \ud30c\uc77c \ud655\uc7a5\uc790\ub97c \uba85\uc2dc\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node.js \uc2e4\ud589\uc2dc\uc5d0 '--experimental-specifier-resolution=node' \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, TypeScript \ucef4\ud30c\uc77c\ub7ec(",(0,o.kt)("inlineCode",{parentName:"p"},"tsc"),")\uc5d0\uc11c\ub294 \uc774 \uc635\uc158\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \uc635\uc158\uc740 Node.js 14 \ubc84\uc804 \uc774\uc0c1\uc5d0\uc11c ES \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud560 \ub54c, \ubaa8\ub4c8 \uc2a4\ud399\uc744 \uba85\uc2dc\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud655\uc7a5\uc790\ub97c \uc790\ub3d9\uc73c\ub85c \ucd94\ub860\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub294 Node.js \uc2e4\ud589\uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc73c\ub85c, \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"node --experimental-specifier-resolution=node your-script.js\n")),(0,o.kt)("p",{parentName:"li"},"\uc774\ub807\uac8c \ud558\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"your-script.js"),"\uc5d0\uc11c \ud655\uc7a5\uc790 \uc5c6\uc774 \ubaa8\ub4c8\uc744 \uc784\ud3ec\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "))),(0,o.kt)("h2",{id:"scripts-\uc21c\ucc28\uc2e4\ud589\uacfc-\ubcd1\ub82c\uc2e4\ud589"},"scripts \uc21c\ucc28\uc2e4\ud589\uacfc \ubcd1\ub82c\uc2e4\ud589"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&&")," \ub85c \ub098\uc5f4\ub41c \uba85\ub839\uc740 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uace0 ",(0,o.kt)("inlineCode",{parentName:"li"},"&")," \ub85c \ub098\uc5f4\ub41c \uba85\ub839\uc740 \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ub41c\ub2e4.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://velog.io/@fkstndnjs/package.json-scripts%EC%97%90-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4"},"package.json \"scripts\"\uc758 '&&'\uc640 '&'\uc758 \ucc28\uc774 (velog.io)")))),(0,o.kt)("li",{parentName:"ul"},"\uc11c\ub4dc\ud30c\ud2f0 \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-cli-tools/concurrently"},"open-cli-tools/concurrently: Run commands concurrently. Like ",(0,o.kt)("inlineCode",{parentName:"a"},"npm run watch-js & npm run watch-less")," but better. (github.com)"))))),(0,o.kt)("h2",{id:"cli-\uac1c\ubc1c"},"cli \uac1c\ubc1c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/building-typescript-cli-node-js-commander/"},"Building a TypeScript CLI with Node.js and Commander - LogRocket Blog"))),(0,o.kt)("h2",{id:"dom-\uc2dc\ubbac\ub808\uc774\uc158"},"DOM \uc2dc\ubbac\ub808\uc774\uc158"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jsdom"),"\uc740 \ube0c\ub77c\uc6b0\uc800 \ud658\uacbd\uc744 \ud749\ub0b4 \ub0b4\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c\uc11c, Node.js\uc5d0\uc11c DOM \uad00\ub828 API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 \uac04\ub2e8\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"jsdom")," \uc0ac\uc6a9 \uc608\uc81c\uc785\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const { JSDOM } = require(\'jsdom\');\n\nconst dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);\n\nconsole.log(dom.window.document.querySelector("p").textContent); // "Hello world"\n')),(0,o.kt)("p",null,"\uc704 \ucf54\ub4dc\ub294 HTML \ubb38\uc790\uc5f4\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM"),"\uc758 \uc778\uc2a4\ud134\uc2a4\ub85c \ubcc0\ud658\ud558\uace0, \ube0c\ub77c\uc6b0\uc800\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c DOM \uc694\uc18c\ub97c \uc120\ud0dd\ud558\uace0 \uc870\uc791\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9 \ucf54\ub4dc\ub97c Node.js\uc5d0\uc11c \uc2e4\ud589\ud558\ub824\uba74, \ud574\ub2f9 \ucf54\ub4dc\uac00 DOM API\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub530\ub77c ",(0,o.kt)("inlineCode",{parentName:"p"},"jsdom"),"\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9 \ucf54\ub4dc\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"\ub098 ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\uc640 \uac19\uc740 \uc804\uc5ed \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74, \uc774 \uac1d\uccb4\ub4e4\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"jsdom"),"\uc73c\ub85c\ubd80\ud130 \uc5bb\uc740 \uac1d\uccb4\ub85c \ub300\uccb4\ud574\uc57c \ud569\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const { JSDOM } = require('jsdom');\n\nconst dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);\n\n// \ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9 \ucf54\ub4dc\uac00 \uc0ac\uc6a9\ud558\ub294 \uc804\uc5ed \uac1d\uccb4\ub97c jsdom\uc73c\ub85c \ub300\uccb4\ud569\ub2c8\ub2e4.\nglobal.window = dom.window;\nglobal.document = dom.window.document;\nglobal.navigator = {\n  userAgent: 'node.js',\n};\n\n// \uc774\uc81c \ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n// \uc608: console.log(document.querySelector(\"p\").textContent); // \"Hello world\"\n")),(0,o.kt)("p",null,"\uc774\ub7f0 \ubc29\uc2dd\uc73c\ub85c \ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9 \ucf54\ub4dc\ub97c Node.js\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9 \ucf54\ub4dc\uac00 \ube0c\ub77c\uc6b0\uc800\uc758 \ud2b9\uc815 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74, \uc774 \uae30\ub2a5\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"jsdom"),"\uc73c\ub85c \uc644\ubcbd\ud558\uac8c \ud749\ub0b4 \ub0bc \uc218 \uc5c6\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, \ud574\ub2f9 \uae30\ub2a5\uc744 \ubaa8\uc758(Mock)\ud558\uac70\ub098 \ud574\ub2f9 \ucf54\ub4dc\ub97c Node.js\uc640 \ud638\ud658\ub418\ub3c4\ub85d \uc218\uc815\ud574\uc57c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jsdom"),"\uc740 JavaScript\uc5d0\uc11c \uac00\uc7a5 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc911 \ud558\ub098\ub85c, \ud2b9\ud788 \ud14c\uc2a4\ud305 \ubc0f \uc6f9 \uc2a4\ud06c\ub808\uc774\ud551\uc5d0\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Enzyme"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/enzymejs/enzyme"},"Enzyme"),"\uc740 Airbnb\uc5d0\uc11c \uac1c\ubc1c\ud55c JavaScript \ud14c\uc2a4\ud305 \uc720\ud2f8\ub9ac\ud2f0\ub85c, React \ucef4\ud3ec\ub10c\ud2b8\uc758 \ucd9c\ub825\uc744 \uc870\uc791\ud558\uace0 \ud14c\uc2a4\ud2b8\ud558\ub294\ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. Enzyme\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"mount")," API\ub294 \uc804\uccb4 DOM API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,o.kt)("inlineCode",{parentName:"li"},"jsdom"),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Jest"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest"},"Jest"),"\ub294 Facebook\uc5d0\uc11c \uac1c\ubc1c\ud55c JavaScript \ud14c\uc2a4\ud305 \ud504\ub808\uc784\uc6cc\ud06c\ub85c, ",(0,o.kt)("inlineCode",{parentName:"li"},"jsdom"),"\uc744 \ud1b5\ud574 DOM \ud658\uacbd\uc5d0\uc11c\uc758 \ud14c\uc2a4\ud2b8\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Vue Test Utils"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-test-utils"},"Vue Test Utils"),"\ub294 Vue.js\uc758 \uacf5\uc2dd \ub2e8\uc704 \ud14c\uc2a4\ud305 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c, ",(0,o.kt)("inlineCode",{parentName:"li"},"jsdom"),"\uc744 \uc774\uc6a9\ud574 \uac00\uc0c1\uc758 DOM \ud658\uacbd\uc5d0\uc11c Vue \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9c8\uc6b4\ud2b8\ud558\uace0 \uc870\uc791\ud569\ub2c8\ub2e4.")),(0,o.kt)("h3",{id:"jsdom-\uacfc-node-canvas-\uc5f0\ub3d9"},"jsdom \uacfc node-canvas \uc5f0\ub3d9"),(0,o.kt)("p",null,"jsdom\uc740 JavaScript\ub97c \uc6f9 \ube0c\ub77c\uc6b0\uc800\uac00 \uc544\ub2cc Node.js \ud658\uacbd\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc6f9 \ud398\uc774\uc9c0\ub97c \ud45c\ud604\ud558\uace0 \uc6f9 API\ub97c \uc81c\uacf5\ud558\uba70, JavaScript \ucf54\ub4dc\ub97c \uc11c\ubc84\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc jsdom\uc740 \ube0c\ub77c\uc6b0\uc800\uc758 \ubaa8\ub4e0 \uae30\ub2a5\uc744 \uc644\ubcbd\ud558\uac8c \ubaa8\ubc29\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8 \uc911 \ud558\ub098\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"<canvas>")," \uc694\uc18c\uc758 \uadf8\ub798\ud53d \uc791\uc5c5\uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c jsdom\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"<canvas>")," \uc694\uc18c\ub97c \uc0dd\uc131\ud558\uba74, \uadf8 \uc694\uc18c\uc5d0 \uadf8\ub9bc\uc744 \uadf8\ub9b4 \uc218 \uc788\ub294 \uba54\uc11c\ub4dc\ub4e4\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc2e4\uc81c\ub85c \uadf8\ub9bc\uc744 \uadf8\ub9ac\uae30 \uc704\ud574\uc11c\ub294 \ucd94\uac00\uc801\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"node-canvas")," \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"node-canvas"),"\ub294 Node.js \ud658\uacbd\uc5d0\uc11c Canvas API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"node-canvas"),"\ub97c \uc0ac\uc6a9\ud574 jsdom\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"<canvas>")," \uc694\uc18c\uc5d0 \uadf8\ub9bc\uc744 \uadf8\ub9ac\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { JSDOM } = require('jsdom');\nconst { Canvas, Image, ImageData } = require('canvas');\n\nconst dom = new JSDOM(`<!DOCTYPE html><body><canvas id=\"myCanvas\"></canvas></body></html>`);\n\n// node-canvas\ub97c jsdom\uc758 window\uc5d0 \ub4f1\ub85d\ud569\ub2c8\ub2e4.\ndom.window.HTMLCanvasElement = Canvas;\ndom.window.Image = Image;\ndom.window.ImageData = ImageData;\n\nconst canvas = dom.window.document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\n// \uc5ec\uae30\uc5d0\uc11c canvas\uc5d0 \uadf8\ub9bc\uc744 \uadf8\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nctx.fillStyle = 'red';\nctx.fillRect(0, 0, 100, 100);\n")),(0,o.kt)("p",null,"\uc774 \ucf54\ub4dc\uc5d0\uc11c\ub294 \uba3c\uc800 jsdom\uc73c\ub85c HTML \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uadf8 \ub2e4\uc74c ",(0,o.kt)("inlineCode",{parentName:"p"},"node-canvas"),"\uc5d0\uc11c \ud544\uc694\ud55c \ud074\ub798\uc2a4\ub4e4\uc744 jsdom\uc758 window\uc5d0 \ub4f1\ub85d\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,o.kt)("inlineCode",{parentName:"p"},"<canvas>")," \uc694\uc18c\ub97c \uac00\uc838\uc624\uace0, ",(0,o.kt)("inlineCode",{parentName:"p"},"getContext('2d')")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud574 2D \ub80c\ub354\ub9c1 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc5bb\uc2b5\ub2c8\ub2e4. \uc774\uc81c ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud574 \uc2e4\uc81c\ub85c \uadf8\ub9bc\uc744 \uadf8\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);