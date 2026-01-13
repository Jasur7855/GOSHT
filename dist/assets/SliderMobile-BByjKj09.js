import{d as s,j as t}from"./ui-CuDAUpxO.js";import{S as l,N as c,P as p,A as d,a as x}from"./a11y-EIo1Ei7w.js";import{B as m}from"./Button-CFjc8JBQ.js";import{I as g,a as u,H as w,k as f}from"./index-CTDS4Q3V.js";import{a as h}from"./react-BjlJThec.js";const j=s.div`
  position: relative;
  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 70px;
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      width: 12px;
      height: 12px;
    }
  }

  .swiper {
    width: 100% !important;
    height: calc(10.2vw + 337px);

    .swiper-wrapper {
      .swiper-slide {
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 113px calc(3.4vw + 11.3px) calc(3.4vw + 11.3px);
      }
    }
  }

  .sliderBtns {
    position: absolute !important;
    z-index: 10;
    right: 56px;
    bottom: 60px;
    display: flex;
    gap: 20px;

    button {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #cccccc80;
      background-color: transparent;
      color: white;
      font-size: 24px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .swiper-pagination-bullet {
    background: white;
  }
`,k=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  .tag {
    width: fit-content;
    color: white;
    background-color: #aa181acc;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: calc(0.4vw + 10.6px);
  }

  .title {
    font-family: "Roboto Serif";
    line-height: 110%;
    color: white;
  }

  .description {
    font-family: "Roboto";
    font-size: calc(0.4vw + 12.6px);
    font-weight: 300x;
    line-height: 22px;
    color: white;
    max-width: 400px;
  }
`,v=s.div`
  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .swiper-pagination-bullet-active {
      width: 12px;
      height: 12px;
      background-color: black;
    }
  }

  .sliderImg {
    background-image: url(/img/Main.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(50vw + 12.5px);
    margin-bottom: 20px;
  }
  .sliderText {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    margin-bottom: 20px;
    .tag {
      color: white;
      background-color: ${n=>n.theme.colors.red};
      padding: 4px 12px;
      border-radius: 4px;
      font-size: calc(0.4vw + 10.6px);
      text-transform: uppercase;
      width: fit-content;
      text-align: center;
    }
    h1 {
    }
    p {
      font-family: ${n=>n.theme.fontFamily.roboto};
      font-size: calc(0.4vw + 12.6px);
      font-weight: 300;
      line-height: 114%;
    }
    button {
      width: 100%;
    }
  }
  .sliderBtns {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;

    button {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #0000004d;
      background-color: transparent;
      color: #0000004d;
      font-size: 24px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`,y=({buttonText:n,description:a,tagText:i,title:o,onClick:e})=>t.jsx(t.Fragment,{children:t.jsxs(k,{className:"left",children:[t.jsx("span",{className:"tag",children:i}),t.jsx("h1",{className:"title",children:o}),t.jsx("p",{className:"description",children:a}),t.jsx(m,{btnLink:"#",typeButton:"button",text:n,variant:"fill",onClick:e})]})}),C=({data:n,sliderForm:a,btnClick:i})=>{const[o,e]=h.useState(null);return t.jsxs(j,{children:[t.jsxs(l,{modules:[c,p,d],slidesPerView:1,pagination:{clickable:!0},onSwiper:r=>e(r),children:[n.map((r,b)=>t.jsx(x,{style:{backgroundImage:`url(${r.backgroundImage})`},children:t.jsx(y,{tagText:r.tagText,title:r.title,description:r.description,buttonText:r.buttonText,onClick:i})},b)),t.jsxs("div",{className:"sliderBtns",children:[t.jsx("button",{className:"arrBtn",onClick:()=>o==null?void 0:o.slidePrev(),children:t.jsx(g,{})}),t.jsx("button",{className:"arrBtn",onClick:()=>o==null?void 0:o.slideNext(),children:t.jsx(u,{})})]})]}),a]})},T=({data:n,btnClick:a})=>{const[i,o]=h.useState(null);return t.jsx(v,{children:t.jsxs(l,{modules:[c,p,d],slidesPerView:1,pagination:{clickable:!0},onSwiper:e=>o(e),children:[n.map(e=>t.jsxs(x,{children:[t.jsx("div",{className:"sliderImg",style:{backgroundImage:`url(${e.backgroundImage})`}}),t.jsxs("div",{className:"sliderText",children:[t.jsx("span",{className:"tag",children:e.tagText}),t.jsx(w,{variant:"h1",text:e.title}),t.jsx("p",{children:e.description}),t.jsx(f,{typeButton:"button",text:e.buttonText,variant:"fill",onClick:a})]})]})),t.jsxs("div",{className:"sliderBtns",children:[t.jsx("button",{className:"arrBtn",onClick:()=>i==null?void 0:i.slidePrev(),children:t.jsx(g,{})}),t.jsx("button",{className:"arrBtn",onClick:()=>i==null?void 0:i.slideNext(),children:t.jsx(u,{})})]})]})})};export{v as S,C as a,T as b};
