import{d,j as t}from"./ui-CuDAUpxO.js";import{a as c,L as m,k as x}from"./react-BjlJThec.js";import{u,H as l,D as h,g as f}from"./index-D7ge506g.js";import{M as g,a as b}from"./MenuItemCard-s6kUVJ--.js";import"./form-BnEbJxh9.js";import"./redux-1Y8IFHhn.js";const w=d.section`
  padding: calc(2.3vw + 31.5px) ${e=>e.theme.padding.padding6024}
    calc(15.8vw - 7.2px);
  display: flex;
  gap: 0 135px;
  @media (max-width: 975px) {
    flex-direction: column;
  }
`,v=d.aside`
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
            font-family: ${e=>e.theme.fontFamily.robotoSerif};
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

    font-family: ${e=>e.theme.fontFamily.robotoSerif};

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
`,y=d.main`
  h4 {
    margin-bottom: calc(0.4vw + 4.6px);
    font-family: ${e=>e.theme.fontFamily.robotoSerif};
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    max-width: 375px;
    font-family: ${e=>e.theme.fontFamily.roboto};
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
`,j=()=>{const e=u(),[o,s]=c.useState([]);return c.useEffect(()=>{(async()=>{try{const a=await fetch("https://new.gosht.com/api-back/categories",{});if(!a.ok)throw new Error(`Ошибка: ${a.status} ${a.statusText}`);const r=await a.json();console.log(r),s(r)}catch(a){console.error("Ошибка загрузки меню:",a)}})()},[]),t.jsx(v,{children:e?t.jsx(h,{btnText:"Menu",menuElems:o}):t.jsxs("div",{className:"dev",children:[t.jsx(l,{variant:"h6",text:"Menu"}),t.jsx("nav",{children:t.jsx("ul",{children:o.map((i,a)=>t.jsx("li",{children:t.jsx(m,{to:"/menu-page/"+i.link,children:i.text})},a))})})]})})},k=({name:e,description:o,link:s,menu:i})=>{const[a,r]=c.useState(null);return t.jsx("div",{children:a?t.jsx(g,{category:a.category,title:a.title,id:a.id,price:a.price,description:a.subTitle||"",image:a.img,weight:a.weight,onAddToCart:()=>alert("Added to cart!"),onBack:()=>r(null)}):t.jsxs(y,{children:[t.jsx(l,{variant:"h4",text:e.toUpperCase()}),t.jsx("p",{children:"Served with roasted garlic and cherry tomatoes Certified Halal meat from local butchers"}),t.jsx("div",{className:"menuWrapper",children:i.map((n,p)=>t.jsx("div",{onClick:()=>r(n),style:{cursor:"pointer"},children:t.jsx(b,{cardBadge:n.badge,cardSubtitle:n.subTitle,cardTitle:n.title,cardImg:n.img})},p))})]})})},z=({})=>{const e=x(),{data:o=[],isLoading:s}=f(e.id);return s?t.jsx("div",{children:"Loading..."}):t.jsxs(w,{children:[t.jsx(j,{}),t.jsx(k,{link:e.id,menu:o,name:e.id})]})};export{z as default};
