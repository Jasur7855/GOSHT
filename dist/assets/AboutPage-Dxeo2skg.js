import{d as s,j as e}from"./ui-CuDAUpxO.js";import{G as h,M as p,u as g,v as m,w as x,H as u,L as o,k as f}from"./index-CAhg9aXq.js";import{S as b,G as i}from"./GoshtBadge-Dr9bQbbM.js";import{L as a}from"./react-BjlJThec.js";import"./form-BnEbJxh9.js";import"./redux-1Y8IFHhn.js";const j=s.main`
  padding: 0 ${t=>t.theme.padding.padding6024} calc(4.7vw + 34.4px);
  position: relative;
  padding-top: 96px;
  .bigBlack {
    position: absolute;
    z-index: 10;
    left: calc(5.3vw - 21.6px);
    top: -70px;
    width: calc(10.7vw + 60px);
    height: calc(10.7vw + 60px);
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: calc(2.4vw + 17px) 0;
    .formWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 42px 30px;
      .children {
        display: flex;
        flex-direction: column;
        gap: 12px;
        h4 {
          font-weight: 500 !important;
        }
        p {
          font-size: calc(0.9vw + 10.5px);
        }
      }
      .form {
        h4 {
          font-family: ${t=>t.theme.fontFamily.robotoSerif};
          margin-bottom: calc(0.8vw + 13.2px);
          font-weight: 500;
          min-height: 64px;
        }
        button {
          margin-left: auto;
          margin-top: 40px;
        }
      }
    }
  }
  @media (max-width: 1075px) {
    .bigBlack {
      top: -30px;
    }
    .wrapper {
      .formWrapper {
        grid-template-columns: 1fr;
        .form {
          button {
            width: 100%;
          }
        }
      }
    }
  }
`,v=s.section`
  height: calc(18.6vw + 79px);
  background-image: url(/img/aboutdesk.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: calc(1.5vw + 10.4px) 0;
  .footerSocial {
    display: flex;
    gap: 0 30px;
    margin-right: ${t=>t.theme.padding.padding6024};
    .social {
      padding: 12px 24px;
      border: 1px solid #cccccc80;
      border-radius: 4px;
      color: white;
      font-size: 24px;
    }
  }
`,w=s.section`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: calc(2.8vw + 31.4px) 0;
  .children {
    h3 {
      margin-bottom: 12px;
      font-weight:600;
    }
    p {
      font-size: 16px;
      font-family: ${t=>t.theme.fontFamily.roboto};
      line-height: 120%;
    }
  }
  @media (max-width: 975px) {
    flex-direction: column;
  }
`,k=s.section`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: calc(0.9vw + 38.5px);
  .img {
    width: calc(18vw + 260px);
    img {
      width: 100%;
    }
  }
  .text {
    h3 {
      margin-bottom: 12px;
    }
    p {
      font-size: calc(0.9vw + 10.5px);
      font-family: ${t=>t.theme.fontFamily.roboto};
      line-height: 120%;
      width: calc(30vw + 214px);
    }
  }
  @media (max-width: 975px) {
    flex-direction: column;
  }
`;function y(t){return h({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"},child:[]}]})(t)}const n=({title:t,instagram:r,paragraph:l,bgImg:c,img:d})=>e.jsxs(b,{$bgImg:c,children:[e.jsx("img",{src:d,alt:"goshtKids",className:"goshtKids"}),e.jsxs("div",{className:"instagram",children:[e.jsx(p,{}),e.jsx("span",{children:r})]}),e.jsxs("div",{className:"kidsText",children:[e.jsx("h5",{children:t}),e.jsx("p",{children:l})]})]}),L=()=>{const t=g();return e.jsxs("div",{children:[e.jsx(v,{children:e.jsxs("div",{className:"footerSocial",children:[e.jsx(a,{to:"#",className:"social",children:e.jsx(m,{})}),e.jsx(a,{to:"#",className:"social",children:e.jsx(y,{})}),e.jsx(a,{to:"#",className:"social",children:e.jsx(x,{})})]})}),e.jsxs(j,{children:[e.jsx("img",{src:"/icons/BigBlackgosht.svg",className:"bigBlack",alt:""}),e.jsx("img",{src:"/img/aboutGosht.png",alt:""}),e.jsxs(w,{children:[e.jsx(i,{badgeLogo:"/icons/BlackGosht.svg",title:"Gōsht Group",subTitle:"3215 Coney Island Avenue, Brooklyn, NY 11235",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"About Gōsht"}),e.jsx("p",{children:"Our Gosht restaurant chain boasts 3 locations in Uzbekistan, 1 in Brooklyn, and another opening soon in Manhattan. We take pride in offering our guests unforgettable experiences and impeccable service at each of our establishments."})]})}),e.jsx(i,{badgeLogo:"/icons/BlackGosht.svg",title:"Gōsht Group",subTitle:"3215 Coney Island Avenue, Brooklyn, NY 11235",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Fast-food"}),e.jsx("p",{children:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent, and Doner by Gosht with 9 outlets across Uzbekistan. Gosht City offers fast food in Brooklyn, with 2 more locations currently under construction."})]})})]}),e.jsxs(k,{children:[e.jsx("div",{className:"img",children:e.jsx("img",{src:"/img/Lavka.png",alt:""})}),e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:"Lavka by Gōsht"}),e.jsx("p",{children:"Lavka by Gosht is a hub and retail market for semi-prepared halal meat products, providing high-quality goods for discerning palates."})]})]}),e.jsxs("div",{className:"wrapper ",children:[e.jsx(i,{badgeLogo:"/icons/KidsGosht.svg",title:"Gōsht Kids",subTitle:"We are waiting for all the little ones!",children:e.jsx(n,{bgImg:"/img/Kids2.png",instagram:"Open instagram",paragraph:`Is an interactive children's restaurant within Gosht\r
                    establishments, where kids can enjoy delicious meals and\r
                    entertainment.`,img:"/icons/goshtKids.svg",title:"Gōsht Kids"})}),e.jsx(i,{badgeLogo:"/icons/Topor.svg",title:"Topor Barbershop",subTitle:"The best solution for men",children:e.jsx(n,{bgImg:"/img/toporBG.png",instagram:"Open instagram",paragraph:`The Topor hair salon chain spans the globe,\r
              offering top-notch grooming services.`,img:"/icons/toporImg.svg",title:"Topor Barbershop"})}),e.jsxs("div",{className:"formWrapper",children:[e.jsx(i,{badgeLogo:"/icons/BlackGosht.svg",subTitle:"3215 Coney Island Avenue, Brooklyn, NY 11235",title:"Gōsht Group",children:e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"We are ❤️"}),e.jsx("p",{children:"These are just some of Gosht Group's projects and we continue to evolve and expand to delight our guests with new and unique offerings."}),e.jsx("p",{children:"Welcome to the world of Gosht Group, where we treat every guest with awe and deep respect!"})]})}),e.jsxs("div",{className:"form",children:[e.jsx(u,{text:"What you think about Gōsht group?",variant:"h4"}),e.jsx(o,{isError:!0,labelText:"First name",placeholder:"First name"}),e.jsx(o,{isError:!0,labelText:"Above opinion",isInput:!1,areaPlaceholder:"Above opinion"}),e.jsx(f,{text:"Send",typeButton:"submit",variant:"fill"})]})]})]})]})]})};export{L as default};
