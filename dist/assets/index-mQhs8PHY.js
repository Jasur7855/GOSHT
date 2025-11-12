const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-DpPURaKZ.js","assets/ui-CuDAUpxO.js","assets/react-BjlJThec.js","assets/MenuCard-De_ftmjg.js","assets/SliderMobile-DVdwi1GX.js","assets/a11y-EIo1Ei7w.js","assets/swiper-Cl-SL7yl.js","assets/Button-CyT3PzE-.js","assets/SliderMobile-BUrcyj0q.css","assets/GoshtBadge-CSaQMghT.js","assets/EventsSection-CShxO92b.js","assets/form-BnEbJxh9.js","assets/redux-1Y8IFHhn.js","assets/EventsPage-Bl1Pugx-.js","assets/index-nUfILl86.js","assets/EventsCardPage-FN1JWuDW.js","assets/KidsEventsPage-CPe1XQgV.js","assets/AboutPage-CoFj8fwQ.js","assets/LocationPage-D-69CKez.js","assets/LocationPage-CIGW-MKW.css","assets/CareerPage-CFRovpcb.js","assets/CareerCard-BYpnlFsJ.js","assets/MenuPage-B-beGTKI.js","assets/MenuPage-BNVqfTkh.css","assets/CareerMorePage-QYPdcbEX.js"])))=>i.map(i=>d[i]);
import{d as J,j as t,f as Ft,o as $t}from"./ui-CuDAUpxO.js";import{b as Dt,u as Qt,a as z,c as Lt,d as Ut,e as Bt,f as Vt,s as me,R as ee,h as $e,L as T,O as Ht,B as Kt,i as Wt,j as B,P as Jt}from"./react-BjlJThec.js";import{o as Gt,r as Yt,a as Zt,c as De,b as K,d as Xt,u as Qe,C as L,e as er}from"./form-BnEbJxh9.js";import{w as Ze,n as yt,f as vt,i as te,e as tr,c as ue,a as jt,b as Xe,S as pe,d as oe,p as de,g as _e,h as Le,j as re,k as et,l as rr,m as Ue,o as ze,q as Be,r as wt,s as nr,t as St,u as sr,v as tt,x as ir,y as or,z as ar}from"./redux-1Y8IFHhn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function n(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(d){if(d.ep)return;d.ep=!0;const m=n(d);fetch(d.href,m)}})();var xe={},rt;function cr(){if(rt)return xe;rt=1;var e=Dt();return xe.createRoot=e.createRoot,xe.hydrateRoot=e.hydrateRoot,xe}var lr=cr();const ur={white:"white",red:"#AA181A",black:"#000000",grey:"#808080",textGrey:"#00000080"},dr={font20$16:"calc(0.4vw + 14.6px)",font18$14:"calc(0.4vw + 12.6px)",font16$14:"calc(0.2vw + 13.3px)",font16$12:"calc(0.4vw + 10.6px)"},fr={roboto:"Roboto",robotoSerif:"Roboto Serif"},pr={padding6024:"calc(3.4vw + 11.3px)"},mr={colors:{...ur},fontSize:{...dr},fontFamily:{...fr},padding:{...pr}},hr="modulepreload",gr=function(e){return"/"+e},nt={},G=function(r,n,o){let d=Promise.resolve();if(n&&n.length>0){let h=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),E=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));d=h(n.map(p=>{if(p=gr(p),p in nt)return;nt[p]=!0;const _=p.endsWith(".css"),k=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${k}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":hr,_||(g.as="script"),g.crossOrigin="",g.href=p,E&&g.setAttribute("nonce",E),document.head.appendChild(g),_)return new Promise((l,b)=>{g.addEventListener("load",l),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function m(h){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=h,window.dispatchEvent(y),!y.defaultPrevented)throw h}return d.then(h=>{for(const y of h||[])y.status==="rejected"&&m(y.reason);return r().catch(m)})},xr=()=>{const{pathname:e}=Qt();return z.useEffect(()=>{window.scrollTo(0,0)},[e]),null},br=J.label`
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
`,W=({labelText:e,inputIcon:r,isInput:n=!0,areaPlaceholder:o,errorText:d,isError:m,...h})=>t.jsxs(br,{children:[e,r?t.jsx("div",{children:n?t.jsx("input",{type:"text",...h}):t.jsx("textarea",{className:"textArea",rows:5,placeholder:o})}):t.jsx("div",{children:n?t.jsx("input",{type:"text",...h}):t.jsx("textarea",{className:"textArea",rows:r?5:10,placeholder:o})}),m&&t.jsx("p",{children:d})]}),yr=J.div`
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
`,vr=J.button`
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
`,Ve=({text:e,onClick:r,variant:n,childText:o,typeButton:d="button"})=>t.jsxs(vr,{className:`Button ${n}`,onClick:r,type:d,children:[e,o&&t.jsx("span",{children:o})]}),He=({text:e,variant:r="h2",childText:n})=>(()=>{switch(r){case"h1":return t.jsxs("h1",{children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h2":return t.jsxs("h2",{children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h3":return t.jsxs("h3",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h4":return t.jsxs("h4",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h5":return t.jsxs("h5",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});case"h6":return t.jsxs("h6",{style:{whiteSpace:"pre-line"},children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]});default:return t.jsxs("h2",{children:[e,n&&t.jsx("div",{style:{color:"#AA181A"},children:n})]})}})();function Ke(e,r,n){return r===void 0&&(r={}),n===void 0&&(n={}),function(o,d,m){try{return Promise.resolve((function(h,y){try{var E=(r.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:d}))).then(function(p){return m.shouldUseNativeValidation&&Gt({},m),{values:n.raw?o:p,errors:{}}}))}catch(p){return y(p)}return E&&E.then?E.then(void 0,y):E})(0,function(h){if(!h.inner)throw h;return{values:{},errors:Yt((y=h,E=!m.shouldUseNativeValidation&&m.criteriaMode==="all",(y.inner||[]).reduce(function(p,_){if(p[_.path]||(p[_.path]={message:_.message,type:_.type}),E){var k=p[_.path].types,g=k&&k[_.type];p[_.path]=Zt(_.path,E,p,_.type,g?[].concat(g,_.message):_.message)}return p},{})),m)};var y,E}))}catch(h){return Promise.reject(h)}}}const jr=De({first_name:K().required("Обязательное поле!"),email:K().email("Введите корректный email").required("Обязательное поле!"),rate:Xt().required("Обязательное поле!"),last_name:K().required("Обязательное поле!"),additional_info:K().transform((e,r)=>r===""?void 0:e).notRequired().nullable()});var At=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(At||{});function wr(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var st=te;function kt(e,r){if(e===r||!(st(e)&&st(r)||Array.isArray(e)&&Array.isArray(r)))return r;const n=Object.keys(r),o=Object.keys(e);let d=n.length===o.length;const m=Array.isArray(r)?[]:{};for(const h of n)m[h]=kt(e[h],r[h]),d&&(d=e[h]===m[h]);return d?e:m}function le(e){let r=0;for(const n in e)r++;return r}var it=e=>[].concat(...e);function Sr(e){return new RegExp("(^|:)//").test(e)}function Ar(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function Ne(e){return e!=null}function kr(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var Er=e=>e.replace(/\/$/,""),_r=e=>e.replace(/^\//,"");function Nr(e,r){if(!e)return r;if(!r)return e;if(Sr(r))return r;const n=e.endsWith("/")||!r.startsWith("?")?"/":"";return e=Er(e),r=_r(r),`${e}${n}${r}`}function Or(e,r,n){return e.has(r)?e.get(r):e.set(r,n).get(r)}var ot=(...e)=>fetch(...e),Mr=e=>e.status>=200&&e.status<=299,zr=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function at(e){if(!te(e))return e;const r={...e};for(const[n,o]of Object.entries(r))o===void 0&&delete r[n];return r}function ne({baseUrl:e,prepareHeaders:r=k=>k,fetchFn:n=ot,paramsSerializer:o,isJsonContentType:d=zr,jsonContentType:m="application/json",jsonReplacer:h,timeout:y,responseHandler:E,validateStatus:p,..._}={}){return typeof fetch>"u"&&n===ot&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(g,l,b)=>{const{getState:f,extra:i,endpoint:v,forced:s,type:a}=l;let u,{url:N,headers:w=new Headers(_.headers),params:c=void 0,responseHandler:j=E??"json",validateStatus:S=p??Mr,timeout:x=y,...A}=typeof g=="string"?{url:g}:g,O,M=l.signal;x&&(O=new AbortController,l.signal.addEventListener("abort",O.abort),M=O.signal);let C={..._,signal:M,...A};w=new Headers(at(w)),C.headers=await r(w,{getState:f,arg:g,extra:i,endpoint:v,forced:s,type:a,extraOptions:b})||w;const R=U=>typeof U=="object"&&(te(U)||Array.isArray(U)||typeof U.toJSON=="function");if(!C.headers.has("content-type")&&R(C.body)&&C.headers.set("content-type",m),R(C.body)&&d(C.headers)&&(C.body=JSON.stringify(C.body,h)),c){const U=~N.indexOf("?")?"&":"?",X=o?o(c):new URLSearchParams(at(c));N+=U+X}N=Nr(e,N);const I=new Request(N,C);u={request:new Request(N,C)};let q,$=!1,P=O&&setTimeout(()=>{$=!0,O.abort()},x);try{q=await n(I)}catch(U){return{error:{status:$?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(U)},meta:u}}finally{P&&clearTimeout(P),O==null||O.signal.removeEventListener("abort",O.abort)}const D=q.clone();u.response=D;let H,Q="";try{let U;if(await Promise.all([k(q,j).then(X=>H=X,X=>U=X),D.text().then(X=>Q=X,()=>{})]),U)throw U}catch(U){return{error:{status:"PARSING_ERROR",originalStatus:q.status,data:Q,error:String(U)},meta:u}}return S(q,H)?{data:H,meta:u}:{error:{status:q.status,data:H},meta:u}};async function k(g,l){if(typeof l=="function")return l(g);if(l==="content-type"&&(l=d(g.headers)?"json":"text"),l==="json"){const b=await g.text();return b.length?JSON.parse(b):null}return g.text()}}var ct=class{constructor(e,r=void 0){this.value=e,this.meta=r}},We=ue("__rtkq/focused"),Et=ue("__rtkq/unfocused"),Je=ue("__rtkq/online"),_t=ue("__rtkq/offline");function Nt(e){return e.type==="query"}function Cr(e){return e.type==="mutation"}function Ge(e,r,n,o,d,m){return Rr(e)?e(r,n,o,d).filter(Ne).map(Te).map(m):Array.isArray(e)?e.map(Te).map(m):[]}function Rr(e){return typeof e=="function"}function Te(e){return typeof e=="string"?{type:e}:e}function qr(e,r){return e.catch(r)}var he=Symbol("forceQueryFn"),Fe=e=>typeof e[he]=="function";function Pr({serializeQueryArgs:e,queryThunk:r,mutationThunk:n,api:o,context:d}){const m=new Map,h=new Map,{unsubscribeQueryResult:y,removeMutationResult:E,updateSubscriptionOptions:p}=o.internalActions;return{buildInitiateQuery:b,buildInitiateMutation:f,getRunningQueryThunk:_,getRunningMutationThunk:k,getRunningQueriesThunk:g,getRunningMutationsThunk:l};function _(i,v){return s=>{var N;const a=d.endpointDefinitions[i],u=e({queryArgs:v,endpointDefinition:a,endpointName:i});return(N=m.get(s))==null?void 0:N[u]}}function k(i,v){return s=>{var a;return(a=h.get(s))==null?void 0:a[v]}}function g(){return i=>Object.values(m.get(i)||{}).filter(Ne)}function l(){return i=>Object.values(h.get(i)||{}).filter(Ne)}function b(i,v){const s=(a,{subscribe:u=!0,forceRefetch:N,subscriptionOptions:w,[he]:c,...j}={})=>(S,x)=>{var H;const A=e({queryArgs:a,endpointDefinition:v,endpointName:i}),O=r({...j,type:"query",subscribe:u,forceRefetch:N,subscriptionOptions:w,endpointName:i,originalArgs:a,queryCacheKey:A,[he]:c}),M=o.endpoints[i].select(a),C=S(O),R=M(x()),{requestId:I,abort:F}=C,q=R.requestId!==I,$=(H=m.get(S))==null?void 0:H[A],P=()=>M(x()),D=Object.assign(c?C.then(P):q&&!$?Promise.resolve(R):Promise.all([$,C]).then(P),{arg:a,requestId:I,subscriptionOptions:w,queryCacheKey:A,abort:F,async unwrap(){const Q=await D;if(Q.isError)throw Q.error;return Q.data},refetch:()=>S(s(a,{subscribe:!1,forceRefetch:!0})),unsubscribe(){u&&S(y({queryCacheKey:A,requestId:I}))},updateSubscriptionOptions(Q){D.subscriptionOptions=Q,S(p({endpointName:i,requestId:I,queryCacheKey:A,options:Q}))}});if(!$&&!q&&!c){const Q=Or(m,S,{});Q[A]=D,D.then(()=>{delete Q[A],le(Q)||m.delete(S)})}return D};return s}function f(i){return(v,{track:s=!0,fixedCacheKey:a}={})=>(u,N)=>{const w=n({type:"mutation",endpointName:i,originalArgs:v,track:s,fixedCacheKey:a}),c=u(w),{requestId:j,abort:S,unwrap:x}=c,A=qr(c.unwrap().then(R=>({data:R})),R=>({error:R})),O=()=>{u(E({requestId:j,fixedCacheKey:a}))},M=Object.assign(A,{arg:c.arg,requestId:j,abort:S,unwrap:x,reset:O}),C=h.get(u)||{};return h.set(u,C),C[j]=M,M.then(()=>{delete C[j],le(C)||h.delete(u)}),a&&(C[a]=M,M.then(()=>{C[a]===M&&(delete C[a],le(C)||h.delete(u))})),M}}}function lt(e){return e}function Ir({reducerPath:e,baseQuery:r,context:{endpointDefinitions:n},serializeQueryArgs:o,api:d,assertTagType:m}){const h=(s,a,u,N)=>(w,c)=>{const j=n[s],S=o({queryArgs:a,endpointDefinition:j,endpointName:s});if(w(d.internalActions.queryResultPatched({queryCacheKey:S,patches:u})),!N)return;const x=d.endpoints[s].select(a)(c()),A=Ge(j.providesTags,x.data,void 0,a,{},m);w(d.internalActions.updateProvidedBy({queryCacheKey:S,providedTags:A}))},y=(s,a,u,N=!0)=>(w,c)=>{const S=d.endpoints[s].select(a)(c()),x={patches:[],inversePatches:[],undo:()=>w(d.util.patchQueryData(s,a,x.inversePatches,N))};if(S.status==="uninitialized")return x;let A;if("data"in S)if(nr(S.data)){const[O,M,C]=St(S.data,u);x.patches.push(...M),x.inversePatches.push(...C),A=O}else A=u(S.data),x.patches.push({op:"replace",path:[],value:A}),x.inversePatches.push({op:"replace",path:[],value:S.data});return x.patches.length===0||w(d.util.patchQueryData(s,a,x.patches,N)),x},E=(s,a,u)=>N=>N(d.endpoints[s].initiate(a,{subscribe:!1,forceRefetch:!0,[he]:()=>({data:u})})),p=async(s,{signal:a,abort:u,rejectWithValue:N,fulfillWithValue:w,dispatch:c,getState:j,extra:S})=>{const x=n[s.endpointName];try{let A=lt,O;const M={signal:a,abort:u,dispatch:c,getState:j,extra:S,endpoint:s.endpointName,type:s.type,forced:s.type==="query"?_(s,j()):void 0,queryCacheKey:s.type==="query"?s.queryCacheKey:void 0},C=s.type==="query"?s[he]:void 0;if(C?O=C():x.query?(O=await r(x.query(s.originalArgs),M,x.extraOptions),x.transformResponse&&(A=x.transformResponse)):O=await x.queryFn(s.originalArgs,M,x.extraOptions,R=>r(R,M,x.extraOptions)),typeof process<"u",O.error)throw new ct(O.error,O.meta);return w(await A(O.data,O.meta,s.originalArgs),{fulfilledTimeStamp:Date.now(),baseQueryMeta:O.meta,[pe]:!0})}catch(A){let O=A;if(O instanceof ct){let M=lt;x.query&&x.transformErrorResponse&&(M=x.transformErrorResponse);try{return N(await M(O.value,O.meta,s.originalArgs),{baseQueryMeta:O.meta,[pe]:!0})}catch(C){O=C}}throw console.error(O),O}};function _(s,a){var j,S,x;const u=(S=(j=a[e])==null?void 0:j.queries)==null?void 0:S[s.queryCacheKey],N=(x=a[e])==null?void 0:x.config.refetchOnMountOrArgChange,w=u==null?void 0:u.fulfilledTimeStamp,c=s.forceRefetch??(s.subscribe&&N);return c?c===!0||(Number(new Date)-Number(w))/1e3>=c:!1}const k=Xe(`${e}/executeQuery`,p,{getPendingMeta(){return{startedTimeStamp:Date.now(),[pe]:!0}},condition(s,{getState:a}){var x,A,O;const u=a(),N=(A=(x=u[e])==null?void 0:x.queries)==null?void 0:A[s.queryCacheKey],w=N==null?void 0:N.fulfilledTimeStamp,c=s.originalArgs,j=N==null?void 0:N.originalArgs,S=n[s.endpointName];return Fe(s)?!0:(N==null?void 0:N.status)==="pending"?!1:_(s,u)||Nt(S)&&((O=S==null?void 0:S.forceRefetch)!=null&&O.call(S,{currentArg:c,previousArg:j,endpointState:N,state:u}))?!0:!w},dispatchConditionRejection:!0}),g=Xe(`${e}/executeMutation`,p,{getPendingMeta(){return{startedTimeStamp:Date.now(),[pe]:!0}}}),l=s=>"force"in s,b=s=>"ifOlderThan"in s,f=(s,a,u)=>(N,w)=>{const c=l(u)&&u.force,j=b(u)&&u.ifOlderThan,S=(A=!0)=>{const O={forceRefetch:A,isPrefetch:!0};return d.endpoints[s].initiate(a,O)},x=d.endpoints[s].select(a)(w());if(c)N(S());else if(j){const A=x==null?void 0:x.fulfilledTimeStamp;if(!A){N(S());return}(Number(new Date)-Number(new Date(A)))/1e3>=j&&N(S())}else N(S(!1))};function i(s){return a=>{var u,N;return((N=(u=a==null?void 0:a.meta)==null?void 0:u.arg)==null?void 0:N.endpointName)===s}}function v(s,a){return{matchPending:ze(wt(s),i(a)),matchFulfilled:ze(re(s),i(a)),matchRejected:ze(Be(s),i(a))}}return{queryThunk:k,mutationThunk:g,prefetch:f,updateQueryData:y,upsertQueryData:E,patchQueryData:h,buildMatchThunkActions:v}}function Ot(e,r,n,o){return Ge(n[e.meta.arg.endpointName][r],re(e)?e.payload:void 0,Le(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,o)}function be(e,r,n){const o=e[r];o&&n(o)}function ge(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function ut(e,r,n){const o=e[ge(r)];o&&n(o)}var fe={};function Tr({reducerPath:e,queryThunk:r,mutationThunk:n,serializeQueryArgs:o,context:{endpointDefinitions:d,apiUid:m,extractRehydrationInfo:h,hasRehydrationInfo:y},assertTagType:E,config:p}){const _=ue(`${e}/resetApiState`);function k(w,c,j,S){var x;w[x=c.queryCacheKey]??(w[x]={status:"uninitialized",endpointName:c.endpointName}),be(w,c.queryCacheKey,A=>{A.status="pending",A.requestId=j&&A.requestId?A.requestId:S.requestId,c.originalArgs!==void 0&&(A.originalArgs=c.originalArgs),A.startedTimeStamp=S.startedTimeStamp})}function g(w,c,j,S){be(w,c.arg.queryCacheKey,x=>{if(x.requestId!==c.requestId&&!S)return;const{merge:A}=d[c.arg.endpointName];if(x.status="fulfilled",A)if(x.data!==void 0){const{fulfilledTimeStamp:O,arg:M,baseQueryMeta:C,requestId:R}=c;let I=Ue(x.data,F=>A(F,j,{arg:M.originalArgs,baseQueryMeta:C,fulfilledTimeStamp:O,requestId:R}));x.data=I}else x.data=j;else x.data=d[c.arg.endpointName].structuralSharing??!0?kt(ir(x.data)?or(x.data):x.data,j):j;delete x.error,x.fulfilledTimeStamp=c.fulfilledTimeStamp})}const l=oe({name:`${e}/queries`,initialState:fe,reducers:{removeQueryResult:{reducer(w,{payload:{queryCacheKey:c}}){delete w[c]},prepare:de()},cacheEntriesUpserted:{reducer(w,c){for(const j of c.payload){const{queryDescription:S,value:x}=j;k(w,S,!0,{requestId:c.meta.requestId,startedTimeStamp:c.meta.timestamp}),g(w,{arg:S,requestId:c.meta.requestId,fulfilledTimeStamp:c.meta.timestamp,baseQueryMeta:{}},x,!0)}},prepare:w=>({payload:w.map(S=>{const{endpointName:x,arg:A,value:O}=S,M=d[x];return{queryDescription:{type:"query",endpointName:x,originalArgs:S.arg,queryCacheKey:o({queryArgs:A,endpointDefinition:M,endpointName:x})},value:O}}),meta:{[pe]:!0,requestId:yt(),timestamp:Date.now()}})},queryResultPatched:{reducer(w,{payload:{queryCacheKey:c,patches:j}}){be(w,c,S=>{S.data=et(S.data,j.concat())})},prepare:de()}},extraReducers(w){w.addCase(r.pending,(c,{meta:j,meta:{arg:S}})=>{const x=Fe(S);k(c,S,x,j)}).addCase(r.fulfilled,(c,{meta:j,payload:S})=>{const x=Fe(j.arg);g(c,j,S,x)}).addCase(r.rejected,(c,{meta:{condition:j,arg:S,requestId:x},error:A,payload:O})=>{be(c,S.queryCacheKey,M=>{if(!j){if(M.requestId!==x)return;M.status="rejected",M.error=O??A}})}).addMatcher(y,(c,j)=>{const{queries:S}=h(j);for(const[x,A]of Object.entries(S))((A==null?void 0:A.status)==="fulfilled"||(A==null?void 0:A.status)==="rejected")&&(c[x]=A)})}}),b=oe({name:`${e}/mutations`,initialState:fe,reducers:{removeMutationResult:{reducer(w,{payload:c}){const j=ge(c);j in w&&delete w[j]},prepare:de()}},extraReducers(w){w.addCase(n.pending,(c,{meta:j,meta:{requestId:S,arg:x,startedTimeStamp:A}})=>{x.track&&(c[ge(j)]={requestId:S,status:"pending",endpointName:x.endpointName,startedTimeStamp:A})}).addCase(n.fulfilled,(c,{payload:j,meta:S})=>{S.arg.track&&ut(c,S,x=>{x.requestId===S.requestId&&(x.status="fulfilled",x.data=j,x.fulfilledTimeStamp=S.fulfilledTimeStamp)})}).addCase(n.rejected,(c,{payload:j,error:S,meta:x})=>{x.arg.track&&ut(c,x,A=>{A.requestId===x.requestId&&(A.status="rejected",A.error=j??S)})}).addMatcher(y,(c,j)=>{const{mutations:S}=h(j);for(const[x,A]of Object.entries(S))((A==null?void 0:A.status)==="fulfilled"||(A==null?void 0:A.status)==="rejected")&&x!==(A==null?void 0:A.requestId)&&(c[x]=A)})}}),f=oe({name:`${e}/invalidation`,initialState:fe,reducers:{updateProvidedBy:{reducer(w,c){var x,A;const{queryCacheKey:j,providedTags:S}=c.payload;for(const O of Object.values(w))for(const M of Object.values(O)){const C=M.indexOf(j);C!==-1&&M.splice(C,1)}for(const{type:O,id:M}of S){const C=(x=w[O]??(w[O]={}))[A=M||"__internal_without_id"]??(x[A]=[]);C.includes(j)||C.push(j)}},prepare:de()}},extraReducers(w){w.addCase(l.actions.removeQueryResult,(c,{payload:{queryCacheKey:j}})=>{for(const S of Object.values(c))for(const x of Object.values(S)){const A=x.indexOf(j);A!==-1&&x.splice(A,1)}}).addMatcher(y,(c,j)=>{var x,A;const{provided:S}=h(j);for(const[O,M]of Object.entries(S))for(const[C,R]of Object.entries(M)){const I=(x=c[O]??(c[O]={}))[A=C||"__internal_without_id"]??(x[A]=[]);for(const F of R)I.includes(F)||I.push(F)}}).addMatcher(_e(re(r),Le(r)),(c,j)=>{const S=Ot(j,"providesTags",d,E),{queryCacheKey:x}=j.meta.arg;f.caseReducers.updateProvidedBy(c,f.actions.updateProvidedBy({queryCacheKey:x,providedTags:S}))})}}),i=oe({name:`${e}/subscriptions`,initialState:fe,reducers:{updateSubscriptionOptions(w,c){},unsubscribeQueryResult(w,c){},internal_getRTKQSubscriptions(){}}}),v=oe({name:`${e}/internalSubscriptions`,initialState:fe,reducers:{subscriptionsUpdated:{reducer(w,c){return et(w,c.payload)},prepare:de()}}}),s=oe({name:`${e}/config`,initialState:{online:kr(),focused:Ar(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered(w,{payload:c}){w.middlewareRegistered=w.middlewareRegistered==="conflict"||m!==c?"conflict":!0}},extraReducers:w=>{w.addCase(Je,c=>{c.online=!0}).addCase(_t,c=>{c.online=!1}).addCase(We,c=>{c.focused=!0}).addCase(Et,c=>{c.focused=!1}).addMatcher(y,c=>({...c}))}}),a=rr({queries:l.reducer,mutations:b.reducer,provided:f.reducer,subscriptions:v.reducer,config:s.reducer}),u=(w,c)=>a(_.match(c)?void 0:w,c),N={...s.actions,...l.actions,...i.actions,...v.actions,...b.actions,...f.actions,resetApiState:_};return{reducer:u,actions:N}}var Z=Symbol.for("RTKQ/skipToken"),Mt={status:"uninitialized"},dt=Ue(Mt,()=>{}),ft=Ue(Mt,()=>{});function Fr({serializeQueryArgs:e,reducerPath:r,createSelector:n}){const o=k=>dt,d=k=>ft;return{buildQuerySelector:y,buildMutationSelector:E,selectInvalidatedBy:p,selectCachedArgsForQuery:_};function m(k){return{...k,...wr(k.status)}}function h(k){return k[r]}function y(k,g){return l=>{if(l===Z)return n(o,m);const b=e({queryArgs:l,endpointDefinition:g,endpointName:k});return n(i=>{var v,s;return((s=(v=h(i))==null?void 0:v.queries)==null?void 0:s[b])??dt},m)}}function E(){return k=>{let g;return typeof k=="object"?g=ge(k)??Z:g=k,n(g===Z?d:f=>{var i,v;return((v=(i=h(f))==null?void 0:i.mutations)==null?void 0:v[g])??ft},m)}}function p(k,g){const l=k[r],b=new Set;for(const f of g.filter(Ne).map(Te)){const i=l.provided[f.type];if(!i)continue;let v=(f.id!==void 0?i[f.id]:it(Object.values(i)))??[];for(const s of v)b.add(s)}return it(Array.from(b.values()).map(f=>{const i=l.queries[f];return i?[{queryCacheKey:f,endpointName:i.endpointName,originalArgs:i.originalArgs}]:[]}))}function _(k,g){return Object.values(k[r].queries).filter(l=>(l==null?void 0:l.endpointName)===g&&l.status!=="uninitialized").map(l=>l.originalArgs)}}var ae=WeakMap?new WeakMap:void 0,pt=({endpointName:e,queryArgs:r})=>{let n="";const o=ae==null?void 0:ae.get(r);if(typeof o=="string")n=o;else{const d=JSON.stringify(r,(m,h)=>(h=typeof h=="bigint"?{$bigint:h.toString()}:h,h=te(h)?Object.keys(h).sort().reduce((y,E)=>(y[E]=h[E],y),{}):h,h));te(r)&&(ae==null||ae.set(r,d)),n=d}return`${e}(${n})`};function zt(...e){return function(n){const o=Ze(p=>{var _;return(_=n.extractRehydrationInfo)==null?void 0:_.call(n,p,{reducerPath:n.reducerPath??"api"})}),d={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:o,serializeQueryArgs(p){let _=pt;if("serializeQueryArgs"in p.endpointDefinition){const k=p.endpointDefinition.serializeQueryArgs;_=g=>{const l=k(g);return typeof l=="string"?l:pt({...g,queryArgs:l})}}else n.serializeQueryArgs&&(_=n.serializeQueryArgs);return _(p)},tagTypes:[...n.tagTypes||[]]},m={endpointDefinitions:{},batch(p){p()},apiUid:yt(),extractRehydrationInfo:o,hasRehydrationInfo:Ze(p=>o(p)!=null)},h={injectEndpoints:E,enhanceEndpoints({addTagTypes:p,endpoints:_}){if(p)for(const k of p)d.tagTypes.includes(k)||d.tagTypes.push(k);if(_)for(const[k,g]of Object.entries(_))typeof g=="function"?g(m.endpointDefinitions[k]):Object.assign(m.endpointDefinitions[k]||{},g);return h}},y=e.map(p=>p.init(h,d,m));function E(p){const _=p.endpoints({query:k=>({...k,type:"query"}),mutation:k=>({...k,type:"mutation"})});for(const[k,g]of Object.entries(_)){if(p.overrideExisting!==!0&&k in m.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(vt(39));continue}m.endpointDefinitions[k]=g;for(const l of y)l.injectEndpoint(k,g)}return h}return h.injectEndpoints({endpoints:n.endpoints})}}function Y(e,...r){return Object.assign(e,...r)}var $r=({api:e,queryThunk:r,internalState:n})=>{const o=`${e.reducerPath}/subscriptions`;let d=null,m=null;const{updateSubscriptionOptions:h,unsubscribeQueryResult:y}=e.internalActions,E=(l,b)=>{var i,v,s;if(h.match(b)){const{queryCacheKey:a,requestId:u,options:N}=b.payload;return(i=l==null?void 0:l[a])!=null&&i[u]&&(l[a][u]=N),!0}if(y.match(b)){const{queryCacheKey:a,requestId:u}=b.payload;return l[a]&&delete l[a][u],!0}if(e.internalActions.removeQueryResult.match(b))return delete l[b.payload.queryCacheKey],!0;if(r.pending.match(b)){const{meta:{arg:a,requestId:u}}=b,N=l[v=a.queryCacheKey]??(l[v]={});return N[`${u}_running`]={},a.subscribe&&(N[u]=a.subscriptionOptions??N[u]??{}),!0}let f=!1;if(r.fulfilled.match(b)||r.rejected.match(b)){const a=l[b.meta.arg.queryCacheKey]||{},u=`${b.meta.requestId}_running`;f||(f=!!a[u]),delete a[u]}if(r.rejected.match(b)){const{meta:{condition:a,arg:u,requestId:N}}=b;if(a&&u.subscribe){const w=l[s=u.queryCacheKey]??(l[s]={});w[N]=u.subscriptionOptions??w[N]??{},f=!0}}return f},p=()=>n.currentSubscriptions,g={getSubscriptions:p,getSubscriptionCount:l=>{const f=p()[l]??{};return le(f)},isRequestSubscribed:(l,b)=>{var i;const f=p();return!!((i=f==null?void 0:f[l])!=null&&i[b])}};return(l,b)=>{if(d||(d=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(l))return d=n.currentSubscriptions={},m=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(l))return[!1,g];const f=E(n.currentSubscriptions,l);let i=!0;if(f){m||(m=setTimeout(()=>{const a=JSON.parse(JSON.stringify(n.currentSubscriptions)),[,u]=St(d,()=>a);b.next(e.internalActions.subscriptionsUpdated(u)),d=a,m=null},500));const v=typeof l.type=="string"&&!!l.type.startsWith(o),s=r.rejected.match(l)&&l.meta.condition&&!!l.meta.arg.subscribe;i=!v&&!s}return[i,!1]}};function Dr(e){for(const r in e)return!1;return!0}var Qr=2147483647/1e3-1,Lr=({reducerPath:e,api:r,queryThunk:n,context:o,internalState:d})=>{const{removeQueryResult:m,unsubscribeQueryResult:h,cacheEntriesUpserted:y}=r.internalActions,E=_e(h.match,n.fulfilled,n.rejected,y.match);function p(l){const b=d.currentSubscriptions[l];return!!b&&!Dr(b)}const _={},k=(l,b,f)=>{var i;if(E(l)){const v=b.getState()[e];let s;if(y.match(l))s=l.payload.map(a=>a.queryDescription.queryCacheKey);else{const{queryCacheKey:a}=h.match(l)?l.payload:l.meta.arg;s=[a]}for(const a of s)g(a,(i=v.queries[a])==null?void 0:i.endpointName,b,v.config)}if(r.util.resetApiState.match(l))for(const[v,s]of Object.entries(_))s&&clearTimeout(s),delete _[v];if(o.hasRehydrationInfo(l)){const v=b.getState()[e],{queries:s}=o.extractRehydrationInfo(l);for(const[a,u]of Object.entries(s))g(a,u==null?void 0:u.endpointName,b,v.config)}};function g(l,b,f,i){const v=o.endpointDefinitions[b],s=(v==null?void 0:v.keepUnusedDataFor)??i.keepUnusedDataFor;if(s===1/0)return;const a=Math.max(0,Math.min(s,Qr));if(!p(l)){const u=_[l];u&&clearTimeout(u),_[l]=setTimeout(()=>{p(l)||f.dispatch(m({queryCacheKey:l})),delete _[l]},a*1e3)}}return k},mt=new Error("Promise never resolved before cacheEntryRemoved."),Ur=({api:e,reducerPath:r,context:n,queryThunk:o,mutationThunk:d,internalState:m})=>{const h=tt(o),y=tt(d),E=re(o,d),p={};function _(f,i,v){const s=p[f];s!=null&&s.valueResolved&&(s.valueResolved({data:i,meta:v}),delete s.valueResolved)}function k(f){const i=p[f];i&&(delete p[f],i.cacheEntryRemoved())}const g=(f,i,v)=>{const s=l(f);function a(u,N,w,c){const j=v[r].queries[N],S=i.getState()[r].queries[N];!j&&S&&b(u,c,N,i,w)}if(o.pending.match(f))a(f.meta.arg.endpointName,s,f.meta.requestId,f.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(f))for(const{queryDescription:u,value:N}of f.payload){const{endpointName:w,originalArgs:c,queryCacheKey:j}=u;a(w,j,f.meta.requestId,c),_(j,N,{})}else if(d.pending.match(f))i.getState()[r].mutations[s]&&b(f.meta.arg.endpointName,f.meta.arg.originalArgs,s,i,f.meta.requestId);else if(E(f))_(s,f.payload,f.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(f)||e.internalActions.removeMutationResult.match(f))k(s);else if(e.util.resetApiState.match(f))for(const u of Object.keys(p))k(u)};function l(f){return h(f)?f.meta.arg.queryCacheKey:y(f)?f.meta.arg.fixedCacheKey??f.meta.requestId:e.internalActions.removeQueryResult.match(f)?f.payload.queryCacheKey:e.internalActions.removeMutationResult.match(f)?ge(f.payload):""}function b(f,i,v,s,a){const u=n.endpointDefinitions[f],N=u==null?void 0:u.onCacheEntryAdded;if(!N)return;const w={},c=new Promise(M=>{w.cacheEntryRemoved=M}),j=Promise.race([new Promise(M=>{w.valueResolved=M}),c.then(()=>{throw mt})]);j.catch(()=>{}),p[v]=w;const S=e.endpoints[f].select(u.type==="query"?i:v),x=s.dispatch((M,C,R)=>R),A={...s,getCacheEntry:()=>S(s.getState()),requestId:a,extra:x,updateCachedData:u.type==="query"?M=>s.dispatch(e.util.updateQueryData(f,i,M)):void 0,cacheDataLoaded:j,cacheEntryRemoved:c},O=N(i,A);Promise.resolve(O).catch(M=>{if(M!==mt)throw M})}return g},Br=({api:e,context:{apiUid:r},reducerPath:n})=>(o,d)=>{e.util.resetApiState.match(o)&&d.dispatch(e.internalActions.middlewareRegistered(r))},Vr=({reducerPath:e,context:r,context:{endpointDefinitions:n},mutationThunk:o,queryThunk:d,api:m,assertTagType:h,refetchQuery:y,internalState:E})=>{const{removeQueryResult:p}=m.internalActions,_=_e(re(o),Le(o)),k=_e(re(o,d),Be(o,d));let g=[];const l=(i,v)=>{_(i)?f(Ot(i,"invalidatesTags",n,h),v):k(i)?f([],v):m.util.invalidateTags.match(i)&&f(Ge(i.payload,void 0,void 0,void 0,void 0,h),v)};function b(i){var v,s;for(const a in i.queries)if(((v=i.queries[a])==null?void 0:v.status)==="pending")return!0;for(const a in i.mutations)if(((s=i.mutations[a])==null?void 0:s.status)==="pending")return!0;return!1}function f(i,v){const s=v.getState(),a=s[e];if(g.push(...i),a.config.invalidationBehavior==="delayed"&&b(a))return;const u=g;if(g=[],u.length===0)return;const N=m.util.selectInvalidatedBy(s,u);r.batch(()=>{const w=Array.from(N.values());for(const{queryCacheKey:c}of w){const j=a.queries[c],S=E.currentSubscriptions[c]??{};j&&(le(S)===0?v.dispatch(p({queryCacheKey:c})):j.status!=="uninitialized"&&v.dispatch(y(j)))}})}return l},Hr=({reducerPath:e,queryThunk:r,api:n,refetchQuery:o,internalState:d})=>{const m={},h=(g,l)=>{(n.internalActions.updateSubscriptionOptions.match(g)||n.internalActions.unsubscribeQueryResult.match(g))&&E(g.payload,l),(r.pending.match(g)||r.rejected.match(g)&&g.meta.condition)&&E(g.meta.arg,l),(r.fulfilled.match(g)||r.rejected.match(g)&&!g.meta.condition)&&y(g.meta.arg,l),n.util.resetApiState.match(g)&&_()};function y({queryCacheKey:g},l){const b=l.getState()[e],f=b.queries[g],i=d.currentSubscriptions[g];if(!f||f.status==="uninitialized")return;const{lowestPollingInterval:v,skipPollingIfUnfocused:s}=k(i);if(!Number.isFinite(v))return;const a=m[g];a!=null&&a.timeout&&(clearTimeout(a.timeout),a.timeout=void 0);const u=Date.now()+v;m[g]={nextPollTimestamp:u,pollingInterval:v,timeout:setTimeout(()=>{(b.config.focused||!s)&&l.dispatch(o(f)),y({queryCacheKey:g},l)},v)}}function E({queryCacheKey:g},l){const f=l.getState()[e].queries[g],i=d.currentSubscriptions[g];if(!f||f.status==="uninitialized")return;const{lowestPollingInterval:v}=k(i);if(!Number.isFinite(v)){p(g);return}const s=m[g],a=Date.now()+v;(!s||a<s.nextPollTimestamp)&&y({queryCacheKey:g},l)}function p(g){const l=m[g];l!=null&&l.timeout&&clearTimeout(l.timeout),delete m[g]}function _(){for(const g of Object.keys(m))p(g)}function k(g={}){let l=!1,b=Number.POSITIVE_INFINITY;for(let f in g)g[f].pollingInterval&&(b=Math.min(g[f].pollingInterval,b),l=g[f].skipPollingIfUnfocused||l);return{lowestPollingInterval:b,skipPollingIfUnfocused:l}}return h},Kr=({api:e,context:r,queryThunk:n,mutationThunk:o})=>{const d=wt(n,o),m=Be(n,o),h=re(n,o),y={};return(p,_)=>{var k,g;if(d(p)){const{requestId:l,arg:{endpointName:b,originalArgs:f}}=p.meta,i=r.endpointDefinitions[b],v=i==null?void 0:i.onQueryStarted;if(v){const s={},a=new Promise((c,j)=>{s.resolve=c,s.reject=j});a.catch(()=>{}),y[l]=s;const u=e.endpoints[b].select(i.type==="query"?f:l),N=_.dispatch((c,j,S)=>S),w={..._,getCacheEntry:()=>u(_.getState()),requestId:l,extra:N,updateCachedData:i.type==="query"?c=>_.dispatch(e.util.updateQueryData(b,f,c)):void 0,queryFulfilled:a};v(f,w)}}else if(h(p)){const{requestId:l,baseQueryMeta:b}=p.meta;(k=y[l])==null||k.resolve({data:p.payload,meta:b}),delete y[l]}else if(m(p)){const{requestId:l,rejectedWithValue:b,baseQueryMeta:f}=p.meta;(g=y[l])==null||g.reject({error:p.payload??p.error,isUnhandledError:!b,meta:f}),delete y[l]}}},Wr=({reducerPath:e,context:r,api:n,refetchQuery:o,internalState:d})=>{const{removeQueryResult:m}=n.internalActions,h=(E,p)=>{We.match(E)&&y(p,"refetchOnFocus"),Je.match(E)&&y(p,"refetchOnReconnect")};function y(E,p){const _=E.getState()[e],k=_.queries,g=d.currentSubscriptions;r.batch(()=>{for(const l of Object.keys(g)){const b=k[l],f=g[l];if(!f||!b)continue;(Object.values(f).some(v=>v[p]===!0)||Object.values(f).every(v=>v[p]===void 0)&&_.config[p])&&(le(f)===0?E.dispatch(m({queryCacheKey:l})):b.status!=="uninitialized"&&E.dispatch(o(b)))}})}return h};function Jr(e){const{reducerPath:r,queryThunk:n,api:o,context:d}=e,{apiUid:m}=d,h={invalidateTags:ue(`${r}/invalidateTags`)},y=k=>k.type.startsWith(`${r}/`),E=[Br,Lr,Vr,Hr,Ur,Kr];return{middleware:k=>{let g=!1;const b={...e,internalState:{currentSubscriptions:{}},refetchQuery:_,isThisApiSliceAction:y},f=E.map(s=>s(b)),i=$r(b),v=Wr(b);return s=>a=>{if(!sr(a))return s(a);g||(g=!0,k.dispatch(o.internalActions.middlewareRegistered(m)));const u={...k,next:s},N=k.getState(),[w,c]=i(a,u,N);let j;if(w?j=s(a):j=c,k.getState()[r]&&(v(a,u,N),y(a)||d.hasRehydrationInfo(a)))for(const S of f)S(a,u,N);return j}},actions:h};function _(k){return e.api.endpoints[k.endpointName].initiate(k.originalArgs,{subscribe:!1,forceRefetch:!0})}}var ht=Symbol(),Ct=({createSelector:e=jt}={})=>({name:ht,init(r,{baseQuery:n,tagTypes:o,reducerPath:d,serializeQueryArgs:m,keepUnusedDataFor:h,refetchOnMountOrArgChange:y,refetchOnFocus:E,refetchOnReconnect:p,invalidationBehavior:_},k){tr();const g=q=>q;Object.assign(r,{reducerPath:d,endpoints:{},internalActions:{onOnline:Je,onOffline:_t,onFocus:We,onFocusLost:Et},util:{}});const{queryThunk:l,mutationThunk:b,patchQueryData:f,updateQueryData:i,upsertQueryData:v,prefetch:s,buildMatchThunkActions:a}=Ir({baseQuery:n,reducerPath:d,context:k,api:r,serializeQueryArgs:m,assertTagType:g}),{reducer:u,actions:N}=Tr({context:k,queryThunk:l,mutationThunk:b,serializeQueryArgs:m,reducerPath:d,assertTagType:g,config:{refetchOnFocus:E,refetchOnReconnect:p,refetchOnMountOrArgChange:y,keepUnusedDataFor:h,reducerPath:d,invalidationBehavior:_}});Y(r.util,{patchQueryData:f,updateQueryData:i,upsertQueryData:v,prefetch:s,resetApiState:N.resetApiState,upsertQueryEntries:N.cacheEntriesUpserted}),Y(r.internalActions,N);const{middleware:w,actions:c}=Jr({reducerPath:d,context:k,queryThunk:l,mutationThunk:b,api:r,assertTagType:g});Y(r.util,c),Y(r,{reducer:u,middleware:w});const{buildQuerySelector:j,buildMutationSelector:S,selectInvalidatedBy:x,selectCachedArgsForQuery:A}=Fr({serializeQueryArgs:m,reducerPath:d,createSelector:e});Y(r.util,{selectInvalidatedBy:x,selectCachedArgsForQuery:A});const{buildInitiateQuery:O,buildInitiateMutation:M,getRunningMutationThunk:C,getRunningMutationsThunk:R,getRunningQueriesThunk:I,getRunningQueryThunk:F}=Pr({queryThunk:l,mutationThunk:b,api:r,serializeQueryArgs:m,context:k});return Y(r.util,{getRunningMutationThunk:C,getRunningMutationsThunk:R,getRunningQueryThunk:F,getRunningQueriesThunk:I}),{name:ht,injectEndpoint(q,$){var D;const P=r;(D=P.endpoints)[q]??(D[q]={}),Nt($)?Y(P.endpoints[q],{name:q,select:j(q,$),initiate:O(q,$)},a(l,q)):Cr($)&&Y(P.endpoints[q],{name:q,select:S(),initiate:M(q)},a(b,q))}}}});Ct();function Ce(e){return e.replace(e[0],e[0].toUpperCase())}function Gr(e){return e.type==="query"}function Yr(e){return e.type==="mutation"}function ye(e,...r){return Object.assign(e,...r)}var ce=WeakMap?new WeakMap:void 0,Zr=({endpointName:e,queryArgs:r})=>{let n="";const o=ce==null?void 0:ce.get(r);if(typeof o=="string")n=o;else{const d=JSON.stringify(r,(m,h)=>(h=typeof h=="bigint"?{$bigint:h.toString()}:h,h=te(h)?Object.keys(h).sort().reduce((y,E)=>(y[E]=h[E],y),{}):h,h));te(r)&&(ce==null||ce.set(r,d)),n=d}return`${e}(${n})`},Re=Symbol();function gt(e,r,n,o){const d=z.useMemo(()=>({queryArgs:e,serialized:typeof e=="object"?r({queryArgs:e,endpointDefinition:n,endpointName:o}):e}),[e,r,n,o]),m=z.useRef(d);return z.useEffect(()=>{m.current.serialized!==d.serialized&&(m.current=d)},[d]),m.current.serialized===d.serialized?m.current.queryArgs:e}function qe(e){const r=z.useRef(e);return z.useEffect(()=>{me(r.current,e)||(r.current=e)},[e]),me(r.current,e)?r.current:e}var Xr=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",en=Xr(),tn=()=>typeof navigator<"u"&&navigator.product==="ReactNative",rn=tn(),nn=()=>en||rn?z.useLayoutEffect:z.useEffect,sn=nn(),on=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:At.pending}:e;function an({api:e,moduleOptions:{batch:r,hooks:{useDispatch:n,useSelector:o,useStore:d},unstable__sideEffectsInRender:m,createSelector:h},serializeQueryArgs:y,context:E}){const p=m?b=>b():z.useEffect;return{buildQueryHooks:g,buildMutationHook:l,usePrefetch:k};function _(b,f,i){if(f!=null&&f.endpointName&&b.isUninitialized){const{endpointName:w}=f,c=E.endpointDefinitions[w];i!==Z&&y({queryArgs:f.originalArgs,endpointDefinition:c,endpointName:w})===y({queryArgs:i,endpointDefinition:c,endpointName:w})&&(f=void 0)}let v=b.isSuccess?b.data:f==null?void 0:f.data;v===void 0&&(v=b.data);const s=v!==void 0,a=b.isLoading,u=(!f||f.isLoading||f.isUninitialized)&&!s&&a,N=b.isSuccess||s&&(a&&!(f!=null&&f.isError)||b.isUninitialized);return{...b,data:v,currentData:b.data,isFetching:a,isLoading:u,isSuccess:N}}function k(b,f){const i=n(),v=qe(f);return z.useCallback((s,a)=>i(e.util.prefetch(b,s,{...v,...a})),[b,i,v])}function g(b){const f=(s,{refetchOnReconnect:a,refetchOnFocus:u,refetchOnMountOrArgChange:N,skip:w=!1,pollingInterval:c=0,skipPollingIfUnfocused:j=!1}={})=>{const{initiate:S}=e.endpoints[b],x=n(),A=z.useRef(void 0);if(!A.current){const P=x(e.internalActions.internal_getRTKQSubscriptions());A.current=P}const O=gt(w?Z:s,Zr,E.endpointDefinitions[b],b),M=qe({refetchOnReconnect:a,refetchOnFocus:u,pollingInterval:c,skipPollingIfUnfocused:j}),C=z.useRef(!1),R=z.useRef(void 0);let{queryCacheKey:I,requestId:F}=R.current||{},q=!1;I&&F&&(q=A.current.isRequestSubscribed(I,F));const $=!q&&C.current;return p(()=>{C.current=q}),p(()=>{$&&(R.current=void 0)},[$]),p(()=>{var H;const P=R.current;if(O===Z){P==null||P.unsubscribe(),R.current=void 0;return}const D=(H=R.current)==null?void 0:H.subscriptionOptions;if(!P||P.arg!==O){P==null||P.unsubscribe();const Q=x(S(O,{subscriptionOptions:M,forceRefetch:N}));R.current=Q}else M!==D&&P.updateSubscriptionOptions(M)},[x,S,N,O,M,$]),z.useEffect(()=>()=>{var P;(P=R.current)==null||P.unsubscribe(),R.current=void 0},[]),z.useMemo(()=>({refetch:()=>{var P;if(!R.current)throw new Error(vt(38));return(P=R.current)==null?void 0:P.refetch()}}),[])},i=({refetchOnReconnect:s,refetchOnFocus:a,pollingInterval:u=0,skipPollingIfUnfocused:N=!1}={})=>{const{initiate:w}=e.endpoints[b],c=n(),[j,S]=z.useState(Re),x=z.useRef(void 0),A=qe({refetchOnReconnect:s,refetchOnFocus:a,pollingInterval:u,skipPollingIfUnfocused:N});p(()=>{var I,F;const R=(I=x.current)==null?void 0:I.subscriptionOptions;A!==R&&((F=x.current)==null||F.updateSubscriptionOptions(A))},[A]);const O=z.useRef(A);p(()=>{O.current=A},[A]);const M=z.useCallback(function(R,I=!1){let F;return r(()=>{var q;(q=x.current)==null||q.unsubscribe(),x.current=F=c(w(R,{subscriptionOptions:O.current,forceRefetch:!I})),S(R)}),F},[c,w]),C=z.useCallback(()=>{var R,I;(R=x.current)!=null&&R.queryCacheKey&&c(e.internalActions.removeQueryResult({queryCacheKey:(I=x.current)==null?void 0:I.queryCacheKey}))},[c]);return z.useEffect(()=>()=>{var R;(R=x==null?void 0:x.current)==null||R.unsubscribe()},[]),z.useEffect(()=>{j!==Re&&!x.current&&M(j,!0)},[j,M]),z.useMemo(()=>[M,j,{reset:C}],[M,j,C])},v=(s,{skip:a=!1,selectFromResult:u}={})=>{const{select:N}=e.endpoints[b],w=gt(a?Z:s,y,E.endpointDefinitions[b],b),c=z.useRef(void 0),j=z.useMemo(()=>h([N(w),(M,C)=>C,M=>w],_,{memoizeOptions:{resultEqualityCheck:me}}),[N,w]),S=z.useMemo(()=>u?h([j],u,{devModeChecks:{identityFunctionCheck:"never"}}):j,[j,u]),x=o(M=>S(M,c.current),me),A=d(),O=j(A.getState(),c.current);return sn(()=>{c.current=O},[O]),x};return{useQueryState:v,useQuerySubscription:f,useLazyQuerySubscription:i,useLazyQuery(s){const[a,u,{reset:N}]=i(s),w=v(u,{...s,skip:u===Re}),c=z.useMemo(()=>({lastArg:u}),[u]);return z.useMemo(()=>[a,{...w,reset:N},c],[a,w,N,c])},useQuery(s,a){const u=f(s,a),N=v(s,{selectFromResult:s===Z||a!=null&&a.skip?void 0:on,...a}),{data:w,status:c,isLoading:j,isSuccess:S,isError:x,error:A}=N;return z.useDebugValue({data:w,status:c,isLoading:j,isSuccess:S,isError:x,error:A}),z.useMemo(()=>({...N,...u}),[N,u])}}}function l(b){return({selectFromResult:f,fixedCacheKey:i}={})=>{const{select:v,initiate:s}=e.endpoints[b],a=n(),[u,N]=z.useState();z.useEffect(()=>()=>{u!=null&&u.arg.fixedCacheKey||u==null||u.reset()},[u]);const w=z.useCallback(function(D){const H=a(s(D,{fixedCacheKey:i}));return N(H),H},[a,s,i]),{requestId:c}=u||{},j=z.useMemo(()=>v({fixedCacheKey:i,requestId:u==null?void 0:u.requestId}),[i,u,v]),S=z.useMemo(()=>f?h([j],f):j,[f,j]),x=o(S,me),A=i==null?u==null?void 0:u.arg.originalArgs:void 0,O=z.useCallback(()=>{r(()=>{u&&N(void 0),i&&a(e.internalActions.removeMutationResult({requestId:c,fixedCacheKey:i}))})},[a,i,u,c]),{endpointName:M,data:C,status:R,isLoading:I,isSuccess:F,isError:q,error:$}=x;z.useDebugValue({endpointName:M,data:C,status:R,isLoading:I,isSuccess:F,isError:q,error:$});const P=z.useMemo(()=>({...x,originalArgs:A,reset:O}),[x,A,O]);return z.useMemo(()=>[w,P],[w,P])}}}var cn=Symbol(),ln=({batch:e=Lt,hooks:r={useDispatch:Vt,useSelector:Bt,useStore:Ut},createSelector:n=jt,unstable__sideEffectsInRender:o=!1,...d}={})=>({name:cn,init(m,{serializeQueryArgs:h},y){const E=m,{buildQueryHooks:p,buildMutationHook:_,usePrefetch:k}=an({api:m,moduleOptions:{batch:e,hooks:r,unstable__sideEffectsInRender:o,createSelector:n},serializeQueryArgs:h,context:y});return ye(E,{usePrefetch:k}),ye(y,{batch:e}),{injectEndpoint(g,l){if(Gr(l)){const{useQuery:b,useLazyQuery:f,useLazyQuerySubscription:i,useQueryState:v,useQuerySubscription:s}=p(g);ye(E.endpoints[g],{useQuery:b,useLazyQuery:f,useLazyQuerySubscription:i,useQueryState:v,useQuerySubscription:s}),m[`use${Ce(g)}Query`]=b,m[`useLazy${Ce(g)}Query`]=f}else if(Yr(l)){const b=_(g);ye(E.endpoints[g],{useMutation:b}),m[`use${Ce(g)}Mutation`]=b}}}}}),se=zt(Ct(),ln());const ie=void 0,ve=se({reducerPath:"feedbackApi",baseQuery:ne({baseUrl:ie}),endpoints:e=>({addFeedBack:e.mutation({query:r=>({url:"/api/v1/feedback",method:"POST",body:r})})})}),{useAddFeedBackMutation:un}=ve;var Rt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xt=ee.createContext&&ee.createContext(Rt),dn=["attr","size","title"];function fn(e,r){if(e==null)return{};var n=pn(e,r),o,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(d=0;d<m.length;d++)o=m[d],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function pn(e,r){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(r.indexOf(o)>=0)continue;n[o]=e[o]}return n}function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Oe.apply(this,arguments)}function bt(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),n.push.apply(n,o)}return n}function Me(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?bt(Object(n),!0).forEach(function(o){mn(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function mn(e,r,n){return r=hn(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function hn(e){var r=gn(e,"string");return typeof r=="symbol"?r:r+""}function gn(e,r){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function qt(e){return e&&e.map((r,n)=>ee.createElement(r.tag,Me({key:n},r.attr),qt(r.child)))}function V(e){return r=>ee.createElement(xn,Oe({attr:Me({},e.attr)},r),qt(e.child))}function xn(e){var r=n=>{var{attr:o,size:d,title:m}=e,h=fn(e,dn),y=d||n.size||"1em",E;return n.className&&(E=n.className),e.className&&(E=(E?E+" ":"")+e.className),ee.createElement("svg",Oe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,h,{className:E,style:Me(Me({color:e.color||n.color},n.style),e.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),m&&ee.createElement("title",null,m),e.children)};return xt!==void 0?ee.createElement(xt.Consumer,null,n=>r(n)):r(Rt)}function is(e){return V({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"},child:[]}]})(e)}function Ye(e){return V({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"},child:[]}]})(e)}const bn=()=>{const[e]=un(),r=$e(),{control:n,handleSubmit:o,formState:{errors:d}}=Qe({resolver:Ke(jr),mode:"onBlur",defaultValues:{first_name:"",last_name:"",email:"",rate:0,additional_info:""}}),m=h=>{var E;const y={first_name:h.first_name.trim(),last_name:h.last_name.trim(),email:h.email.trim(),rate:Number(h.rate),additional_info:((E=h.additional_info)==null?void 0:E.trim())||null};e(y).unwrap().then(()=>r(-1)).catch(p=>console.error("Submission error:",p))};return t.jsxs(yr,{children:[t.jsx(Ye,{className:"exit",onClick:()=>r(-1)}),t.jsx("div",{className:"image"}),t.jsxs("div",{className:"form",children:[t.jsx(He,{variant:"h4",text:"Customer Feedback"}),t.jsxs("form",{onSubmit:o(m),children:[t.jsx(L,{name:"first_name",control:n,render:({field:h})=>{var y;return t.jsx(W,{labelText:"First Name",placeholder:"Enter your name",...h,isError:!!d.first_name,errorText:(y=d.first_name)==null?void 0:y.message})}}),t.jsx(L,{name:"email",control:n,render:({field:h})=>{var y;return t.jsx(W,{labelText:"Email",placeholder:"example@gmail.com",type:"email",...h,isError:!!d.email,errorText:(y=d.email)==null?void 0:y.message})}}),t.jsx(L,{name:"last_name",control:n,render:({field:h})=>{var y;return t.jsx(W,{labelText:"Last Name",placeholder:"Last Name",...h,isError:!!d.last_name,errorText:(y=d.last_name)==null?void 0:y.message})}}),t.jsx(L,{name:"rate",control:n,render:({field:h})=>{var y;return t.jsx(W,{labelText:"Please Rate Your Experience (1-10)",placeholder:"Enter a number from 1 to 10",type:"number",min:1,max:10,onChange:E=>{const p=E.target.value;if(p===""){h.onChange("");return}const _=Math.min(Math.max(Number(p),1),10);h.onChange(_)},value:h.value,isError:!!d.rate,errorText:(y=d.rate)==null?void 0:y.message})}}),t.jsx(L,{name:"additional_info",control:n,render:({field:h})=>t.jsxs("div",{className:"textarea-wrapper",children:[" ",t.jsxs("label",{htmlFor:"additional_info",children:["Additional Information",t.jsx("textarea",{id:"additional_info",placeholder:"Additional Information",rows:5,...h,value:h.value??""})]}),d.additional_info&&t.jsx("p",{className:"error-text",children:d.additional_info.message})]})}),t.jsx(Ve,{text:"Send",typeButton:"submit",variant:"fill"})]})]})]})},yn=({onClose:e})=>{const[r,n]=z.useState([]),[o,d]=z.useState(""),[m,h]=z.useState(""),[y,E]=z.useState(""),[p,_]=z.useState(null);z.useEffect(()=>{const i=JSON.parse(localStorage.getItem("cart")||"[]");n(i)},[]);const k=(i,v)=>{let s=[...r];const a=s.find(u=>u.id===i);a&&(v<=0?s=s.filter(u=>u.id!==i):a.count=v,n(s),localStorage.setItem("cart",JSON.stringify(s)))},g=i=>{const v=r.filter(s=>s.id!==i);n(v),localStorage.setItem("cart",JSON.stringify(v))},l=r.reduce((i,v)=>i+v.count,0),b=r.reduce((i,v)=>i+v.count*v.price,0),f=async()=>{const i={name:o,phone:m,address:y,items:r};try{const s=await(await fetch("https://new.gosht.com/api-back/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json();_(s.orderId),localStorage.removeItem("cart"),n([])}catch(v){console.error("Order failed",v)}};return p?t.jsx("div",{className:"cart-modal",children:t.jsxs("div",{className:"cart-modal__success",children:[t.jsx("div",{className:"success-icon",children:"🎉"}),t.jsx("h2",{children:"Success!"}),t.jsxs("p",{children:["Your order ",t.jsxs("b",{children:["#",p]})," has been placed."]}),t.jsx("button",{className:"success-btn",onClick:e,children:"Close"})]})}):t.jsx("div",{className:"cart-modal",children:t.jsxs("div",{className:"cart-modal__content",children:[t.jsxs("div",{className:"cart-modal__header",children:[t.jsx("h2",{children:"Your Cart"}),t.jsx("button",{className:"close-btn",onClick:e,children:"×"})]}),r.length===0?t.jsx("p",{className:"cart-empty",children:"Your cart is empty."}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"cart-items",children:r.map(i=>t.jsxs("li",{className:"cart-item",children:[t.jsx("img",{src:i.image,alt:i.title}),t.jsxs("div",{className:"cart-item__info",children:[t.jsx("h4",{children:i.title}),t.jsx("p",{children:i.weight}),t.jsxs("p",{className:"price",children:["$",i.price," × ",i.count," = ",t.jsxs("b",{children:["$",i.price*i.count]})]}),t.jsxs("div",{className:"cart-item__controls",children:[t.jsx("button",{onClick:()=>k(i.id,i.count-1),children:"-"}),t.jsx("span",{children:i.count}),t.jsx("button",{onClick:()=>k(i.id,i.count+1),children:"+"})]})]}),t.jsx("button",{className:"delete-btn",onClick:()=>g(i.id),children:"🗑"})]},i.id))}),t.jsx("div",{className:"cart-summary",children:t.jsxs("div",{children:[t.jsxs("p",{children:["Total items: ",t.jsx("b",{children:l})]}),t.jsxs("p",{children:["Total amount: ",t.jsxs("b",{children:["$",b]})]})]})}),t.jsxs("div",{className:"cart-form",children:[t.jsx("h3",{children:"Submit Order"}),t.jsx("input",{type:"text",placeholder:"Your name",value:o,onChange:i=>d(i.target.value)}),t.jsx("input",{type:"tel",placeholder:"Phone number",value:m,onChange:i=>h(i.target.value)}),t.jsx("input",{type:"text",placeholder:"Address",value:y,onChange:i=>E(i.target.value)}),t.jsx("button",{className:"submit-btn",onClick:f,disabled:r.length===0,children:"Submit Order"})]})]})]})})},vn=J.header`
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
`;function jn(e){return V({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function wn(e){return V({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Sn(e){return V({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},child:[]}]})(e)}function os(e){return V({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function as(e){return V({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},child:[]}]})(e)}function Pt(e){return V({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function It(e){return V({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function cs(e){return V({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(e)}function An(e){return V({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Tt(e){return V({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M362.1 205.2L272.9 72.5C269 66.8 262.5 64 256 64c-6.5 0-13 2.8-16.9 8.7l-89.2 132.5H52.4c-11.2 0-20.4 9.1-20.4 20.2 0 1.8.2 3.6.8 5.5l51.7 187.5c4.7 17 20.4 29.5 39.1 29.5h264.7c18.7 0 34.4-12.5 39.3-29.5l51.7-187.5.6-5.5c0-11.1-9.2-20.2-20.4-20.2h-97.4zm-167.2 0l61.1-89 61.1 89H194.9zM256 367.1c-22.4 0-40.7-18.2-40.7-40.5s18.3-40.5 40.7-40.5 40.7 18.2 40.7 40.5-18.3 40.5-40.7 40.5z"},child:[]}]})(e)}function kn(e){return V({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(e)}const En=J.div`
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


