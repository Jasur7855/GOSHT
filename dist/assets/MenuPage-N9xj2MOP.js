import{d as g,j as t}from"./ui-CuDAUpxO.js";import{a as l,L as j,k as v}from"./react-BjlJThec.js";import{u as y,H as b,D as w}from"./index-BG2w4uWu.js";import{M as k}from"./MenuCard-De_ftmjg.js";import"./form-BnEbJxh9.js";import"./redux-1Y8IFHhn.js";const _=g.section`
  padding: calc(2.3vw + 31.5px) ${a=>a.theme.padding.padding6024}
    calc(15.8vw - 7.2px);
  display: flex;
  gap: 0 135px;
  @media (max-width: 975px) {
    flex-direction: column;
  }
`,S=g.aside`
  .dev {
    width: calc(7.3vw + 300px);
    h6 {
      padding-bottom: 6px;
      border-bottom: 1px solid #b9bcbb;
    }

    nav {
      margin-top: 24px;

      ul {
        li {
          position: relative; /* Добавляем relative для правильного позиционирования */
          transition: all.3s;
          a {
            display: inline-block;
            position: relative;
            padding: 12px 24px;
            font-size: 24px;
            font-family: ${a=>a.theme.fontFamily.robotoSerif};
          }
        }

        li::after {
          /* Исправляем селектор, убираем пробел */
          content: "";
          background-image: url(/icons/starRed.svg);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 26px;
          height: 26px;
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.3s ease-in-out; /* Добавляем плавное появление */
        }

        li:hover::after {
          opacity: 1;
        }
        li:hover {
          transform: translateX(10px);
          a {
            color: #aa181a;
          }
        }
      }
    }
  }

  .dropDown {
    width: 405px;

    h5 {
      font-size: 16px !important;
      font-weight: 400;
      color: black;
      border-bottom: 1px solid #b9bcbb;
    }

    font-family: ${a=>a.theme.fontFamily.robotoSerif};

    ul {
      a {
        color: black;
        transition: all 0.2s ease-in-out;
      }
      a::after {
        /* Исправляем селектор, убираем пробел */
        content: "";
        background-image: url(/icons/starRed.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 16px;
        height: 16px;
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        
      }

      a:hover::after {
        opacity: 1;
      }
      a:hover {
        transform: translateX(10px);

        color: #aa181a;
      }
    }
  }
  @media (max-width: 975px) {
    .dropDown {
      width: 100%;
    }
  }
`,M=g.main`
  h4 {
    margin-bottom: calc(0.4vw + 4.6px);
    font-family: ${a=>a.theme.fontFamily.robotoSerif};
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    max-width: 375px;
    font-family: ${a=>a.theme.fontFamily.roboto};
    color: #b9bcbb;
    margin-bottom: calc(0.6vw + 24px);
  }
  .menuWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 36px 30px;
  }
  @media (max-width: 1190px) {
    .menuWrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 975px) {
    .menuWrapper {
      grid-template-columns: 1fr;
    }
  }
`,N=()=>{const a=y(),[o,r]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const e=await fetch("https://gosht.ddmedia.uz/categories",{});if(!e.ok)throw new Error(`Ошибка: ${e.status} ${e.statusText}`);const s=await e.json();console.log(s),r(s)}catch(e){console.error("Ошибка загрузки меню:",e)}})()},[]),t.jsx(S,{children:a?t.jsx(w,{btnText:"Menu",menuElems:o}):t.jsxs("div",{className:"dev",children:[t.jsx(b,{variant:"h6",text:"Menu"}),t.jsx("nav",{children:t.jsx("ul",{children:o.map((n,e)=>t.jsx("li",{children:t.jsx(j,{to:"/menu-page/"+n.link,children:n.text})},e))})})]})})},$=({id:a,category:o,title:r,description:n,image:e,weight:s,price:c,onBack:p})=>{const[m,x]=l.useState(0);l.useEffect(()=>{const i=JSON.parse(localStorage.getItem("cart")||"[]").find(u=>u.id===a);x(i?i.count:0)},[a]);const h=d=>{let i=JSON.parse(localStorage.getItem("cart")||"[]");const u=i.find(f=>f.id===a);u?d<=0?i=i.filter(f=>f.id!==a):u.count=d:i.push({id:a,title:r,image:e,weight:s,price:c,count:d}),localStorage.setItem("cart",JSON.stringify(i)),x(d>0?d:0)};return t.jsxs("div",{className:"menu-card",children:[t.jsx("div",{className:"menu",children:o&&t.jsxs("p",{className:"menu-card__category",onClick:p,style:{cursor:p?"pointer":"default"},children:["< ",o]})}),t.jsxs("div",{className:"menu",children:[t.jsx("div",{className:"menu-card__image",children:t.jsx("img",{src:e,alt:r})}),t.jsxs("div",{className:"menu-card__content",children:[t.jsxs("div",{className:"card__content_up",children:[t.jsx("h2",{className:"menu-card__title",children:r}),t.jsx("p",{className:"menu-card__description",children:n}),s&&t.jsx("p",{className:"menu-card__weight",children:s})]}),m===0?t.jsx("button",{className:"menu-card__button",onClick:()=>h(1),children:"Add to cart"}):t.jsxs("div",{className:"menu-card__counter",children:[t.jsx("button",{onClick:()=>h(m-1),children:"-"}),t.jsx("span",{children:m}),t.jsx("button",{onClick:()=>h(m+1),children:"+"})]})]})]})]})},C=({name:a,description:o,link:r,menu:n})=>{const[e,s]=l.useState(null);return t.jsx("div",{children:e?t.jsx($,{category:e.category,title:e.title,id:e.id,price:e.price,description:e.subTitle||"",image:e.img,weight:e.weight,onAddToCart:()=>alert("Added to cart!"),onBack:()=>s(null)}):t.jsxs(M,{children:[t.jsx(b,{variant:"h4",text:a.toUpperCase()}),t.jsx("p",{children:"Served with roasted garlic and cherry tomatoes Certified Halal meat from local butchers"}),t.jsx("div",{className:"menuWrapper",children:n.map((c,p)=>t.jsx("div",{onClick:()=>s(c),style:{cursor:"pointer"},children:t.jsx(k,{cardBadge:c.badge,cardSubtitle:c.subTitle,cardTitle:c.title,cardImg:c.img})},p))})]})})},F=({})=>{const[a,o]=l.useState([]),r=v();return l.useEffect(()=>{const n=async()=>{try{const e=await fetch("https://gosht.ddmedia.uz/menu?cat_id="+r.id,{});if(!e.ok)throw new Error(`Ошибка: ${e.status} ${e.statusText}`);const s=await e.json();console.log(s),o(s)}catch(e){console.error("Ошибка загрузки меню:",e)}};r.id&&n()},[r.id]),t.jsxs(_,{children:[t.jsx(N,{}),t.jsx(C,{link:r.id,menu:a,name:r.id})]})};export{F as default};
