import{d as x,j as e}from"./ui-CuDAUpxO.js";import{a as b}from"./react-BjlJThec.js";import{a as I,b as T}from"./SliderMobile-th93Kqvi.js";import{H as m,I as $,a as F,i as w,j as v,k as E,c as K,L as c,d as M,e as z,o as B,u as W}from"./index-bTNFC4CP.js";import{S as q,N as D,P as A,A as P,a as g}from"./a11y-EIo1Ei7w.js";import{c as _,b as p,d as G,u as O,C as d}from"./form-BnEbJxh9.js";import{M as R}from"./index-nUfILl86.js";import"./Button-6hMcPMys.js";import"./redux-1Y8IFHhn.js";import"./swiper-Cl-SL7yl.js";x.section`
  height: calc(10.2vw + 337px);
  padding: 52px ${r=>r.theme.padding.padding6024};
  background-image: url("/img/Kids.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;const H=x.section`
  padding: 52px ${r=>r.theme.padding.padding6024};
  h2 {
    text-align: center;
    margin-bottom: 8px;
    line-height: 120%;
    display: flex;
    justify-content: center;
    div {
      margin-left: 10px;
    }
  }
  p {
    color: ${r=>r.theme.colors.grey};
    font-size: ${r=>r.theme.fontSize.font20$16};
    text-align: center;
    max-width: 778px;
    margin: 0 auto calc(2.4vw + 17px);
    font-family: ${r=>r.theme.fontFamily.roboto};
  }
  .swiper-slide {
    height: calc(14.2vw + 274px);
    display: grid;
    grid-template-columns: 1fr calc(17.2vw + 262px) 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    margin-bottom: 42px;
    .galleryImg {
      background-image: url("/img/ladyBag.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  .sliderBtns {
    display: flex;
    justify-content: space-between;
    .arrBtn {
      width: 38px;
      height: 38px;
      background-color: transparent;
      border: 1px solid ${r=>r.theme.colors.grey};
      border-radius: 4px;
      cursor: pointer;
      z-index: 30;
    }
  }
  .swiper-slide .galleryImg.main {
    grid-column: 2/3;
    grid-row: 1/3;
  }
  .programsWrapper {
    display: flex;
    gap: 42px 30px;
    margin-bottom: calc(0.9vw + 38.5px);
    .image {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 8px;
      height: calc(4.5vw + 310px);
      margin-bottom: calc(1.1vw + 16px);
    }
    h4 {
      text-align: left;
      margin-bottom: calc(0.4vw + 10.6px);
      font-weight: 500;
      font-family: ${r=>r.theme.fontFamily.robotoSerif};
    }
    p {
      text-align: left;
      margin: 0 0 24px;
      font-size: ${r=>r.theme.fontSize.font16$14};
      max-width: 530px;
    }
    .masterClass {
      .image {
        background-image: url("/img/master.png");
      }
      width: 50%;

      .plans_wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px 15px;
        margin-bottom: 12px;
      }
      .plan {
        padding: 16px 0;
        text-align: center;
        border: 2px solid #00000033;
        border-radius: 12px;
        cursor: pointer;
        font-family: ${r=>r.theme.fontFamily.robotoSerif};
        font-weight: 500;
      }
      .plan.red {
        color: white;
        margin-top: 32px;
        background-color: ${r=>r.theme.colors.red};
        border-color: ${r=>r.theme.colors.red};
      }
    }
    .shows {
      width: 50%;
      .image {
        background-image: url("/img/IronMan 55.png");
      }
      .shows_wrapper {
        border: 2px solid #00000033;
        border-radius: 12px;
        padding: 24px;
        h6 {
          padding-left: 10px;
          border-left: 4px solid ${r=>r.theme.colors.red};
          margin-bottom: 6px;
          font-family: ${r=>r.theme.fontFamily.robotoSerif};
          font-weight: 500;
        }
        p {
          font-size: 16px;
          font-family: ${r=>r.theme.fontFamily.roboto};
        }
      }
    }
  }
  .gallery {
    .gallerySlider {
      .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
        display: flex;
        justify-content: center;
        align-items: center;
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          background: ${r=>r.theme.colors.red};
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  @media (max-width: 975px) {
    .swiper-slide {
      height: auto;
      grid-template-columns: 1fr;
      .galleryImg {
        height: 200px;
      }
      .galleryImg.none {
        display: none;
      }
    }
    .programsWrapper {
      flex-direction: column;
      .masterClass,
      .shows {
        width: 100%;
      }
    }
  }
  @media (max-width: 675px) {
    .programsWrapper {
      .masterClass {
        .plans_wrapper {
          grid-template-columns: 1fr;
          .plan {
            text-align: left;
            padding: 16px 26px;
          }
        }
      }
    }
  }
`,V=()=>{const[r,s]=b.useState(null);return e.jsxs("div",{className:"gallery",children:[e.jsx(m,{text:"Gallery",variant:"h2"}),e.jsx("p",{children:"Here you can see photo reports of our events"}),e.jsx("div",{className:"gallerySlider",children:e.jsxs(q,{modules:[D,A,P],slidesPerView:1,pagination:{clickable:!0},onSwiper:i=>s(i),children:[e.jsxs(g,{children:[e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg none"}),e.jsx("div",{className:"galleryImg none main"})]}),e.jsxs(g,{children:[e.jsx("div",{className:"galleryImg "}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg none"}),e.jsx("div",{className:"galleryImg none main"})]}),e.jsxs("div",{className:"sliderBtns",children:[e.jsx($,{onClick:()=>r==null?void 0:r.slidePrev(),className:"arrBtn"}),e.jsx(F,{onClick:()=>r==null?void 0:r.slideNext(),className:"arrBtn"})]})]})})]})},L=()=>{const{data:r}=w(null);return console.log(r),e.jsxs("div",{className:"masterClass",children:[e.jsx("div",{className:"image"}),e.jsx(m,{variant:"h4",text:"Masterclasses"}),e.jsx("p",{children:"Welcome to our extraordinary children's celebration, filled with fun workshops and activities for unforgettable moments:"}),e.jsx("div",{className:"plans_wrapper",children:r==null?void 0:r.map(s=>e.jsx("div",{className:"plan",children:s.title}))}),e.jsx("div",{className:"plan",children:"Cookie Painting"}),e.jsx("div",{className:"plan red",children:"Cookie Painting"})]})},Q=()=>{const{data:r}=v(null);return e.jsxs("div",{className:"shows",children:[e.jsx("div",{className:"image"}),e.jsx(m,{variant:"h4",text:"Shows for Kids"}),e.jsx("p",{children:"Welcome to our extraordinary children's celebration, filled with fun workshops and activities for unforgettable moments:"}),e.jsx("ul",{className:"shows_wrapper",children:r==null?void 0:r.map(s=>e.jsxs("li",{children:[e.jsx(m,{text:s.title,variant:"h6"}),e.jsx("p",{children:s.description})]}))})]})},J=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 20px calc(3vw + 8.7px);
  .exit {
    position: absolute;
    top: calc(4.1vw + 4.5px);
    right: calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #b9bcbb;
  }
  h4 {
    max-width: 606px;
    text-align: center;
    font-weight: 500;
    font-family: ${r=>r.theme.fontFamily.robotoSerif};
    margin-bottom: calc(1.9vw + 13px);
  }
  form {
    display: flex;
    width: calc(48.4vw + 105.6px);
    flex-direction: column;
    gap: calc(1.7vw + 5.6px) 0;
    .formFlex {
      display: flex;
      justify-content: space-between;
      gap: 0 30px;
    }
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
    .choose {
      border-radius: 4px;
      background-color: #aa181a0d;
      text-align: center;
      padding: calc(-0.8vw + 22.8px) 20px;
      font-family: ${r=>r.theme.fontFamily.roboto};
      h5 {
        font-size: calc(0.4vw + 14.6px);
      }
    }
    .chooseWrapper {
      display: flex;
      justify-content: space-between;
      gap: 20px 30px;
      .masterClass {
        width: 50%;

        .checkboxWrapper {
          display: flex;
          margin-top: 20px;
        }
      }
      .show {
        width: 50%;
        label {
          textarea {
            height: 132px;
          }
        }
      }
    }
    .btnsWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .clear {
        background-color: transparent;
        font-family: ${r=>r.theme.fontFamily.roboto};
        color: #8c8e91;
        font-size: 16px;
        svg {
          margin-right: 12px;
        }
      }
    }
  }
  @media (max-width: 875px) {
    h4 {
      text-align: left;
    }
    form {
      .formFlex {
        flex-direction: column;
        gap: 12px;
      }
      .chooseWrapper {
        flex-direction: column;
        .masterClass,
        .show {
          width: 100%;
        }
      }
      .btnsWrapper {
        flex-direction: column-reverse;
        gap: 24px;
        .clear,
        .Button.fill {
          width: 90vw;
        }
        .clear {
          padding: 12px 0;
        }
      }
    }
  }
`,u=x.div`
  width: 100%;
  p {
    margin-bottom: 8px;
    font-size: calc(0.4vw + 10.6px);
    font-family: "Roboto";
    font-weight: 500;
  }
  select {
    width: 100%;
    border: 1px solid #00000033;
    padding: 16px;
    border-radius: 12px;
    cursor: pointer;
    option {
      font-size: calc(0.4vw + 10.6px);
      font-weight: 500;
    }
  }
`,U=_({firstName:p().required("Обязательное поле!"),phoneNumber:p().matches(/^[+]*[0-9]{10,15}$/,"Введите корректный номер телефона (например, +1234567890)").required("Обязательное поле!"),email:p().email("Введите корректный email").required("Обязательное поле!"),eventDate:p().required("Дата обязательна").test("is-valid-date","Некорректная дата",r=>!!(r&&!isNaN(new Date(r).getTime()))),peopleNumber:G().required("Обязательное поле!"),masterclass:p().required("Обязательное поле !"),showType:p().required("Обязательное поле !")}),X=["red","yellow","green","blue"],Y="Kids",y=()=>e.jsx("div",{style:{fontWeight:"bold",display:"inline"},children:Y.split("").map((r,s)=>e.jsx("span",{style:{color:X[s],fontWeight:500},children:r},s))}),Z={overlay:{zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{inset:0,width:"100vw",height:"100vh",padding:"20px",background:"white",border:"none"}},ee=({isOpen:r,onClose:s})=>{const{data:i}=w(null),{data:n}=v(null),{control:l,reset:h,handleSubmit:j,formState:{errors:o}}=O({resolver:B(U),mode:"onBlur",defaultValues:{firstName:"",phoneNumber:"",email:"",eventDate:"",peopleNumber:0,masterclass:"",showType:""}}),[N]=E(),k=async t=>{try{const a={first_name:t.firstName,email:t.email,phone_number:t.phoneNumber,date:t.eventDate,showForKidsId:t.showType,masterclassId:t.masterclass,people_quantity:Number(t.peopleNumber)};console.log("Отправка формы:",a),await N(a).unwrap(),h(),s()}catch(a){console.error("Ошибка при отправке формы:",a)}},C=t=>{t.preventDefault(),h({},{keepErrors:!1,keepDirty:!1,keepTouched:!1})};return e.jsx(R,{isOpen:r,onRequestClose:s,style:Z,children:e.jsxs(J,{children:[e.jsx(K,{className:"exit",onClick:s}),e.jsxs("h4",{children:["Fill in the form and we will contact you about ",e.jsx(y,{})," event"]}),e.jsxs("form",{onSubmit:j(k),children:[e.jsx(d,{name:"firstName",control:l,render:({field:t})=>{var a;return e.jsx(c,{labelText:"First Name",placeholder:"First Name",...t,isError:!!o.firstName,errorText:(a=o.firstName)==null?void 0:a.message})}}),e.jsx(d,{name:"phoneNumber",control:l,render:({field:t})=>{var a;return e.jsx(c,{type:"number",labelText:"Phone Number",placeholder:"Phone Number",...t,isError:!!o.phoneNumber,errorText:(a=o.phoneNumber)==null?void 0:a.message})}}),e.jsx(d,{name:"email",control:l,render:({field:t})=>{var a;return e.jsx(c,{type:"email",labelText:"Email",placeholder:"example@gmail.com",...t,isError:!!o.email,errorText:(a=o.email)==null?void 0:a.message})}}),e.jsx(d,{name:"eventDate",control:l,render:({field:t})=>{var a;return e.jsx(c,{type:"date",labelText:"Event Date",...t,isError:!!o.eventDate,errorText:(a=o.eventDate)==null?void 0:a.message})}}),e.jsx(d,{name:"peopleNumber",control:l,render:({field:t})=>{var a;return e.jsx(c,{type:"number",labelText:"Number of People",...t,isError:!!o.peopleNumber,errorText:(a=o.peopleNumber)==null?void 0:a.message,onWheel:S=>S.preventDefault()})}}),e.jsx(d,{name:"masterclass",control:l,render:({field:t})=>e.jsxs(u,{children:[e.jsx("p",{children:"Choose the Masterclass"}),e.jsxs("select",{...t,onChange:a=>t.onChange(a.target.value),children:[e.jsx("option",{value:"",children:"Choose the Masterclass"}),i==null?void 0:i.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]}),o.showType&&e.jsx("p",{className:"error-text",children:o.showType.message})]})}),e.jsx(d,{name:"showType",control:l,render:({field:t})=>e.jsxs(u,{children:[e.jsx("p",{children:"Choose Show for Kids"}),e.jsxs("select",{...t,value:t.value??"",onChange:a=>t.onChange(a.target.value),onBlur:t.onBlur,children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Choose the shows"}),n==null?void 0:n.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]}),o.showType&&e.jsx("p",{className:"error-text",children:o.showType.message})]})}),e.jsxs("div",{className:"btnsWrapper",children:[e.jsxs("button",{className:"clear",onClick:C,type:"button",children:[e.jsx(M,{})," Clear the form"]}),e.jsx(z,{text:"Send",variant:"fill",typeButton:"submit"})]})]})]})})},f=[{id:1,tagText:"книга про Эвенты",title:"Kid's Events",description:"For all inquiries, please fill out the form below and we’ll be in touch soon. ",buttonText:"Inquire Now",backgroundImage:"/img/Kids.png"},{id:2,tagText:"BOOK AN EVENT",title:"Caesar",description:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",buttonText:"Inquire Now",backgroundImage:"/img/Main.jpg"}],ce=()=>{const[r,s]=b.useState(!1),i=()=>{s(!1)},n=W(975);return e.jsxs("div",{children:[!n&&e.jsx(I,{btnClick:()=>s(!0),data:f}),n&&e.jsx(T,{data:f,btnClick:()=>s(!0)}),e.jsxs(H,{children:[e.jsxs("h2",{children:["Gosht ",e.jsx(y,{})]}),n?e.jsx("p",{children:"Activities inside the Gōsht Restaurant"}):e.jsx("p",{children:"Birthdays and special occasions made effortless! Whether it's a grand birthday bash or an intricate celebration, leave the details to us. Fill out the form below and let's transform your vision into an unforgettable reality!"}),e.jsxs("div",{className:"programsWrapper",children:[e.jsx(L,{}),e.jsx(Q,{})]}),e.jsx(V,{})]}),e.jsx(ee,{isOpen:r,onClose:i})]})};export{ce as default};