`;function _n(e){return V({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"},child:[]}]})(e)}const Nn=({})=>{const[e,r]=z.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>r(!0),style:{backgroundColor:"transparent",fontSize:"36px",color:"white"},children:t.jsx(_n,{})}),t.jsxs(En,{isOpen:e,children:[t.jsxs("div",{className:"top",children:[t.jsx(kn,{onClick:()=>r(!1),style:{cursor:"pointer"}}),t.jsx("img",{src:"/icons/header-logo.svg",alt:"Logo"}),t.jsx(Pt,{})]}),t.jsxs("nav",{children:[t.jsxs("ul",{children:[t.jsx(T,{to:"/menu-page/starter",onClick:()=>r(!1),children:t.jsx("li",{children:"Menu"})}),t.jsx(T,{to:"/about-page",onClick:()=>r(!1),children:t.jsx("li",{children:"About us"})}),t.jsx(T,{to:"/events",onClick:()=>r(!1),children:t.jsx("li",{children:"Events"})}),t.jsx(T,{to:"/kids-event",onClick:()=>r(!1),children:t.jsx("li",{children:"Kids Events"})}),t.jsx(T,{to:"/location-page",onClick:()=>r(!1),children:t.jsx("li",{children:"Hours & Location"})}),t.jsx(T,{to:"/career-page",onClick:()=>r(!1),children:t.jsx("li",{children:"Review"})})]}),t.jsxs("div",{className:"burgerBtns",children:[t.jsxs("button",{children:[t.jsx(Tt,{}),t.jsx("span",{children:"Cart"})]}),t.jsxs("button",{className:"outline",children:[t.jsx(It,{style:{color:"white"}}),t.jsx("span",{children:"Book a table"})]})]})]})]})]})},On=(e=975)=>{const[r,n]=z.useState(window.innerWidth<=e);return z.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)},[e]),r},Mn=()=>{const e=On(1075),[r,n]=z.useState(!1);return t.jsxs(vn,{children:[e&&t.jsx(Nn,{}),r&&t.jsx(yn,{onClose:()=>n(!1)}),t.jsx(T,{to:"/",children:t.jsx("img",{src:"/icons/header-logo.svg",className:"logo",alt:"brand logotype"})}),t.jsx("nav",{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(T,{to:"/menu-page/starter",children:"Menu"})}),t.jsx("li",{children:t.jsx(T,{to:"/about-page",children:"About us"})}),t.jsx("li",{children:t.jsx(T,{to:"/events",children:"Events"})}),t.jsx("li",{children:t.jsx(T,{to:"/kids-event",children:"Kids Events"})}),t.jsx("li",{children:t.jsx(T,{to:"/location-page",children:"Hours & Location"})}),t.jsx("li",{children:t.jsx(T,{to:"/review-page",children:"Review"})})]})}),t.jsxs("div",{className:"header_buttons",children:[t.jsxs("button",{children:[t.jsx(Pt,{}),t.jsx("span",{children:"Log in"})]}),t.jsxs("button",{onClick:()=>n(!0),children:[t.jsx(Tt,{}),t.jsx("span",{children:"Cart"})]}),t.jsxs("button",{children:[t.jsx(It,{}),t.jsx("span",{children:"Book a table"})]})]})]})},zn=J.div`
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
`,Cn=J.div`
  display: inline-block;
  cursor: pointer;
  .dropDown {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    padding: 6px 0;
    font-size: ${e=>e.theme.fontSize.font18$14};
  }
