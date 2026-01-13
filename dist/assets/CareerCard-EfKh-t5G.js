import{d as i,j as t}from"./ui-CuDAUpxO.js";import{H as l}from"./index-CTDS4Q3V.js";import{B as a}from"./Button-CFjc8JBQ.js";const m=i.main`
  .swiper {
    height: 100%;
  }

  .swiper-slide {
    height: 100% !important;
    display: flex;
  }
  .bg_img {
    background-image: url(/img/carier.png);
    height: calc(39vw + 53.5px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px 0;
    .subTitle {
      padding: 4px 12px;
      background-color: ${e=>e.theme.colors.red};
      color: white;
      font-size: calc(0.6vw + 10px);
      font-family: ${e=>e.theme.fontFamily.roboto};
      border-radius: 4px;
    }
    h1 {
      color: white;
    }
    p {
      text-align: center;
      color: white;
      font-size: calc(0.4vw + 12.6px);
      font-family: ${e=>e.theme.fontFamily.roboto};
      line-height: 115%;
      font-weight: 300;
      width: calc(9.5vw + 292.4px);
    }
  }
  .mob {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px;
    gap: 20px 0;
    .subTitle {
      padding: 4px 12px;
      background-color: ${e=>e.theme.colors.red};
      color: white;
      font-size: calc(0.6vw + 10px);
      font-family: ${e=>e.theme.fontFamily.roboto};
      border-radius: 4px;
    }
    p {
      font-weight: 300;
      text-align: center;
      font-size: calc(0.4vw + 12.6px);
      font-family: ${e=>e.theme.fontFamily.roboto};
      width: calc(9.5vw + 292.4px);
    }
  }
  .main {
    border-radius: calc(3.2vw + 4px) calc(3.2vw + 4px) 0 0;
    padding: calc(5.5vw + 72.2px);
    margin-top: calc(-6.5vw + 33px);
    z-index: 30;
    background-color: white;
    position: relative;
    .gosht {
      width: calc(19.4vw - 87px);
      height: calc(19.4vw - 87px);
      position: absolute;
      top: calc(-7.5vw + 22.4px);
      left: 50%;
      transform: translate(-50%, 0);
    }
    h4 {
      text-align: center;
      font-weight: 600;
      margin-bottom: calc(1.9vw + 25px);
    }
  }
  .mainMob {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px 30px;
  }
  .sliderBtns {
    display: flex;
    margin-top: 42px;
    justify-content: space-between;
    button {
      width: 48px;
      height: 48px;
      border: 1px solid #0000004d;
      font-size: 12px;

      border-radius: 4px;
      background-repeat: no-repeat;
      background-position: center;
      background-color: #fff;
    }
    .left {
      background-image: url(/icons/arrLeft.svg);
    }
    .right {
      background-image: url(/icons/arrRight.svg);
    }
    svg {
      width: 48px;
      height: 48px;
      border: 1px solid black;
      font-size: 12px;
    }
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet-active {
    width: 12px;
    height: 12px;
    background: ${e=>e.theme.colors.red};
  }
  @media (max-width: 975px) {
    .main {
      margin-top: 60px;
      .gosht {
        width: 102px;
        height: 102px;
      }
    }
  }
  @media (max-width: 795px) {
    .main {
      border: 1px solid #00000033;
      border-radius: 16px;
      margin: 91px 24px;
      padding: 73px calc(19vw - 47.4px) 24px;
      .gosht {
        top: -52px;
      }
      .mainMob {
        grid-template-columns: 1fr;
        .cardBtns {
          flex-direction: column;
          button {
            width: 100%;
          }
        }
      }
    }
  }
`,c=i.div`
  min-height: calc(9.1vw + 529px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px 0;
  height: 100%;
  .img {
    border-radius: calc(0.2vw + 17.3px) calc(0.2vw + 17.3px) 0 0;
    margin-bottom: calc(1.4vw + 15.7px);
    height: calc(7.8vw + 152px);
  }
  h5 {
    border-left: 4px solid #aa181a;
    padding: 0 0 12px 12px;
    font-family: ${e=>e.theme.fontFamily.robotoSerif};
    font-weight: 500;
    margin-bottom: calc(0.7vw + 14.5px);
  }
  p {
    font-size: calc(0.2vw + 13.3px);
    line-height: 115%;
    font-family: ${e=>e.theme.fontFamily.roboto};
  }
  .experience {
    font-size: calc(0.2vw + 13.3px);
    line-height: 115%;
    font-family: ${e=>e.theme.fontFamily.roboto};
    font-weight: 500;
    span {
      font-weight: 400;
    }
  }
  .cardBtns {
    display: flex;
    gap: 12px;
    margin-top: calc(0.4vw + 30.6px);
  }
`,g=i.main`
  padding: calc(4.85vw + 2px) ${e=>e.theme.padding.padding6024}
    calc(4.9vw + 33.7px);
  a {
    display: flex;
    gap: 0 8px;
    align-items: center;
    color: #00000080;
    font-family: ${e=>e.theme.fontFamily.roboto};
    margin-bottom: 28px;
    img {
      width: 8px;
      height: 12px;
      color: #b9bcbb;
    }
  }
  .mainWrapper {
    display: grid;
    grid-template-columns: 38fr 62fr;
    gap: 0 30px;
    .left {
      padding: calc(2.1vw + 77px) calc(1.9vw + 17px) calc(1.9vw + 17px);
      border: 1px solid #00000033;
      border-radius: calc(0.8vw + 13.2px);
      margin-top: 96px;
      position: relative;
      .careerCard {
        min-height: auto;
      }
      .logo {
        position: absolute;
        width: calc(2.3vw + 93.5px);
        height: calc(2.3vw + 93.5px);
        left: 50%;
        transform: translate(-50%);
        top: calc(-1.1vw - 46.7px);
      }
    }
    .right {
      h5 {
        padding-left: 10px;
        border-left: 4px solid ${e=>e.theme.colors.red};
        font-family: ${e=>e.theme.fontFamily.robotoSerif};
        margin-bottom: 25px;
      }
      p {
        margin-bottom: 36px;
        font-size: calc(0.2vw + 13.3px);
        font-family: ${e=>e.theme.fontFamily.roboto};
        line-height: 18px;
      }
      .last {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 975px) {
    .mainWrapper {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`,h=({title:e,cardText:o,cardExperience:r,cardPay:n,cardImg:p})=>t.jsxs(c,{className:"careerCard",children:[t.jsxs("div",{children:[t.jsx("img",{src:p,alt:"",className:"img"}),t.jsx(l,{text:e,variant:"h5"}),t.jsx("p",{children:o})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"experience",children:["Experience: ",t.jsx("span",{children:r})]}),t.jsxs("div",{className:"experience",children:["Pay: ",t.jsx("span",{children:n})]}),t.jsxs("div",{className:"cardBtns",children:[t.jsx(a,{btnLink:"#",text:"Apply for",typeButton:"button",variant:"fill"}),t.jsx(a,{btnLink:"/career-more-page",text:"Find out more",typeButton:"button",variant:"outlined"})]})]})]});export{h as C,m as S,g as a};
