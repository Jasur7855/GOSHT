import{d as W,j as t}from"./ui-CuDAUpxO.js";import{M as Y,a as tt,b as et}from"./MenuItemCard-D7iSwY4P.js";import{G as it,F as r,I as at,a as st,u as nt,b as ot,c as rt,d as lt,e as dt,f as ct,g as pt,H as B,M as gt}from"./index-tvYd8JBS.js";import{S as mt,a as xt,b as ht}from"./SliderMobile-CK-ouaAa.js";import{B as u}from"./Button-CeuTwMP2.js";import{G as f}from"./GoshtBadge-BSVa4ERI.js";import{E as ut}from"./EventsSection-BBO1oUzm.js";import{S as ft,N as jt,A as wt,P as bt,a as E}from"./a11y-EIo1Ei7w.js";import{a as l}from"./react-BjlJThec.js";import"./form-BnEbJxh9.js";import"./redux-1Y8IFHhn.js";import"./swiper-Cl-SL7yl.js";const vt=W.div`
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
`,yt=W.div`
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
`;function kt(i){return it({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(i)}const d=({title:i,description:s})=>t.jsxs(yt,{children:[t.jsx("img",{src:"/icons/mainCardImg.svg",alt:"ladyBag",className:"img"}),t.jsxs("div",{className:"content",children:[t.jsx("h3",{children:i}),t.jsxs("div",{className:"stars",children:[t.jsx(r,{style:{color:"#AA181A"}}),t.jsx(r,{style:{color:"#AA181A"}}),t.jsx(r,{style:{color:"#AA181A"}}),t.jsx(r,{style:{color:"#AA181A"}}),t.jsx(kt,{})]}),t.jsx("p",{children:s})]})]}),Q=({children:i,slidesPerView:s})=>t.jsx(mt,{children:t.jsxs(ft,{modules:[jt,wt,bt],slidesPerView:s,spaceBetween:10,centeredSlides:!0,pagination:{clickable:!0},navigation:{nextEl:".next-btn",prevEl:".prev-btn"},initialSlide:1,children:[i,t.jsxs("div",{className:"sliderBtns",children:[t.jsx("button",{className:"arrBtn prev-btn",children:t.jsx(at,{})}),t.jsx("button",{className:"arrBtn next-btn",children:t.jsx(st,{})})]})]})}),_t=({isOpen:i,onClose:s,menuItem:a})=>!i||!a?null:t.jsx("div",{className:"menu-item-modal-overlay",onClick:s,children:t.jsxs("div",{className:"menu-item-modal-content",onClick:c=>c.stopPropagation(),children:[t.jsx("button",{className:"menu-item-modal-close",onClick:s,children:"×"}),t.jsx(Y,{id:a.id,category:a.category,title:a.title,subTitle:a.subTitle,img:a.img,price:a.price})]})}),H=[{id:1,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:2,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:3,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:4,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:5,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"}],zt=({})=>{const i=nt(975),[s,a]=l.useState(null),[c,j]=l.useState(!1),{data:p,isLoading:K}=ot(),{data:g,isLoading:D}=rt(),{data:m,isLoading:R}=lt(),{data:x,isLoading:V}=dt(),{data:h,isLoading:Z}=ct(),{data:w,isLoading:X}=pt(),b=l.useMemo(()=>p?p.filter(e=>e.is_visible).map(e=>({id:e.id,tagText:e.tag_text,title:e.main_text,description:e.description,buttonText:e.button_enabled?e.button_text:"",backgroundImage:`https://new.gosht.com${e.background_image}`,buttonLink:e.button_link})):[],[p]),q=l.useMemo(()=>g?g.filter(e=>e.is_visible):[],[g]),J=e=>{if(!w)return;const n=w.find(o=>o.title.toLowerCase()===e.toLowerCase());n&&(a(n),j(!0))},U=()=>{j(!1),a(null)};return K||D||R||V||Z||X?t.jsx("div",{children:"Loading..."}):t.jsxs(vt,{children:[!i&&t.jsx(xt,{btnClick:()=>{},data:b}),i&&t.jsx(ht,{data:b}),t.jsxs("div",{className:"adaptive",children:[t.jsx("section",{className:"menuInfo container",children:t.jsxs("div",{className:"bgImg container",children:[t.jsx("img",{src:"/img/burger4.png",className:"burger"}),m==null?void 0:m.map(e=>t.jsxs("div",{className:e.type==="second"?"center":"",children:[t.jsxs("h6",{children:[t.jsx("img",{src:"/icons/starWhite.svg",alt:""}),e.title]}),t.jsx("p",{children:e.description})]},e.type))]})}),t.jsx("section",{className:"mainMenu container",children:q.map(e=>{var n;return t.jsx("div",{onClick:()=>J(e.main_text),style:{cursor:"pointer"},children:t.jsx(tt,{cardBadge:(n=e.tag_icon_url)!=null&&n[0]?`https://new.gosht.com${e.tag_icon_url[0]}`:"/icons/badge.svg",cardSubtitle:e.description,cardTitle:e.main_text,cardImg:e.image?`https://new.gosht.com${e.image}`:"/img/placeholder.png"})},e.id)})}),x==null?void 0:x.map(e=>t.jsxs("section",{className:"allFood container",children:[t.jsxs("div",{className:"allFoodImg",children:[e.tag_icon_url[0]&&t.jsx(et,{cardBadge:`https://new.gosht.com${e.tag_icon_url[0]}`,badgeText:e.tag_text}),e.image&&t.jsx("img",{src:`https://new.gosht.com${e.image}`,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}})]}),t.jsxs("div",{className:"allFoodText",children:[t.jsx(B,{text:e.title,variant:"h4"}),t.jsx("p",{children:e.description}),e.button_enabled&&t.jsx(u,{btnLink:e.button_link,text:e.button_text,typeButton:"button",variant:"outlined"})]})]},e.id)),h==null?void 0:h.map(e=>{var n,o,v,y,k,_,M,S,N,L,T,A,I,F,$,C,G,P,z,O;return t.jsxs("section",{className:"aboutGosht container",children:[t.jsxs("div",{className:"restaurant",children:[t.jsx(f,{badgeLogo:(n=e.first_project)!=null&&n.image?`https://new.gosht.com${e.first_project.image}`:"/img/placeholder.png",subTitle:((o=e.first_project)==null?void 0:o.short_description)||"",title:((v=e.first_project)==null?void 0:v.name)||"",children:t.jsxs(t.Fragment,{children:[t.jsx("h5",{children:((k=(y=e.first_project)==null?void 0:y.info_1)==null?void 0:k.title)||""}),t.jsx("p",{children:((M=(_=e.first_project)==null?void 0:_.info_1)==null?void 0:M.description)||""})]})}),t.jsx(f,{children:t.jsxs(t.Fragment,{children:[t.jsx("h5",{children:((N=(S=e.first_project)==null?void 0:S.info_2)==null?void 0:N.title)||""}),t.jsx("p",{children:((T=(L=e.first_project)==null?void 0:L.info_2)==null?void 0:T.description)||""})]})})]}),t.jsxs("div",{className:"kidsWrapper",children:[t.jsx(f,{badgeLogo:(A=e.second_project)!=null&&A.image?`https://new.gosht.com${e.second_project.image}`:"/img/placeholder.png",title:((I=e.second_project)==null?void 0:I.name)||"",subTitle:((F=e.second_project)==null?void 0:F.short_description)||"",children:t.jsxs("div",{className:"kids",children:[(($=e.second_project)==null?void 0:$.image)&&t.jsx("img",{src:`https://new.gosht.com${e.second_project.image}`,alt:((C=e.second_project)==null?void 0:C.name)||"",className:"goshtKids"}),t.jsxs("div",{className:"instagram",children:[t.jsx(gt,{}),t.jsx("span",{children:"Open instagram"})]}),t.jsxs("div",{className:"kidsText",children:[t.jsx("h5",{children:((P=(G=e.second_project)==null?void 0:G.info_1)==null?void 0:P.title)||""}),t.jsx("p",{children:((O=(z=e.second_project)==null?void 0:z.info_1)==null?void 0:O.description)||""})]})]})}),e.button_enabled&&t.jsx(u,{btnLink:e.button_link,text:e.button_text,typeButton:"button",variant:"outlined"})]})]},e.id)}),t.jsx(ut,{className:"container"}),t.jsxs("section",{className:"clientSlider container",children:[t.jsx("span",{children:"Review"}),t.jsx(B,{text:`Don't believe me, check what Clients
think about us!`,variant:"h4"}),t.jsx(u,{typeButton:"button",text:"Leave a review",variant:"fill",btnLink:"#"}),i?t.jsx(Q,{slidesPerView:1,children:H.map(e=>t.jsx(E,{children:t.jsxs("div",{className:"cardWrapper",children:[t.jsx(d,{title:e.title,description:e.description}),t.jsx(d,{title:e.title,description:e.description}),t.jsx(d,{title:e.title,description:e.description})]})},e.id))}):t.jsx("div",{className:"desktop",children:t.jsx(Q,{slidesPerView:3,children:H.map(e=>t.jsx(E,{children:t.jsx(d,{title:e.title,description:e.description})},e.id))})})]})]}),t.jsx(_t,{isOpen:c,onClose:U,menuItem:s})]})};export{zt as default};
