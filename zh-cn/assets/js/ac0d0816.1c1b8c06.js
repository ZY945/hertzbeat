"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[55310],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>s});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=c(a),s=n,u=g["".concat(i,".").concat(s)]||g[s]||y[s]||l;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},78673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const l={id:"docker-deploy",title:"\u901a\u8fc7 Docker \u65b9\u5f0f\u5b89\u88c5 HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u5b89\u88c5"},o=void 0,p={unversionedId:"start/docker-deploy",id:"start/docker-deploy",title:"\u901a\u8fc7 Docker \u65b9\u5f0f\u5b89\u88c5 HertzBeat",description:"\u4f7f\u7528 Docker \u65b9\u5f0f\u4e00\u952e\u542f\u52a8 HertzBeat \u6700\u5c0f\u53ef\u7528\u73af\u5883\uff0c\u65e0\u5916\u90e8\u670d\u52a1\u4f9d\u8d56\uff0c\u65b9\u4fbf\u5feb\u901f\u4f53\u9a8c\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/docker-deploy.md",sourceDirName:"start",slug:"/start/docker-deploy",permalink:"/zh-cn/docs/start/docker-deploy",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/docker-deploy.md",tags:[],version:"current",frontMatter:{id:"docker-deploy",title:"\u901a\u8fc7 Docker \u65b9\u5f0f\u5b89\u88c5 HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/docs/"},next:{title:"Docker Compose\u65b9\u5f0f\u5b89\u88c5",permalink:"/zh-cn/docs/start/docker-compose-deploy"}},i={},c=[{value:"\u90e8\u7f72 HertzBeat Server",id:"\u90e8\u7f72-hertzbeat-server",level:3},{value:"\u90e8\u7f72 HertzBeat Collector \u96c6\u7fa4(\u53ef\u9009)",id:"\u90e8\u7f72-hertzbeat-collector-\u96c6\u7fa4\u53ef\u9009",level:3},{value:"Docker \u65b9\u5f0f\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",id:"docker-\u65b9\u5f0f\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",level:3}],m={toc:c};function y(e){let{components:t,...l}=e;return(0,n.yg)("wrapper",(0,r.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"\u4f7f\u7528 Docker \u65b9\u5f0f\u4e00\u952e\u542f\u52a8 HertzBeat \u6700\u5c0f\u53ef\u7528\u73af\u5883\uff0c\u65e0\u5916\u90e8\u670d\u52a1\u4f9d\u8d56\uff0c\u65b9\u4fbf\u5feb\u901f\u4f53\u9a8c\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u4f46\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u4f7f\u7528 Docker Compose \u65b9\u5f0f\u90e8\u7f72, \u5b89\u88c5\u5305\u65b9\u5f0f\u90e8\u7f72, Kubernetes \u65b9\u5f0f\u90e8\u7f72\u3002")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"\u9700\u60a8\u7684\u73af\u5883\u4e2d\u5df2\u7ecf\u62e5\u6709 Docker \u73af\u5883\uff0c\u82e5\u672a\u5b89\u88c5\u8bf7\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863")," ")),(0,n.yg)("h3",{id:"\u90e8\u7f72-hertzbeat-server"},"\u90e8\u7f72 HertzBeat Server"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 1157:1157 -p 1158:1158 \\\n    -v $(pwd)/data:/opt/hertzbeat/data \\\n    -v $(pwd)/logs:/opt/hertzbeat/logs \\\n    -v $(pwd)/application.yml:/opt/hertzbeat/config/application.yml \\\n    -v $(pwd)/sureness.yml:/opt/hertzbeat/config/sureness.yml \\\n    --restart=always \\\n    --name hertzbeat apache/hertzbeat\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u547d\u4ee4\u53c2\u6570\u8be6\u89e3")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"docker run -d")," : \u901a\u8fc7 Docker \u540e\u53f0\u8fd0\u884c\u5bb9\u5668"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-p 1157:1157 -p 1158:1158"),"  : \u6620\u5c04\u5bb9\u5668\u7aef\u53e3\u5230\u4e3b\u673a\u7aef\u53e3(\u524d\u9762\u662f\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3\u53f7\uff0c\u540e\u9762\u662f\u5bb9\u5668\u7684\u7aef\u53e3\u53f7)\u30021157\u662f\u9875\u9762\u7aef\u53e3\uff0c1158\u662f\u96c6\u7fa4\u7aef\u53e3\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/data:/opt/hertzbeat/data")," : (\u53ef\u9009\uff0c\u6570\u636e\u6301\u4e45\u5316) \u91cd\u8981\uff0c\u6302\u8f7d\u6570\u636e\u5e93\u6587\u4ef6\u5230\u672c\u5730\u4e3b\u673a\uff0c\u4fdd\u8bc1\u6570\u636e\u4e0d\u4f1a\u56e0\u4e3a\u5bb9\u5668\u7684\u521b\u5efa\u5220\u9664\u800c\u4e22\u5931"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/logs:/opt/hertzbeat/logs")," : (\u53ef\u9009) \u6302\u8f7d\u65e5\u5fd7\u6587\u4ef6\u5230\u672c\u5730\u4e3b\u673a\u65b9\u4fbf\u67e5\u770b"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/application.yml:/opt/hertzbeat/config/application.yml"),"  : (\u53ef\u9009) \u6302\u8f7d\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d(\u8bf7\u786e\u4fdd\u672c\u5730\u5df2\u6709\u6b64\u6587\u4ef6)\u3002",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/raw/master/script/application.yml"},"\u4e0b\u8f7d\u6e90")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/sureness.yml:/opt/hertzbeat/config/sureness.yml"),"  : (\u53ef\u9009) \u6302\u8f7d\u8d26\u6237\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d(\u8bf7\u786e\u4fdd\u672c\u5730\u5df2\u6709\u6b64\u6587\u4ef6)\u3002",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/raw/master/script/sureness.yml"},"\u4e0b\u8f7d\u6e90")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/ext-lib:/opt/hertzbeat/ext-lib"),"  : (\u53ef\u9009) \u6302\u8f7d\u5916\u90e8\u7684\u7b2c\u4e09\u65b9 JAR \u5305 ",(0,n.yg)("a",{parentName:"li",href:"https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.25.zip"},"mysql-jdbc")," ",(0,n.yg)("a",{parentName:"li",href:"https://download.oracle.com/otn-pub/otn_software/jdbc/234/ojdbc8.jar"},"oracle-jdbc")," ",(0,n.yg)("a",{parentName:"li",href:"https://repo.mavenlibs.com/maven/com/oracle/database/nls/orai18n/21.5.0.0/orai18n-21.5.0.0.jar"},"oracle-i18n")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--name hertzbeat")," : (\u53ef\u9009) \u547d\u540d\u5bb9\u5668\u540d\u79f0\u4e3a hertzbeat"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--restart=always")," : (\u53ef\u9009) \u914d\u7f6e\u5bb9\u5668\u81ea\u52a8\u91cd\u542f\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"apache/hertzbeat")," : \u4f7f\u7528",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat"},"\u5b98\u65b9\u5e94\u7528\u955c\u50cf"),"\u6765\u542f\u52a8\u5bb9\u5668, \u82e5\u7f51\u7edc\u8d85\u65f6\u53ef\u7528",(0,n.yg)("inlineCode",{parentName:"li"},"quay.io/tancloud/hertzbeat"),"\u4ee3\u66ff\u3002")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u53c2\u6570\uff0c\u975e\u5fc5\u586b\u9879\uff0c\u82e5\u4e0d\u9700\u8981\u5219\u5220\u9664\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u6b64\u5c06\u5bb9\u5668\u7684 1157,1158 \u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7684 1157,1158 \u7aef\u53e3\u4e0a\u3002\u82e5\u5bbf\u4e3b\u673a\u8be5\u7aef\u53e3\u5df2\u88ab\u5360\u7528\uff0c\u5219\u9700\u4fee\u6539\u4e3b\u673a\u6620\u5c04\u7aef\u53e3\u3002   "),(0,n.yg)("li",{parentName:"ul"},"\u6302\u8f7d\u6587\u4ef6\u65f6\uff0c\u524d\u9762\u53c2\u6570\u4e3a\u4f60\u81ea\u5b9a\u4e49\u672c\u5730\u6587\u4ef6\u5730\u5740\uff0c\u540e\u9762\u53c2\u6570\u4e3a\u5bb9\u5668\u5185\u6587\u4ef6\u5730\u5740\u3002\u6302\u8f7d\u65f6\u8bf7\u786e\u4fdd\u4f60\u672c\u5730\u5df2\u6709\u6b64\u6587\u4ef6\u3002   "),(0,n.yg)("li",{parentName:"ul"},"\u53ef\u6267\u884c",(0,n.yg)("inlineCode",{parentName:"li"},"docker update --restart=always hertzbeat"),"\u914d\u7f6e\u5bb9\u5668\u81ea\u52a8\u91cd\u542f\u3002   "))),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u5f00\u59cb\u63a2\u7d22 HertzBeat",(0,n.yg)("br",{parentName:"li"}),"\u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5373\u53ef\u5f00\u59cb\u63a2\u7d22\u4f7f\u7528HertzBeat\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat\u3002  ")),(0,n.yg)("h3",{id:"\u90e8\u7f72-hertzbeat-collector-\u96c6\u7fa4\u53ef\u9009"},"\u90e8\u7f72 HertzBeat Collector \u96c6\u7fa4(\u53ef\u9009)"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"HertzBeat Collector \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u91c7\u96c6\u5668\uff0c\u7528\u4e8e\u91c7\u96c6\u5e76\u5c06\u6570\u636e\u53d1\u9001\u5230 HertzBeat Server\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u901a\u8fc7\u90e8\u7f72\u591a\u4e2a HertzBeat Collector \u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u9ad8\u53ef\u7528\uff0c\u8d1f\u8f7d\u5747\u8861\u548c\u4e91\u8fb9\u534f\u540c\u3002")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzbeat",src:a(99675).A,width:"2360",height:"846"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d \\\n    -e IDENTITY=custom-collector-name \\\n    -e MODE=public \\\n    -e MANAGER_HOST=127.0.0.1 \\\n    -e MANAGER_PORT=1158 \\\n    --name hertzbeat-collector apache/hertzbeat-collector\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u547d\u4ee4\u53c2\u6570\u8be6\u89e3")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"docker run -d")," : \u901a\u8fc7 Docker \u540e\u53f0\u8fd0\u884c\u5bb9\u5668"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name"),"  : (\u53ef\u9009) \u8bbe\u7f6e\u91c7\u96c6\u5668\u7684\u552f\u4e00\u6807\u8bc6\u540d\u79f0\u3002\u6ce8\u610f\u591a\u91c7\u96c6\u5668\u65f6\u540d\u79f0\u9700\u4fdd\u8bc1\u552f\u4e00\u6027\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MODE=public")," : \u914d\u7f6e\u8fd0\u884c\u6a21\u5f0f(public or private), \u516c\u5171\u96c6\u7fa4\u6a21\u5f0f\u6216\u79c1\u6709\u4e91\u8fb9\u6a21\u5f0f\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : \u91cd\u8981, \u914d\u7f6e\u8fde\u63a5\u7684 HertzBeat Server \u5730\u5740\uff0c127.0.0.1 \u9700\u66ff\u6362\u4e3a HertzBeat Server \u5bf9\u5916 IP \u5730\u5740\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," :  (\u53ef\u9009) \u914d\u7f6e\u8fde\u63a5\u7684 HertzBeat Server \u7aef\u53e3\uff0c\u9ed8\u8ba4 1158."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/logs:/opt/hertzbeat-collector/logs")," : (\u53ef\u9009)\u6302\u8f7d\u65e5\u5fd7\u6587\u4ef6\u5230\u672c\u5730\u4e3b\u673a\u65b9\u4fbf\u67e5\u770b"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--name hertzbeat-collector")," : \u547d\u540d\u5bb9\u5668\u540d\u79f0\u4e3a hertzbeat-collector"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"apache/hertzbeat-collector")," : \u4f7f\u7528",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat-collector"},"\u5b98\u65b9\u5e94\u7528\u955c\u50cf"),"\u6765\u542f\u52a8\u5bb9\u5668, \u82e5\u7f51\u7edc\u8d85\u65f6\u53ef\u7528",(0,n.yg)("inlineCode",{parentName:"li"},"quay.io/tancloud/hertzbeat-collector"),"\u4ee3\u66ff\u3002")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"MANAGER_HOST=127.0.0.1")," \u4e2d\u7684 ",(0,n.yg)("inlineCode",{parentName:"li"},"127.0.0.1")," \u9700\u88ab\u66ff\u6362\u4e3a HertzBeat Server \u5bf9\u5916 IP \u5730\u5740\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u53c2\u6570\uff0c\u975e\u5fc5\u586b\u9879\uff0c\u82e5\u4e0d\u9700\u8981\u5219\u5220\u9664\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u6302\u8f7d\u6587\u4ef6\u65f6\uff0c\u524d\u9762\u53c2\u6570\u4e3a\u4f60\u81ea\u5b9a\u4e49\u672c\u5730\u6587\u4ef6\u5730\u5740\uff0c\u540e\u9762\u53c2\u6570\u4e3a\u5bb9\u5668\u5185\u6587\u4ef6\u5730\u5740\u3002\u6302\u8f7d\u65f6\u8bf7\u786e\u4fdd\u4f60\u672c\u5730\u5df2\u6709\u6b64\u6587\u4ef6\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u53ef\u6267\u884c",(0,n.yg)("inlineCode",{parentName:"li"},"docker update --restart=always hertzbeat-collector"),"\u914d\u7f6e\u5bb9\u5668\u81ea\u52a8\u91cd\u542f\u3002   "))),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u5f00\u59cb\u63a2\u7d22 HertzBeat Collector",(0,n.yg)("br",{parentName:"li"}),"\u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5373\u53ef\u5f00\u59cb\u63a2\u7d22\u4f7f\u7528\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat\u3002")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"HAVE FUN"),"   "),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"docker-\u65b9\u5f0f\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"},"Docker \u65b9\u5f0f\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6700\u591a\u7684\u95ee\u9898\u5c31\u662f\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5148\u63d0\u524d\u6392\u67e5")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"MYSQL,TDENGINE\u6216IotDB\u548cHertzBeat\u90fdDocker\u90e8\u7f72\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\uff0cHertzBeat\u4f7f\u7528localhost\u6216127.0.0.1\u8fde\u63a5\u6570\u636e\u5e93\u5931\u8d25",(0,n.yg)("br",{parentName:"p"}),"\n","\u6b64\u95ee\u9898\u672c\u8d28\u4e3aDocker\u5bb9\u5668\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7aef\u53e3\u8fde\u63a5\u5931\u8d25\uff0c\u7531\u4e8edocker\u9ed8\u8ba4\u7f51\u7edc\u6a21\u5f0f\u4e3aBridge\u6a21\u5f0f\uff0c\u5176\u901a\u8fc7localhost\u8bbf\u95ee\u4e0d\u5230\u5bbf\u4e3b\u673a\u3002"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u89e3\u51b3\u529e\u6cd5\u4e00\uff1a\u914d\u7f6eapplication.yml\u5c06\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\u7531localhost\u4fee\u6539\u4e3a\u5bbf\u4e3b\u673a\u7684\u5bf9\u5916IP",(0,n.yg)("br",{parentName:"p"}),"\n","\u89e3\u51b3\u529e\u6cd5\u4e8c\uff1a\u4f7f\u7528Host\u7f51\u7edc\u6a21\u5f0f\u542f\u52a8Docker\uff0c\u5373\u4f7fDocker\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u5171\u4eab\u7f51\u7edc ",(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d --network host ....."),"   "))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u6309\u7167\u6d41\u7a0b\u90e8\u7f72\uff0c\u8bbf\u95ee http://ip:1157/ \u65e0\u754c\u9762",(0,n.yg)("br",{parentName:"p"}),"\n","\u8bf7\u53c2\u8003\u4e0b\u9762\u51e0\u70b9\u6392\u67e5\u95ee\u9898\uff1a  "),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u4e00\uff1a\u82e5\u5207\u6362\u4e86\u4f9d\u8d56\u670d\u52a1MYSQL\u6570\u636e\u5e93\uff0c\u6392\u67e5\u6570\u636e\u5e93\u662f\u5426\u6210\u529f\u521b\u5efa\uff0c\u662f\u5426\u542f\u52a8\u6210\u529f\n\u4e8c\uff1aHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,n.yg)("inlineCode",{parentName:"p"},"application.yml")," \u91cc\u9762\u7684\u4f9d\u8d56\u670d\u52a1IP\u8d26\u6237\u5bc6\u7801\u7b49\u914d\u7f6e\u662f\u5426\u6b63\u786e",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e09\uff1a\u82e5\u90fd\u65e0\u95ee\u9898\u53ef\u4ee5 ",(0,n.yg)("inlineCode",{parentName:"p"},"docker logs hertzbeat")," \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\u662f\u5426\u6709\u660e\u663e\u9519\u8bef\uff0c\u63d0issue\u6216\u4ea4\u6d41\u7fa4\u6216\u793e\u533a\u53cd\u9988"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u76d1\u63a7\u9875\u9762\u5386\u53f2\u56fe\u8868\u4e0d\u663e\u793a\uff0c\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u5982\u5f39\u7a97\u6240\u793a\uff0c\u5386\u53f2\u56fe\u8868\u5c55\u793a\u7684\u524d\u63d0\u662f\u9700\u8981\u5b89\u88c5\u914d\u7f6ehertzbeat\u7684\u4f9d\u8d56\u670d\u52a1 -\n\u5b89\u88c5\u521d\u59cb\u5316\u6b64\u65f6\u5e8f\u6570\u636e\u5e93"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5b89\u88c5\u914d\u7f6e\u4e86\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u4f46\u9875\u9762\u4f9d\u65e7\u663e\u793a\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u8bf7\u68c0\u67e5\u914d\u7f6e\u7684\u65f6\u8bb8\u6570\u636e\u5e93\u53c2\u6570\u662f\u5426\u6b63\u786e\n\u65f6\u5e8f\u6570\u636e\u5e93\u5bf9\u5e94\u7684 enable \u662f\u5426\u8bbe\u7f6e\u4e3atrue\n\u6ce8\u610f\u26a0\ufe0f\u82e5hertzbeat\u548c\u5916\u7f6e\u6570\u636e\u5e93\u90fd\u4e3adocker\u5bb9\u5668\u5728\u540c\u4e00\u4e3b\u673a\u4e0b\u542f\u52a8\uff0c\u5bb9\u5668\u4e4b\u95f4\u9ed8\u8ba4\u4e0d\u80fd\u7528127.0.0.1\u901a\u8baf\uff0c\u6539\u4e3a\u4e3b\u673aIP\n\u53ef\u6839\u636elogs\u76ee\u5f55\u4e0b\u542f\u52a8\u65e5\u5fd7\u6392\u67e5"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"application.yml \u662f\u5e72\u4ec0\u4e48\u7528\u7684 "))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u6b64\u6587\u4ef6\u662fHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u914d\u7f6eHertzBeat\u7684\u5404\u79cd\u53c2\u6570\uff0c\u5982\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\uff0c\u65f6\u5e8f\u6570\u636e\u5e93\u914d\u7f6e\u7b49\u3002")),(0,n.yg)("p",null,"\u4e0b\u8f7d ",(0,n.yg)("inlineCode",{parentName:"p"},"application.yml")," \u6587\u4ef6\u5230\u4e3b\u673a\u76ee\u5f55\u4e0b\uff0c\u4f8b\u5982: $(pwd)/application.yml",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e0b\u8f7d\u6e90 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/raw/master/script/application.yml"},"github/script/application.yml"),"   "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u82e5\u9700\u4f7f\u7528\u90ae\u4ef6\u53d1\u9001\u544a\u8b66\uff0c\u9700\u66ff\u6362 ",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml")," \u91cc\u9762\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u53c2\u6570"),(0,n.yg)("li",{parentName:"ul"},"\u82e5\u9700\u4f7f\u7528\u5916\u7f6eMysql\u6570\u636e\u5e93\u66ff\u6362\u5185\u7f6eH2\u6570\u636e\u5e93\uff0c\u9700\u66ff\u6362",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"),"\u91cc\u9762\u7684",(0,n.yg)("inlineCode",{parentName:"li"},"spring.datasource"),"\u53c2\u6570 \u5177\u4f53\u6b65\u9aa4\u53c2\u89c1 ",(0,n.yg)("a",{parentName:"li",href:"mysql-change"},"H2\u6570\u636e\u5e93\u5207\u6362\u4e3aMYSQL"),"\uff09"),(0,n.yg)("li",{parentName:"ul"},"\u82e5\u9700\u4f7f\u7528\u65f6\u5e8f\u6570\u636e\u5e93TDengine\u6765\u5b58\u50a8\u6307\u6807\u6570\u636e\uff0c\u9700\u66ff\u6362",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"),"\u91cc\u9762\u7684",(0,n.yg)("inlineCode",{parentName:"li"},"warehouse.store.victoria-metrics"),"\u53c2\u6570 \u5177\u4f53\u6b65\u9aa4\u53c2\u89c1 ",(0,n.yg)("a",{parentName:"li",href:"victoria-metrics-init"},"\u4f7f\u7528victoria-metrics\u5b58\u50a8\u6307\u6807\u6570\u636e"))),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"sureness.yml \u662f\u5e72\u4ec0\u4e48\u7528\u7684")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u6b64\u6587\u4ef6\u662fHertzBeat\u7684\u7528\u6237\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u914d\u7f6eHertzBeat\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5982\u8d26\u6237\u5bc6\u7801\u7b49\u3002")),(0,n.yg)("p",null,"HertzBeat\u9ed8\u8ba4\u5185\u7f6e\u4e09\u4e2a\u7528\u6237\u8d26\u6237,\u5206\u522b\u4e3a admin/hertzbeat tom/hertzbeat guest/hertzbeat",(0,n.yg)("br",{parentName:"p"}),"\n","\u82e5\u9700\u8981\u65b0\u589e\u5220\u9664\u4fee\u6539\u8d26\u6237\u6216\u5bc6\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,n.yg)("inlineCode",{parentName:"p"},"sureness.yml")," \u5b9e\u73b0\uff0c\u82e5\u65e0\u6b64\u9700\u6c42\u53ef\u5ffd\u7565\u6b64\u6b65\u9aa4",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e0b\u8f7d ",(0,n.yg)("inlineCode",{parentName:"p"},"sureness.yml")," \u6587\u4ef6\u5230\u4e3b\u673a\u76ee\u5f55\u4e0b\uff0c\u4f8b\u5982: $(pwd)/sureness.yml",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e0b\u8f7d\u6e90 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/raw/master/script/sureness.yml"},"github/script/sureness.yml"),(0,n.yg)("br",{parentName:"p"}),"\n","\u5177\u4f53\u4fee\u6539\u6b65\u9aa4\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"account-modify"},"\u914d\u7f6e\u4fee\u6539\u8d26\u6237\u5bc6\u7801")))}y.isMDXComponent=!0},99675:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cluster-arch-f5cb9fea50e3ce406fb7b97d2c0add56.png"}}]);