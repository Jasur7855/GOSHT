import{d as f,j as e}from"./ui-CuDAUpxO.js";import{g as k,c as N,H as s,L as p,e as j,o as B,h as E,f as $,A as v,I as S}from"./index-BG2w4uWu.js";import{B as b}from"./Button-B66R1y9c.js";import{c as I,b as c,u as F,C as x}from"./form-BnEbJxh9.js";import{M as T}from"./index-nUfILl86.js";import{k as w,a as y,L}from"./react-BjlJThec.js";import"./redux-1Y8IFHhn.js";const C=f.div`
  .picture {
    height: 100px;
    border-radius: 8px;
    margin-bottom: 12px;
    background-image: url(${t=>t.$bgImg});
    background-size: cover;
    background-position: center;
  }
  h4{
    font-family:"Roboto Serif"
  }
  @media (max-width:1190px) {
    .picture {
      height: calc(14.6vw + 45.26px);
    }
  }
`,M=({itemBg:t,itemTitle:a})=>e.jsxs(C,{$bgImg:t,children:[e.jsx("div",{className:"picture"}),e.jsx("h5",{children:a})]}),W=f.div`
  display: flex;
  padding: calc(4.1vw + 4.5px) calc(3.4vw + 11.3px) calc(4.7vw + 34.4px);
  gap: 42px 135px;

  .leftSide {
    width: calc(7.3vw + 300px);
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    h6{
      font-weight: 500;
      padding-bottom: 8px;
      border-bottom:1px solid  #B9BCBB;

    }
  }

  .Main {
    flex: 1;

    .breadcrumb {
      display: flex;
      gap: 16px;
      align-items: center;
      color: ${t=>t.theme.colors.textGrey};
      font-size: ${t=>t.theme.fontSize.font20$16}; /* Исправлено */
      margin-bottom: 32px;
      font-family: "Roboto";
      svg {
        color: ${t=>t.theme.colors.red};
      }
    }

    h4 {
      margin-bottom: calc(0.9vw + 18.5px);
    }

    .mainImg {
      display: block;
      width: 100%;
      height: calc(17.5vw + 134.5px);
      background-image: url(${t=>t.$mainBg});
      background-size: cover;
      background-position: center;
      border-radius: 8px;
      margin-bottom: 32px;
    }

    h5 {
      line-height: 115%;
      max-width: 825px;
      font-family: "Roboto Serif";
      margin-bottom: calc(2.4vw + 16.8px);
    }

    .btnWrapper {
      display: flex;
      gap: 0 6px;
      margin-bottom: calc(0.4vw + 18.6px);

      button {
        font-family: ${t=>t.theme.fontFamily.roboto};
        padding: 4px 12px;
        font-weight: 500;
      }
    }

    .eventDateTime {
      h5 {
        border-left: 4px solid ${t=>t.theme.colors.red};
        padding-left: 10px;
        margin-bottom: calc(0.9vw + 18.5px);
      }

      p {
        margin-bottom: 16px;
        font-size: 16px;
        font-family: ${t=>t.theme.fontFamily.roboto};
        color: rgba(0, 0, 0, 0.4);
        max-width: 825px;
        line-height: 112.5%;
      }

      .last {
        margin-bottom: 32px;
      }
    }
    .bookingWrapper {
      .fill {
        font-family: ${t=>t.theme.fontFamily.robotoSerif};
      }
    }
    .bookingWrapper h5:nth-child(3),
    .bookingWrapper h5:nth-child(4) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1190px) {
    flex-direction: column-reverse;
    align-items: center;
    .leftSide{
        width: 100%;
    }
    .mainImg {
      width: 100%;
      height: auto;
    }
    .bookingWrapper .btnWrapper {
      flex-direction: column;
      gap: 12px 0;
      .Button {
        display: block;
        width: 100%;
      }
    }
  }
`,z=f.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  min-height: 100vh;
  .exit{
    position: absolute;
    top:calc(4.1vw + 4.5px);
    right:calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #B9BCBB;
  }
  .form {
    width: calc(23.4vw + 199.3px);
    padding: calc(-0.4vw + 57.4px) calc(4.9vw + 1.7px) calc(3vw + 8.7px);
    h4 {
      font-weight: 500;
      font-family: ${t=>t.theme.fontFamily.robotoSerif};
      line-height: 117%;
      padding-bottom: calc(0.19vw + 13px);
    }
    button{
      margin-top: 24px;
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 30px 0;
    }
  }
  .image {
    background-image: url(/img/bookingIMG.png);
    min-height: 287px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 1;
    img {
      width: 100%;
    }
  }

  @media (max-width: 875px) {
    flex-direction: column;
    padding: 56px 20px;
    .form{
      width: 100%;
    }
    .image {
      height: calc(68.8vw + 29px);
      flex-grow: 0;
      border-radius: 12px;
      img{
        border-radius: 12px;
      }
    }
  }
