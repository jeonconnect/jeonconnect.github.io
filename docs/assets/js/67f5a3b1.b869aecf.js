"use strict";(self.webpackChunkjeonconnect_github_io_docusaurus=self.webpackChunkjeonconnect_github_io_docusaurus||[]).push([[3769],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={},i="spring boot",o={unversionedId:"notes/spring_boot",id:"notes/spring_boot",title:"spring boot",description:"\uc124\uc815",source:"@site/docs/notes/spring_boot.md",sourceDirName:"notes",slug:"/notes/spring_boot",permalink:"/docs/notes/spring_boot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rust",permalink:"/docs/notes/rust"},next:{title:"SVG",permalink:"/docs/notes/svg"}},p={},s=[{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"spring boot jar \ubc30\ud3ec\uc2dc\uc5d0 application.yml \ubc30\uce58",id:"spring-boot-jar-\ubc30\ud3ec\uc2dc\uc5d0-applicationyml-\ubc30\uce58",level:3},{value:"application.yml \uc5d0\uc11c \ud658\uacbd\ubcc0\uc218 \uc0ac\uc6a9",id:"applicationyml-\uc5d0\uc11c-\ud658\uacbd\ubcc0\uc218-\uc0ac\uc6a9",level:3},{value:"deploy",id:"deploy",level:2},{value:"nginx \uc5f0\ub3d9",id:"nginx-\uc5f0\ub3d9",level:3},{value:"pid \ud30c\uc77c \uc790\ub3d9 \uc0dd\uc131",id:"pid-\ud30c\uc77c-\uc790\ub3d9-\uc0dd\uc131",level:3},{value:"spring boot \uc571\uc744 \uc11c\ube44\uc2a4\ub85c \ub4f1\ub85d",id:"spring-boot-\uc571\uc744-\uc11c\ube44\uc2a4\ub85c-\ub4f1\ub85d",level:3},{value:"\uc885\ub8cc \uc774\ubca4\ud2b8 \ucc98\ub9ac",id:"\uc885\ub8cc-\uc774\ubca4\ud2b8-\ucc98\ub9ac",level:3},{value:"JPA",id:"jpa",level:2},{value:"H2 Database \ub97c \ub370\uc774\ud130\uc18c\uc2a4\ub85c \uc0ac\uc6a9",id:"h2-database-\ub97c-\ub370\uc774\ud130\uc18c\uc2a4\ub85c-\uc0ac\uc6a9",level:3},{value:"kotlin \uc124\uc815",id:"kotlin-\uc124\uc815",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:4},{value:"CLI",id:"cli",level:2},{value:"CLI \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc124\uc815",id:"cli-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c-\uc124\uc815",level:3},{value:"Logging",id:"logging",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spring-boot"},"spring boot"),(0,a.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,a.kt)("h3",{id:"spring-boot-jar-\ubc30\ud3ec\uc2dc\uc5d0-applicationyml-\ubc30\uce58"},"spring boot jar \ubc30\ud3ec\uc2dc\uc5d0 application.yml \ubc30\uce58"),(0,a.kt)("p",null,"\ud604\uc7ac \uc2e4\ud589 \ub514\ub809\ud1a0\ub9ac\uc758 config \uc11c\ube0c \ub514\ub809\ud1a0\ub9ac \ub610\ub294 \ud604\uc7ac \uc2e4\ud589 \ub514\ub809\ud1a0\ub9ac \ub4f1\uc5d0 application.yml \uc744 \ubc30\uce58\ud558\uba74, jar \uc5d0 \ud3ec\ud568\ub41c application.yml \uc758 \uc124\uc815\uc744 override \ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("a",{parentName:"li",href:"https://www.latera.kr/reference/java/2019-09-29-spring-boot-config-externalize/"},"Spring Boot","]"," \uc678\ubd80\uc5d0\uc11c \uc124\uc815 \uc8fc\uc785\ud558\uae30 - Increment (latera.kr)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://theuphill.tistory.com/12"},"\uc644\uc804\ud788 \uc2e4\ud589 \uac00\ub2a5\ud55c Spring Boot \ubc30\ud3ec (tistory.com)"))),(0,a.kt)("h3",{id:"applicationyml-\uc5d0\uc11c-\ud658\uacbd\ubcc0\uc218-\uc0ac\uc6a9"},"application.yml \uc5d0\uc11c \ud658\uacbd\ubcc0\uc218 \uc0ac\uc6a9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"${\ubcc0\uc218\uba85}")," \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud574 \ud658\uacbd\ubcc0\uc218\uac00 \uac00\uc9c4 \uac12\uc73c\ub85c \ub300\uce58\ub418\ub3c4\ub85d \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server:\n  address: ${SERVER_IP}\n  port: ${SERVER_PORT}\n")),(0,a.kt)("p",null,"\ud658\uacbd\ubcc0\uc218\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \ub54c\uc758 \uae30\ubcf8\uc0ac\uc6a9\uac12\uc744 \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"logging:\n  level:\n    root: ${LOGGING_LEVEL_ROOT:info}\n")),(0,a.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \ud648 \ub514\ub809\ud1a0\ub9ac\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"${user.home}")," \uc73c\ub85c \ucc38\uc870\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/23027315/does-application-yml-support-environment-variables"},"java - Does application.yml support environment variables? - Stack Overflow"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/61372261"},"https://stackoverflow.com/a/61372261")))),(0,a.kt)("h2",{id:"deploy"},"deploy"),(0,a.kt)("h3",{id:"nginx-\uc5f0\ub3d9"},"nginx \uc5f0\ub3d9"),(0,a.kt)("p",null,"\ud2b9\uc815 \uacbd\ub85c\ub97c WAS \ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/xxxxxx.com"),"  \uc124\uc815\uc5d0 \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n\n        ...\n\n\n        location /xxx {\n                proxy_pass http://localhost:8080/xxx;\n                proxy_ssl_server_name on;\n        }\n\n        ...\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy_ssl_server_name on;")," \uc774 \uc5c6\uc73c\uba74 502 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/49116797"},"https://stackoverflow.com/a/49116797"))),(0,a.kt)("h3",{id:"pid-\ud30c\uc77c-\uc790\ub3d9-\uc0dd\uc131"},"pid \ud30c\uc77c \uc790\ub3d9 \uc0dd\uc131"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"spring.pid.file")," \uc124\uc815\uc744 \uc9c0\uc815\ud558\uba74 \ud574\ub2f9 \uacbd\ub85c \ud30c\uc77c\uc5d0 \uc2e4\ud589\ub41c \ud504\ub85c\uc138\uc2a4\uc758 pid \ub97c \uc800\uc7a5\ud55c\ub2e4.  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationPidFileWriter")," \ub97c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub9ac\uc2a4\ub108\ub85c \ub4f1\ub85d\ud574\uc918\uc57c \ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@SpringBootApplication\nclass SomeApplication\n\nfun main(args: Array<String>) {\n    SpringApplication(SomeApplication::class.java)\n        .apply {\n            addListeners(ApplicationPidFileWriter())\n        }\n        .run(*args)\n}\n")),(0,a.kt)("p",null,"pid \ud30c\uc77c \uc0dd\uc131 \uacbd\ub85c\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring:\n  pid:\n    file: /xxx/yyy/zzz.pid\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://toshi15shkim.github.io/articles/2019-09/spring-boot-pid"},"Boot\ub85c \uc2e4\ud589\uc2dc pid \uc790\ub3d9 \uc0dd\uc131 \ubc29\ubc95 | Toshi\uc758 \uac1c\ubc1c \ube14\ub85c\uadf8 (toshi15shkim.github.io)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://jheloper.github.io/2019/05/spring-boot-pid-file/"},"\uc2a4\ud504\ub9c1 \ubd80\ud2b8 PID(Process Identifier) \ud30c\uc77c \uc0dd\uc131 \ubc29\ubc95 (jheloper.github.io)")))),(0,a.kt)("h3",{id:"spring-boot-\uc571\uc744-\uc11c\ube44\uc2a4\ub85c-\ub4f1\ub85d"},"spring boot \uc571\uc744 \uc11c\ube44\uc2a4\ub85c \ub4f1\ub85d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.dante2k.com/564"},"ubuntu server systemd \uc5d0 spring boot jar \uc11c\ube44\uc2a4\ub85c \ub4f1\ub85d\ud558\uae30 (dante2k.com)"))),(0,a.kt)("h3",{id:"\uc885\ub8cc-\uc774\ubca4\ud2b8-\ucc98\ub9ac"},"\uc885\ub8cc \uc774\ubca4\ud2b8 \ucc98\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SIGKILL")," \uc774 \uc544\ub2c8\ub77c ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGTERM")," \uc2dc\uadf8\ub110\ub85c \uc885\ub8cc\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"kill -15 <pid>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationListener<ContextCloseEvent>")," \ub97c \uad6c\ud604\ud574\uc11c \ub4f1\ub85d\ud55c\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"@Component\nclass StringConnectShutdownListener : ApplicationListener<ContextClosedEvent> {\n\n    override fun onApplicationEvent(event: ContextClosedEvent) {\n        //TODO \uc885\ub8cc\uc2dc\uc758 \ucc98\ub9ac\n    }\n}\n")))),(0,a.kt)("h2",{id:"jpa"},"JPA"),(0,a.kt)("h3",{id:"h2-database-\ub97c-\ub370\uc774\ud130\uc18c\uc2a4\ub85c-\uc0ac\uc6a9"},"H2 Database \ub97c \ub370\uc774\ud130\uc18c\uc2a4\ub85c \uc0ac\uc6a9"),(0,a.kt)("p",null,"build.gradle.kts \uc758\uc874\uc131 \uc124\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'implementation("org.springframework.boot:spring-boot-starter-data-jpa")\nimplementation("com.h2database:h2")\n')),(0,a.kt)("p",null,"application.yml \uc124\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'spring:\n  h2:\n    console:\n      enabled: false\n      path: "/h2"\n  datasource:\n    driver-class-name: org.h2.Driver\n    url: jdbc:h2:mem:xxxx\n    username : yyyy\n    password : zzzz\n')),(0,a.kt)("p",null,"\uba54\ubaa8\ub9ac DB \ub85c \uc0ac\uc6a9\ud560 \uacbd\uc6b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring.datasource.url=jdbc:h2:mem:xxxx\n")),(0,a.kt)("p",null,"\ud30c\uc77c DB \ub85c \uc0ac\uc6a9\ud560 \uacbd\uc6b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring.datasource.url=jdbc:h2:file:~/xxxx\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.baeldung.com/spring-boot-h2-database"},"Spring Boot With H2 Database | Baeldung")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/47217202"},"https://stackoverflow.com/a/47217202"))),(0,a.kt)("h3",{id:"kotlin-\uc124\uc815"},"kotlin \uc124\uc815"),(0,a.kt)("p",null,"build.gradle.kts \uc5d0 JPA \uc0ac\uc6a9\uc744 \uc704\ud55c \uc124\uc815\uc744 \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'plugins {\n\n    val kotlinVersion = "1.6.21"\n\n    ...\uc911\ub7b5...\n    \n    kotlin("plugin.jpa") version "${kotlinVersion}"\n    kotlin("plugin.allopen") version "${kotlinVersion}"\n    kotlin("plugin.noarg") version "${kotlinVersion}"\n}\n\nnoArg {\n    annotation("javax.persistence.Entity")\n}\n\nallOpen {\n    annotation("javax.persistence.Entity")\n    annotation("javax.persistence.MappedSuperclass")\n    annotation("javax.persistence.Embeddable")\n}\n')),(0,a.kt)("h4",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minkukjo.github.io/study/docs/spring/jpa/kotlin-jpa-guide/"},"Kotlin JPA \uac1c\ubc1c \uac00\uc774\ub4dc | \ub3c4\uc804\ud558\ub294 \uac1c\ubc1c\uc790 (minkukjo.github.io)"))),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("h3",{id:"cli-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c-\uc124\uc815"},"CLI \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc124\uc815"),(0,a.kt)("p",null,"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 CommandLineRunner \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub3c4\ub85d \ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@SpringBootApplication\nclass SomeApplication : CommandLineRunner{\n    override fun run(vararg args: String?) {\n        //TODO SOMETHING\n    }\n}\n\nfun main(args: Array<String>) {\n    runApplication<DcWorkerApplication>(*args)\n}\n")),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 logger \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\nimport org.slf4j.LoggerFactory\n...\n\nclass SomeClass{\n    private val logger = LoggerFactory.getLogger(javaClass)\n}\n")),(0,a.kt)("p",null,"application.yml \uc5d0 \ub85c \uad00\ub828 \uc124\uc815\uc744 \ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"logging:\n  file:\n    name: logs/some_application.log\n  logback:\n    rollingpolicy:\n      max-file-size: 5MB\n  level:\n    root: error\n    com.some.app: info\n\n")))}u.isMDXComponent=!0}}]);