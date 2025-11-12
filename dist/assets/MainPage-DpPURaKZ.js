import{d as m,j as e}from"./ui-CuDAUpxO.js";import{M as s,a as x}from"./MenuCard-De_ftmjg.js";import{G as u,F as o,I as b,a as f,u as w,H as d,M as v}from"./index-mQhs8PHY.js";import{S as j,a as y,b as k}from"./SliderMobile-DVdwi1GX.js";import{B as l}from"./Button-CyT3PzE-.js";import{G as r}from"./GoshtBadge-CSaQMghT.js";import{E as C}from"./EventsSection-CShxO92b.js";import{S,N as M,A as T,P as B,a as c}from"./a11y-EIo1Ei7w.js";import{L as i}from"./react-BjlJThec.js";import"./form-BnEbJxh9.js";import"./redux-1Y8IFHhn.js";import"./swiper-Cl-SL7yl.js";const I=m.div`
  .menuInfo {
    margin: 0 ${a=>a.theme.padding.padding6024};
    display: flex;
    align-items: flex-end;
    height: 190px;
    position: relative;
    .bgImg {
      width: 100%;
      background-color: #151515;
      border-radius: 8px;
      height: 142px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 52px;

      .burger {
        position: absolute;
        width: 396px;
        left: 0;
        bottom: 0;
      }
      div {
        h6 {
          color: #fff;
          margin-bottom: 10px;
          img {
            width: calc(0.9vw + 6.5px);
            height: calc(0.9vw + 6.5px);
            margin-right: 8px;
          }
        }
        p {
          font-size: 14px;
          color: #fff;
          font-family: ${a=>a.theme.fontFamily.roboto};
          font-weight: 300;
          max-width: 156px;
          line-height: 128%;
        }
      }
      .center {
        margin: 0 calc(5.1vw + 7px);
        padding: 0 calc(5.1vw + 7px);
        border-left: 1px solid #ffffff80;
        border-right: 1px solid #ffffff80;
      }
    }
  }
  .mainMenu {
    display: grid;
    padding: 60px ${a=>a.theme.padding.padding6024};
    grid-template-columns: repeat(5, 1fr);
    gap: 36px 30px;
  }
  .allFood {
    padding: calc(1.9vw + 25px) ${a=>a.theme.padding.padding6024};
    display: flex;
    align-items: center;

    gap: 20px 105px;
    .allFoodImg {
      background-image: url(/img/Allmenu.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 16px;
      width: calc(20vw + 252px);
      height: calc(11.5vw + 156.7px);
      border-radius: 8px;
    }
    .allFoodText {
      h4 {
        margin-bottom: 16px;
        font-weight: 500;
      }
      p {
        margin-bottom: 20px;
        max-width: calc(15.3vw + 269px);
        line-height: 125%;
        font-family: ${a=>a.theme.fontFamily.roboto};
      }
    }
  }
  .aboutGosht {
    padding: 0 ${a=>a.theme.padding.padding6024}
      calc(0.9vw + 38.5px);
    display: flex;
    gap: 26px 31px;

    .restaurant {
      width: calc(17.2vw + 262.6px);
      display: flex;
      flex-direction: column;
      gap: 24px 0;
    }
    .kidsWrapper {
      flex-grow: 1;
      .children {
        height: calc(-0.8vw + 333px);
        margin-bottom: calc(0.5vw + 23.23px);
      }
      .kids {
        position: relative;
        height: 100%;
        background-image: url(/img/Kids.png);
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        padding: calc(0.4vw + 35.6px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .goshtKids {
          position: absolute;
          top: 36px;
          right: 36px;
          width: 226px;
          height: 94px;
        }
        .instagram {
          border: 1px solid transparent;
          display: flex;
          width: fit-content;
          align-items: center;
          gap: 0 calc(-0.4vw + 13.4px);
          cursor: pointer;
          transition: border-bottom 0.5s;
          padding-bottom: 4px;
          svg {
            color: #fff;
          }
          span {
            font-family: ${a=>a.theme.fontFamily.robotoSerif};
            font-size: 16px;
            color: #fff;
            font-weight: 400;
          }
        }
        .kidsText {
          h5 {
            font-size: calc(0.2vw + 25.2px);
            color: #fff;
            margin-bottom: 12px;
          }
          p {
            max-width: calc(21.3vw + 150px);
            color: #fff;
            font-family: ${a=>a.theme.fontFamily.roboto};
            font-weight: 300;
            font-size: calc(0.2vw + 13.3px);
          }
        }
        .instagram:hover {
          border-bottom: 1px solid white;
        }
      }
    }
  }
  .eventsSection {
    h2 {
      display: none;
    }
    p {
      display: none;
    }
  }
  .clientSlider {
    margin-bottom: 52px;
    span {
      font-size: calc(0.4vw + 14.6px);
      color: ${a=>a.theme.colors.red};
      font-family: ${a=>a.theme.fontFamily.roboto};
      display: block;
      text-align: center;
      margin-bottom: calc(0.3vw + 12px);
    }
    h4 {
      text-align: center;
      font-weight: 500;
      font-family: ${a=>a.theme.fontFamily.robotoSerif};
    }
    .cardWrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px 30px;
      width: 90%;
      margin: 0 auto calc(1.5vw + 20.3px);
      min-height: 259px;
      padding-top: 40px;
    }
    .desktop{
      
      .swiper-wrapper{
        padding-top: 81px;
        height: 100%;
      }
    }
    }

  @media (max-width: 1190px) {
    .mainMenu {
      grid-template-columns: repeat(4, 1fr);
    }
    .burger {
      display: none;
    }
    .aboutGosht {
      flex-direction: column;
      .restaurant {
        width: 100%;
      }
    }
  }
  @media (max-width: 975px) {
    .menuInfo {
      height: auto;
      padding: 42px 0;
      .bgImg {
        background-color: transparent;
        flex-direction: column;
        gap: 6px 0;
        height: auto;
        padding: 0;
        div,
        .center {
          background-color: #151515;
          width: 100%;
          border-radius: 6px;
          padding: 26px 16px;
          p {
            max-width: 100%;
          }
        }
      }
    }
    .mainMenu {
      grid-template-columns: 1fr 1fr;
      padding-top: 0;
    }
    .allFood {
      flex-direction: column;
      align-items: center;
      background-color: #aa181a14;
    }
    .goshtKids {
      display: none;
    }
  }
  @media (max-width: 575px) {
    .mainMenu {
      grid-template-columns: 1fr;
    }
  }
`,N=m.div`
  background-image: url(/icons/mainCardborder.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 390px;
  height: 218px;
  margin: 0 auto;
  position: relative;

  .img {
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    h3 {
      font-size: calc(0.2vw + 17.3px);
      text-align: center;
      font-family: ${a=>a.theme.fontFamily.roboto};
      font-weight: 500;
      margin-bottom: 8px;
    }
    .stars {
      margin: 0 auto 16px;
      padding: 0;
    }
    p {
      font-family: ${a=>a.theme.fontFamily.roboto};
      font-size: calc(0.4vw + 12.6px);
      text-align: center;
    }
  }
`;function A(a){return u({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(a)}const n=({title:a,description:t})=>e.jsxs(N,{children:[e.jsx("img",{src:"/icons/mainCardImg.svg",alt:"ladyBag",className:"img"}),e.jsxs("div",{className:"content",children:[e.jsx("h3",{children:a}),e.jsxs("div",{className:"stars",children:[e.jsx(o,{style:{color:"#AA181A"}}),e.jsx(o,{style:{color:"#AA181A"}}),e.jsx(o,{style:{color:"#AA181A"}}),e.jsx(o,{style:{color:"#AA181A"}}),e.jsx(A,{})]}),e.jsx("p",{children:t})]})]}),p=({children:a,slidesPerView:t})=>e.jsx(j,{children:e.jsxs(S,{modules:[M,T,B],slidesPerView:t,spaceBetween:10,centeredSlides:!0,pagination:{clickable:!0},navigation:{nextEl:".next-btn",prevEl:".prev-btn"},initialSlide:1,children:[a,e.jsxs("div",{className:"sliderBtns",children:[e.jsx("button",{className:"arrBtn prev-btn",children:e.jsx(b,{})}),e.jsx("button",{className:"arrBtn next-btn",children:e.jsx(f,{})})]})]})}),h=[{id:1,tagText:"NEW DISH",title:"Caesar",description:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",buttonText:"Order now",backgroundImage:"/img/Main.jpg"},{id:2,tagText:"NEW DISH",title:"Caesar",description:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",buttonText:"Order now",backgroundImage:"/img/Main.jpg"}],g=[{id:1,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:2,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:3,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:4,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:5,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"}],H=({})=>{const a=w(975);return e.jsxs(I,{children:[!a&&e.jsx(y,{btnClick:()=>{},data:h}),a&&e.jsx(k,{data:h}),e.jsxs("div",{className:"adaptive",children:[e.jsx("section",{className:"menuInfo container",children:e.jsxs("div",{className:"bgImg container",children:[e.jsx("img",{src:"/img/burger4.png",className:"burger"}),e.jsxs("div",{children:[e.jsxs("h6",{children:[e.jsx("img",{src:"/icons/starWhite.svg",alt:""}),"Fresh Food"]}),e.jsx("p",{children:"Food is not stored for extended periods of time"})]}),e.jsxs("div",{className:"center",children:[e.jsxs("h6",{children:[e.jsx("img",{src:"/icons/starWhite.svg",alt:""}),"Countless Choices"]}),e.jsx("p",{children:"A varied menu for every taste and budget"})]}),e.jsxs("div",{children:[e.jsxs("h6",{children:[e.jsx("img",{src:"/icons/starWhite.svg",alt:""}),"Online Payment"]}),e.jsx("p",{children:"Convenient pay in cash or online"})]})]})}),e.jsxs("section",{className:"mainMenu container",children:[e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})}),e.jsx(i,{to:"https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651",children:e.jsx(s,{cardBadge:"/icons/badge.svg",cardSubtitle:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg",cardTitle:"Греческий",cardImg:"/img/MenuCard.png"})})]}),e.jsxs("section",{className:"allFood container",children:[e.jsx("div",{className:"allFoodImg",children:e.jsx(x,{cardBadge:"/icons/badge.svg",badgeText:"Chief's choice!"})}),e.jsxs("div",{className:"allFoodText",children:[e.jsx(d,{text:"Our food and drink menu",variant:"h4"}),e.jsx("p",{children:"Discover a variety of flavours: from mouth-watering appetizers to gourmet meals. Each dish is prepared with love and attention to detail."}),e.jsx(l,{btnLink:"#",text:"View menu",typeButton:"button",variant:"outlined"})]})]}),e.jsxs("section",{className:"aboutGosht container",children:[e.jsxs("div",{className:"restaurant",children:[e.jsx(r,{badgeLogo:"/icons/RedGosht.svg",subTitle:"3215 Coney Island Avenue, Brooklyn, NY 11235",title:"Gōsht Group",children:e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"About Gōsht"}),e.jsx("p",{children:"The Gosht restaurant chain consists of 3 locations in Uzbekistan, 1 in Brooklyn and one more soon to open in Manhattan. We are proud to offer our guests an unforgettable experience and impeccable service in each of our establishments."})]})}),e.jsx(r,{children:e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"About Gōsht"}),e.jsx("p",{children:"The Gosht restaurant chain consists of 3 locations in Uzbekistan, 1 in Brooklyn and one more soon to open in Manhattan. We are proud to offer our guests an unforgettable experience and impeccable service in each of our establishments."})]})})]}),e.jsxs("div",{className:"kidsWrapper",children:[e.jsx(r,{badgeLogo:"/icons/KidsGosht.svg",title:"Gōsht Kids",subTitle:"Мы ждем всех самых маленьких!",children:e.jsxs("div",{className:"kids",children:[e.jsx("img",{src:"/icons/goshtKids.svg",alt:"goshtKids",className:"goshtKids"}),e.jsxs("div",{className:"instagram",children:[e.jsx(v,{}),e.jsx("span",{children:"Open instagram"})]}),e.jsxs("div",{className:"kidsText",children:[e.jsx("h5",{children:"Gōsht Kids"}),e.jsx("p",{children:"Is an interactive children's restaurant within Gosht establishments, where kids can enjoy delicious meals and entertainment."})]})]})}),e.jsx(l,{btnLink:"#",text:"Know more about us",typeButton:"button",variant:"outlined"})]})]}),e.jsx(C,{className:"container"}),e.jsxs("section",{className:"clientSlider container",children:[e.jsx("span",{children:"Review"}),e.jsx(d,{text:`Don’t believe me, check what Clients
think about us!`,variant:"h4"}),a?e.jsx(p,{slidesPerView:1,children:g.map(t=>e.jsx(c,{children:e.jsxs("div",{className:"cardWrapper",children:[e.jsx(n,{title:t.title,description:t.description}),e.jsx(n,{title:t.title,description:t.description}),e.jsx(n,{title:t.title,description:t.description})]})},t.id))}):e.jsx("div",{className:"desktop",children:e.jsx(p,{slidesPerView:3,children:g.map(t=>e.jsx(c,{children:e.jsx(n,{title:t.title,description:t.description})},t.id))})})]})]})]})};export{H as default};
