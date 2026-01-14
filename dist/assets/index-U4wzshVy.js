const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-4SS_TUv1.js","assets/ui-CuDAUpxO.js","assets/react-BjlJThec.js","assets/MenuItemCard-D7iSwY4P.js","assets/MenuItemCard-BNVqfTkh.css","assets/SliderMobile-pQhpsxsL.js","assets/a11y-EIo1Ei7w.js","assets/swiper-Cl-SL7yl.js","assets/Button-qNY6Ndoj.js","assets/SliderMobile-BUrcyj0q.css","assets/GoshtBadge-DYzX1QHZ.js","assets/EventsSection-CdVgQ7Lu.js","assets/form-BnEbJxh9.js","assets/redux-1Y8IFHhn.js","assets/MainPage-BySJg5wt.css","assets/EventsPage-Cj3UW2hL.js","assets/index-nUfILl86.js","assets/EventsCardPage-cax3FGzF.js","assets/KidsEventsPage-B7poLrz8.js","assets/AboutPage-CdX2hwQu.js","assets/LocationPage-Bh_yR5di.js","assets/LocationPage-CIGW-MKW.css","assets/CareerPage-BwZOFcdd.js","assets/CareerCard-BYQ5qbUu.js","assets/MenuPage-DrXXn5V1.js","assets/CareerMorePage-B3_9UfP8.js"])))=>i.map(i=>d[i]);
import{d as Z,j as t,f as Jt,o as Yt}from"./ui-CuDAUpxO.js";import{b as Zt,u as Xt,a as N,c as er,d as tr,e as rr,f as nr,s as me,R as ne,h as Xe,L as $,O as sr,B as ir,i as or,j as K,P as ar}from"./react-BjlJThec.js";import{o as cr,r as lr,a as ur,c as et,b as G,d as dr,u as tt,C as H,e as fr}from"./form-BnEbJxh9.js";import{w as ft,n as zt,f as Ct,i as se,e as pr,c as ue,a as Rt,b as pt,S as pe,d as oe,p as de,g as Te,h as rt,j as ie,k as mt,l as mr,m as nt,o as De,q as st,r as It,s as hr,t as Qt,u as gr,v as ht,x as xr,y as br,z as yr}from"./redux-1Y8IFHhn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function n(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(d){if(d.ep)return;d.ep=!0;const m=n(d);fetch(d.href,m)}})();var xe={},gt;function vr(){if(gt)return xe;gt=1;var e=Zt();return xe.createRoot=e.createRoot,xe.hydrateRoot=e.hydrateRoot,xe}var jr=vr();const wr={white:"white",red:"#AA181A",black:"#000000",grey:"#808080",textGrey:"#00000080"},Sr={font20$16:"calc(0.4vw + 14.6px)",font18$14:"calc(0.4vw + 12.6px)",font16$14:"calc(0.2vw + 13.3px)",font16$12:"calc(0.4vw + 10.6px)"},Ar={roboto:"Roboto",robotoSerif:"Roboto Serif"},kr={padding6024:"calc(3.4vw + 11.3px)"},_r={colors:{...wr},fontSize:{...Sr},fontFamily:{...Ar},padding:{...kr}},Er="modulepreload",qr=function(e){return"/"+e},xt={},X=function(r,n,o){let d=Promise.resolve();if(n&&n.length>0){let h=function(p){return Promise.all(p.map(E=>Promise.resolve(E).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),_=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));d=h(n.map(p=>{if(p=qr(p),p in xt)return;xt[p]=!0;const E=p.endsWith(".css"),k=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${k}`))return;const g=document.createElement("link");if(g.rel=E?"stylesheet":Er,E||(g.as="script"),g.crossOrigin="",g.href=p,_&&g.setAttribute("nonce",_),document.head.appendChild(g),E)return new Promise((l,b)=>{g.addEventListener("load",l),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function m(h){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=h,window.dispatchEvent(y),!y.defaultPrevented)throw h}return d.then(h=>{for(const y of h||[])y.status==="rejected"&&m(y.reason);return r().catch(m)})},Mr=()=>{const{pathname:e}=Xt();return N.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Pr=Z.label`
  font-size: ${e=>e.theme.fontSize.font16$12};
  display: block;
  font-family: ${e=>e.theme.fontFamily.roboto};
  div{
    
    margin-top: 8px;
    display: flex;
    gap: 0 10px;
    padding: 16px;
    border-radius: 12px;
    background-color: #fff;
    border: 1px solid #00000033;
    svg{
        font-size: 24px;
        color: #8C8E91;
    }
    input,textarea{
        display: block;
        width: 100%;
        outline: none;
        border: none;
        background-color: #fff;
        font-size: ${e=>e.theme.fontSize.font16$12};
        resize: none;
    }
    
  }
  p{
    margin-top: 10px;
    color: ${e=>e.theme.colors.red};
  }
