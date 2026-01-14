import{d as _,j as t}from"./ui-CuDAUpxO.js";import{M as G,a as P,b as z}from"./MenuItemCard-D7iSwY4P.js";import{G as B,F as n,I as O,a as E,u as Q,b as H,c as W,d as K,e as D,f as R,g as V,H as w,M as Z}from"./index-CvxQ4Acp.js";import{S as X,a as q,b as J}from"./SliderMobile-DvMlTmQy.js";import{B as b}from"./Button-CtIEnqjS.js";import{G as h}from"./GoshtBadge-BwK3AP9S.js";import{E as U}from"./EventsSection-iBnQOaOY.js";import{S as Y,N as tt,A as et,P as it,a as v}from"./a11y-EIo1Ei7w.js";import{a as o}from"./react-BjlJThec.js";import"./form-BnEbJxh9.js";import"./redux-1Y8IFHhn.js";import"./swiper-Cl-SL7yl.js";const st=_.div`
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
`,at=_.div`
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
`;function nt(i){return B({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(i)}const r=({title:i,description:a})=>t.jsxs(at,{children:[t.jsx("img",{src:"/icons/mainCardImg.svg",alt:"ladyBag",className:"img"}),t.jsxs("div",{className:"content",children:[t.jsx("h3",{children:i}),t.jsxs("div",{className:"stars",children:[t.jsx(n,{style:{color:"#AA181A"}}),t.jsx(n,{style:{color:"#AA181A"}}),t.jsx(n,{style:{color:"#AA181A"}}),t.jsx(n,{style:{color:"#AA181A"}}),t.jsx(nt,{})]}),t.jsx("p",{children:a})]})]}),y=({children:i,slidesPerView:a})=>t.jsx(X,{children:t.jsxs(Y,{modules:[tt,et,it],slidesPerView:a,spaceBetween:10,centeredSlides:!0,pagination:{clickable:!0},navigation:{nextEl:".next-btn",prevEl:".prev-btn"},initialSlide:1,children:[i,t.jsxs("div",{className:"sliderBtns",children:[t.jsx("button",{className:"arrBtn prev-btn",children:t.jsx(O,{})}),t.jsx("button",{className:"arrBtn next-btn",children:t.jsx(E,{})})]})]})}),ot=({isOpen:i,onClose:a,menuItem:s})=>!i||!s?null:t.jsx("div",{className:"menu-item-modal-overlay",onClick:a,children:t.jsxs("div",{className:"menu-item-modal-content",onClick:l=>l.stopPropagation(),children:[t.jsx("button",{className:"menu-item-modal-close",onClick:a,children:"×"}),t.jsx(G,{id:s.id,category:s.category,title:s.title,subTitle:s.subTitle,img:s.img,price:s.price})]})}),k=[{id:1,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:2,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:3,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:4,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"},{id:5,title:"Thomas Party",description:"Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent"}],wt=({})=>{const i=Q(975),[a,s]=o.useState(null),[l,u]=o.useState(!1),{data:d,isLoading:M}=H(),{data:c,isLoading:S}=W(),{data:p,isLoading:N}=K(),{data:m,isLoading:T}=D(),{data:g,isLoading:L}=R(),{data:f,isLoading:A}=V(),j=o.useMemo(()=>d?d.filter(e=>e.is_visible).map(e=>({id:e.id,tagText:e.tag_text,title:e.main_text,description:e.description,buttonText:e.button_enabled?e.button_text:"",backgroundImage:`https://new.gosht.com${e.background_image}`,buttonLink:e.button_link})):[],[d]),I=o.useMemo(()=>c?c.filter(e=>e.is_visible):[],[c]),F=e=>{if(!f)return;const x=f.find(C=>C.title.toLowerCase()===e.toLowerCase());x&&(s(x),u(!0))},$=()=>{u(!1),s(null)};return M||S||N||T||L||A?t.jsx("div",{children:"Loading..."}):t.jsxs(st,{children:[!i&&t.jsx(q,{btnClick:()=>{},data:j}),i&&t.jsx(J,{data:j}),t.jsxs("div",{className:"adaptive",children:[t.jsx("section",{className:"menuInfo container",children:t.jsxs("div",{className:"bgImg container",children:[t.jsx("img",{src:"/img/burger4.png",className:"burger"}),p==null?void 0:p.map((e,x)=>t.jsxs("div",{className:e.type==="second"?"center":"",children:[t.jsxs("h6",{children:[t.jsx("img",{src:"/icons/starWhite.svg",alt:""}),e.title]}),t.jsx("p",{children:e.description})]},e.type))]})}),t.jsx("section",{className:"mainMenu container",children:I.map(e=>t.jsx("div",{onClick:()=>F(e.main_text),style:{cursor:"pointer"},children:t.jsx(P,{cardBadge:e.tag_icon_url[0]?`https://new.gosht.com${e.tag_icon_url[0]}`:"/icons/badge.svg",cardSubtitle:e.description,cardTitle:e.main_text,cardImg:`https://new.gosht.com${e.image}`})},e.id))}),m==null?void 0:m.map(e=>t.jsxs("section",{className:"allFood container",children:[t.jsxs("div",{className:"allFoodImg",children:[e.tag_icon_url[0]&&t.jsx(z,{cardBadge:`https://new.gosht.com${e.tag_icon_url[0]}`,badgeText:e.tag_text}),t.jsx("img",{src:`https://new.gosht.com${e.image}`,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}})]}),t.jsxs("div",{className:"allFoodText",children:[t.jsx(w,{text:e.title,variant:"h4"}),t.jsx("p",{children:e.description}),e.button_enabled&&t.jsx(b,{btnLink:e.button_link,text:e.button_text,typeButton:"button",variant:"outlined"})]})]},e.id)),g==null?void 0:g.map(e=>t.jsxs("section",{className:"aboutGosht container",children:[t.jsxs("div",{className:"restaurant",children:[t.jsx(h,{badgeLogo:`https://new.gosht.com${e.first_project.image}`,subTitle:e.first_project.short_description,title:e.first_project.name,children:t.jsxs(t.Fragment,{children:[t.jsx("h5",{children:e.first_project.info_1.title}),t.jsx("p",{children:e.first_project.info_1.description})]})}),t.jsx(h,{children:t.jsxs(t.Fragment,{children:[t.jsx("h5",{children:e.first_project.info_2.title}),t.jsx("p",{children:e.first_project.info_2.description})]})})]}),t.jsxs("div",{className:"kidsWrapper",children:[t.jsx(h,{badgeLogo:`https://new.gosht.com${e.second_project.image}`,title:e.second_project.name,subTitle:e.second_project.short_description,children:t.jsxs("div",{className:"kids",children:[t.jsx("img",{src:`https://new.gosht.com${e.second_project.image}`,alt:e.second_project.name,className:"goshtKids"}),t.jsxs("div",{className:"instagram",children:[t.jsx(Z,{}),t.jsx("span",{children:"Open instagram"})]}),t.jsxs("div",{className:"kidsText",children:[t.jsx("h5",{children:e.second_project.info_1.title}),t.jsx("p",{children:e.second_project.info_1.description})]})]})}),e.button_enabled&&t.jsx(b,{btnLink:e.button_link,text:e.button_text,typeButton:"button",variant:"outlined"})]})]},e.id)),t.jsx(U,{className:"container"}),t.jsxs("section",{className:"clientSlider container",children:[t.jsx("span",{children:"Review"}),t.jsx(w,{text:`Don't believe me, check what Clients
think about us!`,variant:"h4"}),i?t.jsx(y,{slidesPerView:1,children:k.map(e=>t.jsx(v,{children:t.jsxs("div",{className:"cardWrapper",children:[t.jsx(r,{title:e.title,description:e.description}),t.jsx(r,{title:e.title,description:e.description}),t.jsx(r,{title:e.title,description:e.description})]})},e.id))}):t.jsx("div",{className:"desktop",children:t.jsx(y,{slidesPerView:3,children:k.map(e=>t.jsx(v,{children:t.jsx(r,{title:e.title,description:e.description})},e.id))})})]})]}),t.jsx(ot,{isOpen:l,onClose:$,menuItem:a})]})};export{wt as default};
