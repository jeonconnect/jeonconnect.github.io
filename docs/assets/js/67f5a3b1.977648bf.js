"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[3769],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return t?a.createElement(c,i(i({ref:n},u),{},{components:t})):a.createElement(c,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={},i="spring boot",o={unversionedId:"notes/spring_boot",id:"notes/spring_boot",title:"spring boot",description:"\uc124\uc815",source:"@site/docs/notes/spring_boot.md",sourceDirName:"notes",slug:"/notes/spring_boot",permalink:"/docs/notes/spring_boot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sd",permalink:"/docs/notes/sd"},next:{title:"stable diffusion",permalink:"/docs/notes/stable_diffusion"}},p={},s=[{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"spring boot jar \ubc30\ud3ec\uc2dc\uc5d0 application.yml \ubc30\uce58",id:"spring-boot-jar-\ubc30\ud3ec\uc2dc\uc5d0-applicationyml-\ubc30\uce58",level:3},{value:"gradle task \uc2e4\ud589\uc2dc\uc5d0 application.yml \uc704\uce58\ub97c \ud30c\ub77c\ubbf8\ud130\ub85c \uc804\ub2ec",id:"gradle-task-\uc2e4\ud589\uc2dc\uc5d0-applicationyml-\uc704\uce58\ub97c-\ud30c\ub77c\ubbf8\ud130\ub85c-\uc804\ub2ec",level:3},{value:"application.yml \uc5d0\uc11c \ud658\uacbd\ubcc0\uc218 \uc0ac\uc6a9",id:"applicationyml-\uc5d0\uc11c-\ud658\uacbd\ubcc0\uc218-\uc0ac\uc6a9",level:3},{value:"\ub0b4\uc7a5 \ud1b0\ucea3 \ubc84\uc804 \uc9c0\uc815",id:"\ub0b4\uc7a5-\ud1b0\ucea3-\ubc84\uc804-\uc9c0\uc815",level:3},{value:"deploy",id:"deploy",level:2},{value:"nginx \uc5f0\ub3d9",id:"nginx-\uc5f0\ub3d9",level:3},{value:"pid \ud30c\uc77c \uc790\ub3d9 \uc0dd\uc131",id:"pid-\ud30c\uc77c-\uc790\ub3d9-\uc0dd\uc131",level:3},{value:"spring boot \uc571\uc744 \uc11c\ube44\uc2a4\ub85c \ub4f1\ub85d",id:"spring-boot-\uc571\uc744-\uc11c\ube44\uc2a4\ub85c-\ub4f1\ub85d",level:3},{value:"\uc885\ub8cc \uc774\ubca4\ud2b8 \ucc98\ub9ac",id:"\uc885\ub8cc-\uc774\ubca4\ud2b8-\ucc98\ub9ac",level:3},{value:"JPA",id:"jpa",level:2},{value:"H2 Database \ub97c \ub370\uc774\ud130\uc18c\uc2a4\ub85c \uc0ac\uc6a9",id:"h2-database-\ub97c-\ub370\uc774\ud130\uc18c\uc2a4\ub85c-\uc0ac\uc6a9",level:3},{value:"kotlin \uc124\uc815",id:"kotlin-\uc124\uc815",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:4},{value:"CLI",id:"cli",level:2},{value:"CLI \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc124\uc815",id:"cli-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c-\uc124\uc815",level:3},{value:"Logging",id:"logging",level:2},{value:"\uc694\uccad\uacfc \uc751\ub2f5 \ucc98\ub9ac",id:"\uc694\uccad\uacfc-\uc751\ub2f5-\ucc98\ub9ac",level:2},{value:"Response \uc758 Content-Type \uc124\uc815",id:"response-\uc758-content-type-\uc124\uc815",level:3},{value:"\uc751\ub2f5 gzip \uc555\ucd95",id:"\uc751\ub2f5-gzip-\uc555\ucd95",level:3},{value:"\uc815\uc801 \ub9ac\uc18c\uc2a4 \uce90\uc2f1 \uae08\uc9c0 \uc124\uc815",id:"\uc815\uc801-\ub9ac\uc18c\uc2a4-\uce90\uc2f1-\uae08\uc9c0-\uc124\uc815",level:3},{value:"\uc758\uc874\uc131 \uc8fc\uc785",id:"\uc758\uc874\uc131-\uc8fc\uc785",level:2},{value:"Bean \uc758 \ucd08\uae30\ud654 \uc644\ub8cc \uc774\ubca4\ud2b8 \ud1b5\uc9c0",id:"bean-\uc758-\ucd08\uae30\ud654-\uc644\ub8cc-\uc774\ubca4\ud2b8-\ud1b5\uc9c0",level:3},{value:"@Value \uc9c0\uc815\ub41c \uba64\ubc84\ub97c \uc0dd\uc131\uc790\uc5d0\uc11c \ucc38\uc870",id:"value-\uc9c0\uc815\ub41c-\uba64\ubc84\ub97c-\uc0dd\uc131\uc790\uc5d0\uc11c-\ucc38\uc870",level:3}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spring-boot"},"spring boot"),(0,r.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,r.kt)("h3",{id:"spring-boot-jar-\ubc30\ud3ec\uc2dc\uc5d0-applicationyml-\ubc30\uce58"},"spring boot jar \ubc30\ud3ec\uc2dc\uc5d0 application.yml \ubc30\uce58"),(0,r.kt)("p",null,"\ud604\uc7ac \uc2e4\ud589 \ub514\ub809\ud1a0\ub9ac\uc758 config \uc11c\ube0c \ub514\ub809\ud1a0\ub9ac \ub610\ub294 \ud604\uc7ac \uc2e4\ud589 \ub514\ub809\ud1a0\ub9ac \ub4f1\uc5d0 application.yml \uc744 \ubc30\uce58\ud558\uba74, jar \uc5d0 \ud3ec\ud568\ub41c application.yml \uc758 \uc124\uc815\uc744 override \ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://www.latera.kr/reference/java/2019-09-29-spring-boot-config-externalize/"},"Spring Boot","]"," \uc678\ubd80\uc5d0\uc11c \uc124\uc815 \uc8fc\uc785\ud558\uae30 - Increment (latera.kr)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://theuphill.tistory.com/12"},"\uc644\uc804\ud788 \uc2e4\ud589 \uac00\ub2a5\ud55c Spring Boot \ubc30\ud3ec (tistory.com)"))),(0,r.kt)("h3",{id:"gradle-task-\uc2e4\ud589\uc2dc\uc5d0-applicationyml-\uc704\uce58\ub97c-\ud30c\ub77c\ubbf8\ud130\ub85c-\uc804\ub2ec"},"gradle task \uc2e4\ud589\uc2dc\uc5d0 application.yml \uc704\uce58\ub97c \ud30c\ub77c\ubbf8\ud130\ub85c \uc804\ub2ec"),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ud55c\ub2e4. \uc774 \uacbd\uc6b0\uc5d0\ub294 \uae30\ubcf8 application.yml \uac00 \ubb34\uc2dc\ub41c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./gradlew bootRun --args="--spring.config.location=file:./some/path/some_custom_application.yml"\n')),(0,r.kt)("h3",{id:"applicationyml-\uc5d0\uc11c-\ud658\uacbd\ubcc0\uc218-\uc0ac\uc6a9"},"application.yml \uc5d0\uc11c \ud658\uacbd\ubcc0\uc218 \uc0ac\uc6a9"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${\ubcc0\uc218\uba85}")," \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud574 \ud658\uacbd\ubcc0\uc218\uac00 \uac00\uc9c4 \uac12\uc73c\ub85c \ub300\uce58\ub418\ub3c4\ub85d \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server:\n  address: ${SERVER_IP}\n  port: ${SERVER_PORT}\n")),(0,r.kt)("p",null,"\ud658\uacbd\ubcc0\uc218\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \ub54c\uc758 \uae30\ubcf8\uc0ac\uc6a9\uac12\uc744 \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"logging:\n  level:\n    root: ${LOGGING_LEVEL_ROOT:info}\n")),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \ud648 \ub514\ub809\ud1a0\ub9ac\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"${user.home}")," \uc73c\ub85c \ucc38\uc870\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/23027315/does-application-yml-support-environment-variables"},"java - Does application.yml support environment variables? - Stack Overflow"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/61372261"},"https://stackoverflow.com/a/61372261")))),(0,r.kt)("h3",{id:"\ub0b4\uc7a5-\ud1b0\ucea3-\ubc84\uc804-\uc9c0\uc815"},"\ub0b4\uc7a5 \ud1b0\ucea3 \ubc84\uc804 \uc9c0\uc815"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," \ud30c\uc77c\uc740 Kotlin DSL\uc744 \uc0ac\uc6a9\ud558\ub294 Gradle \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud65c\uc6a9\ub418\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \ud30c\uc77c\uacfc \ub3d9\uc77c\ud55c \uae30\ub2a5\uc744 \ud558\uc9c0\ub9cc \ubb38\ubc95\uc774 \ub2e4\ub985\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 Groovy \ubb38\ubc95\uacfc \ub2ec\ub9ac, Kotlin DSL\uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c \ubb38\ubc95\uc774 \uc870\uae08 \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"ext['tomcat.version'] = '9.0.35'"),"\uc640 \uac19\uc774 \ud1b0\ucea3 \ubc84\uc804\uc744 \uc9c0\uc815\ud558\ub294 \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle.kts"),"\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'extra["tomcat.version"] = "9.0.35"\n')),(0,r.kt)("p",null,"\uc774 \ucf54\ub4dc\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \ucd94\uac00 \uc18d\uc131(Extra Properties)\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat.version"),"\uc774\ub77c\ub294 \ud0a4\ub85c \ud1b0\ucea3 \ubc84\uc804\uc744 \uc124\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \uc124\uc815\ud568\uc73c\ub85c\uc368, \uc2a4\ud504\ub9c1 \ubd80\ud2b8\uc758 \ub0b4\uc7a5 \ud1b0\ucea3 \ubc84\uc804\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubcc0\uacbd\ud55c \ud6c4\uc5d0\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc7ac\ube4c\ub4dc\ud574\uc57c \uc801\uc6a9\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," \ud30c\uc77c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},'extra["tomcat.version"] = "9.0.35"'),"\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \ucd94\uac00\ud560 \uc704\uce58\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ud30c\uc77c\uc758 \uc0c1\ub2e8 \ubd80\ubd84\uc785\ub2c8\ub2e4. \uc774 \ucf54\ub4dc\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \uc804\uc5ed \uc18d\uc131\uc744 \uc124\uc815\ud558\ub294 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0, Gradle \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc2e4\ud589\ub418\uae30 \uc804\uc5d0 \uc815\uc758\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucf54\ub4dc\ub97c \ucd94\uac00\ud558\ub294 \uc704\uce58\uc758 \uc608\uc2dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    // \ud50c\ub7ec\uadf8\uc778 \uc815\uc758\n}\n\nextra["tomcat.version"] = "9.0.35"\n\nrepositories {\n    // \uc800\uc7a5\uc18c \uc815\uc758\n}\n\ndependencies {\n    // \uc758\uc874\uc131 \uc815\uc758\n}\n')),(0,r.kt)("p",null,"\uc774\ub807\uac8c \ud30c\uc77c\uc758 \uc0c1\ub2e8\uc5d0 \ucd94\uac00\ud558\uba74 Gradle \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc2e4\ud589\ub420 \ub54c \ud574\ub2f9 \uc18d\uc131\uc774 \uc774\ubbf8 \uc124\uc815\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c, \uc2a4\ud06c\ub9bd\ud2b8 \ub0b4 \ub2e4\ub978 \ubd80\ubd84\uc5d0\uc11c \uc774 \uc18d\uc131\uc744 \ucc38\uc870\ud558\uac70\ub098 \uad00\ub828 \uc124\uc815\uc5d0 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098, \uc2e4\uc81c\ub85c\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \uad6c\uc870\uc640 \ud544\uc694\uc5d0 \ub530\ub77c \uc704\uce58\ub97c \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc694\ud55c \uac83\uc740 \uc774 \uc18d\uc131\uc774 \uad00\ub828 \uc124\uc815\uc774 \uc801\uc6a9\ub418\uae30 \uc804\uc5d0 \uc815\uc758\ub418\uc5b4\uc57c \ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"deploy"},"deploy"),(0,r.kt)("h3",{id:"nginx-\uc5f0\ub3d9"},"nginx \uc5f0\ub3d9"),(0,r.kt)("p",null,"\ud2b9\uc815 \uacbd\ub85c\ub97c WAS \ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/xxxxxx.com"),"  \uc124\uc815\uc5d0 \ucd94\uac00\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server {\n\n        ...\n\n\n        location /xxx {\n                proxy_pass http://localhost:8080/xxx;\n                proxy_ssl_server_name on;\n        }\n\n        ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_ssl_server_name on;")," \uc774 \uc5c6\uc73c\uba74 502 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/49116797"},"https://stackoverflow.com/a/49116797"))),(0,r.kt)("h3",{id:"pid-\ud30c\uc77c-\uc790\ub3d9-\uc0dd\uc131"},"pid \ud30c\uc77c \uc790\ub3d9 \uc0dd\uc131"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"spring.pid.file")," \uc124\uc815\uc744 \uc9c0\uc815\ud558\uba74 \ud574\ub2f9 \uacbd\ub85c \ud30c\uc77c\uc5d0 \uc2e4\ud589\ub41c \ud504\ub85c\uc138\uc2a4\uc758 pid \ub97c \uc800\uc7a5\ud55c\ub2e4.  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationPidFileWriter")," \ub97c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub9ac\uc2a4\ub108\ub85c \ub4f1\ub85d\ud574\uc918\uc57c \ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@SpringBootApplication\nclass SomeApplication\n\nfun main(args: Array<String>) {\n    SpringApplication(SomeApplication::class.java)\n        .apply {\n            addListeners(ApplicationPidFileWriter())\n        }\n        .run(*args)\n}\n")),(0,r.kt)("p",null,"pid \ud30c\uc77c \uc0dd\uc131 \uacbd\ub85c\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring:\n  pid:\n    file: /xxx/yyy/zzz.pid\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://toshi15shkim.github.io/articles/2019-09/spring-boot-pid"},"Boot\ub85c \uc2e4\ud589\uc2dc pid \uc790\ub3d9 \uc0dd\uc131 \ubc29\ubc95 | Toshi\uc758 \uac1c\ubc1c \ube14\ub85c\uadf8 (toshi15shkim.github.io)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://jheloper.github.io/2019/05/spring-boot-pid-file/"},"\uc2a4\ud504\ub9c1 \ubd80\ud2b8 PID(Process Identifier) \ud30c\uc77c \uc0dd\uc131 \ubc29\ubc95 (jheloper.github.io)")))),(0,r.kt)("h3",{id:"spring-boot-\uc571\uc744-\uc11c\ube44\uc2a4\ub85c-\ub4f1\ub85d"},"spring boot \uc571\uc744 \uc11c\ube44\uc2a4\ub85c \ub4f1\ub85d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.dante2k.com/564"},"ubuntu server systemd \uc5d0 spring boot jar \uc11c\ube44\uc2a4\ub85c \ub4f1\ub85d\ud558\uae30 (dante2k.com)"))),(0,r.kt)("h3",{id:"\uc885\ub8cc-\uc774\ubca4\ud2b8-\ucc98\ub9ac"},"\uc885\ub8cc \uc774\ubca4\ud2b8 \ucc98\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SIGKILL")," \uc774 \uc544\ub2c8\ub77c ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGTERM")," \uc2dc\uadf8\ub110\ub85c \uc885\ub8cc\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kill -15 <pid>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationListener<ContextCloseEvent>")," \ub97c \uad6c\ud604\ud574\uc11c \ub4f1\ub85d\ud55c\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"@Component\nclass StringConnectShutdownListener : ApplicationListener<ContextClosedEvent> {\n\n    override fun onApplicationEvent(event: ContextClosedEvent) {\n        //TODO \uc885\ub8cc\uc2dc\uc758 \ucc98\ub9ac\n    }\n}\n")))),(0,r.kt)("h2",{id:"jpa"},"JPA"),(0,r.kt)("h3",{id:"h2-database-\ub97c-\ub370\uc774\ud130\uc18c\uc2a4\ub85c-\uc0ac\uc6a9"},"H2 Database \ub97c \ub370\uc774\ud130\uc18c\uc2a4\ub85c \uc0ac\uc6a9"),(0,r.kt)("p",null,"build.gradle.kts \uc758\uc874\uc131 \uc124\uc815"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'implementation("org.springframework.boot:spring-boot-starter-data-jpa")\nimplementation("com.h2database:h2")\n')),(0,r.kt)("p",null,"application.yml \uc124\uc815"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'spring:\n  h2:\n    console:\n      enabled: false\n      path: "/h2"\n  datasource:\n    driver-class-name: org.h2.Driver\n    url: jdbc:h2:mem:xxxx\n    username : yyyy\n    password : zzzz\n')),(0,r.kt)("p",null,"\uba54\ubaa8\ub9ac DB \ub85c \uc0ac\uc6a9\ud560 \uacbd\uc6b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring.datasource.url=jdbc:h2:mem:xxxx\n")),(0,r.kt)("p",null,"\ud30c\uc77c DB \ub85c \uc0ac\uc6a9\ud560 \uacbd\uc6b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring.datasource.url=jdbc:h2:file:~/xxxx\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.baeldung.com/spring-boot-h2-database"},"Spring Boot With H2 Database | Baeldung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/47217202"},"https://stackoverflow.com/a/47217202"))),(0,r.kt)("h3",{id:"kotlin-\uc124\uc815"},"kotlin \uc124\uc815"),(0,r.kt)("p",null,"build.gradle.kts \uc5d0 JPA \uc0ac\uc6a9\uc744 \uc704\ud55c \uc124\uc815\uc744 \ucd94\uac00\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'plugins {\n\n    val kotlinVersion = "1.6.21"\n\n    ...\uc911\ub7b5...\n    \n    kotlin("plugin.jpa") version "${kotlinVersion}"\n    kotlin("plugin.allopen") version "${kotlinVersion}"\n    kotlin("plugin.noarg") version "${kotlinVersion}"\n}\n\nnoArg {\n    annotation("javax.persistence.Entity")\n}\n\nallOpen {\n    annotation("javax.persistence.Entity")\n    annotation("javax.persistence.MappedSuperclass")\n    annotation("javax.persistence.Embeddable")\n}\n')),(0,r.kt)("h4",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minkukjo.github.io/study/docs/spring/jpa/kotlin-jpa-guide/"},"Kotlin JPA \uac1c\ubc1c \uac00\uc774\ub4dc | \ub3c4\uc804\ud558\ub294 \uac1c\ubc1c\uc790 (minkukjo.github.io)"))),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("h3",{id:"cli-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c-\uc124\uc815"},"CLI \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc124\uc815"),(0,r.kt)("p",null,"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 CommandLineRunner \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub3c4\ub85d \ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@SpringBootApplication\nclass SomeApplication : CommandLineRunner{\n    override fun run(vararg args: String?) {\n        //TODO SOMETHING\n    }\n}\n\nfun main(args: Array<String>) {\n    runApplication<DcWorkerApplication>(*args)\n}\n")),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 logger \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\nimport org.slf4j.LoggerFactory\n...\n\nclass SomeClass{\n    private val logger = LoggerFactory.getLogger(javaClass)\n}\n")),(0,r.kt)("p",null,"application.yml \uc5d0 \ub85c \uad00\ub828 \uc124\uc815\uc744 \ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"logging:\n  file:\n    name: logs/some_application.log\n  logback:\n    rollingpolicy:\n      max-file-size: 5MB\n  level:\n    root: error\n    com.some.app: info\n\n")),(0,r.kt)("h2",{id:"\uc694\uccad\uacfc-\uc751\ub2f5-\ucc98\ub9ac"},"\uc694\uccad\uacfc \uc751\ub2f5 \ucc98\ub9ac"),(0,r.kt)("h3",{id:"response-\uc758-content-type-\uc124\uc815"},"Response \uc758 Content-Type \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@RequestMapping")," \uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"produces")," \ub85c \uc9c0\uc815\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@RequestMapping(value = ["/some/path"], produces = [MediaType.APPLICATION_JSON_VALUE])\n')),(0,r.kt)("h3",{id:"\uc751\ub2f5-gzip-\uc555\ucd95"},"\uc751\ub2f5 gzip \uc555\ucd95"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," \uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server:\n  compression:\n    enabled: true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://parkadd.tistory.com/117"},"https://parkadd.tistory.com/117")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gunju-ko.github.io/spring/spring-boot/2018/06/16/SpringBootCompression.html"},"https://gunju-ko.github.io/spring/spring-boot/2018/06/16/SpringBootCompression.html"))),(0,r.kt)("h3",{id:"\uc815\uc801-\ub9ac\uc18c\uc2a4-\uce90\uc2f1-\uae08\uc9c0-\uc124\uc815"},"\uc815\uc801 \ub9ac\uc18c\uc2a4 \uce90\uc2f1 \uae08\uc9c0 \uc124\uc815"),(0,r.kt)("p",null,"Spring MVC\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"WebMvcConfigurer")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n\n    @Override\n    public void addResourceHandlers(ResourceHandlerRegistry registry) {\n        registry.addResourceHandler("/some/**")\n                .addResourceLocations("classpath:/static_some/")\n                //.setCachePeriod(0)\n                .setCacheControl(CacheControl.noStore())\n                .resourceChain(true)\n                .addResolver(new PathResourceResolver());\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"addResourceHandlers")," \uba54\uc11c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub4dc\ud558\uc5ec \ubaa8\ub4e0 \uc694\uccad(",(0,r.kt)("inlineCode",{parentName:"p"},"/some/**"),")\uc5d0 \ub300\ud574 \uce90\uc2f1\uc744 \ube44\ud65c\uc131\ud654\ud558\ub294 \ud578\ub4e4\ub7ec\ub97c \ub4f1\ub85d\ud55c\ub2e4. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},".setCacheControl(CacheControl.noStore())"),' \uc124\uc815\uc774 \uc801\uc6a9\ub418\uba74 Spring MVC\ub294 \uc751\ub2f5\uc758 "Cache-Control" \ud5e4\ub354\ub97c "no-store"\ub85c \uc124\uc815\ud55c\ub2e4. ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \uacbd\uc6b0\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"static_some")," \ud3f4\ub354\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," \ud558\uc704\uc5d0 \uc874\uc7ac\ud55c\ub2e4."))),(0,r.kt)("h2",{id:"\uc758\uc874\uc131-\uc8fc\uc785"},"\uc758\uc874\uc131 \uc8fc\uc785"),(0,r.kt)("h3",{id:"bean-\uc758-\ucd08\uae30\ud654-\uc644\ub8cc-\uc774\ubca4\ud2b8-\ud1b5\uc9c0"},"Bean \uc758 \ucd08\uae30\ud654 \uc644\ub8cc \uc774\ubca4\ud2b8 \ud1b5\uc9c0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," \uc560\ub108\ud14c\uc774\uc158\uc740 \ube48 \ucd08\uae30\ud654 \uc9c1\ud6c4\uc5d0 \ud638\ucd9c\ub418\ub294 \uba54\uc11c\ub4dc\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. Spring Boot\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value"),"\ub85c \uc9c0\uc815\ud55c \uba64\ubc84\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"@PostConstruct"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube48 \ucd08\uae30\ud654 \ud6c4\uc5d0 \ucc38\uc870\ud558\ub294 \uc608\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import org.springframework.beans.factory.annotation.Value\nimport org.springframework.stereotype.Component\nimport javax.annotation.PostConstruct\n\n@Component\nclass A {\n\n    @Value("\\${my.property}")\n    private lateinit var myProperty: String\n\n    @PostConstruct\n    fun init() {\n        println("myProperty: $myProperty")\n    }\n}\n')),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"myProperty")," \ud544\ub4dc\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value")," \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc18d\uc131 \uac12\uc744 \uc8fc\uc785\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," \uba54\uc11c\ub4dc\ub97c \ube48 \ucd08\uae30\ud654 \uc9c1\ud6c4\uc5d0 \ud638\ucd9c\ub418\ub3c4\ub85d \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," \uba54\uc11c\ub4dc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"myProperty")," \uac12\uc744 \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"value-\uc9c0\uc815\ub41c-\uba64\ubc84\ub97c-\uc0dd\uc131\uc790\uc5d0\uc11c-\ucc38\uc870"},"@Value \uc9c0\uc815\ub41c \uba64\ubc84\ub97c \uc0dd\uc131\uc790\uc5d0\uc11c \ucc38\uc870"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Value")," \uc560\ub108\ud14c\uc774\uc158\uc73c\ub85c \uc9c0\uc815\ud55c \uba64\ubc84\ub294 \ube48(Bean)\uc774 \uc0dd\uc131\ub418\uace0 \uc758\uc874\uc131 \uc8fc\uc785\uc774 \uc644\ub8cc\ub41c \uc2dc\uc810\ubd80\ud130 \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0dd\uc131\uc790\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value"),"\ub85c \uc9c0\uc815\ud55c \uba64\ubc84\uc5d0 \uc811\uadfc\ud558\ub824\uba74, \uc0dd\uc131\uc790 \ub9e4\uac1c\ubcc0\uc218\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value")," \uc560\ub108\ud14c\uc774\uc158\uc744 \ubd99\uc5ec \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," \ud074\ub798\uc2a4\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value")," \uc560\ub108\ud14c\uc774\uc158\uc73c\ub85c \uc9c0\uc815\ud55c \uba64\ubc84\ub97c \uc0dd\uc131\uc790\uc5d0\uc11c \ucc38\uc870\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import org.springframework.beans.factory.annotation.Value\nimport org.springframework.stereotype.Component\n\n@Component\nclass A(\n    @Value("\\${my.property}")\n    private val myProperty: String\n) {\n    init {\n        println("myProperty: $myProperty")\n    }\n}\n')),(0,r.kt)("p",null,"\uc774\ub807\uac8c \uc0dd\uc131\uc790 \ub9e4\uac1c\ubcc0\uc218\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value")," \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uba74, \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \uc0dd\uc131\ub418\ub294 \uc2dc\uc810\uc5d0 \ud574\ub2f9 \uc18d\uc131\uc758 \uac12\uc774 \uc8fc\uc785\ub418\uc5b4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8, \uc0dd\uc131\uc790 \uc678\ubd80\uc5d0\uc11c \uc120\uc5b8\ub41c \ud544\ub4dc\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value")," \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 \uc0dd\uc131\uc790\uc5d0\uc11c \ud574\ub2f9 \ud544\ub4dc\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ube48 \ucd08\uae30\ud654 \uc9c1\ud6c4\uc5d0 \uac12\uc744 \ucc38\uc870\ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);