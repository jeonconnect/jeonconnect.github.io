"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[6911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,s=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return n?r.createElement(s,i(i({ref:t},m),{},{components:n})):r.createElement(s,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="rust",o={unversionedId:"notes/rust",id:"notes/rust",title:"rust",description:"\ube4c\ub4dc",source:"@site/docs/notes/rust.md",sourceDirName:"notes",slug:"/notes/rust",permalink:"/docs/notes/rust",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"react",permalink:"/docs/notes/react"},next:{title:"sd",permalink:"/docs/notes/sd"}},p={},u=[{value:"\ube4c\ub4dc",id:"\ube4c\ub4dc",level:2},{value:"dependency \ub85c git \uc800\uc7a5\uc18c \uc9c0\uc815",id:"dependency-\ub85c-git-\uc800\uc7a5\uc18c-\uc9c0\uc815",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:4},{value:"cargo \ub85c \uc124\uce58\ud55c \ud504\ub85c\uadf8\ub7a8\uc758 \uad00\ub9ac",id:"cargo-\ub85c-\uc124\uce58\ud55c-\ud504\ub85c\uadf8\ub7a8\uc758-\uad00\ub9ac",level:2},{value:"\uc5c5\ub370\uc774\ud2b8",id:"\uc5c5\ub370\uc774\ud2b8",level:3},{value:"\ubc29\ubc951",id:"\ubc29\ubc951",level:4},{value:"\ubc29\ubc952",id:"\ubc29\ubc952",level:4},{value:"\uc5d0\ub7ec\ucc98\ub9ac",id:"\uc5d0\ub7ec\ucc98\ub9ac",level:2},{value:"Iterator",id:"iterator",level:2},{value:"Iterator \uc640 IntoIterator \uc758 \ucc28\uc774",id:"iterator-\uc640-intoiterator-\uc758-\ucc28\uc774",level:3},{value:"\ud074\ub798\uc2a4 \uacc4\uce35\uad6c\uc870 \ud45c\ud604",id:"\ud074\ub798\uc2a4-\uacc4\uce35\uad6c\uc870-\ud45c\ud604",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rust"},"rust"),(0,a.kt)("h2",{id:"\ube4c\ub4dc"},"\ube4c\ub4dc"),(0,a.kt)("h3",{id:"dependency-\ub85c-git-\uc800\uc7a5\uc18c-\uc9c0\uc815"},"dependency \ub85c git \uc800\uc7a5\uc18c \uc9c0\uc815"),(0,a.kt)("p",null,"~/.cargo/config \ud30c\uc77c\uc5d0 \uc544\ub798 \ub0b4\uc6a9\uc744 \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[net]\ngit-fetch-with-cli = true\n")),(0,a.kt)("p",null,"Cargo.toml \uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc758\uc874\uc131 \uc9c0\uc815\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'xxx_lib = { git = "ssh://git@xxx.com/yyy/xxx_lib.git" }\n')),(0,a.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc73c\ub85c \ud574\ub2f9 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub9cc \ub2e4\uc2dc \uac31\uc2e0\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo update -p xxx_lib\n")),(0,a.kt)("h4",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/cargo/pull/5914"},"https://github.com/rust-lang/cargo/pull/5914"))),(0,a.kt)("h2",{id:"cargo-\ub85c-\uc124\uce58\ud55c-\ud504\ub85c\uadf8\ub7a8\uc758-\uad00\ub9ac"},"cargo \ub85c \uc124\uce58\ud55c \ud504\ub85c\uadf8\ub7a8\uc758 \uad00\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34484361/does-cargo-install-have-an-equivalent-update-commands"},"https://stackoverflow.com/questions/34484361/does-cargo-install-have-an-equivalent-update-commands"))),(0,a.kt)("h3",{id:"\uc5c5\ub370\uc774\ud2b8"},"\uc5c5\ub370\uc774\ud2b8"),(0,a.kt)("h4",{id:"\ubc29\ubc951"},"\ubc29\ubc951"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo install <crate>\n")),(0,a.kt)("h4",{id:"\ubc29\ubc952"},"\ubc29\ubc952"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cargo-update")," \ud504\ub85c\uadf8\ub7a8\uc744 \ubcc4\ub3c4\ub85c \uc774\uc6a9\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo install cargo-update\n")),(0,a.kt)("p",null,"\uc124\uce58\ub41c \ubaa8\ub4e0 cargo \ud504\ub85c\uadf8\ub7a8\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uba85\ub839\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo install-update -a\n")),(0,a.kt)("h2",{id:"\uc5d0\ub7ec\ucc98\ub9ac"},"\uc5d0\ub7ec\ucc98\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc5d0\ub7ec\ub97c \ubc1b\uc744 \uc218 \uc788\ub294 Error \uc640 Result \ub97c \uc815\uc758\ud55c\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type AnyError = Box<dyn std::error::Error + Send + Sync + 'static>;\ntype AnyResult = Result<T, AnyError>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ubc18\ud658 \ud0c0\uc785\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyResult<T>")," \ub85c \uc9c0\uc815\ud558\uba74  ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," \uc5f0\uc0b0\uc790\ub294 \ubaa8\ub4e0 \uc624\ub958 \ud0c0\uc785\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyResult")," \ub85c \uc790\ub3d9 \ubcc0\ud658\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"AnyError::from(another_error)")," \uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc218\ub3d9\uc73c\ub85c \uc5d0\ub7ec \ud615\uc2dd\uc744 \ubcc0\ud658\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ubc18\ud658\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyError")," \uc5d0 \ub300\ud574 \ud2b9\uc815 \uc624\ub958\ub9cc \ucc98\ub9ac\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"downcast_ref")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"match some_method() {\n    Ok(())=>return Ok(()),\n    Err(e)=>{\n        match e.downcast_ref::<SepecialError>() {\n            Some(se) => {\n                //TODO \ud544\ud130\ub9c1\ub41c \uc5d0\ub7ec\uc5d0 \ub300\ud574\uc11c \ubb54\uac00 \ucc98\ub9ac\ud55c\ub2e4.\n            }\n            _ => return Err(e)\n        }\n    }\n}\n")),(0,a.kt)("h2",{id:"iterator"},"Iterator"),(0,a.kt)("p",null,"Rust\uc758 Iterator trait\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pub trait Iterator {\n    type Item;\n    fn next(&mut self) -> Option<Self::Item>;\n    // \uc5ec\uae30\uc5d0 \ub354 \ub9ce\uc740 \uba54\uc11c\ub4dc\uac00 \uc788\uc9c0\ub9cc, \uc9c8\ubb38\uc5d0 \ucd08\uc810\uc744 \ub9de\ucd94\uae30 \uc704\ud574 \uc0dd\ub7b5\ud558\uaca0\uc2b5\ub2c8\ub2e4.\n}\n")),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"type Item"),"\uc740 \uc5f0\uad00 \ud0c0\uc785(Associated Type)\uc785\ub2c8\ub2e4. \uc5f0\uad00 \ud0c0\uc785\uc740 \ud2b9\uc815 trait\uacfc \uad00\ub828\ub41c \ud0c0\uc785\uc744 \uc815\uc758\ud560 \ub54c \uc0ac\uc6a9\ub418\uba70, \uc774\ub97c \uad6c\ud604\ud558\ub294 \uad6c\uc870\uccb4\ub098 \uc5f4\uac70\uccb4\uc5d0\uc11c \uc2e4\uc81c \ud0c0\uc785\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. Iterator trait\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"\uc740 \uc774\ud130\ub808\uc774\ud130\uac00 \ubc18\ud658\ud558\ub294 \uac12\uc758 \ud0c0\uc785\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"trait Iterator<Item>"),"\uc758 \uacbd\uc6b0, \uc774\ub294 \uc81c\ub124\ub9ad \ud0c0\uc785(Generic Type)\uc744 \uc0ac\uc6a9\ud55c \ud45c\ud604\uc785\ub2c8\ub2e4. \uc81c\ub124\ub9ad \ud0c0\uc785\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc5ec\ub7ec \ud0c0\uc785\uc5d0 \ub300\ud574 \ub3d9\uc791\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \ub54c \uc0ac\uc6a9\ub418\uba70, \ud2b9\uc815 \ud0c0\uc785\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub450 \ud45c\ud604\uc758 \uc8fc\uc694 \ucc28\uc774\uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5f0\uad00 \ud0c0\uc785(Associated Type)\uc744 \uc0ac\uc6a9\ud55c ",(0,a.kt)("inlineCode",{parentName:"li"},"type Item"),": Iterator trait\uacfc \uad00\ub828\ub41c \ud0c0\uc785\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uad6c\ud604\ud558\ub294 \uad6c\uc870\uccb4\ub098 \uc5f4\uac70\uccb4\uc5d0\uc11c \uc2e4\uc81c \ud0c0\uc785\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc81c\ub124\ub9ad \ud0c0\uc785(Generic Type)\uc744 \uc0ac\uc6a9\ud55c ",(0,a.kt)("inlineCode",{parentName:"li"},"trait Iterator<Item>"),": Iterator trait\ub97c \uad6c\ud604\ud560 \ub54c \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uad6c\ud604 \uc2dc\uc810\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc5d0 \ub354 \ub9ce\uc740 \uc720\uc5f0\uc131\uc774 \uc0dd\uae41\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc5f0\uad00 \ud0c0\uc785\uacfc \uc81c\ub124\ub9ad \ud0c0\uc785 \ubaa8\ub450 \ucf54\ub4dc\ub97c \ucd94\uc0c1\ud654\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\uc9c0\ub9cc, \uc5b4\ub5a4 \uc0c1\ud669\uc5d0 \uc801\ud569\ud55c\uc9c0\uc5d0 \ub530\ub77c \uc120\ud0dd\uc774 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5f0\uad00 \ud0c0\uc785\uc740 \uc8fc\ub85c trait\uacfc \uad00\ub828\ub41c \ud0c0\uc785\uc774 \ud558\ub098\ubfd0\uc77c \ub54c \uc0ac\uc6a9\ub418\uba70, \uc81c\ub124\ub9ad \ud0c0\uc785\uc740 \uc5ec\ub7ec \ud0c0\uc785\uc5d0 \ub3d9\uc791\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 Rust\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait\uc744 \uad6c\ud604\ud558\ub294 \uac04\ub2e8\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"CountUp"),"\uc774\ub77c\ub294 \uad6c\uc870\uccb4\ub97c \uc815\uc758\ud558\uace0, \uadf8 \uad6c\uc870\uccb4\uc5d0 \ub300\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'struct CountUp {\n    current: i32,\n    limit: i32,\n}\n\nimpl Iterator for CountUp {\n    type Item = i32; // \uc5f0\uad00 \ud0c0\uc785\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n\n    fn next(&mut self) -> Option<Self::Item> {\n        if self.current <= self.limit {\n            let result = self.current;\n            self.current += 1;\n            Some(result)\n        } else {\n            None\n        }\n    }\n}\n\nfn main() {\n    let count_up = CountUp {\n        current: 1,\n        limit: 5,\n    };\n\n    for number in count_up {\n        println!("{}", number);\n    }\n}\n')),(0,a.kt)("p",null,"\uc774 \ucf54\ub4dc\ub294 1\uc5d0\uc11c 5\uae4c\uc9c0 \uc22b\uc790\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"CountUp")," \uad6c\uc870\uccb4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"current"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," \ub450 \uac1c\uc758 \ud544\ub4dc\ub97c \uac00\uc9c0\uba70, \uc774\ud130\ub808\uc774\uc158 \ub3c4\uc911 \ud604\uc7ac \uac12\uacfc \uc0c1\ud55c\uac12\uc744 \ucd94\uc801\ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait\uc758 \uad6c\ud604\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," \ud0c0\uc785\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),"\ub85c \uc9c0\uc815\ud558\uace0, ",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud558\uc5ec \uc22b\uc790\ub97c \uc99d\uac00\uc2dc\ud0a4\uac70\ub098 \uc774\ud130\ub808\uc774\uc158\uc758 \ub05d\uc5d0 \ub3c4\ub2ec\ud588\uc744 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"iterator-\uc640-intoiterator-\uc758-\ucc28\uc774"},"Iterator \uc640 IntoIterator \uc758 \ucc28\uc774"),(0,a.kt)("p",null,"Rust\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator"),"\ub294 \uad00\ub828\ub418\uc5b4 \uc788\uc9c0\ub9cc \uc11c\ub85c \ub2e4\ub978 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ub418\ub294 \ub450 \uac1c\uc758 trait\uc785\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait\uc740 \uac1d\uccb4\ub97c \ubc18\ubcf5\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. \uc774 \ud2b9\uc131\uc744 \uad6c\ud604\ud558\ub294 \ud0c0\uc785\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud574\uc57c \ud558\uba70, \uc774 \uba54\uc11c\ub4dc\ub294 \ubc18\ubcf5\uc758 \ub2e4\uc74c \ud56d\ubaa9\uc744 \ubc18\ud658\ud558\uac70\ub098 \ub354 \uc774\uc0c1 \ud56d\ubaa9\uc774 \uc5c6\uc744 \uacbd\uc6b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait\uc740 \ub610\ud55c \uc5f0\uad00 \ud0c0\uc785 ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"\uc744 \uc815\uc758\ud558\uba70, \uc774\ub294 \ubc18\ubcf5\ub418\ub294 \uc694\uc18c\uc758 \ud0c0\uc785\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator")," trait:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator")," trait\uc740 \uac1d\uccb4\ub97c \uc774\ud130\ub808\uc774\ud130\ub85c \ubcc0\ud658\ud558\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. \uc774 \ud2b9\uc131\uc744 \uad6c\ud604\ud558\ub294 \ud0c0\uc785\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"into_iter()")," \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud574\uc57c \ud558\uba70, \uc774 \uba54\uc11c\ub4dc\ub294 \ud574\ub2f9 \ud0c0\uc785\uc758 \uac12\uc744 \ud574\ub2f9 \uac12\uc758 \uc774\ud130\ub808\uc774\ud130\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator")," trait\uc740 \ub610\ud55c \uc5f0\uad00 \ud0c0\uc785 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoIter"),"\ub97c \uc815\uc758\ud558\uba70, \uc774\ub294 \ubc18\ud658\ub418\ub294 \uc774\ud130\ub808\uc774\ud130\uc758 \ud0c0\uc785\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."))),(0,a.kt)("p",null,"\uac04\ub2e8\ud788 \uc694\uc57d\ud558\uba74, ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator"),"\ub294 \uac1d\uccb4\ub97c \ubc18\ubcf5\ud558\ub294 \ub370 \ud544\uc694\ud55c \uba54\uc11c\ub4dc\ub97c \uc815\uc758\ud558\ub294 \ubc18\uba74, ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator"),"\ub294 \uac1d\uccb4\ub97c \uc774\ud130\ub808\uc774\ud130\ub85c \ubcc0\ud658\ud558\ub294 \ub370 \ud544\uc694\ud55c \uba54\uc11c\ub4dc\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, Rust\uc758 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>")," \ud0c0\uc785\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator")," trait\uc744 \uad6c\ud604\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\ub97c \uc774\ud130\ub808\uc774\ud130\ub85c \ubcc0\ud658\ud558\uc5ec \uc694\uc18c\ub97c \ubc18\ubcf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'fn main() {\n    let vec = vec![1, 2, 3];\n\n    for item in vec {\n        println!("{}", item);\n    }\n}\n')),(0,a.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," \ub8e8\ud504\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"vec"),"\uc774 \uad6c\ud604\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator")," trait\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"into_iter()")," \uba54\uc11c\ub4dc\ub97c \ub0b4\ubd80\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uc5ec \uc774\ud130\ub808\uc774\ud130\ub97c \uc5bb\uace0, \uadf8 \uc774\ud130\ub808\uc774\ud130\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc18\ubcf5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterator")," trait\uc744 \uc9c1\uc811 \uad6c\ud604\ud558\uc9c0 \uc54a\ub294\ub370, \uc774\ub294 \uba87 \uac00\uc9c0 \uc774\uc720 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc18c\uc720\uad8c \ubc0f \ubd88\ubcc0\uc131 \ubcf4\uc874: ",(0,a.kt)("inlineCode",{parentName:"li"},"Iterator")," trait\uc744 \uc9c1\uc811 \uad6c\ud604\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"Vec<T>"),"\uc758 \uc18c\uc720\uad8c\uc744 \ub2e4\ub8e8\uac70\ub098 \ub0b4\ubd80 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ubd88\ubcc0\uc131\uc744 \ubcf4\uc874\ud558\uae30\uac00 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"li"},"Vec<T>"),"\ub294 \uceec\ub809\uc158\uc5d0 \ub300\ud55c \uc18c\uc720\uad8c\uc744 \uc720\uc9c0\ud558\uba74\uc11c \uc774\ud130\ub808\uc774\uc158\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub294 \ubcc4\ub3c4\uc758 \uc774\ud130\ub808\uc774\ud130\ub97c \uc81c\uacf5\ud558\ub294 \uac83\uc774 \ub354 \uc88b\uc740 \uc124\uacc4\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ubd84\ub9ac\ub41c \uad00\uc2ec\uc0ac: ",(0,a.kt)("inlineCode",{parentName:"li"},"Vec<T>"),"\uc758 \uc8fc\uc694 \ubaa9\uc801\uc740 \uba54\ubaa8\ub9ac\uc5d0 \uc5f0\uc18d\uc801\uc778 \ubc30\uc5f4\uc744 \uc800\uc7a5\ud558\uace0 \uad00\ub9ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\uc640 \ubcc4\ub3c4\ub85c, \ubc18\ubcf5 \uae30\ub2a5\uc740 \ub3c5\ub9bd\uc801\uc778 \uad00\uc2ec\uc0ac\uc785\ub2c8\ub2e4. \uc774\ub97c \ubd84\ub9ac\ud558\uc5ec \uad00\ub9ac\ud558\uba74 \ucf54\ub4dc\uac00 \ub354 \uba85\ud655\ud574\uc9c0\uace0, \uc774\ud574\ud558\uae30 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uc774\uc720\ub85c, Rust\uc758 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\ub97c \uc704\ud55c \uc774\ud130\ub808\uc774\ud130\ub97c \ubcc4\ub3c4\uc758 \ud0c0\uc785\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::slice::Iter"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::slice::IterMut")," \ud0c0\uc785\uc73c\ub85c, \uac01\uac01 \ubd88\ubcc0 \ucc38\uc870\uc640 \uac00\ubcc0 \ucc38\uc870\uc5d0 \ub300\ud55c \uc774\ud130\ub808\uc774\ud130\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\ud130\ub808\uc774\ud130 \ud0c0\uc785\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\uc5d0 \ub300\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoIterator")," trait\uc744 \uad6c\ud604\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c \ucf54\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\uc5d0 \ub300\ud55c \uc774\ud130\ub808\uc774\ud130\ub97c \uc5bb\uace0 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'fn main() {\n    let vec = vec![1, 2, 3];\n\n    // \ubd88\ubcc0 \ucc38\uc870\uc5d0 \ub300\ud55c \uc774\ud130\ub808\uc774\ud130\ub97c \uc5bb\uc2b5\ub2c8\ub2e4.\n    let iter = vec.iter();\n\n    for item in iter {\n        println!("{}", item);\n    }\n\n    // \uac00\ubcc0 \ucc38\uc870\uc5d0 \ub300\ud55c \uc774\ud130\ub808\uc774\ud130\ub97c \uc5bb\uc2b5\ub2c8\ub2e4.\n    let mut vec_mut = vec![4, 5, 6];\n    let iter_mut = vec_mut.iter_mut();\n\n    for item in iter_mut {\n        *item += 1;\n        println!("{}", item);\n    }\n}\n')),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\uc758 \uc5ed\ud560\uacfc \uc774\ud130\ub808\uc774\ud130\uc758 \uc5ed\ud560\uc774 \uba85\ud655\ud558\uac8c \uad6c\ubd84\ub418\uba70, \uc18c\uc720\uad8c \ubc0f \ubd88\ubcc0\uc131\uc5d0 \ub300\ud55c \uad00\ub9ac\uac00 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud074\ub798\uc2a4-\uacc4\uce35\uad6c\uc870-\ud45c\ud604"},"\ud074\ub798\uc2a4 \uacc4\uce35\uad6c\uc870 \ud45c\ud604"),(0,a.kt)("p",null,"Rust\uc5d0\uc11c \ud074\ub798\uc2a4 \uacc4\uce35 \uad6c\uc870\ub97c \ub098\ud0c0\ub0b4\ub824\uba74 \ud2b8\ub808\uc787(trait), \uad6c\uc870\uccb4(struct) \ubc0f \uc5f4\uac70\ud615(enum)\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. GUI \uc704\uc82f \ud2b8\ub9ac\uc758 \uc608\ub97c \ub4e4\uc5b4 \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uba3c\uc800, \uacf5\ud1b5 \ud589\ub3d9\uc744 \uc815\uc758\ud558\ub294 \ud2b8\ub808\uc787\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"trait Widget {\n    fn draw(&self);\n    // ... \ub2e4\ub978 \uacf5\ud1b5 \uba54\uc11c\ub4dc\ub4e4\n}\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c, \uc5ec\ub7ec \uc704\uc82f \uc720\ud615\uc744 \ub098\ud0c0\ub0b4\ub294 \uad6c\uc870\uccb4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct Button {\n    // ... \ubc84\ud2bc\uc5d0 \ub300\ud55c \uc18d\uc131 \ubc0f \uba54\uc11c\ub4dc\n}\n\nstruct TextBox {\n    // ... \ud14d\uc2a4\ud2b8 \uc0c1\uc790\uc5d0 \ub300\ud55c \uc18d\uc131 \ubc0f \uba54\uc11c\ub4dc\n}\n\nstruct Label {\n    // ... \ub808\uc774\ube14\uc5d0 \ub300\ud55c \uc18d\uc131 \ubc0f \uba54\uc11c\ub4dc\n}\n")),(0,a.kt)("p",null,"\uac01 \uad6c\uc870\uccb4\uc5d0 \ub300\ud574 \ud2b8\ub808\uc787\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Widget for Button {\n    fn draw(&self) {\n        // ... \ubc84\ud2bc \uadf8\ub9ac\uae30 \ucf54\ub4dc\n    }\n}\n\nimpl Widget for TextBox {\n    fn draw(&self) {\n        // ... \ud14d\uc2a4\ud2b8 \uc0c1\uc790 \uadf8\ub9ac\uae30 \ucf54\ub4dc\n    }\n}\n\nimpl Widget for Label {\n    fn draw(&self) {\n        // ... \ub808\uc774\ube14 \uadf8\ub9ac\uae30 \ucf54\ub4dc\n    }\n}\n")),(0,a.kt)("p",null,"\uc774\uc81c \uc704\uc82f \ud2b8\ub9ac\ub97c \ub098\ud0c0\ub0b4\ub294 \uc5f4\uac70\ud615\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"enum WidgetNode {\n    Button(Button),\n    TextBox(TextBox),\n    Label(Label),\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WidgetNode")," \uc5f4\uac70\ud615\uc740 \ub2e4\uc591\ud55c \uc704\uc82f \uc720\ud615 \uc911 \ud558\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc81c ",(0,a.kt)("inlineCode",{parentName:"p"},"WidgetNode"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc704\uc82f \ud2b8\ub9ac\ub97c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct Container {\n    children: Vec<WidgetNode>,\n}\n\nimpl Container {\n    fn add_child(&mut self, child: WidgetNode) {\n        self.children.push(child);\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Container")," \uad6c\uc870\uccb4\ub294 \uc5ec\ub7ec \uc704\uc82f\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c Rust\uc5d0\uc11c \ud2b8\ub808\uc787, \uad6c\uc870\uccb4, \uc5f4\uac70\ud615\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud074\ub798\uc2a4 \uacc4\uce35 \uad6c\uc870\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uba74 GUI \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uc704\uc82f \uacc4\uce35 \uad6c\uc870\ub97c \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);