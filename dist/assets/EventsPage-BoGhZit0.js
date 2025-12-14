import{d as T,j as t}from"./ui-CuDAUpxO.js";import{E as b}from"./EventsSection-soodAREX.js";import{a as f,b as C}from"./SliderMobile-k6uYn0mq.js";import{b as y,c as j,H as E,L as s,d as N,e as I,o as w,u as B}from"./index-Acc0vs7h.js";import{a as P}from"./react-BjlJThec.js";import{c as S,b as m,d as q,u as M,C as i}from"./form-BnEbJxh9.js";import{M as D}from"./index-nUfILl86.js";import"./Button-Ck018LnH.js";import"./a11y-EIo1Ei7w.js";import"./swiper-Cl-SL7yl.js";import"./redux-1Y8IFHhn.js";const k=T.div`
  padding: 52px calc(3vw + 8.7px) calc(3vw + 8.7px);
  position: relative;
  .exit{
    position: absolute;
    top:calc(4.1vw + 4.5px);
    right:calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #B9BCBB;
  }
  h4 {
    text-align: center;
    max-width: 801px;
    font-family: ${n=>n.theme.fontFamily.robotoSerif};
    font-weight: 500;
    margin: 0 auto calc(1.9vw + 13px);
  }
  .formWrapper {
    display: grid;
    gap: calc(1.7vw + 5.66px);
    grid-template-columns: 1fr 1fr 1fr;
    label:nth-child(11) {
      grid-column: 2/4;
    }
    .btnsWrapper:nth-child(12) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-column: 1/4;
      .clear {
        background-color: transparent;
        font-family: ${n=>n.theme.fontFamily.roboto};
        color: #8c8e91;
        font-size: 16px;
        svg{
          margin-right: 12px;
        }
      }
      margin-top: 40px;
    }
  }
  @media (max-width: 975px) {
    h4{
      text-align: left;
      max-width: 80%;
      margin-left: 0 !important;
    }
    .formWrapper {
      grid-template-columns: 1fr !important;
      label:nth-child(11) {
        grid-column: auto;
      }
      .btnsWrapper:nth-child(12) {
        grid-column: auto;
      }
    }
  }
`,F=S({userName:m().required("Обязательное поле!"),userEmail:m().email("Введите корректный email").required("Обязательное поле!"),userLastName:m().required("Обязательное поле!"),userPhone:m().matches(/^[+]*[0-9]{10,15}$/,"Введите корректный номер телефона (например, +1234567890)").required("Обязательное поле!"),userDate:m().required("Дата обязательна").matches(/^\d{4}-\d{2}-\d{2}$/).test("is-valid-date","Некорректная дата",n=>!!(n&&!isNaN(new Date(n).getTime()))),userCompany:m().required("Обязательное поле!"),startTime:m().required("Время начала обязательно").matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Время должно быть в формате HH:mm"),endTime:m().required("Время окончания обязательно").matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Время должно быть в формате HH:mm").test("is-after-start-time","Время окончания должно быть позже времени начала",function(n){const{startTime:l}=this.parent;return!l||!n?!1:n>l}),eventType:m().required("Обязательное поле!"),peopleCount:q().positive("Количество людей должно быть положительным числом").integer("Количество людей должно быть целым числом").nullable().required("Обязательное поле!"),additionalInfo:m().nullable()}),L={overlay:{zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{inset:0,width:"100vw",height:"100vh",padding:"20px",background:"white",border:"none"}},O=({isOpen:n,onClose:l})=>{const{control:o,handleSubmit:u,formState:{errors:a},reset:p}=M({resolver:w(F),mode:"onBlur",defaultValues:{userName:"",userEmail:"",userLastName:"",userPhone:"",userDate:"",userCompany:"",startTime:"",endTime:"",eventType:"",peopleCount:0,additionalInfo:""}}),[x]=y(),h=()=>p({},{keepErrors:!1,keepDirty:!1,keepTouched:!1}),d=e=>e.length===5?`${e}:00`:e,g=async e=>{const r={first_name:e.userName,last_name:e.userLastName,email:e.userEmail,phone_number:e.userPhone,date:new Date(e.userDate).toISOString().slice(0,10),company_name:e.userCompany,start_time:d(e.startTime),end_time:d(e.endTime),event_type:e.eventType,people_quantity:e.peopleCount,additional_info:e.additionalInfo||"",status:"pending"};console.log(e.userDate);try{console.log(r),await x(r).unwrap(),p(),l()}catch(v){console.error("Ошибка при отправке формы:",v)}};return t.jsx(D,{isOpen:n,style:L,onRequestClose:l,children:t.jsxs(k,{children:[t.jsx(j,{className:"exit",onClick:l}),t.jsx(E,{text:"Fill out the form and we will contact you about a Private event",variant:"h4"}),t.jsxs("form",{className:"formWrapper",onSubmit:u(g),children:[t.jsx(i,{name:"userName",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"First Name",inputIcon:!0,placeholder:"First Name",type:"text",value:e.value,onChange:e.onChange,isError:!!a.userName,errorText:(r=a.userName)==null?void 0:r.message})}}),t.jsx(i,{name:"userEmail",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Email",inputIcon:!0,placeholder:"example@gmail.com",type:"email",value:e.value,onChange:e.onChange,isError:!!a.userEmail,errorText:(r=a.userEmail)==null?void 0:r.message})}}),t.jsx(i,{name:"userLastName",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Last Name",inputIcon:!0,placeholder:"Last Name",type:"text",value:e.value,onChange:e.onChange,isError:!!a.userLastName,errorText:(r=a.userLastName)==null?void 0:r.message})}}),t.jsx(i,{name:"userPhone",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Phone Number",inputIcon:!0,placeholder:"Phone Number",type:"tel",value:e.value,onChange:e.onChange,isError:!!a.userPhone,errorText:(r=a.userPhone)==null?void 0:r.message})}}),t.jsx(i,{name:"userDate",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Event Date",inputIcon:!0,placeholder:"DD/MM/YYYY",type:"date",value:e.value,onChange:e.onChange,isError:!!a.userDate,errorText:(r=a.userDate)==null?void 0:r.message})}}),t.jsx(i,{name:"userCompany",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Company Name",inputIcon:!0,placeholder:"Company",type:"text",value:e.value,onChange:e.onChange,isError:!!a.userCompany,errorText:(r=a.userCompany)==null?void 0:r.message})}}),t.jsx(i,{name:"startTime",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Start Time",inputIcon:!0,placeholder:"Start Time",type:"time",value:e.value,onChange:e.onChange,isError:!!a.startTime,errorText:(r=a.startTime)==null?void 0:r.message})}}),t.jsx(i,{name:"endTime",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"End Time",inputIcon:!0,placeholder:"End Time",type:"time",value:e.value,onChange:e.onChange,isError:!!a.endTime,errorText:(r=a.endTime)==null?void 0:r.message})}}),t.jsx(i,{name:"eventType",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Type of Event",inputIcon:!0,placeholder:"Type of Event",type:"text",value:e.value,onChange:e.onChange,isError:!!a.eventType,errorText:(r=a.eventType)==null?void 0:r.message})}}),t.jsx(i,{name:"peopleCount",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Number of People",inputIcon:!0,placeholder:"0",type:"number",value:e.value,onChange:e.onChange,isError:!!a.peopleCount,errorText:(r=a.peopleCount)==null?void 0:r.message})}}),t.jsx(i,{name:"additionalInfo",control:o,render:({field:e})=>{var r;return t.jsx(s,{labelText:"Additional Information",inputIcon:!0,placeholder:"Additional Information",type:"text",...e,value:e.value??"",isError:!!a.additionalInfo,errorText:(r=a.additionalInfo)==null?void 0:r.message,isInput:!1,areaPlaceholder:"Additional Information"})}}),t.jsxs("div",{className:"btnsWrapper",children:[t.jsxs("button",{type:"button",className:"clear",onClick:h,children:[t.jsx(N,{}),"Clear the form"]}),t.jsx(I,{typeButton:"submit",text:"Send",variant:"fill"})]})]})]})})},c=[{id:1,tagText:"BOOK AN EVENT",title:"Private Events",description:"For all inquiries, please fill out the form below and we’ll be in touch soon. ",buttonText:"Inquire Now",backgroundImage:"/img/Kids.png"},{id:2,tagText:"BOOK AN EVENT",title:"Caesar",description:"Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",buttonText:"Inquire Now",backgroundImage:"/img/Main.jpg"}],J=()=>{const[n,l]=P.useState(!1),o=()=>{l(!1)},u=()=>{console.log("true"),l(!0)},a=B(975);return t.jsxs("div",{children:[!a&&t.jsx(f,{btnClick:u,data:c}),a&&t.jsx(C,{data:c,btnClick:()=>l(!0)}),t.jsx(b,{}),t.jsx(O,{isOpen:n,onClose:o})]})};export{J as default};
