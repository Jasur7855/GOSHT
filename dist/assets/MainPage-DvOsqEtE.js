import{d as K,j as e}from"./ui-CuDAUpxO.js";import{M as ie,a as ae,b as se}from"./MenuItemCard-s6kUVJ--.js";import{G as ne,F as l,I as oe,a as re,u as le,b as de,c as ce,d as pe,e as ge,f as me,g as xe,H as E,M as he,R as ue,h as fe}from"./index-D542ga8I.js";import{S as je,a as we,b as be}from"./SliderMobile-rcuCwzlY.js";import{B as Q}from"./Button-BoGE5aUA.js";import{G as u}from"./GoshtBadge-B5hgjuZN.js";import{E as ve}from"./EventsSection-BdDqA1o3.js";import{S as ye,N as ke,A as Me,P as Se,a as R}from"./a11y-EIo1Ei7w.js";import{a as o}from"./react-BjlJThec.js";import"./form-BnEbJxh9.js";import"./redux-1Y8IFHhn.js";import"./swiper-Cl-SL7yl.js";const Ne=K.div`
  .menuInfo {
    margin: 0 ${i=>i.theme.padding.padding6024};
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
          font-family: ${i=>i.theme.fontFamily.roboto};
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
    padding: 60px ${i=>i.theme.padding.padding6024};
    grid-template-columns: repeat(4, 1fr);
    gap: 36px 30px;
  }
  .allFood {
    padding: calc(1.9vw + 25px) ${i=>i.theme.padding.padding6024};
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
        font-family: ${i=>i.theme.fontFamily.roboto};
      }
    }
  }
  .aboutGosht {
    padding: 0 ${i=>i.theme.padding.padding6024}
      calc(0.9vw + 38.5px);
    display: flex;
    flex-direction: column;
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
          object-fit: contain;
          right: 0;
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
            font-family: ${i=>i.theme.fontFamily.robotoSerif};
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
            font-family: ${i=>i.theme.fontFamily.roboto};
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
   .fill{
    margin: 36px auto 0;
   }
    span {
      font-size: calc(0.4vw + 14.6px);
      color: ${i=>i.theme.colors.red};
      font-family: ${i=>i.theme.fontFamily.roboto};
      display: block;
      text-align: center;
      margin-bottom: calc(0.3vw + 12px);
    }
    h4 {
      text-align: center;
      font-weight: 500;
      font-family: ${i=>i.theme.fontFamily.robotoSerif};
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
      .sliderBtns {
        padding: 0 ${i=>i.theme.padding.padding6024};
        margin-top: 32px;
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
`,_e=K.div`
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
      font-family: ${i=>i.theme.fontFamily.roboto};
      font-weight: 500;
      margin-bottom: 8px;
    }
    .stars {
      margin: 0 auto 16px;
      padding: 0;
    }
    p {
      font-family: ${i=>i.theme.fontFamily.roboto};
      font-size: calc(0.4vw + 12.6px);
      text-align: center;
    }
  }
`;function Le(i){return ne({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(i)}const d=({title:i,description:s})=>e.jsxs(_e,{children:[e.jsx("img",{src:"/icons/mainCardImg.svg",alt:"ladyBag",className:"img"}),e.jsxs("div",{className:"content",children:[e.jsx("h3",{children:i}),e.jsxs("div",{className:"stars",children:[e.jsx(l,{style:{color:"#AA181A"}}),e.jsx(l,{style:{color:"#AA181A"}}),e.jsx(l,{style:{color:"#AA181A"}}),e.jsx(l,{style:{color:"#AA181A"}}),e.jsx(Le,{})]}),e.jsx("p",{children:s})]})]}),H=({children:i,slidesPerView:s})=>e.jsx(je,{children:e.jsxs(ye,{modules:[ke,Me,Se],slidesPerView:s,spaceBetween:10,centeredSlides:!0,pagination:{clickable:!0},navigation:{nextEl:".next-btn",prevEl:".prev-btn"},initialSlide:1,children:[i,e.jsxs("div",{className:"sliderBtns",children:[e.jsx("button",{className:"arrBtn prev-btn",children:e.jsx(oe,{})}),e.jsx("button",{className:"arrBtn next-btn",children:e.jsx(re,{})})]})]})}),Pe=({isOpen:i,onClose:s,menuItem:a})=>!i||!a?null:e.jsx("div",{className:"menu-item-modal-overlay",onClick:s,children:e.jsxs("div",{className:"menu-item-modal-content",onClick:c=>c.stopPropagation(),children:[e.jsx("button",{className:"menu-item-modal-close",onClick:s,children:"×"}),e.jsx(ie,{id:a.id,category:a.category,title:a.title,subTitle:a.subTitle,img:a.img,price:a.price})]})}),W=[{id:1,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:2,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:3,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:4,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:5,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"}],Re=({})=>{const i=le(975),[s,a]=o.useState(null),[c,f]=o.useState(!1),[D,j]=o.useState(!1),{data:p,isLoading:V}=de(),{data:g,isLoading:Z}=ce(),{data:m,isLoading:X}=pe(),{data:x,isLoading:q}=ge(),{data:h,isLoading:J}=me(),{data:w,isLoading:U}=xe(),b=o.useMemo(()=>p?p.filter(t=>t.is_visible).map(t=>({id:t.id,tagText:t.tag_text,title:t.main_text,description:t.description,buttonText:t.button_enabled?t.button_text:"",backgroundImage:`https://new.gosht.com${t.background_image}`,buttonLink:t.button_link})):[],[p]),Y=o.useMemo(()=>g?g.filter(t=>t.is_visible):[],[g]),ee=t=>{if(!w)return;const n=w.find(r=>r.title.toLowerCase()===t.toLowerCase());n&&(a(n),f(!0))},te=()=>{f(!1),a(null)};return V||Z||X||q||J||U?e.jsx("div",{children:"Loading..."}):e.jsxs(Ne,{children:[!i&&e.jsx(we,{btnClick:()=>{},data:b}),i&&e.jsx(be,{data:b}),e.jsxs("div",{className:"adaptive",children:[e.jsx("section",{className:"menuInfo container",children:e.jsxs("div",{className:"bgImg container",children:[e.jsx("img",{src:"/img/burger4.png",className:"burger"}),m==null?void 0:m.map(t=>e.jsxs("div",{className:t.type==="second"?"center":"",children:[e.jsxs("h6",{children:[e.jsx("img",{src:"/icons/starWhite.svg",alt:""}),t.title]}),e.jsx("p",{children:t.description})]},t.type))]})}),e.jsx("section",{className:"mainMenu container",children:Y.map(t=>{var n;return e.jsx("div",{onClick:()=>ee(t.main_text),style:{cursor:"pointer"},children:e.jsx(ae,{cardBadge:(n=t.tag_icon_url)!=null&&n[0]?`https://new.gosht.com${t.tag_icon_url[0]}`:"/icons/badge.svg",cardSubtitle:t.description,cardTitle:t.main_text,cardImg:t.image?`https://new.gosht.com${t.image}`:"/img/placeholder.png"})},t.id)})}),x==null?void 0:x.map(t=>e.jsxs("section",{className:"allFood container",children:[e.jsxs("div",{className:"allFoodImg",children:[t.tag_icon_url[0]&&e.jsx(se,{cardBadge:`https://new.gosht.com${t.tag_icon_url[0]}`,badgeText:t.tag_text}),t.image&&e.jsx("img",{src:`https://new.gosht.com${t.image}`,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"}})]}),e.jsxs("div",{className:"allFoodText",children:[e.jsx(E,{text:t.title,variant:"h4"}),e.jsx("p",{children:t.description}),t.button_enabled&&e.jsx(Q,{btnLink:t.button_link,text:t.button_text,typeButton:"button",variant:"outlined"})]})]},t.id)),h==null?void 0:h.map(t=>{var n,r,v,y,k,M,S,N,_,L,P,T,A,I,F,C,$,G,O,B,z;return e.jsxs("section",{className:"aboutGosht container",children:[e.jsxs("div",{style:{display:"flex",gap:"26px 31px"},children:[e.jsxs("div",{className:"restaurant",children:[e.jsx(u,{badgeLogo:((n=t.firstProject)==null?void 0:n.image)||"/img/placeholder.png",subTitle:((r=t.firstProject)==null?void 0:r.short_description)||"",title:((v=t.firstProject)==null?void 0:v.name)||"",children:e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:((k=(y=t.firstProject)==null?void 0:y.info_1)==null?void 0:k.title)||""}),e.jsx("p",{children:((S=(M=t.firstProject)==null?void 0:M.info_1)==null?void 0:S.description)||""})]})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:((_=(N=t.firstProject)==null?void 0:N.info_2)==null?void 0:_.title)||""}),e.jsx("p",{children:((P=(L=t.firstProject)==null?void 0:L.info_2)==null?void 0:P.description)||""})]})})]}),e.jsx("div",{className:"kidsWrapper",children:e.jsx(u,{badgeLogo:((T=t.secondProject)==null?void 0:T.image)||"/img/placeholder.png",title:((A=t.secondProject)==null?void 0:A.name)||"",subTitle:((I=t.secondProject)==null?void 0:I.short_description)||"",children:e.jsxs("div",{className:"kids",children:[((F=t.secondProject)==null?void 0:F.image)&&e.jsx("img",{src:t.secondProject.image,alt:((C=t.secondProject)==null?void 0:C.name)||"",className:"goshtKids"}),e.jsxs("div",{className:"instagram",children:[e.jsx(he,{}),e.jsx("a",{href:(($=t.secondProject)==null?void 0:$.info.button_link)||"#",children:e.jsx("span",{children:"Open instagram"})})]}),e.jsxs("div",{className:"kidsText",children:[e.jsx("h5",{children:((O=(G=t.secondProject)==null?void 0:G.info)==null?void 0:O.main_text)||""}),e.jsx("p",{children:((z=(B=t.secondProject)==null?void 0:B.info)==null?void 0:z.description)||""})]})]})})})]}),t.buttonEnabled&&e.jsx("div",{style:{display:"flex",justifyContent:"center",cursor:"pointer"},children:e.jsx(Q,{btnLink:t.buttonLink,text:t.buttonText,typeButton:"button",variant:"outlined"})})]},t.id)}),e.jsx(ve,{}),e.jsxs("section",{className:"clientSlider container",children:[e.jsx("span",{children:"Review"}),e.jsx(E,{text:`Don't believe me, check what Clients
think about us!`,variant:"h4"}),e.jsx(ue,{isOpen:D,onClose:()=>j(!1)}),e.jsx(fe,{typeButton:"button",text:"Leave a review",variant:"fill",onClick:()=>j(!0)}),i?e.jsx(H,{slidesPerView:1,children:W.map(t=>e.jsx(R,{children:e.jsxs("div",{className:"cardWrapper",children:[e.jsx(d,{title:t.title,description:t.description}),e.jsx(d,{title:t.title,description:t.description}),e.jsx(d,{title:t.title,description:t.description})]})},t.id))}):e.jsx("div",{className:"desktop",children:e.jsx(H,{slidesPerView:3,children:W.map(t=>e.jsx(R,{children:e.jsx(d,{title:t.title,description:t.description})},t.id))})})]})]}),e.jsx(Pe,{isOpen:c,onClose:te,menuItem:s})]})};export{Re as default};