`,Y=({labelText:e,inputIcon:r,isInput:n=!0,areaPlaceholder:o,errorText:d,isError:m,...h})=>t.jsxs(Pr,{children:[e,r?t.jsx("div",{children:n?t.jsx("input",{type:"text",...h}):t.jsx("textarea",{className:"textArea",rows:5,placeholder:o})}):t.jsx("div",{children:n?t.jsx("input",{type:"text",...h}):t.jsx("textarea",{className:"textArea",rows:r?5:10,placeholder:o})}),m&&t.jsx("p",{children:d})]}),Nr=Z.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  min-height: 100vh;
  .exit {
    position: absolute;
    top: calc(4.1vw + 4.5px);
    right: calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #b9bcbb;
  }
  .form {
    width: calc(23.4vw + 199.3px);
    padding: calc(-0.4vw + 57.4px) calc(4.9vw + 1.7px) calc(3vw + 8.7px);
    h4 {
      font-weight: 500;
      font-family: ${e=>e.theme.fontFamily.robotoSerif};
      line-height: 117%;
      padding-bottom: calc(0.19vw + 13px);
    }
    button {
      margin-top: 24px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 30px 0;
      label {
        font-family: "Roboto";
        textarea {
          margin-top: 8px;
          height: 100px;
          display: block;
          width: 100%;
          border: 1px solid #00000033;
          font-family: "Roboto";
          padding: 16px;
          resize: none;
          border-radius: 12px;
        }
      }
    }
  }
  .image {
    background-image: url(/img/FormFeedBackImg.png);
    min-height: 287px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 1;
    img {
      width: 100%;
    }
  }

  @media (max-width: 875px) {
    flex-direction: column;
    padding: 56px 20px;
    .form {
      width: 100%;
    }
    .image {
      height: calc(68.8vw + 29px);
      flex-grow: 0;
      border-radius: 12px;
      img {
        border-radius: 12px;
      }
    }
  }
`,Or=Z.button`
  height: 48px;
  border-radius:4px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  font-family:  ${e=>e.theme.fontFamily.robotoSerif};
  font-size: 16px;
  font-weight: 400;
  color: white;

  &.fill {
    background-color: ${e=>e.theme.colors.red};
    width: fit-content;
    padding: 12px 24px;
    border-radius:4px;
  }

  &.outlined {
    background-color: transparent;
    padding: 12px 24px;
    border: 1px solid rgba(26, 26, 26, 0.5);
    color: #1a1a1a;
    width: fit-content;
    border-radius: 4px;
  }
  span{
    margin-left: 5px;
    color: ${e=>e.theme.colors.red};
  }
  @media (max-width: 875px) {
    flex-direction: column;

    &.outlined {
      width: 100% !important;
    }
  }
`,it=({text:e,onClick:r,variant:n,childText:o,typeButton:d="button"})=>t.jsxs(Or,{className:`Button ${n}`,onClick:r,type:d,children:[e,o&&t.jsx("span",{children:o})]}),ot=({text:e,variant:r="h2",childText:n})=>(()=>{switch(r){case"h1":return t.jsxs("h1",{children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h2":return t.jsxs("h2",{children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h3":return t.jsxs("h3",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h4":return t.jsxs("h4",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h5":return t.jsxs("h5",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h6":return t.jsxs("h6",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});default:return t.jsxs("h2",{children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]})}})();function at(e,r,n){return r===void 0&&(r={}),n===void 0&&(n={}),function(o,d,m){try{return Promise.resolve((function(h,y){try{var _=(r.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:d}))).then(function(p){return m.shouldUseNativeValidation&&cr({},m),{values:n.raw?o:p,errors:{}}}))}catch(p){return y(p)}return _&&_.then?_.then(void 0,y):_})(0,function(h){if(!h.inner)throw h;return{values:{},errors:lr((y=h,_=!m.shouldUseNativeValidation&&m.criteriaMode==="all",(y.inner||[]).reduce(function(p,E){if(p[E.path]||(p[E.path]={message:E.message,type:E.type}),_){var k=p[E.path].types,g=k&&k[E.type];p[E.path]=ur(E.path,_,p,E.type,g?[].concat(g,E.message):E.message)}return p},{})),m)};var y,_}))}catch(h){return Promise.reject(h)}}}const zr=et({first_name:G().required("Обязательное поле!"),email:G().email("Введите корректный email").required("Обязательное поле!"),rate:dr().required("Обязательное поле!"),last_name:G().required("Обязательное поле!"),additional_info:G().transform((e,r)=>r===""?void 0:e).notRequired().nullable()});var Ft=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(Ft||{});function Cr(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var bt=se;function Tt(e,r){if(e===r||!(bt(e)&&bt(r)||Array.isArray(e)&&Array.isArray(r)))return r;const n=Object.keys(r),o=Object.keys(e);let d=n.length===o.length;const m=Array.isArray(r)?[]:{};for(const h of n)m[h]=Tt(e[h],r[h]),d&&(d=e[h]===m[h]);return d?e:m}function le(e){let r=0;for(const n in e)r++;return r}var yt=e=>[].concat(...e);function Rr(e){return new RegExp("(^|:)//").test(e)}function Ir(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function $e(e){return e!=null}function Qr(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var Fr=e=>e.replace(/\/$/,""),Tr=e=>e.replace(/^\//,"");function $r(e,r){if(!e)return r;if(!r)return e;if(Rr(r))return r;const n=e.endsWith("/")||!r.startsWith("?")?"/":"";return e=Fr(e),r=Tr(r),`${e}${n}${r}`}function Lr(e,r,n){return e.has(r)?e.get(r):e.set(r,n).get(r)}var vt=(...e)=>fetch(...e),Br=e=>e.status>=200&&e.status<=299,Dr=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function jt(e){if(!se(e))return e;const r={...e};for(const[n,o]of Object.entries(r))o===void 0&&delete r[n];return r}function Q({baseUrl:e,prepareHeaders:r=k=>k,fetchFn:n=vt,paramsSerializer:o,isJsonContentType:d=Dr,jsonContentType:m="application/json",jsonReplacer:h,timeout:y,responseHandler:_,validateStatus:p,...E}={}){return typeof fetch>"u"&&n===vt&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(g,l,b)=>{const{getState:f,extra:i,endpoint:v,forced:s,type:a}=l;let u,{url:q,headers:w=new Headers(E.headers),params:c=void 0,responseHandler:j=_??"json",validateStatus:S=p??Br,timeout:x=y,...A}=typeof g=="string"?{url:g}:g,M,P=l.signal;x&&(M=new AbortController,l.signal.addEventListener("abort",M.abort),P=M.signal);let O={...E,signal:P,...A};w=new Headers(jt(w)),O.headers=await r(w,{getState:f,arg:g,extra:i,endpoint:v,forced:s,type:a,extraOptions:b})||w;const z=V=>typeof V=="object"&&(se(V)||Array.isArray(V)||typeof V.toJSON=="function");if(!O.headers.has("content-type")&&z(O.body)&&O.headers.set("content-type",m),z(O.body)&&d(O.headers)&&(O.body=JSON.stringify(O.body,h)),c){const V=~q.indexOf("?")?"&":"?",re=o?o(c):new URLSearchParams(jt(c));q+=V+re}q=$r(e,q);const I=new Request(q,O);u={request:new Request(q,O)};let C,L=!1,R=M&&setTimeout(()=>{L=!0,M.abort()},x);try{C=await n(I)}catch(V){return{error:{status:L?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(V)},meta:u}}finally{R&&clearTimeout(R),M==null||M.signal.removeEventListener("abort",M.abort)}const D=C.clone();u.response=D;let W,U="";try{let V;if(await Promise.all([k(C,j).then(re=>W=re,re=>V=re),D.text().then(re=>U=re,()=>{})]),V)throw V}catch(V){return{error:{status:"PARSING_ERROR",originalStatus:C.status,data:U,error:String(V)},meta:u}}return S(C,W)?{data:W,meta:u}:{error:{status:C.status,data:W},meta:u}};async function k(g,l){if(typeof l=="function")return l(g);if(l==="content-type"&&(l=d(g.headers)?"json":"text"),l==="json"){const b=await g.text();return b.length?JSON.parse(b):null}return g.text()}}var wt=class{constructor(e,r=void 0){this.value=e,this.meta=r}},ct=ue("__rtkq/focused"),$t=ue("__rtkq/unfocused"),lt=ue("__rtkq/online"),Lt=ue("__rtkq/offline");function Bt(e){return e.type==="query"}function Ur(e){return e.type==="mutation"}function ut(e,r,n,o,d,m){return Hr(e)?e(r,n,o,d).filter($e).map(Ye).map(m):Array.isArray(e)?e.map(Ye).map(m):[]}function Hr(e){return typeof e=="function"}function Ye(e){return typeof e=="string"?{type:e}:e}function Vr(e,r){return e.catch(r)}var he=Symbol("forceQueryFn"),Ze=e=>typeof e[he]=="function";function Kr({serializeQueryArgs:e,queryThunk:r,mutationThunk:n,api:o,context:d}){const m=new Map,h=new Map,{unsubscribeQueryResult:y,removeMutationResult:_,updateSubscriptionOptions:p}=o.internalActions;return{buildInitiateQuery:b,buildInitiateMutation:f,getRunningQueryThunk:E,getRunningMutationThunk:k,getRunningQueriesThunk:g,getRunningMutationsThunk:l};function E(i,v){return s=>{var q;const a=d.endpointDefinitions[i],u=e({queryArgs:v,endpointDefinition:a,endpointName:i});return(q=m.get(s))==null?void 0:q[u]}}function k(i,v){return s=>{var a;return(a=h.get(s))==null?void 0:a[v]}}function g(){return i=>Object.values(m.get(i)||{}).filter($e)}function l(){return i=>Object.values(h.get(i)||{}).filter($e)}function b(i,v){const s=(a,{subscribe:u=!0,forceRefetch:q,subscriptionOptions:w,[he]:c,...j}={})=>(S,x)=>{var W;const A=e({queryArgs:a,endpointDefinition:v,endpointName:i}),M=r({...j,type:"query",subscribe:u,forceRefetch:q,subscriptionOptions:w,endpointName:i,originalArgs:a,queryCacheKey:A,[he]:c}),P=o.endpoints[i].select(a),O=S(M),z=P(x()),{requestId:I,abort:T}=O,C=z.requestId!==I,L=(W=m.get(S))==null?void 0:W[A],R=()=>P(x()),D=Object.assign(c?O.then(R):C&&!L?Promise.resolve(z):Promise.all([L,O]).then(R),{arg:a,requestId:I,subscriptionOptions:w,queryCacheKey:A,abort:T,async unwrap(){const U=await D;if(U.isError)throw U.error;return U.data},refetch:()=>S(s(a,{subscribe:!1,forceRefetch:!0})),unsubscribe(){u&&S(y({queryCacheKey:A,requestId:I}))},updateSubscriptionOptions(U){D.subscriptionOptions=U,S(p({endpointName:i,requestId:I,queryCacheKey:A,options:U}))}});if(!L&&!C&&!c){const U=Lr(m,S,{});U[A]=D,D.then(()=>{delete U[A],le(U)||m.delete(S)})}return D};return s}function f(i){return(v,{track:s=!0,fixedCacheKey:a}={})=>(u,q)=>{const w=n({type:"mutation",endpointName:i,originalArgs:v,track:s,fixedCacheKey:a}),c=u(w),{requestId:j,abort:S,unwrap:x}=c,A=Vr(c.unwrap().then(z=>({data:z})),z=>({error:z})),M=()=>{u(_({requestId:j,fixedCacheKey:a}))},P=Object.assign(A,{arg:c.arg,requestId:j,abort:S,unwrap:x,reset:M}),O=h.get(u)||{};return h.set(u,O),O[j]=P,P.then(()=>{delete O[j],le(O)||h.delete(u)}),a&&(O[a]=P,P.then(()=>{O[a]===P&&(delete O[a],le(O)||h.delete(u))})),P}}}function St(e){return e}function Wr({reducerPath:e,baseQuery:r,context:{endpointDefinitions:n},serializeQueryArgs:o,api:d,assertTagType:m}){const h=(s,a,u,q)=>(w,c)=>{const j=n[s],S=o({queryArgs:a,endpointDefinition:j,endpointName:s});if(w(d.internalActions.queryResultPatched({queryCacheKey:S,patches:u})),!q)return;const x=d.endpoints[s].select(a)(c()),A=ut(j.providesTags,x.data,void 0,a,{},m);w(d.internalActions.updateProvidedBy({queryCacheKey:S,providedTags:A}))},y=(s,a,u,q=!0)=>(w,c)=>{const S=d.endpoints[s].select(a)(c()),x={patches:[],inversePatches:[],undo:()=>w(d.util.patchQueryData(s,a,x.inversePatches,q))};if(S.status==="uninitialized")return x;let A;if("data"in S)if(hr(S.data)){const[M,P,O]=Qt(S.data,u);x.patches.push(...P),x.inversePatches.push(...O),A=M}else A=u(S.data),x.patches.push({op:"replace",path:[],value:A}),x.inversePatches.push({op:"replace",path:[],value:S.data});return x.patches.length===0||w(d.util.patchQueryData(s,a,x.patches,q)),x},_=(s,a,u)=>q=>q(d.endpoints[s].initiate(a,{subscribe:!1,forceRefetch:!0,[he]:()=>({data:u})})),p=async(s,{signal:a,abort:u,rejectWithValue:q,fulfillWithValue:w,dispatch:c,getState:j,extra:S})=>{const x=n[s.endpointName];try{let A=St,M;const P={signal:a,abort:u,dispatch:c,getState:j,extra:S,endpoint:s.endpointName,type:s.type,forced:s.type==="query"?E(s,j()):void 0,queryCacheKey:s.type==="query"?s.queryCacheKey:void 0},O=s.type==="query"?s[he]:void 0;if(O?M=O():x.query?(M=await r(x.query(s.originalArgs),P,x.extraOptions),x.transformResponse&&(A=x.transformResponse)):M=await x.queryFn(s.originalArgs,P,x.extraOptions,z=>r(z,P,x.extraOptions)),typeof process<"u",M.error)throw new wt(M.error,M.meta);return w(await A(M.data,M.meta,s.originalArgs),{fulfilledTimeStamp:Date.now(),baseQueryMeta:M.meta,[pe]:!0})}catch(A){let M=A;if(M instanceof wt){let P=St;x.query&&x.transformErrorResponse&&(P=x.transformErrorResponse);try{return q(await P(M.value,M.meta,s.originalArgs),{baseQueryMeta:M.meta,[pe]:!0})}catch(O){M=O}}throw console.error(M),M}};function E(s,a){var j,S,x;const u=(S=(j=a[e])==null?void 0:j.queries)==null?void 0:S[s.queryCacheKey],q=(x=a[e])==null?void 0:x.config.refetchOnMountOrArgChange,w=u==null?void 0:u.fulfilledTimeStamp,c=s.forceRefetch??(s.subscribe&&q);return c?c===!0||(Number(new Date)-Number(w))/1e3>=c:!1}const k=pt(`${e}/executeQuery`,p,{getPendingMeta(){return{startedTimeStamp:Date.now(),[pe]:!0}},condition(s,{getState:a}){var x,A,M;const u=a(),q=(A=(x=u[e])==null?void 0:x.queries)==null?void 0:A[s.queryCacheKey],w=q==null?void 0:q.fulfilledTimeStamp,c=s.originalArgs,j=q==null?void 0:q.originalArgs,S=n[s.endpointName];return Ze(s)?!0:(q==null?void 0:q.status)==="pending"?!1:E(s,u)||Bt(S)&&((M=S==null?void 0:S.forceRefetch)!=null&&M.call(S,{currentArg:c,previousArg:j,endpointState:q,state:u}))?!0:!w},dispatchConditionRejection:!0}),g=pt(`${e}/executeMutation`,p,{getPendingMeta(){return{startedTimeStamp:Date.now(),[pe]:!0}}}),l=s=>"force"in s,b=s=>"ifOlderThan"in s,f=(s,a,u)=>(q,w)=>{const c=l(u)&&u.force,j=b(u)&&u.ifOlderThan,S=(A=!0)=>{const M={forceRefetch:A,isPrefetch:!0};return d.endpoints[s].initiate(a,M)},x=d.endpoints[s].select(a)(w());if(c)q(S());else if(j){const A=x==null?void 0:x.fulfilledTimeStamp;if(!A){q(S());return}(Number(new Date)-Number(new Date(A)))/1e3>=j&&q(S())}else q(S(!1))};function i(s){return a=>{var u,q;return((q=(u=a==null?void 0:a.meta)==null?void 0:u.arg)==null?void 0:q.endpointName)===s}}function v(s,a){return{matchPending:De(It(s),i(a)),matchFulfilled:De(ie(s),i(a)),matchRejected:De(st(s),i(a))}}return{queryThunk:k,mutationThunk:g,prefetch:f,updateQueryData:y,upsertQueryData:_,patchQueryData:h,buildMatchThunkActions:v}}function Dt(e,r,n,o){return ut(n[e.meta.arg.endpointName][r],ie(e)?e.payload:void 0,rt(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,o)}function be(e,r,n){const o=e[r];o&&n(o)}function ge(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function At(e,r,n){const o=e[ge(r)];o&&n(o)}var fe={};function Gr({reducerPath:e,queryThunk:r,mutationThunk:n,serializeQueryArgs:o,context:{endpointDefinitions:d,apiUid:m,extractRehydrationInfo:h,hasRehydrationInfo:y},assertTagType:_,config:p}){const E=ue(`${e}/resetApiState`);function k(w,c,j,S){var x;w[x=c.queryCacheKey]??(w[x]={status:"uninitialized",endpointName:c.endpointName}),be(w,c.queryCacheKey,A=>{A.status="pending",A.requestId=j&&A.requestId?A.requestId:S.requestId,c.originalArgs!==void 0&&(A.originalArgs=c.originalArgs),A.startedTimeStamp=S.startedTimeStamp})}function g(w,c,j,S){be(w,c.arg.queryCacheKey,x=>{if(x.requestId!==c.requestId&&!S)return;const{merge:A}=d[c.arg.endpointName];if(x.status="fulfilled",A)if(x.data!==void 0){const{fulfilledTimeStamp:M,arg:P,baseQueryMeta:O,requestId:z}=c;let I=nt(x.data,T=>A(T,j,{arg:P.originalArgs,baseQueryMeta:O,fulfilledTimeStamp:M,requestId:z}));x.data=I}else x.data=j;else x.data=d[c.arg.endpointName].structuralSharing??!0?Tt(xr(x.data)?br(x.data):x.data,j):j;delete x.error,x.fulfilledTimeStamp=c.fulfilledTimeStamp})}const l=oe({name:`${e}/queries`,initialState:fe,reducers:{removeQueryResult:{reducer(w,{payload:{queryCacheKey:c}}){delete w[c]},prepare:de()},cacheEntriesUpserted:{reducer(w,c){for(const j of c.payload){const{queryDescription:S,value:x}=j;k(w,S,!0,{requestId:c.meta.requestId,startedTimeStamp:c.meta.timestamp}),g(w,{arg:S,requestId:c.meta.requestId,fulfilledTimeStamp:c.meta.timestamp,baseQueryMeta:{}},x,!0)}},prepare:w=>({payload:w.map(S=>{const{endpointName:x,arg:A,value:M}=S,P=d[x];return{queryDescription:{type:"query",endpointName:x,originalArgs:S.arg,queryCacheKey:o({queryArgs:A,endpointDefinition:P,endpointName:x})},value:M}}),meta:{[pe]:!0,requestId:zt(),timestamp:Date.now()}})},queryResultPatched:{reducer(w,{payload:{queryCacheKey:c,patches:j}}){be(w,c,S=>{S.data=mt(S.data,j.concat())})},prepare:de()}},extraReducers(w){w.addCase(r.pending,(c,{meta:j,meta:{arg:S}})=>{const x=Ze(S);k(c,S,x,j)}).addCase(r.fulfilled,(c,{meta:j,payload:S})=>{const x=Ze(j.arg);g(c,j,S,x)}).addCase(r.rejected,(c,{meta:{condition:j,arg:S,requestId:x},error:A,payload:M})=>{be(c,S.queryCacheKey,P=>{if(!j){if(P.requestId!==x)return;P.status="rejected",P.error=M??A}})}).addMatcher(y,(c,j)=>{const{queries:S}=h(j);for(const[x,A]of Object.entries(S))((A==null?void 0:A.status)==="fulfilled"||(A==null?void 0:A.status)==="rejected")&&(c[x]=A)})}}),b=oe({name:`${e}/mutations`,initialState:fe,reducers:{removeMutationResult:{reducer(w,{payload:c}){const j=ge(c);j in w&&delete w[j]},prepare:de()}},extraReducers(w){w.addCase(n.pending,(c,{meta:j,meta:{requestId:S,arg:x,startedTimeStamp:A}})=>{x.track&&(c[ge(j)]={requestId:S,status:"pending",endpointName:x.endpointName,startedTimeStamp:A})}).addCase(n.fulfilled,(c,{payload:j,meta:S})=>{S.arg.track&&At(c,S,x=>{x.requestId===S.requestId&&(x.status="fulfilled",x.data=j,x.fulfilledTimeStamp=S.fulfilledTimeStamp)})}).addCase(n.rejected,(c,{payload:j,error:S,meta:x})=>{x.arg.track&&At(c,x,A=>{A.requestId===x.requestId&&(A.status="rejected",A.error=j??S)})}).addMatcher(y,(c,j)=>{const{mutations:S}=h(j);for(const[x,A]of Object.entries(S))((A==null?void 0:A.status)==="fulfilled"||(A==null?void 0:A.status)==="rejected")&&x!==(A==null?void 0:A.requestId)&&(c[x]=A)})}}),f=oe({name:`${e}/invalidation`,initialState:fe,reducers:{updateProvidedBy:{reducer(w,c){var x,A;const{queryCacheKey:j,providedTags:S}=c.payload;for(const M of Object.values(w))for(const P of Object.values(M)){const O=P.indexOf(j);O!==-1&&P.splice(O,1)}for(const{type:M,id:P}of S){const O=(x=w[M]??(w[M]={}))[A=P||"__internal_without_id"]??(x[A]=[]);O.includes(j)||O.push(j)}},prepare:de()}},extraReducers(w){w.addCase(l.actions.removeQueryResult,(c,{payload:{queryCacheKey:j}})=>{for(const S of Object.values(c))for(const x of Object.values(S)){const A=x.indexOf(j);A!==-1&&x.splice(A,1)}}).addMatcher(y,(c,j)=>{var x,A;const{provided:S}=h(j);for(const[M,P]of Object.entries(S))for(const[O,z]of Object.entries(P)){const I=(x=c[M]??(c[M]={}))[A=O||"__internal_without_id"]??(x[A]=[]);for(const T of z)I.includes(T)||I.push(T)}}).addMatcher(Te(ie(r),rt(r)),(c,j)=>{const S=Dt(j,"providesTags",d,_),{queryCacheKey:x}=j.meta.arg;f.caseReducers.updateProvidedBy(c,f.actions.updateProvidedBy({queryCacheKey:x,providedTags:S}))})}}),i=oe({name:`${e}/subscriptions`,initialState:fe,reducers:{updateSubscriptionOptions(w,c){},unsubscribeQueryResult(w,c){},internal_getRTKQSubscriptions(){}}}),v=oe({name:`${e}/internalSubscriptions`,initialState:fe,reducers:{subscriptionsUpdated:{reducer(w,c){return mt(w,c.payload)},prepare:de()}}}),s=oe({name:`${e}/config`,initialState:{online:Qr(),focused:Ir(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered(w,{payload:c}){w.middlewareRegistered=w.middlewareRegistered==="conflict"||m!==c?"conflict":!0}},extraReducers:w=>{w.addCase(lt,c=>{c.online=!0}).addCase(Lt,c=>{c.online=!1}).addCase(ct,c=>{c.focused=!0}).addCase($t,c=>{c.focused=!1}).addMatcher(y,c=>({...c}))}}),a=mr({queries:l.reducer,mutations:b.reducer,provided:f.reducer,subscriptions:v.reducer,config:s.reducer}),u=(w,c)=>a(E.match(c)?void 0:w,c),q={...s.actions,...l.actions,...i.actions,...v.actions,...b.actions,...f.actions,resetApiState:E};return{reducer:u,actions:q}}var te=Symbol.for("RTKQ/skipToken"),Ut={status:"uninitialized"},kt=nt(Ut,()=>{}),_t=nt(Ut,()=>{});function Jr({serializeQueryArgs:e,reducerPath:r,createSelector:n}){const o=k=>kt,d=k=>_t;return{buildQuerySelector:y,buildMutationSelector:_,selectInvalidatedBy:p,selectCachedArgsForQuery:E};function m(k){return{...k,...Cr(k.status)}}function h(k){return k[r]}function y(k,g){return l=>{if(l===te)return n(o,m);const b=e({queryArgs:l,endpointDefinition:g,endpointName:k});return n(i=>{var v,s;return((s=(v=h(i))==null?void 0:v.queries)==null?void 0:s[b])??kt},m)}}function _(){return k=>{let g;return typeof k=="object"?g=ge(k)??te:g=k,n(g===te?d:f=>{var i,v;return((v=(i=h(f))==null?void 0:i.mutations)==null?void 0:v[g])??_t},m)}}function p(k,g){const l=k[r],b=new Set;for(const f of g.filter($e).map(Ye)){const i=l.provided[f.type];if(!i)continue;let v=(f.id!==void 0?i[f.id]:yt(Object.values(i)))??[];for(const s of v)b.add(s)}return yt(Array.from(b.values()).map(f=>{const i=l.queries[f];return i?[{queryCacheKey:f,endpointName:i.endpointName,originalArgs:i.originalArgs}]:[]}))}function E(k,g){return Object.values(k[r].queries).filter(l=>(l==null?void 0:l.endpointName)===g&&l.status!=="uninitialized").map(l=>l.originalArgs)}}var ae=WeakMap?new WeakMap:void 0,Et=({endpointName:e,queryArgs:r})=>{let n="";const o=ae==null?void 0:ae.get(r);if(typeof o=="string")n=o;else{const d=JSON.stringify(r,(m,h)=>(h=typeof h=="bigint"?{$bigint:h.toString()}:h,h=se(h)?Object.keys(h).sort().reduce((y,_)=>(y[_]=h[_],y),{}):h,h));se(r)&&(ae==null||ae.set(r,d)),n=d}return`${e}(${n})`};function Ht(...e){return function(n){const o=ft(p=>{var E;return(E=n.extractRehydrationInfo)==null?void 0:E.call(n,p,{reducerPath:n.reducerPath??"api"})}),d={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:o,serializeQueryArgs(p){let E=Et;if("serializeQueryArgs"in p.endpointDefinition){const k=p.endpointDefinition.serializeQueryArgs;E=g=>{const l=k(g);return typeof l=="string"?l:Et({...g,queryArgs:l})}}else n.serializeQueryArgs&&(E=n.serializeQueryArgs);return E(p)},tagTypes:[...n.tagTypes||[]]},m={endpointDefinitions:{},batch(p){p()},apiUid:zt(),extractRehydrationInfo:o,hasRehydrationInfo:ft(p=>o(p)!=null)},h={injectEndpoints:_,enhanceEndpoints({addTagTypes:p,endpoints:E}){if(p)for(const k of p)d.tagTypes.includes(k)||d.tagTypes.push(k);if(E)for(const[k,g]of Object.entries(E))typeof g=="function"?g(m.endpointDefinitions[k]):Object.assign(m.endpointDefinitions[k]||{},g);return h}},y=e.map(p=>p.init(h,d,m));function _(p){const E=p.endpoints({query:k=>({...k,type:"query"}),mutation:k=>({...k,type:"mutation"})});for(const[k,g]of Object.entries(E)){if(p.overrideExisting!==!0&&k in m.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(Ct(39));continue}m.endpointDefinitions[k]=g;for(const l of y)l.injectEndpoint(k,g)}return h}return h.injectEndpoints({endpoints:n.endpoints})}}function ee(e,...r){return Object.assign(e,...r)}var Yr=({api:e,queryThunk:r,internalState:n})=>{const o=`${e.reducerPath}/subscriptions`;let d=null,m=null;const{updateSubscriptionOptions:h,unsubscribeQueryResult:y}=e.internalActions,_=(l,b)=>{var i,v,s;if(h.match(b)){const{queryCacheKey:a,requestId:u,options:q}=b.payload;return(i=l==null?void 0:l[a])!=null&&i[u]&&(l[a][u]=q),!0}if(y.match(b)){const{queryCacheKey:a,requestId:u}=b.payload;return l[a]&&delete l[a][u],!0}if(e.internalActions.removeQueryResult.match(b))return delete l[b.payload.queryCacheKey],!0;if(r.pending.match(b)){const{meta:{arg:a,requestId:u}}=b,q=l[v=a.queryCacheKey]??(l[v]={});return q[`${u}_running`]={},a.subscribe&&(q[u]=a.subscriptionOptions??q[u]??{}),!0}let f=!1;if(r.fulfilled.match(b)||r.rejected.match(b)){const a=l[b.meta.arg.queryCacheKey]||{},u=`${b.meta.requestId}_running`;f||(f=!!a[u]),delete a[u]}if(r.rejected.match(b)){const{meta:{condition:a,arg:u,requestId:q}}=b;if(a&&u.subscribe){const w=l[s=u.queryCacheKey]??(l[s]={});w[q]=u.subscriptionOptions??w[q]??{},f=!0}}return f},p=()=>n.currentSubscriptions,g={getSubscriptions:p,getSubscriptionCount:l=>{const f=p()[l]??{};return le(f)},isRequestSubscribed:(l,b)=>{var i;const f=p();return!!((i=f==null?void 0:f[l])!=null&&i[b])}};return(l,b)=>{if(d||(d=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(l))return d=n.currentSubscriptions={},m=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(l))return[!1,g];const f=_(n.currentSubscriptions,l);let i=!0;if(f){m||(m=setTimeout(()=>{const a=JSON.parse(JSON.stringify(n.currentSubscriptions)),[,u]=Qt(d,()=>a);b.next(e.internalActions.subscriptionsUpdated(u)),d=a,m=null},500));const v=typeof l.type=="string"&&!!l.type.startsWith(o),s=r.rejected.match(l)&&l.meta.condition&&!!l.meta.arg.subscribe;i=!v&&!s}return[i,!1]}};function Zr(e){for(const r in e)return!1;return!0}var Xr=2147483647/1e3-1,en=({reducerPath:e,api:r,queryThunk:n,context:o,internalState:d})=>{const{removeQueryResult:m,unsubscribeQueryResult:h,cacheEntriesUpserted:y}=r.internalActions,_=Te(h.match,n.fulfilled,n.rejected,y.match);function p(l){const b=d.currentSubscriptions[l];return!!b&&!Zr(b)}const E={},k=(l,b,f)=>{var i;if(_(l)){const v=b.getState()[e];let s;if(y.match(l))s=l.payload.map(a=>a.queryDescription.queryCacheKey);else{const{queryCacheKey:a}=h.match(l)?l.payload:l.meta.arg;s=[a]}for(const a of s)g(a,(i=v.queries[a])==null?void 0:i.endpointName,b,v.config)}if(r.util.resetApiState.match(l))for(const[v,s]of Object.entries(E))s&&clearTimeout(s),delete E[v];if(o.hasRehydrationInfo(l)){const v=b.getState()[e],{queries:s}=o.extractRehydrationInfo(l);for(const[a,u]of Object.entries(s))g(a,u==null?void 0:u.endpointName,b,v.config)}};function g(l,b,f,i){const v=o.endpointDefinitions[b],s=(v==null?void 0:v.keepUnusedDataFor)??i.keepUnusedDataFor;if(s===1/0)return;const a=Math.max(0,Math.min(s,Xr));if(!p(l)){const u=E[l];u&&clearTimeout(u),E[l]=setTimeout(()=>{p(l)||f.dispatch(m({queryCacheKey:l})),delete E[l]},a*1e3)}}return k},qt=new Error("Promise never resolved before cacheEntryRemoved."),tn=({api:e,reducerPath:r,context:n,queryThunk:o,mutationThunk:d,internalState:m})=>{const h=ht(o),y=ht(d),_=ie(o,d),p={};function E(f,i,v){const s=p[f];s!=null&&s.valueResolved&&(s.valueResolved({data:i,meta:v}),delete s.valueResolved)}function k(f){const i=p[f];i&&(delete p[f],i.cacheEntryRemoved())}const g=(f,i,v)=>{const s=l(f);function a(u,q,w,c){const j=v[r].queries[q],S=i.getState()[r].queries[q];!j&&S&&b(u,c,q,i,w)}if(o.pending.match(f))a(f.meta.arg.endpointName,s,f.meta.requestId,f.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(f))for(const{queryDescription:u,value:q}of f.payload){const{endpointName:w,originalArgs:c,queryCacheKey:j}=u;a(w,j,f.meta.requestId,c),E(j,q,{})}else if(d.pending.match(f))i.getState()[r].mutations[s]&&b(f.meta.arg.endpointName,f.meta.arg.originalArgs,s,i,f.meta.requestId);else if(_(f))E(s,f.payload,f.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(f)||e.internalActions.removeMutationResult.match(f))k(s);else if(e.util.resetApiState.match(f))for(const u of Object.keys(p))k(u)};function l(f){return h(f)?f.meta.arg.queryCacheKey:y(f)?f.meta.arg.fixedCacheKey??f.meta.requestId:e.internalActions.removeQueryResult.match(f)?f.payload.queryCacheKey:e.internalActions.removeMutationResult.match(f)?ge(f.payload):""}function b(f,i,v,s,a){const u=n.endpointDefinitions[f],q=u==null?void 0:u.onCacheEntryAdded;if(!q)return;const w={},c=new Promise(P=>{w.cacheEntryRemoved=P}),j=Promise.race([new Promise(P=>{w.valueResolved=P}),c.then(()=>{throw qt})]);j.catch(()=>{}),p[v]=w;const S=e.endpoints[f].select(u.type==="query"?i:v),x=s.dispatch((P,O,z)=>z),A={...s,getCacheEntry:()=>S(s.getState()),requestId:a,extra:x,updateCachedData:u.type==="query"?P=>s.dispatch(e.util.updateQueryData(f,i,P)):void 0,cacheDataLoaded:j,cacheEntryRemoved:c},M=q(i,A);Promise.resolve(M).catch(P=>{if(P!==qt)throw P})}return g},rn=({api:e,context:{apiUid:r},reducerPath:n})=>(o,d)=>{e.util.resetApiState.match(o)&&d.dispatch(e.internalActions.middlewareRegistered(r))},nn=({reducerPath:e,context:r,context:{endpointDefinitions:n},mutationThunk:o,queryThunk:d,api:m,assertTagType:h,refetchQuery:y,internalState:_})=>{const{removeQueryResult:p}=m.internalActions,E=Te(ie(o),rt(o)),k=Te(ie(o,d),st(o,d));let g=[];const l=(i,v)=>{E(i)?f(Dt(i,"invalidatesTags",n,h),v):k(i)?f([],v):m.util.invalidateTags.match(i)&&f(ut(i.payload,void 0,void 0,void 0,void 0,h),v)};function b(i){var v,s;for(const a in i.queries)if(((v=i.queries[a])==null?void 0:v.status)==="pending")return!0;for(const a in i.mutations)if(((s=i.mutations[a])==null?void 0:s.status)==="pending")return!0;return!1}function f(i,v){const s=v.getState(),a=s[e];if(g.push(...i),a.config.invalidationBehavior==="delayed"&&b(a))return;const u=g;if(g=[],u.length===0)return;const q=m.util.selectInvalidatedBy(s,u);r.batch(()=>{const w=Array.from(q.values());for(const{queryCacheKey:c}of w){const j=a.queries[c],S=_.currentSubscriptions[c]??{};j&&(le(S)===0?v.dispatch(p({queryCacheKey:c})):j.status!=="uninitialized"&&v.dispatch(y(j)))}})}return l},sn=({reducerPath:e,queryThunk:r,api:n,refetchQuery:o,internalState:d})=>{const m={},h=(g,l)=>{(n.internalActions.updateSubscriptionOptions.match(g)||n.internalActions.unsubscribeQueryResult.match(g))&&_(g.payload,l),(r.pending.match(g)||r.rejected.match(g)&&g.meta.condition)&&_(g.meta.arg,l),(r.fulfilled.match(g)||r.rejected.match(g)&&!g.meta.condition)&&y(g.meta.arg,l),n.util.resetApiState.match(g)&&E()};function y({queryCacheKey:g},l){const b=l.getState()[e],f=b.queries[g],i=d.currentSubscriptions[g];if(!f||f.status==="uninitialized")return;const{lowestPollingInterval:v,skipPollingIfUnfocused:s}=k(i);if(!Number.isFinite(v))return;const a=m[g];a!=null&&a.timeout&&(clearTimeout(a.timeout),a.timeout=void 0);const u=Date.now()+v;m[g]={nextPollTimestamp:u,pollingInterval:v,timeout:setTimeout(()=>{(b.config.focused||!s)&&l.dispatch(o(f)),y({queryCacheKey:g},l)},v)}}function _({queryCacheKey:g},l){const f=l.getState()[e].queries[g],i=d.currentSubscriptions[g];if(!f||f.status==="uninitialized")return;const{lowestPollingInterval:v}=k(i);if(!Number.isFinite(v)){p(g);return}const s=m[g],a=Date.now()+v;(!s||a<s.nextPollTimestamp)&&y({queryCacheKey:g},l)}function p(g){const l=m[g];l!=null&&l.timeout&&clearTimeout(l.timeout),delete m[g]}function E(){for(const g of Object.keys(m))p(g)}function k(g={}){let l=!1,b=Number.POSITIVE_INFINITY;for(let f in g)g[f].pollingInterval&&(b=Math.min(g[f].pollingInterval,b),l=g[f].skipPollingIfUnfocused||l);return{lowestPollingInterval:b,skipPollingIfUnfocused:l}}return h},on=({api:e,context:r,queryThunk:n,mutationThunk:o})=>{const d=It(n,o),m=st(n,o),h=ie(n,o),y={};return(p,E)=>{var k,g;if(d(p)){const{requestId:l,arg:{endpointName:b,originalArgs:f}}=p.meta,i=r.endpointDefinitions[b],v=i==null?void 0:i.onQueryStarted;if(v){const s={},a=new Promise((c,j)=>{s.resolve=c,s.reject=j});a.catch(()=>{}),y[l]=s;const u=e.endpoints[b].select(i.type==="query"?f:l),q=E.dispatch((c,j,S)=>S),w={...E,getCacheEntry:()=>u(E.getState()),requestId:l,extra:q,updateCachedData:i.type==="query"?c=>E.dispatch(e.util.updateQueryData(b,f,c)):void 0,queryFulfilled:a};v(f,w)}}else if(h(p)){const{requestId:l,baseQueryMeta:b}=p.meta;(k=y[l])==null||k.resolve({data:p.payload,meta:b}),delete y[l]}else if(m(p)){const{requestId:l,rejectedWithValue:b,baseQueryMeta:f}=p.meta;(g=y[l])==null||g.reject({error:p.payload??p.error,isUnhandledError:!b,meta:f}),delete y[l]}}},an=({reducerPath:e,context:r,api:n,refetchQuery:o,internalState:d})=>{const{removeQueryResult:m}=n.internalActions,h=(_,p)=>{ct.match(_)&&y(p,"refetchOnFocus"),lt.match(_)&&y(p,"refetchOnReconnect")};function y(_,p){const E=_.getState()[e],k=E.queries,g=d.currentSubscriptions;r.batch(()=>{for(const l of Object.keys(g)){const b=k[l],f=g[l];if(!f||!b)continue;(Object.values(f).some(v=>v[p]===!0)||Object.values(f).every(v=>v[p]===void 0)&&E.config[p])&&(le(f)===0?_.dispatch(m({queryCacheKey:l})):b.status!=="uninitialized"&&_.dispatch(o(b)))}})}return h};function cn(e){const{reducerPath:r,queryThunk:n,api:o,context:d}=e,{apiUid:m}=d,h={invalidateTags:ue(`${r}/invalidateTags`)},y=k=>k.type.startsWith(`${r}/`),_=[rn,en,nn,sn,tn,on];return{middleware:k=>{let g=!1;const b={...e,internalState:{currentSubscriptions:{}},refetchQuery:E,isThisApiSliceAction:y},f=_.map(s=>s(b)),i=Yr(b),v=an(b);return s=>a=>{if(!gr(a))return s(a);g||(g=!0,k.dispatch(o.internalActions.middlewareRegistered(m)));const u={...k,next:s},q=k.getState(),[w,c]=i(a,u,q);let j;if(w?j=s(a):j=c,k.getState()[r]&&(v(a,u,q),y(a)||d.hasRehydrationInfo(a)))for(const S of f)S(a,u,q);return j}},actions:h};function E(k){return e.api.endpoints[k.endpointName].initiate(k.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Mt=Symbol(),Vt=({createSelector:e=Rt}={})=>({name:Mt,init(r,{baseQuery:n,tagTypes:o,reducerPath:d,serializeQueryArgs:m,keepUnusedDataFor:h,refetchOnMountOrArgChange:y,refetchOnFocus:_,refetchOnReconnect:p,invalidationBehavior:E},k){pr();const g=C=>C;Object.assign(r,{reducerPath:d,endpoints:{},internalActions:{onOnline:lt,onOffline:Lt,onFocus:ct,onFocusLost:$t},util:{}});const{queryThunk:l,mutationThunk:b,patchQueryData:f,updateQueryData:i,upsertQueryData:v,prefetch:s,buildMatchThunkActions:a}=Wr({baseQuery:n,reducerPath:d,context:k,api:r,serializeQueryArgs:m,assertTagType:g}),{reducer:u,actions:q}=Gr({context:k,queryThunk:l,mutationThunk:b,serializeQueryArgs:m,reducerPath:d,assertTagType:g,config:{refetchOnFocus:_,refetchOnReconnect:p,refetchOnMountOrArgChange:y,keepUnusedDataFor:h,reducerPath:d,invalidationBehavior:E}});ee(r.util,{patchQueryData:f,updateQueryData:i,upsertQueryData:v,prefetch:s,resetApiState:q.resetApiState,upsertQueryEntries:q.cacheEntriesUpserted}),ee(r.internalActions,q);const{middleware:w,actions:c}=cn({reducerPath:d,context:k,queryThunk:l,mutationThunk:b,api:r,assertTagType:g});ee(r.util,c),ee(r,{reducer:u,middleware:w});const{buildQuerySelector:j,buildMutationSelector:S,selectInvalidatedBy:x,selectCachedArgsForQuery:A}=Jr({serializeQueryArgs:m,reducerPath:d,createSelector:e});ee(r.util,{selectInvalidatedBy:x,selectCachedArgsForQuery:A});const{buildInitiateQuery:M,buildInitiateMutation:P,getRunningMutationThunk:O,getRunningMutationsThunk:z,getRunningQueriesThunk:I,getRunningQueryThunk:T}=Kr({queryThunk:l,mutationThunk:b,api:r,serializeQueryArgs:m,context:k});return ee(r.util,{getRunningMutationThunk:O,getRunningMutationsThunk:z,getRunningQueryThunk:T,getRunningQueriesThunk:I}),{name:Mt,injectEndpoint(C,L){var D;const R=r;(D=R.endpoints)[C]??(D[C]={}),Bt(L)?ee(R.endpoints[C],{name:C,select:j(C,L),initiate:M(C,L)},a(l,C)):Ur(L)&&ee(R.endpoints[C],{name:C,select:S(),initiate:P(C)},a(b,C))}}}});Vt();function Ue(e){return e.replace(e[0],e[0].toUpperCase())}function ln(e){return e.type==="query"}function un(e){return e.type==="mutation"}function ye(e,...r){return Object.assign(e,...r)}var ce=WeakMap?new WeakMap:void 0,dn=({endpointName:e,queryArgs:r})=>{let n="";const o=ce==null?void 0:ce.get(r);if(typeof o=="string")n=o;else{const d=JSON.stringify(r,(m,h)=>(h=typeof h=="bigint"?{$bigint:h.toString()}:h,h=se(h)?Object.keys(h).sort().reduce((y,_)=>(y[_]=h[_],y),{}):h,h));se(r)&&(ce==null||ce.set(r,d)),n=d}return`${e}(${n})`},He=Symbol();function Pt(e,r,n,o){const d=N.useMemo(()=>({queryArgs:e,serialized:typeof e=="object"?r({queryArgs:e,endpointDefinition:n,endpointName:o}):e}),[e,r,n,o]),m=N.useRef(d);return N.useEffect(()=>{m.current.serialized!==d.serialized&&(m.current=d)},[d]),m.current.serialized===d.serialized?m.current.queryArgs:e}function Ve(e){const r=N.useRef(e);return N.useEffect(()=>{me(r.current,e)||(r.current=e)},[e]),me(r.current,e)?r.current:e}var fn=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pn=fn(),mn=()=>typeof navigator<"u"&&navigator.product==="ReactNative",hn=mn(),gn=()=>pn||hn?N.useLayoutEffect:N.useEffect,xn=gn(),bn=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:Ft.pending}:e;function yn({api:e,moduleOptions:{batch:r,hooks:{useDispatch:n,useSelector:o,useStore:d},unstable__sideEffectsInRender:m,createSelector:h},serializeQueryArgs:y,context:_}){const p=m?b=>b():N.useEffect;return{buildQueryHooks:g,buildMutationHook:l,usePrefetch:k};function E(b,f,i){if(f!=null&&f.endpointName&&b.isUninitialized){const{endpointName:w}=f,c=_.endpointDefinitions[w];i!==te&&y({queryArgs:f.originalArgs,endpointDefinition:c,endpointName:w})===y({queryArgs:i,endpointDefinition:c,endpointName:w})&&(f=void 0)}let v=b.isSuccess?b.data:f==null?void 0:f.data;v===void 0&&(v=b.data);const s=v!==void 0,a=b.isLoading,u=(!f||f.isLoading||f.isUninitialized)&&!s&&a,q=b.isSuccess||s&&(a&&!(f!=null&&f.isError)||b.isUninitialized);return{...b,data:v,currentData:b.data,isFetching:a,isLoading:u,isSuccess:q}}function k(b,f){const i=n(),v=Ve(f);return N.useCallback((s,a)=>i(e.util.prefetch(b,s,{...v,...a})),[b,i,v])}function g(b){const f=(s,{refetchOnReconnect:a,refetchOnFocus:u,refetchOnMountOrArgChange:q,skip:w=!1,pollingInterval:c=0,skipPollingIfUnfocused:j=!1}={})=>{const{initiate:S}=e.endpoints[b],x=n(),A=N.useRef(void 0);if(!A.current){const R=x(e.internalActions.internal_getRTKQSubscriptions());A.current=R}const M=Pt(w?te:s,dn,_.endpointDefinitions[b],b),P=Ve({refetchOnReconnect:a,refetchOnFocus:u,pollingInterval:c,skipPollingIfUnfocused:j}),O=N.useRef(!1),z=N.useRef(void 0);let{queryCacheKey:I,requestId:T}=z.current||{},C=!1;I&&T&&(C=A.current.isRequestSubscribed(I,T));const L=!C&&O.current;return p(()=>{O.current=C}),p(()=>{L&&(z.current=void 0)},[L]),p(()=>{var W;const R=z.current;if(M===te){R==null||R.unsubscribe(),z.current=void 0;return}const D=(W=z.current)==null?void 0:W.subscriptionOptions;if(!R||R.arg!==M){R==null||R.unsubscribe();const U=x(S(M,{subscriptionOptions:P,forceRefetch:q}));z.current=U}else P!==D&&R.updateSubscriptionOptions(P)},[x,S,q,M,P,L]),N.useEffect(()=>()=>{var R;(R=z.current)==null||R.unsubscribe(),z.current=void 0},[]),N.useMemo(()=>({refetch:()=>{var R;if(!z.current)throw new Error(Ct(38));return(R=z.current)==null?void 0:R.refetch()}}),[])},i=({refetchOnReconnect:s,refetchOnFocus:a,pollingInterval:u=0,skipPollingIfUnfocused:q=!1}={})=>{const{initiate:w}=e.endpoints[b],c=n(),[j,S]=N.useState(He),x=N.useRef(void 0),A=Ve({refetchOnReconnect:s,refetchOnFocus:a,pollingInterval:u,skipPollingIfUnfocused:q});p(()=>{var I,T;const z=(I=x.current)==null?void 0:I.subscriptionOptions;A!==z&&((T=x.current)==null||T.updateSubscriptionOptions(A))},[A]);const M=N.useRef(A);p(()=>{M.current=A},[A]);const P=N.useCallback(function(z,I=!1){let T;return r(()=>{var C;(C=x.current)==null||C.unsubscribe(),x.current=T=c(w(z,{subscriptionOptions:M.current,forceRefetch:!I})),S(z)}),T},[c,w]),O=N.useCallback(()=>{var z,I;(z=x.current)!=null&&z.queryCacheKey&&c(e.internalActions.removeQueryResult({queryCacheKey:(I=x.current)==null?void 0:I.queryCacheKey}))},[c]);return N.useEffect(()=>()=>{var z;(z=x==null?void 0:x.current)==null||z.unsubscribe()},[]),N.useEffect(()=>{j!==He&&!x.current&&P(j,!0)},[j,P]),N.useMemo(()=>[P,j,{reset:O}],[P,j,O])},v=(s,{skip:a=!1,selectFromResult:u}={})=>{const{select:q}=e.endpoints[b],w=Pt(a?te:s,y,_.endpointDefinitions[b],b),c=N.useRef(void 0),j=N.useMemo(()=>h([q(w),(P,O)=>O,P=>w],E,{memoizeOptions:{resultEqualityCheck:me}}),[q,w]),S=N.useMemo(()=>u?h([j],u,{devModeChecks:{identityFunctionCheck:"never"}}):j,[j,u]),x=o(P=>S(P,c.current),me),A=d(),M=j(A.getState(),c.current);return xn(()=>{c.current=M},[M]),x};return{useQueryState:v,useQuerySubscription:f,useLazyQuerySubscription:i,useLazyQuery(s){const[a,u,{reset:q}]=i(s),w=v(u,{...s,skip:u===He}),c=N.useMemo(()=>({lastArg:u}),[u]);return N.useMemo(()=>[a,{...w,reset:q},c],[a,w,q,c])},useQuery(s,a){const u=f(s,a),q=v(s,{selectFromResult:s===te||a!=null&&a.skip?void 0:bn,...a}),{data:w,status:c,isLoading:j,isSuccess:S,isError:x,error:A}=q;return N.useDebugValue({data:w,status:c,isLoading:j,isSuccess:S,isError:x,error:A}),N.useMemo(()=>({...q,...u}),[q,u])}}}function l(b){return({selectFromResult:f,fixedCacheKey:i}={})=>{const{select:v,initiate:s}=e.endpoints[b],a=n(),[u,q]=N.useState();N.useEffect(()=>()=>{u!=null&&u.arg.fixedCacheKey||u==null||u.reset()},[u]);const w=N.useCallback(function(D){const W=a(s(D,{fixedCacheKey:i}));return q(W),W},[a,s,i]),{requestId:c}=u||{},j=N.useMemo(()=>v({fixedCacheKey:i,requestId:u==null?void 0:u.requestId}),[i,u,v]),S=N.useMemo(()=>f?h([j],f):j,[f,j]),x=o(S,me),A=i==null?u==null?void 0:u.arg.originalArgs:void 0,M=N.useCallback(()=>{r(()=>{u&&q(void 0),i&&a(e.internalActions.removeMutationResult({requestId:c,fixedCacheKey:i}))})},[a,i,u,c]),{endpointName:P,data:O,status:z,isLoading:I,isSuccess:T,isError:C,error:L}=x;N.useDebugValue({endpointName:P,data:O,status:z,isLoading:I,isSuccess:T,isError:C,error:L});const R=N.useMemo(()=>({...x,originalArgs:A,reset:M}),[x,A,M]);return N.useMemo(()=>[w,R],[w,R])}}}var vn=Symbol(),jn=({batch:e=er,hooks:r={useDispatch:nr,useSelector:rr,useStore:tr},createSelector:n=Rt,unstable__sideEffectsInRender:o=!1,...d}={})=>({name:vn,init(m,{serializeQueryArgs:h},y){const _=m,{buildQueryHooks:p,buildMutationHook:E,usePrefetch:k}=yn({api:m,moduleOptions:{batch:e,hooks:r,unstable__sideEffectsInRender:o,createSelector:n},serializeQueryArgs:h,context:y});return ye(_,{usePrefetch:k}),ye(y,{batch:e}),{injectEndpoint(g,l){if(ln(l)){const{useQuery:b,useLazyQuery:f,useLazyQuerySubscription:i,useQueryState:v,useQuerySubscription:s}=p(g);ye(_.endpoints[g],{useQuery:b,useLazyQuery:f,useLazyQuerySubscription:i,useQueryState:v,useQuerySubscription:s}),m[`use${Ue(g)}Query`]=b,m[`useLazy${Ue(g)}Query`]=f}else if(un(l)){const b=E(g);ye(_.endpoints[g],{useMutation:b}),m[`use${Ue(g)}Mutation`]=b}}}}}),F=Ht(Vt(),jn());const B="https://new.gosht.com",ve=F({reducerPath:"feedbackApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({addFeedBack:e.mutation({query:r=>({url:"/api/v1/feedback",method:"POST",body:r})})})}),{useAddFeedBackMutation:wn}=ve;var Kt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nt=ne.createContext&&ne.createContext(Kt),Sn=["attr","size","title"];function An(e,r){if(e==null)return{};var n=kn(e,r),o,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(d=0;d<m.length;d++)o=m[d],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function kn(e,r){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(r.indexOf(o)>=0)continue;n[o]=e[o]}return n}function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Le.apply(this,arguments)}function Ot(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),n.push.apply(n,o)}return n}function Be(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Ot(Object(n),!0).forEach(function(o){_n(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function _n(e,r,n){return r=En(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function En(e){var r=qn(e,"string");return typeof r=="symbol"?r:r+""}function qn(e,r){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Wt(e){return e&&e.map((r,n)=>ne.createElement(r.tag,Be({key:n},r.attr),Wt(r.child)))}function J(e){return r=>ne.createElement(Mn,Le({attr:Be({},e.attr)},r),Wt(e.child))}function Mn(e){var r=n=>{var{attr:o,size:d,title:m}=e,h=An(e,Sn),y=d||n.size||"1em",_;return n.className&&(_=n.className),e.className&&(_=(_?_+" ":"")+e.className),ne.createElement("svg",Le({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,h,{className:_,style:Be(Be({color:e.color||n.color},n.style),e.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),m&&ne.createElement("title",null,m),e.children)};return Nt!==void 0?ne.createElement(Nt.Consumer,null,n=>r(n)):r(Kt)}function ys(e){return J({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"},child:[]}]})(e)}function dt(e){return J({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"},child:[]}]})(e)}const Pn=()=>{const[e]=wn(),r=Xe(),{control:n,handleSubmit:o,formState:{errors:d}}=tt({resolver:at(zr),mode:"onBlur",defaultValues:{first_name:"",last_name:"",email:"",rate:0,additional_info:""}}),m=h=>{var _;const y={first_name:h.first_name.trim(),last_name:h.last_name.trim(),email:h.email.trim(),rate:Number(h.rate),additional_info:((_=h.additional_info)==null?void 0:_.trim())||null};e(y).unwrap().then(()=>r(-1)).catch(p=>console.error("Submission error:",p))};return t.jsxs(Nr,{children:[t.jsx(dt,{className:"exit",onClick:()=>r(-1)}),t.jsx("div",{className:"image"}),t.jsxs("div",{className:"form",children:[t.jsx(ot,{variant:"h4",text:"Customer Feedback"}),t.jsxs("form",{onSubmit:o(m),children:[t.jsx(H,{name:"first_name",control:n,render:({field:h})=>{var y;return t.jsx(Y,{labelText:"First Name",placeholder:"Enter your name",...h,isError:!!d.first_name,errorText:(y=d.first_name)==null?void 0:y.message})}}),t.jsx(H,{name:"email",control:n,render:({field:h})=>{var y;return t.jsx(Y,{labelText:"Email",placeholder:"example@gmail.com",type:"email",...h,isError:!!d.email,errorText:(y=d.email)==null?void 0:y.message})}}),t.jsx(H,{name:"last_name",control:n,render:({field:h})=>{var y;return t.jsx(Y,{labelText:"Last Name",placeholder:"Last Name",...h,isError:!!d.last_name,errorText:(y=d.last_name)==null?void 0:y.message})}}),t.jsx(H,{name:"rate",control:n,render:({field:h})=>{var y;return t.jsx(Y,{labelText:"Please Rate Your Experience (1-10)",placeholder:"Enter a number from 1 to 10",type:"number",min:1,max:10,onChange:_=>{const p=_.target.value;if(p===""){h.onChange("");return}const E=Math.min(Math.max(Number(p),1),10);h.onChange(E)},value:h.value,isError:!!d.rate,errorText:(y=d.rate)==null?void 0:y.message})}}),t.jsx(H,{name:"additional_info",control:n,render:({field:h})=>t.jsxs("div",{className:"textarea-wrapper",children:[" ",t.jsxs("label",{htmlFor:"additional_info",children:["Additional Information",t.jsx("textarea",{id:"additional_info",placeholder:"Additional Information",rows:5,...h,value:h.value??""})]}),d.additional_info&&t.jsx("p",{className:"error-text",children:d.additional_info.message})]})}),t.jsx(it,{text:"Send",typeButton:"submit",variant:"fill"})]})]})]})},Nn=({onClose:e})=>{const[r,n]=N.useState([]),[o,d]=N.useState(""),[m,h]=N.useState(""),[y,_]=N.useState(""),[p,E]=N.useState(null);N.useEffect(()=>{const i=JSON.parse(localStorage.getItem("cart")||"[]");n(i)},[]);const k=(i,v)=>{let s=[...r];const a=s.find(u=>u.id===i);a&&(v<=0?s=s.filter(u=>u.id!==i):a.count=v,n(s),localStorage.setItem("cart",JSON.stringify(s)))},g=i=>{const v=r.filter(s=>s.id!==i);n(v),localStorage.setItem("cart",JSON.stringify(v))},l=r.reduce((i,v)=>i+v.count,0),b=r.reduce((i,v)=>i+v.count*v.price,0),f=async()=>{const i={name:o,phone:m,address:y,items:r};try{const s=await(await fetch("https://new.gosht.com/api-back/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json();E(s.orderId),localStorage.removeItem("cart"),n([])}catch(v){console.error("Order failed",v)}};return p?t.jsx("div",{className:"cart-modal",children:t.jsxs("div",{className:"cart-modal__success",children:[t.jsx("div",{className:"success-icon",children:"🎉"}),t.jsx("h2",{children:"Success!"}),t.jsxs("p",{children:["Your order ",t.jsxs("b",{children:["#",p]})," has been placed."]}),t.jsx("button",{className:"success-btn",onClick:e,children:"Close"})]})}):t.jsx("div",{className:"cart-modal",children:t.jsxs("div",{className:"cart-modal__content",children:[t.jsxs("div",{className:"cart-modal__header",children:[t.jsx("h2",{children:"Your Cart"}),t.jsx("button",{className:"close-btn",onClick:e,children:"×"})]}),r.length===0?t.jsx("p",{className:"cart-empty",children:"Your cart is empty."}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"cart-items",children:r.map(i=>t.jsxs("li",{className:"cart-item",children:[t.jsx("img",{src:i.image,alt:i.title}),t.jsxs("div",{className:"cart-item__info",children:[t.jsx("h4",{children:i.title}),t.jsx("p",{children:i.weight}),t.jsxs("p",{className:"price",children:["$",i.price," × ",i.count," = ",t.jsxs("b",{children:["$",i.price*i.count]})]}),t.jsxs("div",{className:"cart-item__controls",children:[t.jsx("button",{onClick:()=>k(i.id,i.count-1),children:"-"}),t.jsx("span",{children:i.count}),t.jsx("button",{onClick:()=>k(i.id,i.count+1),children:"+"})]})]}),t.jsx("button",{className:"delete-btn",onClick:()=>g(i.id),children:"🗑"})]},i.id))}),t.jsx("div",{className:"cart-summary",children:t.jsxs("div",{children:[t.jsxs("p",{children:["Total items: ",t.jsx("b",{children:l})]}),t.jsxs("p",{children:["Total amount: ",t.jsxs("b",{children:["$",b]})]})]})}),t.jsxs("div",{className:"cart-form",children:[t.jsx("h3",{children:"Submit Order"}),t.jsx("input",{type:"text",placeholder:"Your name",value:o,onChange:i=>d(i.target.value)}),t.jsx("input",{type:"tel",placeholder:"Phone number",value:m,onChange:i=>h(i.target.value)}),t.jsx("input",{type:"text",placeholder:"Address",value:y,onChange:i=>_(i.target.value)}),t.jsx("button",{className:"submit-btn",onClick:f,disabled:r.length===0,children:"Submit Order"})]})]})]})})},On=Z.header`
  background-color: ${e=>e.theme.colors.red};
  padding:12px ${e=>e.theme.padding.padding6024} ;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 100px;
    height: 38px;
  }

  nav ul {
    display: flex;
    gap: 0 24px;

    a {
      font-family: ${e=>e.theme.fontFamily.robotoSerif};
      color: #fff;
    }
  }

  #burgerMenu {
    display: none;
    padding: 0 calc(1.1vw + 8px);
  }

  .header_buttons {
    display: flex;
    gap: 0 20px;
    align-items: center;

    button {
      background-color: transparent;
      padding: calc(0.6vw + 6px) calc(1.1vw + 8px);
      border-radius: 4px;
      border: 1px solid transparent;
      transition: border 0.3s;
      color:${e=>e.theme.colors.white};
      display: flex;
      align-items: center;
      gap: 0 10px;
      font-family: ${e=>e.theme.fontFamily.robotoSerif};

      &:hover {
        border: 1px solid white;
      }

      svg {
        width: 22px;
        height: 22px;
      }

      span {
        font-size: 16px;
        background-color: transparent !important;
      }
    }

    button:nth-child(2) {
      background-color: ${e=>e.theme.colors.white};
      color: #1a1a1a;
    }
  }

  @media (max-width: 1050px) {
    #burgerMenu {
      display: block;
      width: auto;
      font-size: 24px;
      font-weight: 900;
      color: white;
    }

    nav {
      display: none;
    }

    .header_buttons button {
      display: none;
    }

    .header_buttons button:nth-child(2) {
      display: block;
      span {
        display: none;
      }
    }
  }

  @media (max-width: 875px) {
    // Тут добавь свои стили
  }
`;function vs(e){return J({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(e)}function zn(e){return J({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Gt(e){return J({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M362.1 205.2L272.9 72.5C269 66.8 262.5 64 256 64c-6.5 0-13 2.8-16.9 8.7l-89.2 132.5H52.4c-11.2 0-20.4 9.1-20.4 20.2 0 1.8.2 3.6.8 5.5l51.7 187.5c4.7 17 20.4 29.5 39.1 29.5h264.7c18.7 0 34.4-12.5 39.3-29.5l51.7-187.5.6-5.5c0-11.1-9.2-20.2-20.4-20.2h-97.4zm-167.2 0l61.1-89 61.1 89H194.9zM256 367.1c-22.4 0-40.7-18.2-40.7-40.5s18.3-40.5 40.7-40.5 40.7 18.2 40.7 40.5-18.3 40.5-40.7 40.5z"},child:[]}]})(e)}function Cn(e){return J({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(e)}function Rn(e){return J({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function In(e){return J({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Qn(e){return J({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},child:[]}]})(e)}function js(e){return J({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function ws(e){return J({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},child:[]}]})(e)}function Fn(e){return J({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const Tn=Z.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: ${({isOpen:e})=>e?"0":"-100%"}; /* Выезжает слева */
  width: 100%;
  height: 100vh;
  background-color: ${({theme:e})=>e.colors.red};
  padding: 53px 23px 32px;
  transition: left 0.3s ease-in-out;
  box-shadow: ${({isOpen:e})=>e?"4px 0px 10px rgba(0,0,0,0.3)":"none"};
 
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    img{
        width: 99px;
    }
    svg{
        font-size: 36px;
        color: #fff;
    }
  }

  nav{
    display: flex;
    justify-content: center;
    flex-direction: column;
    ul {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    margin-bottom: 30px;
    li {
      color: white;
      text-align: center;
      cursor: pointer;
      transition: color 0.2s;
      line-height: 170%;
      &:hover {
        color: ${({theme:e})=>e.colors.lightGray};
      }
    }
  }
  .burgerBtns{
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    button{
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 8px;
        padding: 15px 0;
        color: black;
        svg{
            font-size: 24px;

        }
        font-family: ${e=>e.theme.fontFamily.robotoSerif};
    }
    .outline{
        background-color: transparent;
        border: 1px solid #FFFFFF80;
        span{
            color: #fff;
        }
    }
  }
  }


`;function $n(e){return J({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"},child:[]}]})(e)}const Ln=({})=>{const[e,r]=N.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>r(!0),style:{backgroundColor:"transparent",fontSize:"36px",color:"white"},children:t.jsx($n,{})}),t.jsxs(Tn,{isOpen:e,children:[t.jsxs("div",{className:"top",children:[t.jsx(Cn,{onClick:()=>r(!1),style:{cursor:"pointer"}}),t.jsx("img",{src:"/icons/header-logo.svg",alt:"Logo"}),t.jsx(Fn,{})]}),t.jsxs("nav",{children:[t.jsxs("ul",{children:[t.jsx($,{to:"/menu-page/starter",onClick:()=>r(!1),children:t.jsx("li",{children:"Menu"})}),t.jsx($,{to:"/about-page",onClick:()=>r(!1),children:t.jsx("li",{children:"About us"})}),t.jsx($,{to:"/location-page",onClick:()=>r(!1),children:t.jsx("li",{children:"Hours & Location"})}),t.jsx($,{to:"/career-page",onClick:()=>r(!1),children:t.jsx("li",{children:"Review"})})]}),t.jsx("div",{className:"burgerBtns",children:t.jsxs("button",{children:[t.jsx(Gt,{}),t.jsx("span",{children:"Cart"})]})})]})]})]})},Bn=(e=975)=>{const[r,n]=N.useState(window.innerWidth<=e);return N.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)},[e]),r},Dn=()=>{const e=Bn(1075),[r,n]=N.useState(!1);return t.jsxs(On,{children:[e&&t.jsx(Ln,{}),r&&t.jsx(Nn,{onClose:()=>n(!1)}),t.jsx($,{to:"/",children:t.jsx("img",{src:"/icons/header-logo.svg",className:"logo",alt:"brand logotype"})}),t.jsx("nav",{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx($,{to:"/menu-page/starter",children:"Menu"})}),t.jsx("li",{children:t.jsx($,{to:"/about-page",children:"About us"})}),t.jsx("li",{}),t.jsx("li",{}),t.jsx("li",{children:t.jsx($,{to:"/location-page",children:"Hours & Location"})}),t.jsx("li",{children:t.jsx($,{to:"/review-page",children:"Review"})})]})}),t.jsx("div",{className:"header_buttons",children:t.jsxs("button",{onClick:()=>n(!0),children:[t.jsx(Gt,{}),t.jsx("span",{children:"Cart"})]})})]})},Un=Z.div`
  user-select: none;
  background-color: ${e=>e.theme.colors.red};
  .footer {
    padding: 52px ${e=>e.theme.padding.padding6024};
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${e=>e.theme.colors.white};
    .top {
      display: flex;
      justify-content: space-between;
      .footer_logo {
        width: 136px;
        height: 136px;
      }
      .links_list {
        display: flex;
        flex-direction: column;
        gap: 28px;
        .title {
          font-family: ${e=>e.theme.fontFamily.robotoSerif};
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        a {
          text-decoration: none;
          font-family: ${e=>e.theme.fontFamily.roboto};
          color: var(--white);
          font-size: 16px;
          font-weight: 400;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 24px;
        .info_item {
          display: flex;
          flex-direction: column;
          .title {
            font-family: ${e=>e.theme.fontFamily.titleFont};
            font-size: 18px;
            font-weight: 500;
          }
          a:nth-child(2) {
            margin-top: 24px;
          }
          a {
            text-decoration: none;
            font-family: ${e=>e.theme.fontFamily.font};
            font-size: 16px;
            font-weight: 400;
            color: ${e=>e.theme.colors.white};
          }
        }
      }
    }
    .divider {
      margin-top: 30px;
      margin-bottom: 36px;
      width: 100%;
      height: 1px;
      background-color: ${e=>e.theme.colors.white};
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .schedule {
        display: flex;
        flex-direction: column;
        span {
          font-family: var(--font);
          font-size: 16px;
          font-weight: 400;
          color: ${e=>e.theme.colors.white};
        }
      }
      .social_media {
        display: flex;
        gap: 12px;
        a {
          width: 72px;
          height: 48px;
        }
      }
    }
  }
  .footerMob {
    display: none;
    flex-direction: column;
    align-items: center;
    padding: calc(1.9vw + 25px) ${e=>e.theme.padding.padding6024};
    gap: 32px 0;
    .footerLogo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        width: calc(5.6vw + 55px);
      }
      .footerLogoInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: ${e=>e.theme.fontSize.font18$14};
          color: ${e=>e.theme.colors.white};
          font-weight: 500;
          text-align: right;
        }
        .subTitle {
          font-size: ${e=>e.theme.fontSize.font16$12};
          color: ${e=>e.theme.colors.white};
          font-weight: 300;
          line-height: 150%;
          font-family: "Roboto";
          text-align: right;
        }
      }
    }
    .footerLinks {
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      padding-bottom: 32px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 22px 0;
      .footerDropDown {
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        cursor: pointer;
        .dropDown {
          
          color: #ffffff;
          padding: 6px 0;
          font-size: ${e=>e.theme.fontSize.font18$14};
        }
        .footerAddress {
          display: flex;
        }
      }
      .footerAddress {
        display: flex;
        flex-direction: column;
        gap: 12px 0;
        .address {
          h5 {
            font-size: ${e=>e.theme.fontSize.font18$14};
            color: white;
            margin-bottom: 6px;
            line-height: 170%;
          }
          p {
            font-size: ${e=>e.theme.fontSize.font16$12};
            color: white;
            font-family: "Roboto Serif";
          }
        }
      }
    }

    .footerSocial {
      display: flex;
      gap: 0 30px;
      .social {
        padding: 16px 26px;
        border: 1px solid #cccccc80;
        border-radius: 4px;
        color: white;
        font-size: 24px;
      }
    }
  }
  @media (max-width: 975px) {
    .footer {
      display: none;
    }
    .footerMob {
      display: flex;
    }
  }
`,Hn=Z.div`
  display: inline-block;
  cursor: pointer;
  .dropDown {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    padding: 6px 0;
    font-size: ${e=>e.theme.fontSize.font18$14};
  }
`,Vn=Z.ul`
  background-color: transparent;
  min-width: 160px;
  padding: 12px 8px;
  border-radius: 4px;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;

  display: grid;
  gap: 26px ;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  max-height: ${({$isOpen:e})=>e?"600px":"0px"};
  opacity: ${({$isOpen:e})=>e?"1":"0"};
  a{
    font-family: ${e=>e.theme.fontFamily.roboto};
    color: white;
  }
`,Ke=({btnText:e,menuElems:r})=>{const[n,o]=N.useState(!1),d=()=>{o(m=>!m)};return t.jsxs(Hn,{className:"dropDown",children:[t.jsxs("span",{onClick:d,className:"dropDown",children:[t.jsx("h5",{children:e}),t.jsx(zn,{style:{transform:n?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.3s"}})]}),t.jsx(Vn,{$isOpen:n,children:r.map((m,h)=>t.jsx($,{to:"/menu-page/"+m.link,children:m.text},h))})]})},je=F({reducerPath:"footerApi",baseQuery:Q({baseUrl:"https://new.gosht.com/api/v1"}),endpoints:e=>({getFooter:e.query({query:()=>"/footer"})})}),{useGetFooterQuery:Kn}=je,We={navigate:[{link:"/",text:"Menu"},{link:"/about-page",text:"About us"},{link:"/location-page",text:"Hours & Location"},{link:"#",text:"Review"}],events:[{link:"/kids-event",text:"Kid’s events"},{link:"/events",text:"Private events"}],cooperation:[{link:"/career-page",text:"Career"},{link:"#",text:"Contact us"}]},Wn=()=>{const{data:e,isLoading:r}=Kn();return r?null:t.jsxs(Un,{className:"footerApadtive",children:[t.jsxs("footer",{className:"footer container",children:[t.jsxs("div",{className:"top",children:[t.jsx("div",{className:"footer_logo",children:t.jsx("img",{src:"/icons/footer-logo.svg",alt:"footer-logo"})}),t.jsxs("div",{className:"links_list",children:[t.jsx("span",{className:"title",children:"Navigation"}),t.jsx($,{to:"/",children:"Menu"}),t.jsx($,{to:"/about-page",children:"About us"}),t.jsx($,{to:"/location-page",children:"Hours & Location"}),t.jsx($,{to:"/review-page",children:"Review"})]}),t.jsxs("div",{className:"links_list",children:[t.jsx("span",{className:"title",children:"Events"}),t.jsx($,{to:"/kids-event",children:"Kid’s events"}),t.jsx($,{to:"/events",children:"Private events"})]}),t.jsxs("div",{className:"links_list",children:[t.jsx("span",{className:"title",children:"Cooperation"}),t.jsx($,{to:"/workWithUs-page",children:"Career"}),t.jsx($,{to:"/contactUs-page",children:"Contact us"})]}),t.jsxs("div",{className:"info",children:[t.jsxs("div",{className:"info_item",children:[t.jsx("span",{className:"title",children:"Feedback"}),t.jsx("p",{className:"phone_number",children:(e==null?void 0:e.feedback_text)||"Contact us for feedback"})]}),t.jsxs("div",{className:"info_item",children:[t.jsx("span",{className:"title",children:"Address"}),t.jsx("p",{children:(e==null?void 0:e.address)||"3215 Coney Island Ave, Brooklyn, NY 11235, United States"})]})]})]}),t.jsx("div",{className:"divider"}),t.jsxs("div",{className:"bottom",children:[t.jsx("div",{className:"schedule",children:t.jsx("span",{children:(e==null?void 0:e.work_hours)||"7 Days a week, 11:00 AM - 12:00 AM"})}),t.jsxs("div",{className:"social_media",children:[(e==null?void 0:e.telegram_enabled)&&t.jsx("a",{href:e.telegram_link,target:"_blank",rel:"noopener noreferrer",children:t.jsx("img",{src:"/icons/telegram-logo.svg",alt:"telegram"})}),(e==null?void 0:e.instagram_enabled)&&t.jsx("a",{href:e.instagram_link,target:"_blank",rel:"noopener noreferrer",children:t.jsx("img",{src:"/icons/instagram-logo.svg",alt:"instagram"})}),(e==null?void 0:e.facebook_enabled)&&t.jsx("a",{href:e.facebook_link,target:"_blank",rel:"noopener noreferrer",children:t.jsx("img",{src:"/icons/facebook-logo.svg",alt:"facebook"})})]})]})]}),t.jsxs("footer",{className:"footerMob",children:[t.jsxs("div",{className:"footerLogo",children:[t.jsx("img",{src:"/icons/footer-logo.svg",alt:""}),t.jsxs("div",{className:"footerLogoInfo",children:[t.jsx("span",{className:"title",children:"Schedule"}),t.jsx("span",{className:"subTitle",children:(e==null?void 0:e.work_hours)||"7 Days a week, 11:00 AM - 12:00 AM"})]})]}),t.jsxs("div",{className:"footerLinks",children:[t.jsxs("div",{className:"footerDropDown",children:[t.jsx(Ke,{menuElems:We.navigate,btnText:"Navigation"}),t.jsx(Ke,{menuElems:We.events,btnText:"Events"}),t.jsx(Ke,{menuElems:We.cooperation,btnText:"Cooperation"})]}),t.jsxs("div",{className:"footerAddress",children:[t.jsxs("div",{className:"address",children:[t.jsx("h5",{children:"Feedback"}),t.jsx("p",{children:(e==null?void 0:e.feedback_text)||"Contact us for feedback"})]}),t.jsxs("div",{className:"address",children:[t.jsx("h5",{children:"Address"}),t.jsx("p",{children:(e==null?void 0:e.address)||"3215 Coney Island Ave, Brooklyn, NY 11235, United States"})]})]})]}),t.jsxs("div",{className:"footerSocial",children:[(e==null?void 0:e.telegram_enabled)&&t.jsx("a",{href:e.telegram_link,target:"_blank",rel:"noopener noreferrer",className:"social",children:t.jsx(Qn,{})}),(e==null?void 0:e.instagram_enabled)&&t.jsx("a",{href:e.instagram_link,target:"_blank",rel:"noopener noreferrer",className:"social",children:t.jsx(In,{})}),(e==null?void 0:e.facebook_enabled)&&t.jsx("a",{href:e.facebook_link,target:"_blank",rel:"noopener noreferrer",className:"social",children:t.jsx(Rn,{})})]})]})]})},Gn=()=>t.jsxs(t.Fragment,{children:[t.jsx(Dn,{}),t.jsx("main",{children:t.jsx(sr,{})}),t.jsx(Wn,{})]}),Jn=Z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(-0.4vw + 57px) 20px;
  .exit {
    position: absolute;
    top: calc(4.1vw + 4.5px);
    right: calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #b9bcbb;
  }
  h4 {
    font-weight: 500;
    margin-bottom: calc(0.2vw + 7px);
  }
  p {
    font-size: calc(0.2vw + 15.3px);
    color: rgba(0, 0, 0, 0.5);
    font-family: ${e=>e.theme.fontFamily.roboto};
    margin-bottom: 40px;
  }
  .wrapper {
    display: flex;
    gap: 12px 30px;
    width: calc(52vw + 117px);
    margin-bottom: 30px;
    label {
      width: 49%;
    }
    @media (max-width: 795px) {
      flex-wrap: wrap;
      margin-bottom: 12px;
      label {
        width: 100%;
      }
    }
  }
  .textarea-wrapper {
    width: calc(52vw + 117px);
    font-family: ${e=>e.theme.fontFamily.roboto};
    margin-bottom: 40px;
    textarea {
      margin-top: 8px;
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #fff;
      font-size: ${e=>e.theme.fontSize.font16$12};
      resize: none;
      border-radius: 12px;
      padding: 16px;
    }
  }
  .sendWrapper {
    display: flex;
    gap: 12px 30px;
    width: calc(52vw + 117px);
    flex-wrap: wrap-reverse;
    padding: 12px;
    .text {
      flex-grow: 1;
      background-color: rgba(170, 24, 26, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${e=>e.theme.fontFamily.roboto};
      font-weight: 500;
      font-size: ${e=>e.theme.fontSize.font20$16};
      span {
        color: rgba(170, 24, 26, 1);
        margin-left: 4px;
      }
    }
    @media (max-width: 795px) {
      button {
        width: 100%;
      }
      .text {
        flex-grow: 0;
        padding: 20px;
        width: 100%;
        flex-direction: column;
        text-align: center;
        span {
          margin-top: 8px;
        }
      }
    }
  }
`,we=F({reducerPath:"contactUsApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({addContactUs:e.mutation({query:r=>({url:"/api/v1/contact-us",method:"POST",body:r})})})}),{useAddContactUsMutation:Yn}=we,Zn=et({firstName:G().required("First name is required").matches(/^[A-Za-zА-Яа-яЁё\s]+$/,"Name should contain only letters"),email:G().email("Invalid email").required("Email is required"),phoneNumber:G().required("Phone number is required").matches(/^[\d\s()+-\/]+$/,"Phone number should contain only numbers and allowed symbols (+, -, (, ), /)"),gettingTouch:G().required("This field is required"),yourMessage:G().required("Message is required")}),Xn=()=>{const e=Xe(),[r,{data:n}]=Yn(),{control:o,handleSubmit:d,formState:{errors:m},reset:h}=tt({resolver:at(Zn),mode:"onBlur",defaultValues:{firstName:"",email:"",phoneNumber:"",gettingTouch:"",yourMessage:""}}),y=async p=>{const E={first_name:p.firstName,email:p.email,phone_number:p.phoneNumber,getting_touch:p.gettingTouch,your_message:p.yourMessage};try{r(E),h()}catch(k){console.error("Error submitting form:",k)}},_=(p,E)=>E==="firstName"?p.replace(/[^A-Za-zА-Яа-яЁё\s]/g,""):E==="phoneNumber"?p.replace(/[^\d\s()+-\/]/g,""):p;return t.jsxs(Jn,{children:[t.jsx(dt,{className:"exit",onClick:()=>e("/")}),t.jsx(ot,{variant:"h4",text:"Contact Us"}),t.jsx("p",{children:"Send us a message and we`ll get back to you as soon as possible "}),t.jsxs("form",{onSubmit:d(y),children:[t.jsxs("div",{className:"wrapper",children:[t.jsx(H,{name:"firstName",control:o,render:({field:p})=>{var E;return t.jsx(Y,{labelText:"First Name",placeholder:"Enter your name",type:"text",value:p.value,onChange:k=>{const g=_(k.target.value,"firstName");p.onChange(g)},isError:!!m.firstName,errorText:(E=m.firstName)==null?void 0:E.message})}}),t.jsx(H,{name:"email",control:o,render:({field:p})=>{var E;return t.jsx(Y,{labelText:"Email",placeholder:"example@gmail.com",type:"email",value:p.value,onChange:p.onChange,isError:!!m.email,errorText:(E=m.email)==null?void 0:E.message})}})]}),t.jsxs("div",{className:"wrapper",children:[t.jsx(H,{name:"phoneNumber",control:o,render:({field:p})=>{var E;return t.jsx(Y,{labelText:"Phone Number",placeholder:"Phone Number",type:"tel",value:p.value,onChange:k=>{const g=_(k.target.value,"phoneNumber");p.onChange(g)},isError:!!m.phoneNumber,errorText:(E=m.phoneNumber)==null?void 0:E.message})}}),t.jsx(H,{name:"gettingTouch",control:o,render:({field:p})=>{var E;return t.jsx(Y,{labelText:"What are you getting in touch about?",placeholder:"What are you getting in touch about?",type:"text",value:p.value,onChange:p.onChange,isError:!!m.gettingTouch,errorText:(E=m.gettingTouch)==null?void 0:E.message})}})]}),t.jsxs("div",{className:"textarea-wrapper",children:[t.jsx("label",{children:"Your Message"}),t.jsx(H,{name:"yourMessage",control:o,render:({field:p})=>t.jsxs(t.Fragment,{children:[t.jsx("textarea",{placeholder:"Type your message here...",rows:5,value:p.value,onChange:p.onChange}),m.yourMessage&&t.jsx("p",{className:"error-message",children:m.yourMessage.message})]})})]}),t.jsxs("div",{className:"sendWrapper",children:[t.jsxs("div",{className:"text",children:["You can also reach us by phone at ",t.jsx("span",{children:"(718) 504-8880."})]}),t.jsx(it,{text:"Send",typeButton:"submit",variant:"fill"})]})]})]})},es=Z.div`
  width: calc(52vw + 117px);

  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;

  .exit {
    position: absolute;
    top: calc(4.1vw + 4.5px);
    right: calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #b9bcbb;
  }
  h4 {
    font-weight: 500;
    margin-bottom: calc(0.2vw + 7px);
    text-align: center;
  }
  .description {
    font-size: calc(0.2vw + 15.3px);
    color: rgba(0, 0, 0, 0.5);
    font-family: ${e=>e.theme.fontFamily.roboto};
    margin-bottom: 40px;
    text-align: center;
  }

  .wrapper {
    display: flex;
    gap: 12px 30px;
    margin-bottom: 30px;
    label {
      width: 49%;
    }
    @media (max-width: 795px) {
      flex-wrap: wrap;
      margin-bottom: 12px;
      label {
        width: 100%;
      }
    }
  }
  .textarea-wrapper {
    font-family: ${e=>e.theme.fontFamily.roboto};
    margin: 40px 0;
    textarea {
      margin-top: 8px;
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #fff;
      font-size: ${e=>e.theme.fontSize.font16$12};
      resize: none;
      border-radius: 12px;
      padding: 16px;
    }
  }
  .file-upload {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 8px;
  }

  .file-input {
    display: none;
  }

  .file-label {
    padding: 0.5rem 1rem;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #e9e9e9;
    }
  }

  .file-name {
    color: #666;
    font-size: 0.9rem;
  }

  .error-text {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  .form-load {
    display: flex;
    justify-content: space-between;
  }
  .input-label,
  .file-name {
    font-family: ${e=>e.theme.fontFamily.roboto};
  }
`,ts=et().shape({first_name:G().required("Имя обязательно для заполнения"),phone_number:G().required("Телефон обязателен для заполнения"),email:G().email("Некорректный email").required("Email обязателен"),cover_letter:G().required("Сопроводительное письмо обязательно"),resume:fr().required("Резюме обязательно").test("fileType","Только PDF или DOCX",e=>{if(!e||!(e instanceof FileList))return!1;const r=e[0];return r&&(r.type==="application/pdf"||r.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document")}).test("fileSize","Файл слишком большой (макс. 5MB)",e=>!e||!(e instanceof FileList)?!1:e[0].size<=5e6)}),rs=()=>{const e=Xe(),{control:r,handleSubmit:n,formState:{errors:o},watch:d}=tt({resolver:at(ts),defaultValues:{first_name:"",phone_number:"",email:"",cover_letter:"",resume:null}}),m=d("resume"),h=y=>{const _=new FormData;_.append("first_name",y.first_name),_.append("phone_number",y.phone_number),_.append("email",y.email),_.append("cover_letter",y.cover_letter),y.resume&&_.append("resume",y.resume[0]),console.log("Form data prepared:",_)};return t.jsxs(es,{children:[t.jsx(dt,{className:"exit",onClick:()=>e("/")}),t.jsx(ot,{variant:"h4",text:"Work with Us"}),t.jsx("p",{className:"description",children:"We'd love to have you join our team! Feel free to send in your resume even if you don't see the position you're looking for listed."}),t.jsxs("form",{onSubmit:n(h),children:[t.jsxs("div",{className:"wrapper",children:[t.jsx(H,{name:"first_name",control:r,render:({field:y})=>{var _;return t.jsx(Y,{labelText:"First Name *",placeholder:"Enter your name",...y,isError:!!o.first_name,errorText:(_=o.first_name)==null?void 0:_.message})}}),t.jsx(H,{name:"phone_number",control:r,render:({field:y})=>{var _;return t.jsx(Y,{labelText:"Phone Number *",placeholder:"Phone Number",...y,isError:!!o.phone_number,errorText:(_=o.phone_number)==null?void 0:_.message})}})]}),t.jsx(H,{name:"email",control:r,render:({field:y})=>{var _;return t.jsx(Y,{labelText:"Email *",placeholder:"example@gmail.com",type:"email",...y,isError:!!o.email,errorText:(_=o.email)==null?void 0:_.message})}}),t.jsxs("div",{className:"textarea-wrapper",children:[t.jsx("label",{className:"input-label",children:"Cover Letter *"}),t.jsx(H,{name:"cover_letter",control:r,render:({field:y})=>t.jsx("textarea",{className:"form-textarea",placeholder:"Tell us about yourself...",rows:5,...y})}),o.cover_letter&&t.jsx("p",{className:"error-text",children:o.cover_letter.message})]}),t.jsxs("div",{className:"form-load",children:[t.jsxs("div",{children:[t.jsx("label",{className:"input-label",children:"Resume *"}),t.jsx("div",{className:"file-upload",children:t.jsx(H,{name:"resume",control:r,render:({field:y})=>{var _;return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"file",id:"resume-upload",accept:".pdf,.docx",onChange:p=>y.onChange(p.target.files),className:"file-input"}),t.jsx("label",{htmlFor:"resume-upload",className:"file-label",children:"Choose file"}),t.jsx("span",{className:"file-name",children:((_=m==null?void 0:m[0])==null?void 0:_.name)||"no file selected"})]})}})}),o.resume&&t.jsx("p",{className:"error-text",children:o.resume.message})]}),t.jsx("div",{className:"submit-row",children:t.jsx(it,{text:"Send",typeButton:"submit",variant:"fill"})})]})]})]})},ns=N.lazy(()=>X(()=>import("./MainPage-4SS_TUv1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),ss=N.lazy(()=>X(()=>import("./EventsPage-Cj3UW2hL.js"),__vite__mapDeps([15,1,2,11,8,5,6,7,9,12,16,13]))),is=N.lazy(()=>X(()=>import("./EventsCardPage-cax3FGzF.js"),__vite__mapDeps([17,1,2,8,12,16,13]))),os=N.lazy(()=>X(()=>import("./KidsEventsPage-B7poLrz8.js"),__vite__mapDeps([18,1,2,5,6,7,8,9,12,16,13]))),as=N.lazy(()=>X(()=>import("./AboutPage-CdX2hwQu.js"),__vite__mapDeps([19,1,2,10,12,13]))),cs=N.lazy(()=>X(()=>import("./LocationPage-Bh_yR5di.js"),__vite__mapDeps([20,1,2,12,13,21]))),ls=N.lazy(()=>X(()=>import("./CareerPage-BwZOFcdd.js"),__vite__mapDeps([22,1,2,8,23,6,7,12,13]))),us=N.lazy(()=>X(()=>import("./MenuPage-DrXXn5V1.js"),__vite__mapDeps([24,1,2,3,4,12,13]))),ds=N.lazy(()=>X(()=>import("./CareerMorePage-B3_9UfP8.js"),__vite__mapDeps([25,1,2,23,8,12,13])).then(e=>({default:e.CareerMorePage}))),fs=()=>t.jsxs(ir,{children:[t.jsx(Mr,{}),t.jsx(N.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx("div",{children:t.jsxs(or,{children:[t.jsx(K,{path:"/review-page",element:t.jsx(Pn,{})}),t.jsx(K,{path:"/contactUs-page",element:t.jsx(Xn,{})}),t.jsx(K,{path:"/workWithUs-page",element:t.jsx(rs,{})}),t.jsxs(K,{element:t.jsx(Gn,{}),children:[t.jsx(K,{path:"/",element:t.jsx(ns,{})}),t.jsxs(K,{path:"events",children:[t.jsx(K,{index:!0,element:t.jsx(ss,{})}),t.jsx(K,{path:":id",element:t.jsx(is,{})})]}),t.jsx(K,{path:"kids-event",element:t.jsx(os,{})}),t.jsx(K,{path:"about-page",element:t.jsx(as,{})}),t.jsx(K,{path:"location-page",element:t.jsx(cs,{})}),t.jsx(K,{path:"menu-page/:id",element:t.jsx(us,{})}),t.jsx(K,{path:"career-page",element:t.jsx(ls,{})}),t.jsx(K,{path:"career-more-page",element:t.jsx(ds,{})})]})]})})})]}),ps=Jt`
#root {
}
* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family:${e=>e.theme.fontFamily.font} , ${e=>e.theme.fontFamily.titleFont}, serif, sans-serif;
  background-color: ${e=>e.theme.colors.white};
  
}
html {
  scrollbar-width: none; 
}
html::-webkit-scrollbar {
  display: none;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}


nav,
footer,
header,
aside {
  display: block;
}


html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 100%;
  line-height: 1;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}


input,
button,
textarea {
  font-family: inherit;
}


input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
/* Для WebKit-браузеров (Chrome, Safari, Edge) */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Для Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}


img {
  width: 100%;
  height: 100%;
}
h1{
  font-size: calc(6.9vw - 0.056px)/*100-26*/ ;
}
h2{
  font-size: calc(2.4vw + 16.8px )/*52-26*/;
  font-family: ${e=>e.theme.fontFamily.robotoSerif};
  font-weight: 500;
}
h3{
  font-size: calc(1.5vw + 20.3px)/*42-26*/;
}
h4{
  font-size: calc(0.9vw + 22.5px)/*36-26*/;
  
}
h5{
  font-size: calc(0.4vw + 18.6px)/*24-20*/;
  font-weight: 500;
}
h6{
  font-size: 20px;
}
label{
  font-weight: 500;
}
a{
  color:#222;
}
@media (min-width: 1920px) {
  .container {
    max-width: 1440px;
  }
  .mainMenu {
    grid-template-columns: repeat(4, 1fr) !important;
    padding: 60px 0 !important;
  }
  .allFood, .aboutGosht, .clientSlider {
    padding: 60px 0 !important;
  }
  .adaptive, .footerApadtive {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menuInfo, .footer {
    width: 1440px !important;
    margin: 0 !important;
  }
}
`,Se=F({reducerPath:"eventsApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getAllEvents:e.query({query:()=>"/api/v1/events"}),getEventById:e.query({query:r=>`/api/v1/events/${r}`})})}),{useGetAllEventsQuery:Ss,useGetEventByIdQuery:As}=Se,Ae=F({reducerPath:"inquireForms",baseQuery:Q({baseUrl:B}),endpoints:e=>({addPrivetEvent:e.mutation({query:r=>({url:"/api/v1/private-inquiries",method:"POST",body:r})}),addKidsEvent:e.mutation({query:r=>({url:"/api/v1/kids-inquiries",method:"POST",body:r})})})}),{useAddPrivetEventMutation:ks,useAddKidsEventMutation:_s}=Ae,ke=F({reducerPath:"bookingFormsApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({addBookingPrivetEvents:e.mutation({query:r=>({url:"/api/v1/book",method:"POST",body:r})})})}),{useAddBookingPrivetEventsMutation:Es}=ke,_e=F({reducerPath:"showsApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getAllShowsApi:e.query({query:()=>"/api/v1/show-for-kids"})})}),{useGetAllShowsApiQuery:qs}=_e,Ee=F({reducerPath:"masterclassesApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getAllMasterclasses:e.query({query:()=>"/api/v1/masterclass"})})}),{useGetAllMasterclassesQuery:Ms}=Ee,qe=F({reducerPath:"homeBannerApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getHomeBanners:e.query({query:()=>"/api/v1/home-banner"})})}),{useGetHomeBannersQuery:Ps}=qe,Me=F({reducerPath:"homeMenuApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getHomeMenu:e.query({query:()=>"/api/v1/home-menu"})})}),{useGetHomeMenuQuery:Ns}=Me,Pe=F({reducerPath:"achievementApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getAchievements:e.query({query:()=>"/api/v1/home/achievement"})})}),{useGetAchievementsQuery:Os}=Pe,Ne=F({reducerPath:"homeInformationApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getHomeInformation:e.query({query:()=>"/api/v1/home-information"})})}),{useGetHomeInformationQuery:zs}=Ne,Oe=F({reducerPath:"aboutBlockApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getAboutBlock:e.query({query:()=>"/api/v1/about-block"})})}),{useGetAboutBlockQuery:Cs}=Oe,Ge=F({reducerPath:"activityApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getActivityById:e.query({query:r=>`/api/v1/activities/${r}`})})}),Je=F({reducerPath:"reviewApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getAllReviews:e.query({query:()=>"/api/v1/reviews/all"})})}),ze=F({reducerPath:"eventBannerApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getEventBanners:e.query({query:()=>"/api/v1/events/banner"})})}),{useGetEventBannersQuery:Rs}=ze,Ce=F({reducerPath:"kidsEventBannerApi",baseQuery:Q({baseUrl:B}),endpoints:e=>({getKidsEventBanners:e.query({query:()=>"/api/v1/kids-events/banner"})})}),{useGetKidsEventBannersQuery:Is}=Ce,Re=F({reducerPath:"hoursLocationBannerApi",baseQuery:Q({baseUrl:"https://new.gosht.com/api/v1"}),endpoints:e=>({getHoursLocationBanners:e.query({query:()=>"/hours-location/banner"})})}),{useGetHoursLocationBannersQuery:Qs}=Re,Ie=F({reducerPath:"hoursLocationInfoApi",baseQuery:Q({baseUrl:"https://new.gosht.com/api/v1"}),endpoints:e=>({getHoursLocationInfo:e.query({query:()=>"/hours-location/info"})})}),{useGetHoursLocationInfoQuery:Fs}=Ie,Qe=F({reducerPath:"hoursLocationMapApi",baseQuery:Q({baseUrl:"https://new.gosht.com/api/v1"}),endpoints:e=>({getHoursLocationMap:e.query({query:()=>"/hours-location/map"})})}),{useGetHoursLocationMapQuery:Ts}=Qe,Fe=F({reducerPath:"menuApi",baseQuery:Q({baseUrl:"https://new.gosht.com"}),endpoints:e=>({getMenu:e.query({query:r=>r?`/api-back/menu?cat_id=${r}`:"/api-back/menu"})})}),{useGetMenuQuery:$s}=Fe,ms=yr({reducer:{[Se.reducerPath]:Se.reducer,[Ae.reducerPath]:Ae.reducer,[ke.reducerPath]:ke.reducer,[_e.reducerPath]:_e.reducer,[Ee.reducerPath]:Ee.reducer,[ve.reducerPath]:ve.reducer,[we.reducerPath]:we.reducer,[qe.reducerPath]:qe.reducer,[Me.reducerPath]:Me.reducer,[Pe.reducerPath]:Pe.reducer,[Ne.reducerPath]:Ne.reducer,[Oe.reducerPath]:Oe.reducer,[Ge.reducerPath]:Ge.reducer,[Je.reducerPath]:Je.reducer,[ze.reducerPath]:ze.reducer,[Ce.reducerPath]:Ce.reducer,[Re.reducerPath]:Re.reducer,[Ie.reducerPath]:Ie.reducer,[Qe.reducerPath]:Qe.reducer,[je.reducerPath]:je.reducer,[Fe.reducerPath]:Fe.reducer},middleware:e=>e().concat([Se.middleware,Ae.middleware,ke.middleware,_e.middleware,Ee.middleware,ve.middleware,we.middleware,qe.middleware,Me.middleware,Pe.middleware,Ne.middleware,Oe.middleware,Ge.middleware,Je.middleware,ze.middleware,Ce.middleware,Re.middleware,Ie.middleware,Qe.middleware,je.middleware,Fe.middleware])});jr.createRoot(document.getElementById("root")).render(t.jsx(N.StrictMode,{children:t.jsx(ar,{store:ms,children:t.jsxs(Yt,{theme:_r,children:[t.jsx(ps,{}),t.jsx(fs,{})]})})}));export{B as A,Ke as D,js as F,J as G,ot as H,vs as I,Y as L,ys as M,Or as S,zn as a,Ps as b,Ns as c,Os as d,zs as e,Cs as f,$s as g,ks as h,dt as i,ws as j,it as k,Rs as l,Ss as m,Es as n,at as o,As as p,Ms as q,qs as r,_s as s,Is as t,Bn as u,Qn as v,Rn as w,Qs as x,Fs as y,Ts as z};
