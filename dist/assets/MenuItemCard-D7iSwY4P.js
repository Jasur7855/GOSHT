import{d as g,j as e}from"./ui-CuDAUpxO.js";import{a as u}from"./react-BjlJThec.js";const v=g.div`
  display: inline-block;
  padding: 5px;
  background-color: #fff;
  border-radius: 4px;
  img {
    width: 20px;
    height: 20px;
  }
  p{
    display: inline-block;
    margin-left: 8px;
    font-size: 12px;
    line-height: 128%;
    color: #1A1A1A;
    font-family: ${s=>s.theme.fontFamily.robotoSerif};
  }
`,y=({cardBadge:s,badgeText:i})=>e.jsxs(v,{children:[e.jsx("img",{src:s,alt:"",className:"badge"}),i&&e.jsx("p",{children:i})]}),S=g.div`
  display: flex;
  flex-direction: column;
  .img {
    border-radius: 12px 12px 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: calc(12.5vw + 0px);
    padding: 6px;
    margin-bottom: 16px;
   
  }
  .description{
    h5{
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #151515;
        font-family: ${s=>s.theme.fontFamily.robotoSerif};
        font-weight: 400;
        line-height: 118%;
    }
    p{
        font-family: ${s=>s.theme.fontFamily.roboto};
        line-height: 129%;
    }
  }
  @media (max-width:975px) {
    .img {
        height:calc(23.3vw + 92.5px);
    }
  }
`,M=({cardTitle:s,cardSubtitle:i,cardBadge:n,cardImg:o})=>e.jsxs(S,{children:[e.jsx("div",{className:"img",style:{backgroundImage:`url(${o})`},children:e.jsx(y,{cardBadge:n})}),e.jsxs("div",{className:"description",children:[e.jsx("h5",{children:s}),e.jsx("p",{children:i})]})]}),C=({id:s,category:i,title:n,description:o,subTitle:f,image:x,img:j,weight:l,price:b,onBack:h})=>{const _=o||f||"",N=x||j||"",[c,d]=u.useState(0);u.useEffect(()=>{const t=JSON.parse(localStorage.getItem("cart")||"[]").find(r=>r.id===s);d(t?t.count:0)},[s]);const m=a=>{let t=JSON.parse(localStorage.getItem("cart")||"[]");const r=t.find(p=>p.id===s);r?a<=0?t=t.filter(p=>p.id!==s):r.count=a:t.push({id:s,title:n,image:x,weight:l,price:b,count:a}),localStorage.setItem("cart",JSON.stringify(t)),d(a>0?a:0)};return e.jsxs("div",{className:"menu-card",children:[e.jsx("div",{className:"menu",children:i&&e.jsxs("p",{className:"menu-card__category",onClick:h,style:{cursor:h?"pointer":"default"},children:["< ",i]})}),e.jsxs("div",{className:"menu",children:[e.jsx("div",{className:"menu-card__image",children:e.jsx("img",{src:N,alt:n})}),e.jsxs("div",{className:"menu-card__content",children:[e.jsxs("div",{className:"card__content_up",children:[e.jsx("h2",{className:"menu-card__title",children:n}),e.jsx("p",{className:"menu-card__description",children:_}),l&&e.jsx("p",{className:"menu-card__weight",children:l})]}),c===0?e.jsx("button",{className:"menu-card__button",onClick:()=>m(1),children:"Add to cart"}):e.jsxs("div",{className:"menu-card__counter",children:[e.jsx("button",{onClick:()=>m(c-1),children:"-"}),e.jsx("span",{children:c}),e.jsx("button",{onClick:()=>m(c+1),children:"+"})]})]})]})]})};export{C as M,M as a,y as b};
