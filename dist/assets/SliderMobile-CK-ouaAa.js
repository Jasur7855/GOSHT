import{d as s,j as t}from"./ui-CuDAUpxO.js";import{S as l,N as c,P as p,A as d,a as x}from"./a11y-EIo1Ei7w.js";import{B as m}from"./Button-CeuTwMP2.js";import{I as g,a as u,H as f,k as w}from"./index-tvYd8JBS.js";import{a as b}from"./react-BjlJThec.js";const j=s.div`
  .sliderBtns button {
    &:hover {
      background-color: gray !important;
      border: none !important;
    }
  }
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
        background-color: gray !important;
        border: none !important;
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
    text-transform: uppercase;
    font-family: ${e=>e.theme.fontFamily.roboto};
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
      background-color: ${e=>e.theme.colors.red};
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
      font-family: ${e=>e.theme.fontFamily.roboto};
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
        background-color: gray !important;
        border: none !important;
      }
    }
  }
`,y=({buttonText:e,description:a,tagText:o,title:r,onClick:i})=>t.jsx(t.Fragment,{children:t.jsxs(k,{className:"left",children:[t.jsx("span",{className:"tag",children:o}),t.jsx("h1",{className:"title",children:r}),t.jsx("p",{className:"description",children:a}),t.jsx(m,{btnLink:"#",typeButton:"button",text:e,variant:"fill",onClick:i})]})}),C=({data:e,sliderForm:a,btnClick:o})=>{const[r,i]=b.useState(null);return t.jsxs(j,{children:[t.jsxs(l,{modules:[c,p,d],slidesPerView:1,pagination:{clickable:!0},onSwiper:n=>i(n),children:[e.map((n,h)=>t.jsx(x,{style:{backgroundImage:`url(${n.backgroundImage})`},children:t.jsx(y,{tagText:n.tagText,title:n.title,description:n.description,buttonText:n.buttonText,onClick:o})},h)),t.jsxs("div",{className:"sliderBtns",children:[t.jsx("button",{className:"arrBtn",onClick:()=>r==null?void 0:r.slidePrev(),children:t.jsx(g,{})}),t.jsx("button",{className:"arrBtn",onClick:()=>r==null?void 0:r.slideNext(),children:t.jsx(u,{})})]})]}),a]})},T=({data:e,btnClick:a})=>{const[o,r]=b.useState(null);return t.jsx(v,{children:t.jsxs(l,{modules:[c,p,d],slidesPerView:1,pagination:{clickable:!0},onSwiper:i=>r(i),children:[e.map(i=>t.jsxs(x,{children:[t.jsx("div",{className:"sliderImg",style:{backgroundImage:`url(${i.backgroundImage})`}}),t.jsxs("div",{className:"sliderText",children:[t.jsx("span",{className:"tag",children:i.tagText}),t.jsx(f,{variant:"h1",text:i.title}),t.jsx("p",{children:i.description}),t.jsx(w,{typeButton:"button",text:i.buttonText,variant:"fill",onClick:a})]})]})),t.jsxs("div",{className:"sliderBtns",children:[t.jsx("button",{className:"arrBtn",onClick:()=>o==null?void 0:o.slidePrev(),children:t.jsx(g,{})}),t.jsx("button",{className:"arrBtn",onClick:()=>o==null?void 0:o.slideNext(),children:t.jsx(u,{})})]})]})})};export{v as S,C as a,T as b};
