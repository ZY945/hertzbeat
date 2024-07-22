"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[82180],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=d(a),u=n,m=g["".concat(p,".").concat(u)]||g[u]||c[u]||i;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},32902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(58168),n=(a(96540),a(15680));const i={id:"upgrade",title:"HertzBeat New Version Upgrade",sidebar_label:"Version Upgrade Guide"},o=void 0,l={unversionedId:"start/upgrade",id:"start/upgrade",title:"HertzBeat New Version Upgrade",description:"HertzBeat Release Version List",source:"@site/docs/start/upgrade.md",sourceDirName:"start",slug:"/start/upgrade",permalink:"/docs/start/upgrade",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/start/upgrade.md",tags:[],version:"current",frontMatter:{id:"upgrade",title:"HertzBeat New Version Upgrade",sidebar_label:"Version Upgrade Guide"},sidebar:"docs",previous:{title:"Update to 1.6.0 guide",permalink:"/docs/start/1.6.0-update"},next:{title:"Update Account Secret",permalink:"/docs/start/account-modify"}},p={},d=[{value:"Upgrade For Docker Deploy",id:"upgrade-for-docker-deploy",level:3},{value:"Upgrade For Package Deploy",id:"upgrade-for-package-deploy",level:3}],s={toc:d};function c(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"HertzBeat Release Version List")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://hertzbeat.apache.org/docs/download"},"Download Page")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases"},"Github Release")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat/tags"},"DockerHub Release"))),(0,n.yg)("p",null,"Apache HertzBeat (incubating)'s metadata information is stored in H2 or Mysql, PostgreSQL relational databases, and the collected metric data is stored in time series databases such as TDengine and IotDB."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"You need to save and back up the data files of the database and monitoring templates yml files before upgrading")),(0,n.yg)("h3",{id:"upgrade-for-docker-deploy"},"Upgrade For Docker Deploy"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If using custom monitoring templates"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Need to back up docker templates directory ",(0,n.yg)("inlineCode",{parentName:"li"},"docker cp hertzbeat:/opt/hertzbeat/define ./define")," in the container ",(0,n.yg)("inlineCode",{parentName:"li"},"/opt/hertzbeat/define")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"docker cp hertzbeat:/opt/hertzbeat/define ./define")),(0,n.yg)("li",{parentName:"ul"},"And mount the template define directory when docker start ",(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/define:/opt/hertzbeat/define")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/define:/opt/hertzbeat/define")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If using the built-in default H2 database  "),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Need to mount or back up ",(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/data:/opt/hertzbeat/data")," database file directory in the container ",(0,n.yg)("inlineCode",{parentName:"li"},"/opt/hertzbeat/data")),(0,n.yg)("li",{parentName:"ul"},"Stop and delete the container, delete the local HertzBeat docker image, and pull the new version image"),(0,n.yg)("li",{parentName:"ul"},"Refer to ",(0,n.yg)("a",{parentName:"li",href:"docker-deploy"},"Docker installation of HertzBeat")," to create a new container using a new image. Note that the database file directory needs to be mounted ",(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/data:/opt/hertzbeat/data")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If using external relational database Mysql, PostgreSQL  "),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"No need to mount the database file directory in the backup container"),(0,n.yg)("li",{parentName:"ul"},"Stop and delete the container, delete the local HertzBeat docker image, and pull the new version image"),(0,n.yg)("li",{parentName:"ul"},"Refer to ",(0,n.yg)("a",{parentName:"li",href:"docker-deploy"},"Docker installation HertzBeat")," to create a new container using the new image, and configure the database connection in ",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"))))),(0,n.yg)("h3",{id:"upgrade-for-package-deploy"},"Upgrade For Package Deploy"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If using the built-in default H2 database  "),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Back up the database file directory under the installation package ",(0,n.yg)("inlineCode",{parentName:"li"},"/opt/hertzbeat/data")),(0,n.yg)("li",{parentName:"ul"},"If there is a custom monitoring template, you need to back up the template YML under ",(0,n.yg)("inlineCode",{parentName:"li"},"/opt/hertzbeat/define")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"bin/shutdown.sh")," stops the HertzBeat process and downloads the new installation package"),(0,n.yg)("li",{parentName:"ul"},"Refer to ",(0,n.yg)("a",{parentName:"li",href:"package-deploy"},"Installation package to install HertzBeat")," to start using the new installation package"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If using external relational database Mysql, PostgreSQL  "),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"No need to back up the database file directory under the installation package"),(0,n.yg)("li",{parentName:"ul"},"If there is a custom monitoring template, you need to back up the template YML under ",(0,n.yg)("inlineCode",{parentName:"li"},"/opt/hertzbeat/define")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"bin/shutdown.sh")," stops the HertzBeat process and downloads the new installation package"),(0,n.yg)("li",{parentName:"ul"},"Refer to ",(0,n.yg)("a",{parentName:"li",href:"package-deploy"},"Installation package to install HertzBeat")," to start with the new installation package and configure the database connection in ",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"))))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"HAVE FUN")))}c.isMDXComponent=!0}}]);