`,_=I({firstName:c().required("Обязательное поле!"),phoneNumber:c().matches(/^[+]*[0-9]{10,15}$/,"Введите корректный номер телефона (например, +1234567890)").required("Обязательное поле!"),email:c().email("Введите корректный email").required("Обязательное поле!"),peopleNumber:c().required("Обязательное поле!")}),q={overlay:{zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{inset:0,width:"100vw",height:"100vh",padding:"20px",background:"white",border:"none"}},A=({isOpen:t,onClose:a})=>{const{id:l}=w(),[o]=k();if(y.useEffect(()=>{l||a()},[l,a]),!l)return null;const{control:m,handleSubmit:h,reset:d,formState:{errors:n}}=F({resolver:B(_),mode:"onBlur",defaultValues:{firstName:"",phoneNumber:"",email:"",peopleNumber:""}}),g=async i=>{try{const r={first_name:i.firstName,phone_number:i.phoneNumber,email:i.email,people_quantity:String(i.peopleNumber),eventId:l};await o(r).unwrap(),d(),a()}catch(r){console.error("Ошибка при отправке формы:",r)}};return e.jsx(T,{isOpen:t,onRequestClose:a,style:q,children:e.jsxs(z,{children:[e.jsx(N,{className:"exit",onClick:a}),e.jsx("div",{className:"image"}),e.jsxs("div",{className:"form",children:[e.jsx(s,{variant:"h4",text:"Fill in the form and we will contact you about Kids event"}),e.jsxs("form",{onSubmit:h(g),children:[e.jsx(x,{name:"firstName",control:m,render:({field:i})=>{var r;return e.jsx(p,{labelText:"First Name",placeholder:"Enter your name",...i,isError:!!n.firstName,errorText:(r=n.firstName)==null?void 0:r.message})}}),e.jsx(x,{name:"phoneNumber",control:m,render:({field:i})=>{var r;return e.jsx(p,{labelText:"Phone Number",type:"tel",placeholder:"+1234567890",...i,isError:!!n.phoneNumber,errorText:(r=n.phoneNumber)==null?void 0:r.message})}}),e.jsx(x,{name:"email",control:m,render:({field:i})=>{var r;return e.jsx(p,{labelText:"Email",type:"email",placeholder:"example@gmail.com",...i,isError:!!n.email,errorText:(r=n.email)==null?void 0:r.message})}}),e.jsx(x,{name:"peopleNumber",control:m,render:({field:i})=>{var r;return e.jsx(p,{labelText:"Number of People",type:"number",...i,isError:!!n.peopleNumber,errorText:(r=n.peopleNumber)==null?void 0:r.message,onWheel:u=>u.preventDefault()})}}),e.jsx(j,{text:"Send",typeButton:"submit",variant:"fill"})]})]})]})})},K=()=>{const[t,a]=y.useState(!1),{id:l}=w(),{data:o,isLoading:m,isError:h}=E(l),{data:d,isLoading:n,isError:g}=$(null);if(m)return e.jsx("div",{children:"Loading event..."});if(h)return e.jsx("div",{children:"Error loading event"});if(!o)return e.jsx("div",{children:"No event found"});const i=()=>{a(!1)};return e.jsxs("div",{children:[e.jsxs(W,{$mainBg:`${v}${o.media.path}`||"",children:[e.jsxs("aside",{className:"leftSide",children:[e.jsx(s,{text:"Events",variant:"h6"}),n&&e.jsx("p",{children:"Loading events..."}),g&&e.jsx("p",{children:"Error loading events"}),Array.isArray(d)&&d.length>0?d.map((r,u)=>e.jsx(M,{itemBg:`${v}${o.media.path}`,itemTitle:r.main_title},u)):e.jsx("p",{children:"No events available"})]}),e.jsxs("div",{className:"Main",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(S,{}),e.jsx(L,{to:"/events",children:e.jsxs("span",{children:["Main / Events / ",o.main_title]})})]}),e.jsx(s,{text:o.main_title,variant:"h4"}),e.jsx("div",{className:"mainImg"}),e.jsxs("div",{className:"btnWrapper",children:[e.jsx(b,{btnLink:"#",typeButton:"button",variant:"fill",text:o.date}),e.jsx(b,{btnLink:"#",typeButton:"button",variant:"fill",text:o.time})]}),e.jsxs("div",{className:"eventDateTime",children:[e.jsx(s,{variant:"h5",text:o.main_title}),e.jsx("p",{children:o.paragraph})]}),e.jsx(s,{text:o.motivation,variant:"h5"}),e.jsxs("div",{className:"bookingWrapper",children:[e.jsxs("div",{className:"btnWrapper",children:[e.jsx(j,{typeButton:"button",text:"Booking",variant:"fill",onClick:()=>a(!0)}),e.jsx(b,{btnLink:"#",typeButton:"button",text:"Workshop Cost:",childText:o.cost,variant:"outlined"})]}),e.jsx(s,{text:"For reservations or further inquiries, please call:",variant:"h5",childText:"+1 718 504-8880"}),e.jsx(s,{variant:"h5",text:"Best regards,"}),e.jsx(s,{variant:"h5",text:"The Gōsht Family ❤️"})]})]})]}),t&&e.jsx(A,{isOpen:t,onClose:i})]})};export{K as default};
