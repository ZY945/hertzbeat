"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[71286],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=c(a),g=n,d=y["".concat(p,".").concat(g)]||y[g]||m[g]||l;return a?r.createElement(d,o(o({ref:t},s),{},{components:a})):r.createElement(d,o({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},60252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const l={id:"mysql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 Mysql \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e(\u53ef\u9009)",sidebar_label:"\u5143\u6570\u636e\u5b58\u50a8Mysql"},o=void 0,i={unversionedId:"start/mysql-change",id:"start/mysql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 Mysql \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e(\u53ef\u9009)",description:"MYSQL\u662f\u4e00\u6b3e\u503c\u5f97\u4fe1\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cApache HertzBeat (incubating) \u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528MYSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/mysql-change.md",sourceDirName:"start",slug:"/start/mysql-change",permalink:"/zh-cn/docs/start/mysql-change",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/mysql-change.md",tags:[],version:"current",frontMatter:{id:"mysql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 Mysql \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e(\u53ef\u9009)",sidebar_label:"\u5143\u6570\u636e\u5b58\u50a8Mysql"},sidebar:"docs",previous:{title:"\u5143\u6570\u636e\u5b58\u50a8PostgreSQL(\u63a8\u8350)",permalink:"/zh-cn/docs/start/postgresql-change"},next:{title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u4f7f\u7528\u6848\u4f8b",permalink:"/zh-cn/docs/start/ssl-cert-practice"}},p={},c=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5MYSQL",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5mysql",level:3},{value:"\u6570\u636e\u5e93\u521b\u5efa",id:"\u6570\u636e\u5e93\u521b\u5efa",level:3},{value:"\u6dfb\u52a0 MYSQL jdbc \u9a71\u52a8 jar",id:"\u6dfb\u52a0-mysql-jdbc-\u9a71\u52a8-jar",level:3},{value:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90",id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90",level:3}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"MYSQL\u662f\u4e00\u6b3e\u503c\u5f97\u4fe1\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cApache HertzBeat (incubating) \u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528MYSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002  "),(0,n.yg)("p",null,"\u6ce8\u610f\u26a0\ufe0f \u4f7f\u7528\u5916\u7f6eMysql\u6570\u636e\u5e93\u66ff\u6362\u5185\u7f6eH2\u6570\u636e\u5e93\u4e3a\u53ef\u9009\u9879\uff0c\u4f46\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u6709MYSQL\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u6570\u636e\u5e93\u521b\u5efa\u90a3\u4e00\u6b65\u3002  ")),(0,n.yg)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5mysql"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5MYSQL"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,n.yg)("br",{parentName:"li"}),"Docker \u7684\u5b89\u88c5\u8bf7\u53c2\u8003 ",(0,n.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u8bf7\u4e8e\u7ec8\u7aef\u68c0\u67e5Docker\u7248\u672c\u8f93\u51fa\u662f\u5426\u6b63\u5e38\u3002  ",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,n.yg)("li",{parentName:"ol"},"Docker\u5b89\u88c5MYSQl  ",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker run -d --name mysql \\\n-p 3306:3306 \\\n-v /opt/data:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n--restart=always \\\nmysql:5.7\n")),(0,n.yg)("inlineCode",{parentName:"li"},"-v /opt/data:/var/lib/mysql")," \u4e3amysql\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,n.yg)("inlineCode",{parentName:"li"},"/opt/data"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55",(0,n.yg)("br",{parentName:"li"}),"\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"li"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f")),(0,n.yg)("h3",{id:"\u6570\u636e\u5e93\u521b\u5efa"},"\u6570\u636e\u5e93\u521b\u5efa"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u8fdb\u5165MYSQL\u6216\u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5MYSQL\u670d\u52a1",(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("inlineCode",{parentName:"li"},"mysql -uroot -p123456"),"  "),(0,n.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93",(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("inlineCode",{parentName:"li"},"create database hertzbeat default charset utf8mb4 collate utf8mb4_general_ci;")),(0,n.yg)("li",{parentName:"ol"},"\u67e5\u770bhertzbeat\u6570\u636e\u5e93\u662f\u5426\u521b\u5efa\u6210\u529f\n",(0,n.yg)("inlineCode",{parentName:"li"},"show databases;"))),(0,n.yg)("h3",{id:"\u6dfb\u52a0-mysql-jdbc-\u9a71\u52a8-jar"},"\u6dfb\u52a0 MYSQL jdbc \u9a71\u52a8 jar"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d MYSQL jdbc driver jar, \u4f8b\u5982 mysql-connector-java-8.0.25.jar. ",(0,n.yg)("a",{parentName:"li",href:"https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.25.zip"},"https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.25.zip")),(0,n.yg)("li",{parentName:"ul"},"\u5c06\u6b64 jar \u5305\u62f7\u8d1d\u653e\u5165 HertzBeat \u7684\u5b89\u88c5\u76ee\u5f55\u4e0b\u7684 ",(0,n.yg)("inlineCode",{parentName:"li"},"ext-lib")," \u76ee\u5f55\u4e0b.")),(0,n.yg)("h3",{id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90"},"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u914d\u7f6e HertzBeat \u7684\u914d\u7f6e\u6587\u4ef6",(0,n.yg)("br",{parentName:"p"}),"\n","\u4fee\u6539\u4f4d\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6",(0,n.yg)("br",{parentName:"p"}),"\n","\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730,\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," \u5373\u53ef\n\u66ff\u6362\u91cc\u9762\u7684",(0,n.yg)("inlineCode",{parentName:"p"},"spring.database"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cIP\u7aef\u53e3\u8d26\u6237\u5bc6\u7801\u9a71\u52a8",(0,n.yg)("br",{parentName:"p"}),"\n","\u26a0\ufe0f\u6ce8\u610f",(0,n.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u6587\u4ef6\u5185\u5bb9\u9700\u5b8c\u6574\uff0c\u9664\u4e0b\u65b9\u4fee\u6539\u5185\u5bb9\u5916\u5176\u4ed6\u53c2\u6570\u9700\u4fdd\u7559\uff0c\u5b8c\u6574\u5185\u5bb9\u89c1",(0,n.yg)("a",{parentName:"p",href:"https://github.com/hertzbeat/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),"  "),(0,n.yg)("p",{parentName:"li"},"\u9700\u4fee\u6539\u90e8\u5206\u539f\u53c2\u6570: "))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: 123456\n    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL\n    hikari:\n      max-lifetime: 120000\n\n  jpa:\n    show-sql: false\n    database-platform: org.eclipse.persistence.platform.database.MySQLPlatform\n    database: h2\n    properties:\n      eclipselink:\n        logging:\n          level: SEVERE\n")),(0,n.yg)("p",null,"  \u5177\u4f53\u66ff\u6362\u53c2\u6570\u5982\u4e0b,\u9700\u6839\u636emysql\u73af\u5883\u914d\u7f6e\u8d26\u6237\u5bc6\u7801IP:   "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: root\n    password: 123456\n    url: jdbc:mysql://mysql:3306/hertzbeat?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&useSSL=false\n    hikari:\n      max-lifetime: 120000\n  jpa:\n    show-sql: false\n    database-platform: org.eclipse.persistence.platform.database.MySQLPlatform\n    database: mysql\n    properties:\n      eclipselink:\n        logging:\n          level: SEVERE\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u901a\u8fc7docker\u542f\u52a8\u65f6\uff0c\u5efa\u8bae\u4fee\u6539host\u4e3a\u5bbf\u4e3b\u673a\u7684\u5916\u7f51IP\u5730\u5740\uff0c\u5305\u62ecmysql\u8fde\u63a5\u5b57\u7b26\u4e32\u3002  ")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u542f\u52a8 HertzBeat \u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5f00\u59cb\u4f7f\u7528HertzBeat\u8fdb\u884c\u76d1\u63a7\u544a\u8b66\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat")))}m.isMDXComponent=!0}}]);