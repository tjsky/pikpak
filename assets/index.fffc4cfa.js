var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as D,u as me,r as h,o as K,a as Y,b as _,c as G,w as c,e as n,f as i,N as fe,g as ge,h as he,z as _e,i as ve,j as ke,k as Z,l as ye,m as we,n as Ee,p as xe,q as Fe,s as y,t as Ne,v as be,x as Ie,y as w,A,B as Be,C as De,D as B,E as v,F as q,G as Ae,H as Le,I as L,L as $e,J as X,K as Ce,M as Pe,O as Se,P as Oe,Q as Te,R as Re,S as je,T as Ve,U as Q,V as Me,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ge,a2 as Ze,a3 as qe}from"./vendor.64da71ad.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Xe();const Qe=D({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://diii.tk","https://api-pikpak.tjsky.cf","https://api-pikpak.tjsky-1.cf","https://cc123.cf","https://cf-api.xswd.cf","https://wkr.btstream.net","https://dns.firmant.me","https://pikpak.yang-s.online","https://pikpak.520936.xyz","https://pikpak-api.go-back.cf"],tt=D({setup(e){const t=h({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,a)=>{const s=Y("router-view");return _(),G(i(ke),{locale:i(_e),"date-locale":i(ve),"theme-overrides":t.value},{default:c(()=>[n(i(he),null,{default:c(()=>[n(i(fe),null,{default:c(()=>[n(i(ge),null,{default:c(()=>[n(Qe),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},st="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${st}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":ot,s||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),s)return new Promise((b,f)=>{l.addEventListener("load",b),l.addEventListener("error",f)})})).then(()=>t())};var at="/pikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let x=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),r=s?JSON.parse(s):{};return r.username&&r.password&&!x?(console.log("wait",o.url),x=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),x=!1,m(o))).catch(()=>(F.push("/login"),!1))):r.username&&r.password&&x?new Promise((l,b)=>{const f=setInterval(()=>{x||(clearInterval(f),l(m(o)))},100)}):(F.push("/login?redirect="+F.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const it=Z.create({});it.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const nt=v("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[v("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),v("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=w("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},ct=v("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),pt=w(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),dt={class:"bottom-user-info"},mt={key:0,src:at,class:"user-info-avatar"},ft={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},gt={class:"user-info-name"},ht={key:0},_t={class:"action"},vt=w(" \u9000\u51FA\u767B\u5F55 "),kt=w("\u6DFB\u52A0"),yt=D({setup(e){const t=h(!1),o=u=>()=>Q(L,null,{default:()=>Q(u)}),a=ye(),s=we(),r=h([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(Me)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),l=h(),b=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},f=h(),$=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{f.value=u.data}).catch(u=>{console.log(u)})},k=h(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var p;k.value=(p=u.data)==null?void 0:p.data})},se=(u,p)=>{console.log(p),a.push("/"+p.key)};K(()=>{b(),$(),oe()});const I=h(),E=h(!1),ae=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:I.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),$()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},C=h(!1),ie=u=>{C.value=u<800,t.value||(t.value=u<800)};Ee(s,()=>{C.value&&(t.value=!0)});const ne=xe(),re=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(u=>{console.log(u)})}})};return(u,p)=>{const le=Y("router-view"),ue=Fe("resize");return _(),y(Ve,null,[Ne(n(i(X),{"has-sider":"",onResize:ie},{default:c(()=>[n(i(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=g=>t.value=!0),onExpand:p[2]||(p[2]=g=>t.value=!1),bordered:""},{default:c(()=>{var g,P,S,O,T,R,j,V,M,z,J;return[nt,n(i(Ie),{options:r.value,value:String(i(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?B("",!0):(_(),y("div",rt,[w(A(i(te)((g=f.value)==null?void 0:g.quota.usage))+" / "+A(i(te)((P=f.value)==null?void 0:P.quota.limit))+" ",1),n(i(Be),{type:"primary",onClick:p[0]||(p[0]=xt=>E.value=!0)},{default:c(()=>[lt]),_:1}),((S=f.value)==null?void 0:S.quota)?(_(),G(i(De),{key:0,type:"line",percentage:Number((((O=f.value)==null?void 0:O.quota.usage)/((T=f.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=k.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):B("",!0),v("p",ut,[n(i(q),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[pt]),_:1})])])),t.value?B("",!0):(_(),y("div",{key:1,class:Ae(["sider-bottom",{vip:((j=k.value)==null?void 0:j.status)==="ok"}])},[v("div",dt,[((V=k.value)==null?void 0:V.status)==="ok"?(_(),y("img",mt)):(_(),y("img",ft)),v("div",gt,[w(A((M=l.value)==null?void 0:M.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(_(),y("div",ht,[n(i(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):B("",!0)]),v("div",_t,[n(i(q),null,{trigger:c(()=>[n(i(L),{onClick:re},{default:c(()=>[n(i($e))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(i(X),null,{default:c(()=>[n(i(Ce),{style:{height:"100vh"}},{default:c(()=>[n(i(Pe),{style:{"max-height":"100vh"}},{default:c(()=>[n(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),n(i(je),{show:E.value,"onUpdate:show":p[5]||(p[5]=g=>E.value=g)},{default:c(()=>[n(i(Se),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(i(L),{onClick:p[3]||(p[3]=g=>E.value=!1)},{default:c(()=>[n(i(Oe))]),_:1})]),action:c(()=>[n(i(Te),{block:!0,type:"primary",disabled:!I.value,onClick:ae},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[n(i(Re),{placeholder:"\u4F1A\u5458\u7801",value:I.value,"onUpdate:value":p[4]||(p[4]=g=>I.value=g)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.62eac94f.js"),["assets/list.62eac94f.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.62eac94f.js"),["assets/list.62eac94f.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.62eac94f.js"),["assets/list.62eac94f.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.98a9cf90.js"),["assets/trash.98a9cf90.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.eef45583.js"),["assets/setting.eef45583.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.5e47485f.js"),["assets/invited.5e47485f.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.cbe632b5.js"),["assets/test.cbe632b5.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.829898b0.js"),["assets/shareInfo.829898b0.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.821f8f0f.js"),["assets/login.821f8f0f.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.7276bbee.js"),["assets/sms.7276bbee.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.a85c52cc.js"),["assets/register.a85c52cc.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.46de48d0.js"),["assets/testtest.46de48d0.js","assets/vendor.64da71ad.js"])}],Et=Ke({history:Ye(),routes:wt});var F=Et;const N=Ge(tt);N.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,r=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});N.config.globalProperties.$http=m;N.use(F);N.use(qe,{router:F,siteIdList:[1280680983]});N.mount("#app");export{te as b,m as i,et as p};