`,Rn=J.ul`
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
`,Pe=({btnText:e,menuElems:r})=>{const[n,o]=z.useState(!1),d=()=>{o(m=>!m)};return t.jsxs(Cn,{className:"dropDown",children:[t.jsxs("span",{onClick:d,className:"dropDown",children:[t.jsx("h5",{children:e}),t.jsx(An,{style:{transform:n?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.3s"}})]}),t.jsx(Rn,{$isOpen:n,children:r.map((m,h)=>t.jsx(T,{to:"/menu-page/"+m.link,children:m.text},h))})]})},Ie={navigate:[{link:"/",text:"Menu"},{link:"/about-page",text:"About us"},{link:"/location-page",text:"Hours & Location"},{link:"#",text:"Review"}],events:[{link:"/kids-event",text:"Kid’s events"},{link:"/events",text:"Private events"}],cooperation:[{link:"/career-page",text:"Career"},{link:"#",text:"Contact us"}]},qn=()=>t.jsxs(zn,{className:"footerApadtive",children:[t.jsxs("footer",{className:"footer container",children:[t.jsxs("div",{className:"top",children:[t.jsx("div",{className:"footer_logo",children:t.jsx("img",{src:"/icons/footer-logo.svg",alt:"footer-logo"})}),t.jsxs("div",{className:"links_list",children:[t.jsx("span",{className:"title",children:"Navigation"}),t.jsx(T,{to:"/",children:"Menu"}),t.jsx(T,{to:"/about-page",children:"About us"}),t.jsx(T,{to:"/location-page",children:"Hours & Location"}),t.jsx(T,{to:"/review-page",children:"Review"})]}),t.jsxs("div",{className:"links_list",children:[t.jsx("span",{className:"title",children:"Events"}),t.jsx(T,{to:"/kids-event",children:"Kid’s events"}),t.jsx(T,{to:"/events",children:"Private events"})]}),t.jsxs("div",{className:"links_list",children:[t.jsx("span",{className:"title",children:"Cooperation"}),t.jsx(T,{to:"/workWithUs-page",children:"Career"}),t.jsx(T,{to:"/contactUs-page",children:"Contact us"})]}),t.jsxs("div",{className:"info",children:[t.jsxs("div",{className:"info_item",children:[t.jsx("span",{className:"title",children:"Feedback"}),t.jsx("a",{href:"tel:718504880",className:"phone_number",children:"Phone number: (718) 504-880"}),t.jsx("a",{href:"mailto:info@gosht.com",className:"email",children:"Email: info@gosht.com"})]}),t.jsxs("div",{className:"info_item",children:[t.jsx("span",{className:"title",children:"Address"}),t.jsxs("a",{children:["3215 Coney Island Ave, Brooklyn, ",t.jsx("br",{})," NY 11235, United States"]})]})]})]}),t.jsx("div",{className:"divider"}),t.jsxs("div",{className:"bottom",children:[t.jsxs("div",{className:"schedule",children:[t.jsx("span",{children:"7 Days a week,"}),t.jsx("span",{children:"11:00 AM - 12:00 AM"})]}),t.jsxs("div",{className:"social_media",children:[t.jsx("a",{href:"#",children:t.jsx("img",{src:"/icons/telegram-logo.svg",alt:"telegram"})}),t.jsx("a",{href:"#",children:t.jsx("img",{src:"/icons/instagram-logo.svg",alt:"instagram"})}),t.jsx("a",{href:"#",children:t.jsx("img",{src:"/icons/facebook-logo.svg",alt:"facebook"})})]})]})]}),t.jsxs("footer",{className:"footerMob",children:[t.jsxs("div",{className:"footerLogo",children:[t.jsx("img",{src:"/icons/footer-logo.svg",alt:""}),t.jsxs("div",{className:"footerLogoInfo",children:[t.jsx("span",{className:"title",children:"Schedule"}),t.jsxs("span",{className:"subTitle",children:["7 Days a week,",t.jsx("br",{}),"11:00 AM - 12:00 AM"]})]})]}),t.jsxs("div",{className:"footerLinks",children:[t.jsxs("div",{className:"footerDropDown",children:[t.jsx(Pe,{menuElems:Ie.navigate,btnText:"Navigation"}),t.jsx(Pe,{menuElems:Ie.events,btnText:"Events"}),t.jsx(Pe,{menuElems:Ie.cooperation,btnText:"Cooperation"})]}),t.jsxs("div",{className:"footerAddress",children:[t.jsxs("div",{className:"address",children:[t.jsx("h5",{children:"Feedback"}),t.jsx("p",{children:"Phone number: (718) 504-880"}),t.jsx("p",{children:"Email: info@gosht.com"})]}),t.jsxs("div",{className:"address",children:[t.jsx("h5",{children:"Address"}),t.jsx("p",{children:"3215 Coney Island Ave, Brooklyn,"}),t.jsx("p",{children:"NY 11235, United States"})]})]})]}),t.jsxs("div",{className:"footerSocial",children:[t.jsx(T,{to:"#",className:"social",children:t.jsx(Sn,{})}),t.jsx(T,{to:"#",className:"social",children:t.jsx(wn,{})}),t.jsx(T,{to:"#",className:"social",children:t.jsx(jn,{})})]})]})]}),Pn=()=>t.jsxs(t.Fragment,{children:[t.jsx(Mn,{}),t.jsx("main",{children:t.jsx(Ht,{})}),t.jsx(qn,{})]}),In=J.div`
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
`,je=se({reducerPath:"contactUsApi",baseQuery:ne({baseUrl:ie}),endpoints:e=>({addContactUs:e.mutation({query:r=>({url:"/api/v1/contact-us",method:"POST",body:r})})})}),{useAddContactUsMutation:Tn}=je,Fn=De({firstName:K().required("First name is required").matches(/^[A-Za-zА-Яа-яЁё\s]+$/,"Name should contain only letters"),email:K().email("Invalid email").required("Email is required"),phoneNumber:K().required("Phone number is required").matches(/^[\d\s()+-\/]+$/,"Phone number should contain only numbers and allowed symbols (+, -, (, ), /)"),gettingTouch:K().required("This field is required"),yourMessage:K().required("Message is required")}),$n=()=>{const e=$e(),[r,{data:n}]=Tn(),{control:o,handleSubmit:d,formState:{errors:m},reset:h}=Qe({resolver:Ke(Fn),mode:"onBlur",defaultValues:{firstName:"",email:"",phoneNumber:"",gettingTouch:"",yourMessage:""}}),y=async p=>{const _={first_name:p.firstName,email:p.email,phone_number:p.phoneNumber,getting_touch:p.gettingTouch,your_message:p.yourMessage};try{r(_),h()}catch(k){console.error("Error submitting form:",k)}},E=(p,_)=>_==="firstName"?p.replace(/[^A-Za-zА-Яа-яЁё\s]/g,""):_==="phoneNumber"?p.replace(/[^\d\s()+-\/]/g,""):p;return t.jsxs(In,{children:[t.jsx(Ye,{className:"exit",onClick:()=>e("/")}),t.jsx(He,{variant:"h4",text:"Contact Us"}),t.jsx("p",{children:"Send us a message and we`ll get back to you as soon as possible "}),t.jsxs("form",{onSubmit:d(y),children:[t.jsxs("div",{className:"wrapper",children:[t.jsx(L,{name:"firstName",control:o,render:({field:p})=>{var _;return t.jsx(W,{labelText:"First Name",placeholder:"Enter your name",type:"text",value:p.value,onChange:k=>{const g=E(k.target.value,"firstName");p.onChange(g)},isError:!!m.firstName,errorText:(_=m.firstName)==null?void 0:_.message})}}),t.jsx(L,{name:"email",control:o,render:({field:p})=>{var _;return t.jsx(W,{labelText:"Email",placeholder:"example@gmail.com",type:"email",value:p.value,onChange:p.onChange,isError:!!m.email,errorText:(_=m.email)==null?void 0:_.message})}})]}),t.jsxs("div",{className:"wrapper",children:[t.jsx(L,{name:"phoneNumber",control:o,render:({field:p})=>{var _;return t.jsx(W,{labelText:"Phone Number",placeholder:"Phone Number",type:"tel",value:p.value,onChange:k=>{const g=E(k.target.value,"phoneNumber");p.onChange(g)},isError:!!m.phoneNumber,errorText:(_=m.phoneNumber)==null?void 0:_.message})}}),t.jsx(L,{name:"gettingTouch",control:o,render:({field:p})=>{var _;return t.jsx(W,{labelText:"What are you getting in touch about?",placeholder:"What are you getting in touch about?",type:"text",value:p.value,onChange:p.onChange,isError:!!m.gettingTouch,errorText:(_=m.gettingTouch)==null?void 0:_.message})}})]}),t.jsxs("div",{className:"textarea-wrapper",children:[t.jsx("label",{children:"Your Message"}),t.jsx(L,{name:"yourMessage",control:o,render:({field:p})=>t.jsxs(t.Fragment,{children:[t.jsx("textarea",{placeholder:"Type your message here...",rows:5,value:p.value,onChange:p.onChange}),m.yourMessage&&t.jsx("p",{className:"error-message",children:m.yourMessage.message})]})})]}),t.jsxs("div",{className:"sendWrapper",children:[t.jsxs("div",{className:"text",children:["You can also reach us by phone at ",t.jsx("span",{children:"(718) 504-8880."})]}),t.jsx(Ve,{text:"Send",typeButton:"submit",variant:"fill"})]})]})]})},Dn=J.div`
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
`,Qn=De().shape({first_name:K().required("Имя обязательно для заполнения"),phone_number:K().required("Телефон обязателен для заполнения"),email:K().email("Некорректный email").required("Email обязателен"),cover_letter:K().required("Сопроводительное письмо обязательно"),resume:er().required("Резюме обязательно").test("fileType","Только PDF или DOCX",e=>{if(!e||!(e instanceof FileList))return!1;const r=e[0];return r&&(r.type==="application/pdf"||r.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document")}).test("fileSize","Файл слишком большой (макс. 5MB)",e=>!e||!(e instanceof FileList)?!1:e[0].size<=5e6)}),Ln=()=>{const e=$e(),{control:r,handleSubmit:n,formState:{errors:o},watch:d}=Qe({resolver:Ke(Qn),defaultValues:{first_name:"",phone_number:"",email:"",cover_letter:"",resume:null}}),m=d("resume"),h=y=>{const E=new FormData;E.append("first_name",y.first_name),E.append("phone_number",y.phone_number),E.append("email",y.email),E.append("cover_letter",y.cover_letter),y.resume&&E.append("resume",y.resume[0]),console.log("Form data prepared:",E)};return t.jsxs(Dn,{children:[t.jsx(Ye,{className:"exit",onClick:()=>e("/")}),t.jsx(He,{variant:"h4",text:"Work with Us"}),t.jsx("p",{className:"description",children:"We'd love to have you join our team! Feel free to send in your resume even if you don't see the position you're looking for listed."}),t.jsxs("form",{onSubmit:n(h),children:[t.jsxs("div",{className:"wrapper",children:[t.jsx(L,{name:"first_name",control:r,render:({field:y})=>{var E;return t.jsx(W,{labelText:"First Name *",placeholder:"Enter your name",...y,isError:!!o.first_name,errorText:(E=o.first_name)==null?void 0:E.message})}}),t.jsx(L,{name:"phone_number",control:r,render:({field:y})=>{var E;return t.jsx(W,{labelText:"Phone Number *",placeholder:"Phone Number",...y,isError:!!o.phone_number,errorText:(E=o.phone_number)==null?void 0:E.message})}})]}),t.jsx(L,{name:"email",control:r,render:({field:y})=>{var E;return t.jsx(W,{labelText:"Email *",placeholder:"example@gmail.com",type:"email",...y,isError:!!o.email,errorText:(E=o.email)==null?void 0:E.message})}}),t.jsxs("div",{className:"textarea-wrapper",children:[t.jsx("label",{className:"input-label",children:"Cover Letter *"}),t.jsx(L,{name:"cover_letter",control:r,render:({field:y})=>t.jsx("textarea",{className:"form-textarea",placeholder:"Tell us about yourself...",rows:5,...y})}),o.cover_letter&&t.jsx("p",{className:"error-text",children:o.cover_letter.message})]}),t.jsxs("div",{className:"form-load",children:[t.jsxs("div",{children:[t.jsx("label",{className:"input-label",children:"Resume *"}),t.jsx("div",{className:"file-upload",children:t.jsx(L,{name:"resume",control:r,render:({field:y})=>{var E;return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"file",id:"resume-upload",accept:".pdf,.docx",onChange:p=>y.onChange(p.target.files),className:"file-input"}),t.jsx("label",{htmlFor:"resume-upload",className:"file-label",children:"Choose file"}),t.jsx("span",{className:"file-name",children:((E=m==null?void 0:m[0])==null?void 0:E.name)||"no file selected"})]})}})}),o.resume&&t.jsx("p",{className:"error-text",children:o.resume.message})]}),t.jsx("div",{className:"submit-row",children:t.jsx(Ve,{text:"Send",typeButton:"submit",variant:"fill"})})]})]})]})},Un=z.lazy(()=>G(()=>import("./MainPage-DpPURaKZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),Bn=z.lazy(()=>G(()=>import("./EventsPage-Bl1Pugx-.js"),__vite__mapDeps([13,1,2,10,7,4,5,6,8,11,14,12]))),Vn=z.lazy(()=>G(()=>import("./EventsCardPage-FN1JWuDW.js"),__vite__mapDeps([15,1,2,7,11,14,12]))),Hn=z.lazy(()=>G(()=>import("./KidsEventsPage-CPe1XQgV.js"),__vite__mapDeps([16,1,2,4,5,6,7,8,11,14,12]))),Kn=z.lazy(()=>G(()=>import("./AboutPage-CoFj8fwQ.js"),__vite__mapDeps([17,1,2,9,11,12]))),Wn=z.lazy(()=>G(()=>import("./LocationPage-D-69CKez.js"),__vite__mapDeps([18,1,2,11,12,19]))),Jn=z.lazy(()=>G(()=>import("./CareerPage-CFRovpcb.js"),__vite__mapDeps([20,1,2,7,21,5,6,11,12]))),Gn=z.lazy(()=>G(()=>import("./MenuPage-B-beGTKI.js"),__vite__mapDeps([22,1,2,3,11,12,23]))),Yn=z.lazy(()=>G(()=>import("./CareerMorePage-QYPdcbEX.js"),__vite__mapDeps([24,1,2,21,7,11,12])).then(e=>({default:e.CareerMorePage}))),Zn=()=>t.jsxs(Kt,{children:[t.jsx(xr,{}),t.jsx(z.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx("div",{children:t.jsxs(Wt,{children:[t.jsx(B,{path:"/review-page",element:t.jsx(bn,{})}),t.jsx(B,{path:"/contactUs-page",element:t.jsx($n,{})}),t.jsx(B,{path:"/workWithUs-page",element:t.jsx(Ln,{})}),t.jsxs(B,{element:t.jsx(Pn,{}),children:[t.jsx(B,{path:"/",element:t.jsx(Un,{})}),t.jsxs(B,{path:"events",children:[t.jsx(B,{index:!0,element:t.jsx(Bn,{})}),t.jsx(B,{path:":id",element:t.jsx(Vn,{})})]}),t.jsx(B,{path:"kids-event",element:t.jsx(Hn,{})}),t.jsx(B,{path:"about-page",element:t.jsx(Kn,{})}),t.jsx(B,{path:"location-page",element:t.jsx(Wn,{})}),t.jsx(B,{path:"menu-page/:id",element:t.jsx(Gn,{})}),t.jsx(B,{path:"career-page",element:t.jsx(Jn,{})}),t.jsx(B,{path:"career-more-page",element:t.jsx(Yn,{})})]})]})})})]}),Xn=Ft`
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
`,we=se({reducerPath:"eventsApi",baseQuery:ne({baseUrl:ie}),endpoints:e=>({getAllEvents:e.query({query:()=>"/api/v1/events"}),getEventById:e.query({query:r=>`/api/v1/events/${r}`})})}),{useGetAllEventsQuery:ls,useGetEventByIdQuery:us}=we,Se=se({reducerPath:"inquireForms",baseQuery:ne({baseUrl:ie}),endpoints:e=>({addPrivetEvent:e.mutation({query:r=>({url:"/api/v1/private-inquiries",method:"POST",body:r})}),addKidsEvent:e.mutation({query:r=>({url:"/api/v1/kids-inquiries",method:"POST",body:r})})})}),{useAddPrivetEventMutation:ds,useAddKidsEventMutation:fs}=Se,Ae=se({reducerPath:"bookingFormsApi",baseQuery:ne({baseUrl:ie}),endpoints:e=>({addBookingPrivetEvents:e.mutation({query:r=>({url:"/api/v1/book",method:"POST",body:r})})})}),{useAddBookingPrivetEventsMutation:ps}=Ae,ke=se({reducerPath:"showsApi",baseQuery:ne({baseUrl:ie}),endpoints:e=>({getAllShowsApi:e.query({query:()=>"/api/v1/show-for-kids"})})}),{useGetAllShowsApiQuery:ms}=ke,Ee=se({reducerPath:"masterclassesApi",baseQuery:ne({baseUrl:ie}),endpoints:e=>({getAllMasterclasses:e.query({query:()=>"/api/v1/masterclass"})})}),{useGetAllMasterclassesQuery:hs}=Ee,es=ar({reducer:{[we.reducerPath]:we.reducer,[Se.reducerPath]:Se.reducer,[Ae.reducerPath]:Ae.reducer,[ke.reducerPath]:ke.reducer,[Ee.reducerPath]:Ee.reducer,[ve.reducerPath]:ve.reducer,[je.reducerPath]:je.reducer},middleware:e=>e().concat([we.middleware,Se.middleware,Ae.middleware,ke.middleware,Ee.middleware,ve.middleware,je.middleware])});lr.createRoot(document.getElementById("root")).render(t.jsx(z.StrictMode,{children:t.jsx(Jt,{store:es,children:t.jsxs($t,{theme:mr,children:[t.jsx(Xn,{}),t.jsx(Zn,{})]})})}));export{ie as A,Pe as D,os as F,V as G,He as H,cs as I,W as L,is as M,vr as S,An as a,ds as b,Ye as c,as as d,Ve as e,ls as f,ps as g,us as h,hs as i,ms as j,fs as k,Sn as l,jn as m,Ke as o,On as u};
