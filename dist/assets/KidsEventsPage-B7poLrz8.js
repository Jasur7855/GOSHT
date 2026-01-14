import{d as h,j as e}from"./ui-CuDAUpxO.js";import{a as u}from"./react-BjlJThec.js";import{a as C,b as I}from"./SliderMobile-pQhpsxsL.js";import{H as x,I as $,a as T,q as w,r as v,s as F,i as E,L as m,j as M,k as K,o as z,t as B,u as W}from"./index-U4wzshVy.js";import{S as _,N as D,P,A as q,a as f}from"./a11y-EIo1Ei7w.js";import{c as A,b as d,d as G,u as L,C as l}from"./form-BnEbJxh9.js";import{M as O}from"./index-nUfILl86.js";import"./Button-qNY6Ndoj.js";import"./redux-1Y8IFHhn.js";import"./swiper-Cl-SL7yl.js";h.section`
  height: calc(10.2vw + 337px);
  padding: 52px ${r=>r.theme.padding.padding6024};
  background-image: url("/img/Kids.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;const R=h.section`
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
`,H=()=>{const[r,i]=u.useState(null);return e.jsxs("div",{className:"gallery",children:[e.jsx(x,{text:"Gallery",variant:"h2"}),e.jsx("p",{children:"Here you can see photo reports of our events"}),e.jsx("div",{className:"gallerySlider",children:e.jsxs(_,{modules:[D,P,q],slidesPerView:1,pagination:{clickable:!0},onSwiper:n=>i(n),children:[e.jsxs(f,{children:[e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg none"}),e.jsx("div",{className:"galleryImg none main"})]}),e.jsxs(f,{children:[e.jsx("div",{className:"galleryImg "}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg"}),e.jsx("div",{className:"galleryImg none"}),e.jsx("div",{className:"galleryImg none main"})]}),e.jsxs("div",{className:"sliderBtns",children:[e.jsx($,{onClick:()=>r==null?void 0:r.slidePrev(),className:"arrBtn"}),e.jsx(T,{onClick:()=>r==null?void 0:r.slideNext(),className:"arrBtn"})]})]})})]})},Q=()=>{const{data:r}=w(null);return console.log(r),e.jsxs("div",{className:"masterClass",children:[e.jsx("div",{className:"image"}),e.jsx(x,{variant:"h4",text:"Masterclasses"}),e.jsx("p",{children:"Welcome to our extraordinary children's celebration, filled with fun workshops and activities for unforgettable moments:"}),e.jsx("div",{className:"plans_wrapper",children:r==null?void 0:r.map(i=>e.jsx("div",{className:"plan",children:i.title}))}),e.jsx("div",{className:"plan",children:"Cookie Painting"}),e.jsx("div",{className:"plan red",children:"Cookie Painting"})]})},V=()=>{const{data:r}=v(null);return e.jsxs("div",{className:"shows",children:[e.jsx("div",{className:"image"}),e.jsx(x,{variant:"h4",text:"Shows for Kids"}),e.jsx("p",{children:"Welcome to our extraordinary children's celebration, filled with fun workshops and activities for unforgettable moments:"}),e.jsx("ul",{className:"shows_wrapper",children:r==null?void 0:r.map(i=>e.jsxs("li",{children:[e.jsx(x,{text:i.title,variant:"h6"}),e.jsx("p",{children:i.description})]}))})]})},J=h.div`
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
`,b=h.div`
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
`,U=A({firstName:d().required("Обязательное поле!"),phoneNumber:d().matches(/^[+]*[0-9]{10,15}$/,"Введите корректный номер телефона (например, +1234567890)").required("Обязательное поле!"),email:d().email("Введите корректный email").required("Обязательное поле!"),eventDate:d().required("Дата обязательна").test("is-valid-date","Некорректная дата",r=>!!(r&&!isNaN(new Date(r).getTime()))),peopleNumber:G().required("Обязательное поле!"),masterclass:d().required("Обязательное поле !"),showType:d().required("Обязательное поле !")}),X=["red","yellow","green","blue"],Y="Kids",y=()=>e.jsx("div",{style:{fontWeight:"bold",display:"inline"},children:Y.split("").map((r,i)=>e.jsx("span",{style:{color:X[i],fontWeight:500},children:r},i))}),Z={overlay:{zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{inset:0,width:"100vw",height:"100vh",padding:"20px",background:"white",border:"none"}},ee=({isOpen:r,onClose:i})=>{const{data:n}=w(null),{data:p}=v(null),{control:o,reset:c,handleSubmit:g,formState:{errors:s}}=L({resolver:z(U),mode:"onBlur",defaultValues:{firstName:"",phoneNumber:"",email:"",eventDate:"",peopleNumber:0,masterclass:"",showType:""}}),[j]=F(),N=async a=>{try{const t={first_name:a.firstName,email:a.email,phone_number:a.phoneNumber,date:a.eventDate,showForKidsId:a.showType,masterclassId:a.masterclass,people_quantity:Number(a.peopleNumber)};console.log("Отправка формы:",t),await j(t).unwrap(),c(),i()}catch(t){console.error("Ошибка при отправке формы:",t)}},k=a=>{a.preventDefault(),c({},{keepErrors:!1,keepDirty:!1,keepTouched:!1})};return e.jsx(O,{isOpen:r,onRequestClose:i,style:Z,children:e.jsxs(J,{children:[e.jsx(E,{className:"exit",onClick:i}),e.jsxs("h4",{children:["Fill in the form and we will contact you about ",e.jsx(y,{})," event"]}),e.jsxs("form",{onSubmit:g(N),children:[e.jsx(l,{name:"firstName",control:o,render:({field:a})=>{var t;return e.jsx(m,{labelText:"First Name",placeholder:"First Name",...a,isError:!!s.firstName,errorText:(t=s.firstName)==null?void 0:t.message})}}),e.jsx(l,{name:"phoneNumber",control:o,render:({field:a})=>{var t;return e.jsx(m,{type:"number",labelText:"Phone Number",placeholder:"Phone Number",...a,isError:!!s.phoneNumber,errorText:(t=s.phoneNumber)==null?void 0:t.message})}}),e.jsx(l,{name:"email",control:o,render:({field:a})=>{var t;return e.jsx(m,{type:"email",labelText:"Email",placeholder:"example@gmail.com",...a,isError:!!s.email,errorText:(t=s.email)==null?void 0:t.message})}}),e.jsx(l,{name:"eventDate",control:o,render:({field:a})=>{var t;return e.jsx(m,{type:"date",labelText:"Event Date",...a,isError:!!s.eventDate,errorText:(t=s.eventDate)==null?void 0:t.message})}}),e.jsx(l,{name:"peopleNumber",control:o,render:({field:a})=>{var t;return e.jsx(m,{type:"number",labelText:"Number of People",...a,isError:!!s.peopleNumber,errorText:(t=s.peopleNumber)==null?void 0:t.message,onWheel:S=>S.preventDefault()})}}),e.jsx(l,{name:"masterclass",control:o,render:({field:a})=>e.jsxs(b,{children:[e.jsx("p",{children:"Choose the Masterclass"}),e.jsxs("select",{...a,onChange:t=>a.onChange(t.target.value),children:[e.jsx("option",{value:"",children:"Choose the Masterclass"}),n==null?void 0:n.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),s.showType&&e.jsx("p",{className:"error-text",children:s.showType.message})]})}),e.jsx(l,{name:"showType",control:o,render:({field:a})=>e.jsxs(b,{children:[e.jsx("p",{children:"Choose Show for Kids"}),e.jsxs("select",{...a,value:a.value??"",onChange:t=>a.onChange(t.target.value),onBlur:a.onBlur,children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Choose the shows"}),p==null?void 0:p.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),s.showType&&e.jsx("p",{className:"error-text",children:s.showType.message})]})}),e.jsxs("div",{className:"btnsWrapper",children:[e.jsxs("button",{className:"clear",onClick:k,type:"button",children:[e.jsx(M,{})," Clear the form"]}),e.jsx(K,{text:"Send",variant:"fill",typeButton:"submit"})]})]})]})})},ce=()=>{const[r,i]=u.useState(!1),{data:n,isLoading:p}=B(),o=W(975),c=u.useMemo(()=>n?n.filter(s=>s.is_visible).map(s=>({id:s.id,tagText:s.tag_text,title:s.main_text,description:s.description,buttonText:s.button_enabled?s.button_text:"",backgroundImage:`https://new.gosht.com${s.background_image}`,buttonLink:s.button_link})):[],[n]),g=()=>{i(!1)};return p?e.jsx("div",{children:"Loading..."}):e.jsxs("div",{children:[!o&&e.jsx(C,{btnClick:()=>i(!0),data:c}),o&&e.jsx(I,{data:c,btnClick:()=>i(!0)}),e.jsxs(R,{children:[e.jsxs("h2",{children:["Gosht ",e.jsx(y,{})]}),o?e.jsx("p",{children:"Activities inside the Gōsht Restaurant"}):e.jsx("p",{children:"Birthdays and special occasions made effortless! Whether it's a grand birthday bash or an intricate celebration, leave the details to us. Fill out the form below and let's transform your vision into an unforgettable reality!"}),e.jsxs("div",{className:"programsWrapper",children:[e.jsx(Q,{}),e.jsx(V,{})]}),e.jsx(H,{})]}),e.jsx(ee,{isOpen:r,onClose:g})]})};export{ce as default};
