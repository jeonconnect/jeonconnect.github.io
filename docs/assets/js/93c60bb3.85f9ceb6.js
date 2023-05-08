"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[6519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={},o="webpack",c={unversionedId:"notes/webpack",id:"notes/webpack",title:"webpack",description:"\uc0c8 Typescript \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\ud558\uae30",source:"@site/docs/notes/webpack.md",sourceDirName:"notes",slug:"/notes/webpack",permalink:"/docs/notes/webpack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webassembly",permalink:"/docs/notes/webassembly"},next:{title:"webrtc",permalink:"/docs/notes/webrtc"}},i={},s=[{value:"\uc0c8 Typescript \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\ud558\uae30",id:"\uc0c8-typescript-\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791\ud558\uae30",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webpack"},"webpack"),(0,a.kt)("h2",{id:"\uc0c8-typescript-\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791\ud558\uae30"},"\uc0c8 Typescript \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir new_app\ncd ./new_app\nnpm init -y\nnpm install webpack webpack-cli --save-dev\nnpm install copy-webpack-plugin css-loader sass sass-loader source-map-loader style-loader webpack-dev-server --save-dev\nnpm install rimraf --save-dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev typescript ts-loader\nnpx tsc --init\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \uc5d0 \uc2e4\ud589 \uc2a4\ud06c\ub9bd\ud2b8 \ucd94\uac00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  ...\n  "scripts": {\n    "build": "rimraf dist && webpack",\n    "start": "rimraf dist && webpack-dev-server"\n  },\n  ...\n}\n\n')),(0,a.kt)("p",null,"webpack.config.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const path = require("path");\nconst CopyPlugin = require("copy-webpack-plugin");\n\nconst dist = path.resolve(__dirname, "dist");\n\nmodule.exports = {\n    experiments: {\n        asyncWebAssembly: true,\n    },\n    mode: "production",\n    entry: {\n        index: "./src/index.tsx",\n    },\n    devtool: \'source-map\',\n    module: {\n        rules: [\n            {\n                test: /\\.tsx?$/,\n                use: \'ts-loader\',\n                exclude: /node_modules/\n            },\n            {\n                test: /\\.s[ac]ss$/i,\n                use: [\n                    \'style-loader\',\n                    \'css-loader\',\n                    \'sass-loader\',\n                ],\n            },\n            {enforce: "pre", test: /\\.js$/, loader: "source-map-loader"}\n        ]\n    },\n    resolve: {\n        extensions: [".ts", ".tsx", ".js", ".json"],\n    },\n    output: {\n        path: dist,\n        filename: "[name].js",\n        chunkFilename: `[id].${new Date().getTime()}.js`,\n    },\n    devServer: {\n        static: {\n            directory: path.join(__dirname, \'public\'),\n        },\n        open: true,\n    },\n    plugins: [\n        new CopyPlugin({\n            patterns: [\n                {\n                    from: path.resolve(__dirname, \'public\'),\n                }\n            ]\n        }),\n    ]\n};\n')),(0,a.kt)("p",null,"public/index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n<head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>\n    <meta charset="utf-8">\n    <meta name="viewport"\n          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">\n    <meta name="google" content="notranslate">\n    <meta http-equiv="cache-control" content="max-age=0"/>\n    <meta http-equiv="cache-control" content="no-cache"/>\n    <meta http-equiv="cache-control" content="no-store"/>\n    <meta http-equiv="expires" content="-1"/>\n    <meta http-equiv="pragma" content="no-cache"/>\n    <title></title>\n</head>\n<body>\n<div id="app"></div>\n<script src="index.js"><\/script>\n</body>\n</html>\n')),(0,a.kt)("h2",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://webpack.kr/guides/getting-started/"},"Getting Started | \uc6f9\ud329 (webpack.kr)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://webpack.kr/guides/typescript/"},"TypeScript | \uc6f9\ud329 (webpack.kr)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://webpack.kr/configuration/dev-server/"},"DevServer | \uc6f9\ud329 (webpack.kr)")))))}u.isMDXComponent=!0}}]);