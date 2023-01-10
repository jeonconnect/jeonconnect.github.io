"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[6506],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var r=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(l),k=a,h=d["".concat(i,".").concat(k)]||d[k]||c[k]||n;return l?r.createElement(h,o(o({ref:t},u),{},{components:l})):r.createElement(h,o({ref:t},u))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,o=new Array(n);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<n;s++)o[s]=l[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},7807:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=l(7462),a=(l(7294),l(3905));const n={},o="powershell",p={unversionedId:"notes/powershell",id:"notes/powershell",title:"powershell",description:"\uc124\uce58",source:"@site/docs/notes/powershell.md",sourceDirName:"notes",slug:"/notes/powershell",permalink:"/docs/notes/powershell",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"node.js",permalink:"/docs/notes/nodejs"},next:{title:"react",permalink:"/docs/notes/react"}},i={},s=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"MacOS\uc5d0\uc11c \uc124\uce58\ud558\uae30",id:"macos\uc5d0\uc11c-\uc124\uce58\ud558\uae30",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:4},{value:"Ubuntu 20.04\uc5d0\uc11c \uc124\uce58\ud558\uae30",id:"ubuntu-2004\uc5d0\uc11c-\uc124\uce58\ud558\uae30",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0-1",level:4},{value:"\uae30\ubcf8\ubb38\ubc95\uc0ac\ud56d",id:"\uae30\ubcf8\ubb38\ubc95\uc0ac\ud56d",level:2},{value:"\uc790\ub3d9\ubcc0\uc218",id:"\uc790\ub3d9\ubcc0\uc218",level:3},{value:"\uc258\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\uc758 \ud30c\ub77c\ubbf8\ud130 \ucc98\ub9ac",id:"\uc258\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\uc758-\ud30c\ub77c\ubbf8\ud130-\ucc98\ub9ac",level:3},{value:"\ubc30\uc5f4",id:"\ubc30\uc5f4",level:3},{value:"\uc0dd\uc131",id:"\uc0dd\uc131",level:4},{value:"\ube48 \ubc30\uc5f4 \uc0dd\uc131",id:"\ube48-\ubc30\uc5f4-\uc0dd\uc131",level:4},{value:"\ud574\uc2dc\ud14c\uc774\ube14",id:"\ud574\uc2dc\ud14c\uc774\ube14",level:3},{value:"\uc0dd\uc131",id:"\uc0dd\uc131-1",level:4},{value:"\ube48 \ud574\uc2dc\ud14c\uc774\ube14 \uc0dd\uc131",id:"\ube48-\ud574\uc2dc\ud14c\uc774\ube14-\uc0dd\uc131",level:4},{value:"\ubb38\uc790\uc5f4",id:"\ubb38\uc790\uc5f4",level:3},{value:"\uc774\uc2a4\ucf00\uc774\ud504",id:"\uc774\uc2a4\ucf00\uc774\ud504",level:4},{value:"\ud074\ub85c\uc800",id:"\ud074\ub85c\uc800",level:3},{value:"\ubaa8\ub4c8",id:"\ubaa8\ub4c8",level:2},{value:"PSFzf",id:"psfzf",level:3},{value:"\ud30c\uc77c\uc2dc\uc2a4\ud15c",id:"\ud30c\uc77c\uc2dc\uc2a4\ud15c",level:2},{value:"\ud30c\uc77c \ubc0f \ud3f4\ub354 \uc791\uc5c5",id:"\ud30c\uc77c-\ubc0f-\ud3f4\ub354-\uc791\uc5c5",level:3},{value:"\ub9c1\ud06c",id:"\ub9c1\ud06c",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0-2",level:4},{value:"\uc0ad\uc81c",id:"\uc0ad\uc81c",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0-3",level:4},{value:"\uc6d0\uaca9",id:"\uc6d0\uaca9",level:2},{value:"ssh",id:"ssh",level:3},{value:"\uba85\ub839\uc5b4",id:"\uba85\ub839\uc5b4",level:2},{value:"where.exe",id:"whereexe",level:3}],u={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"powershell"},"powershell"),(0,a.kt)("h2",{id:"\uc124\uce58"},"\uc124\uce58"),(0,a.kt)("h3",{id:"macos\uc5d0\uc11c-\uc124\uce58\ud558\uae30"},"MacOS\uc5d0\uc11c \uc124\uce58\ud558\uae30"),(0,a.kt)("p",null,"\uc124\uce58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install --cask powershell\n")),(0,a.kt)("p",null,"\uc5c5\uadf8\ub808\uc774\ub4dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew update\nbrew upgrade powershell --cask\n")),(0,a.kt)("h4",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2"},"https://docs.microsoft.com/ko-kr/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zigford.org/setting-powershell-as-default-on-macos.htmls"},"https://zigford.org/setting-powershell-as-default-on-macos.htmls"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc258\ub85c \uc124\uc815")))),(0,a.kt)("h3",{id:"ubuntu-2004\uc5d0\uc11c-\uc124\uce58\ud558\uae30"},"Ubuntu 20.04\uc5d0\uc11c \uc124\uce58\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Update the list of packages\nsudo apt-get update\n# Install pre-requisite packages.\nsudo apt-get install -y wget apt-transport-https software-properties-common\n# Download the Microsoft repository GPG keys\nwget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb\n# Register the Microsoft repository GPG keys\nsudo dpkg -i packages-microsoft-prod.deb\n# Update the list of packages after we added packages.microsoft.com\nsudo apt-get update\n# Install PowerShell\nsudo apt-get install -y powershell\n# Start PowerShell\npwsh\n")),(0,a.kt)("h4",{id:"\ucc38\uace0-1"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/powershell/scripting/install/install-ubuntu?view=powershell-7.2"},"Ubuntu\uc5d0 PowerShell \uc124\uce58 - PowerShell | Microsoft Docs"))),(0,a.kt)("h2",{id:"\uae30\ubcf8\ubb38\ubc95\uc0ac\ud56d"},"\uae30\ubcf8\ubb38\ubc95\uc0ac\ud56d"),(0,a.kt)("h3",{id:"\uc790\ub3d9\ubcc0\uc218"},"\uc790\ub3d9\ubcc0\uc218"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/powershell/module/microsoft.powershell.core/about/about_automatic_variables?view=powershell-7.2&viewFallbackFrom=powershell-7.4"},"\uc790\ub3d9 \ubcc0\uc218 \uc815\ubcf4 - PowerShell | Microsoft Docs"))),(0,a.kt)("h3",{id:"\uc258\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\uc758-\ud30c\ub77c\ubbf8\ud130-\ucc98\ub9ac"},"\uc258\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\uc758 \ud30c\ub77c\ubbf8\ud130 \ucc98\ub9ac"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc758 \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\uc2dc\ud0a8\ub2e4.\nparam (\n    [Parameter(Mandatory = $true)][string]$param1,\n    [Parameter(Mandatory = $true)][string]$param2\n)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/2157625"},"https://stackoverflow.com/a/2157625"))),(0,a.kt)("h3",{id:"\ubc30\uc5f4"},"\ubc30\uc5f4"),(0,a.kt)("h4",{id:"\uc0dd\uc131"},"\uc0dd\uc131"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$a = 1, 2, 3\n")),(0,a.kt)("h4",{id:"\ube48-\ubc30\uc5f4-\uc0dd\uc131"},"\ube48 \ubc30\uc5f4 \uc0dd\uc131"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$a = @()\n")),(0,a.kt)("h3",{id:"\ud574\uc2dc\ud14c\uc774\ube14"},"\ud574\uc2dc\ud14c\uc774\ube14"),(0,a.kt)("h4",{id:"\uc0dd\uc131-1"},"\uc0dd\uc131"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$a = @{a=1;b=2}\n")),(0,a.kt)("h4",{id:"\ube48-\ud574\uc2dc\ud14c\uc774\ube14-\uc0dd\uc131"},"\ube48 \ud574\uc2dc\ud14c\uc774\ube14 \uc0dd\uc131"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$a = @{}\n")),(0,a.kt)("h3",{id:"\ubb38\uc790\uc5f4"},"\ubb38\uc790\uc5f4"),(0,a.kt)("h4",{id:"\uc774\uc2a4\ucf00\uc774\ud504"},"\uc774\uc2a4\ucf00\uc774\ud504"),(0,a.kt)("p",null,"\uc774\uc2a4\ucf00\uc774\ud504\ub97c \uc704\ud574 ",(0,a.kt)("kbd",null,"`")," \ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$foo = @"\na\nb\nc\n"@.Replace("`r`n","").Replace(\'a\',\'\')\n')),(0,a.kt)("h3",{id:"\ud074\ub85c\uc800"},"\ud074\ub85c\uc800"),(0,a.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8 \ube14\ub7ed\uc5d0\uc11c \ubc14\uae65 \uc2a4\ucf54\ud504\uc758 \ubcc0\uc218\ub97c \ucc38\uc870\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$a = 1, 2, 3\n$b = { return "a", "b", $a[0] }\n& $b #\uc2a4\ud06c\ub9bd\ud2b8 \ube14\ub7ed \uc2e4\ud589\n')),(0,a.kt)("h2",{id:"\ubaa8\ub4c8"},"\ubaa8\ub4c8"),(0,a.kt)("h3",{id:"psfzf"},"PSFzf"),(0,a.kt)("p",null,"fzf \uae30\ub2a5 \ud1b5\ud569"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kelleyma49/PSFzf"},"kelleyma49/PSFzf: A PowerShell wrapper around the fuzzy finder fzf (github.com)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.powershellgallery.com/packages/PSFzf/2.0.0"},"PowerShell Gallery | PSFzf 2.0.0"))),(0,a.kt)("h2",{id:"\ud30c\uc77c\uc2dc\uc2a4\ud15c"},"\ud30c\uc77c\uc2dc\uc2a4\ud15c"),(0,a.kt)("h3",{id:"\ud30c\uc77c-\ubc0f-\ud3f4\ub354-\uc791\uc5c5"},"\ud30c\uc77c \ubc0f \ud3f4\ub354 \uc791\uc5c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/powershell/scripting/samples/working-with-files-and-folders?view=powershell-7.2"},"\ud30c\uc77c \ubc0f \ud3f4\ub354 \uc791\uc5c5 - PowerShell | Microsoft Learn"))),(0,a.kt)("h3",{id:"\ub9c1\ud06c"},"\ub9c1\ud06c"),(0,a.kt)("p",null,"\uc2ec\ubcfc\ub9ad \ub9c1\ud06c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'New-Item -ItemType SymbolicLink -Path "Link" -Target "Target"\n')),(0,a.kt)("p",null,"\ud558\ub4dc\ub9c1\ud06c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'New-Item -ItemType HardLink -Path "Link" -Target "Target" \n')),(0,a.kt)("h4",{id:"\ucc38\uace0-2"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://winaero.com/create-symbolic-link-windows-10-powershell/"},"Create Symbolic Link in Windows 10 with PowerShell (winaero.com)"))),(0,a.kt)("h3",{id:"\uc0ad\uc81c"},"\uc0ad\uc81c"),(0,a.kt)("p",null,"\uc0ad\uc81c\uc2dc ",(0,a.kt)("inlineCode",{parentName:"p"},"-Force")," \uc2a4\uc704\uce58\ub97c \ubd99\uc774\uc9c0 \uc54a\uc73c\uba74 \uad8c\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Remove-Item "c:\\some\\path" -Recurse -Force\n')),(0,a.kt)("h4",{id:"\ucc38\uace0-3"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/25806947"},"https://stackoverflow.com/a/25806947"))),(0,a.kt)("h2",{id:"\uc6d0\uaca9"},"\uc6d0\uaca9"),(0,a.kt)("h3",{id:"ssh"},"ssh"),(0,a.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc6d0\uaca9\uc9c0\uc758 ssh \uc11c\ubc84\uc5d0 \ub300\ud574\uc11c \uc5ec\ub7ec \uba85\ub839\uc744 \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ssh -tt username@some.server.com @"\npwd\nsudo ls /etc\n"@.Replace("`r","")\n')),(0,a.kt)("h2",{id:"\uba85\ub839\uc5b4"},"\uba85\ub839\uc5b4"),(0,a.kt)("h3",{id:"whereexe"},"where.exe"),(0,a.kt)("p",null,"\uc2e4\ud589\ud30c\uc77c\uc758 \uc704\uce58\ub97c \uc54c\ub824\uc900\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"where")," \ub294 \ub2e4\ub978 \uba85\ub839\uc5b4\uc758 alias \ub85c \ub4f1\ub85d\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"where.exe")," \ub85c \uc2e4\ud589\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# \uc608\uc2dc\nwhere.exe flutter dart\n")))}c.isMDXComponent=!0}}]);