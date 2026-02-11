import{d as T,j as t}from"./ui-CuDAUpxO.js";import{E as f}from"./EventsSection-BdDqA1o3.js";import{a as b,b as y}from"./SliderMobile-rcuCwzlY.js";import{i as C,j,H as E,L as i,k as I,h as N,o as w,l as B,u as P}from"./index-D542ga8I.js";import{a as h}from"./react-BjlJThec.js";import{c as S,b as u,d as k,u as D,C as l}from"./form-BnEbJxh9.js";import{M}from"./index-nUfILl86.js";import"./Button-BoGE5aUA.js";import"./a11y-EIo1Ei7w.js";import"./swiper-Cl-SL7yl.js";import"./redux-1Y8IFHhn.js";const _=T.div`
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
    font-family: ${o=>o.theme.fontFamily.robotoSerif};
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
        font-family: ${o=>o.theme.fontFamily.roboto};
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
`,L=S({userName:u().required("Обязательное поле!"),userEmail:u().email("Введите корректный email").required("Обязательное поле!"),userLastName:u().required("Обязательное поле!"),userPhone:u().matches(/^[+]*[0-9]{10,15}$/,"Введите корректный номер телефона (например, +1234567890)").required("Обязательное поле!"),userDate:u().required("Дата обязательна").matches(/^\d{4}-\d{2}-\d{2}$/).test("is-valid-date","Некорректная дата",o=>!!(o&&!isNaN(new Date(o).getTime()))),userCompany:u().required("Обязательное поле!"),startTime:u().required("Время начала обязательно").matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Время должно быть в формате HH:mm"),endTime:u().required("Время окончания обязательно").matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Время должно быть в формате HH:mm").test("is-after-start-time","Время окончания должно быть позже времени начала",function(o){const{startTime:m}=this.parent;return!m||!o?!1:o>m}),eventType:u().required("Обязательное поле!"),peopleCount:k().positive("Количество людей должно быть положительным числом").integer("Количество людей должно быть целым числом").nullable().required("Обязательное поле!"),additionalInfo:u().nullable()}),q={overlay:{zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{inset:0,width:"100vw",height:"100vh",padding:"20px",background:"white",border:"none"}},F=({isOpen:o,onClose:m})=>{const{control:n,handleSubmit:d,formState:{errors:a},reset:p}=D({resolver:w(L),mode:"onBlur",defaultValues:{userName:"",userEmail:"",userLastName:"",userPhone:"",userDate:"",userCompany:"",startTime:"",endTime:"",eventType:"",peopleCount:0,additionalInfo:""}}),[c]=C(),x=()=>p({},{keepErrors:!1,keepDirty:!1,keepTouched:!1}),s=e=>e.length===5?`${e}:00`:e,g=async e=>{const r={first_name:e.userName,last_name:e.userLastName,email:e.userEmail,phone_number:e.userPhone,date:new Date(e.userDate).toISOString().slice(0,10),company_name:e.userCompany,start_time:s(e.startTime),end_time:s(e.endTime),event_type:e.eventType,people_quantity:e.peopleCount,additional_info:e.additionalInfo||"",status:"pending"};console.log(e.userDate);try{console.log(r),await c(r).unwrap(),p(),m()}catch(v){console.error("Ошибка при отправке формы:",v)}};return t.jsx(M,{isOpen:o,style:q,onRequestClose:m,children:t.jsxs(_,{children:[t.jsx(j,{className:"exit",onClick:m}),t.jsx(E,{text:"Fill out the form and we will contact you about a Private event",variant:"h4"}),t.jsxs("form",{className:"formWrapper",onSubmit:d(g),children:[t.jsx(l,{name:"userName",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"First Name",inputIcon:!0,placeholder:"First Name",type:"text",value:e.value,onChange:e.onChange,isError:!!a.userName,errorText:(r=a.userName)==null?void 0:r.message})}}),t.jsx(l,{name:"userEmail",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Email",inputIcon:!0,placeholder:"example@gmail.com",type:"email",value:e.value,onChange:e.onChange,isError:!!a.userEmail,errorText:(r=a.userEmail)==null?void 0:r.message})}}),t.jsx(l,{name:"userLastName",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Last Name",inputIcon:!0,placeholder:"Last Name",type:"text",value:e.value,onChange:e.onChange,isError:!!a.userLastName,errorText:(r=a.userLastName)==null?void 0:r.message})}}),t.jsx(l,{name:"userPhone",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Phone Number",inputIcon:!0,placeholder:"Phone Number",type:"tel",value:e.value,onChange:e.onChange,isError:!!a.userPhone,errorText:(r=a.userPhone)==null?void 0:r.message})}}),t.jsx(l,{name:"userDate",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Event Date",inputIcon:!0,placeholder:"DD/MM/YYYY",type:"date",value:e.value,onChange:e.onChange,isError:!!a.userDate,errorText:(r=a.userDate)==null?void 0:r.message})}}),t.jsx(l,{name:"userCompany",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Company Name",inputIcon:!0,placeholder:"Company",type:"text",value:e.value,onChange:e.onChange,isError:!!a.userCompany,errorText:(r=a.userCompany)==null?void 0:r.message})}}),t.jsx(l,{name:"startTime",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Start Time",inputIcon:!0,placeholder:"Start Time",type:"time",value:e.value,onChange:e.onChange,isError:!!a.startTime,errorText:(r=a.startTime)==null?void 0:r.message})}}),t.jsx(l,{name:"endTime",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"End Time",inputIcon:!0,placeholder:"End Time",type:"time",value:e.value,onChange:e.onChange,isError:!!a.endTime,errorText:(r=a.endTime)==null?void 0:r.message})}}),t.jsx(l,{name:"eventType",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Type of Event",inputIcon:!0,placeholder:"Type of Event",type:"text",value:e.value,onChange:e.onChange,isError:!!a.eventType,errorText:(r=a.eventType)==null?void 0:r.message})}}),t.jsx(l,{name:"peopleCount",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Number of People",inputIcon:!0,placeholder:"0",type:"number",value:e.value,onChange:e.onChange,isError:!!a.peopleCount,errorText:(r=a.peopleCount)==null?void 0:r.message})}}),t.jsx(l,{name:"additionalInfo",control:n,render:({field:e})=>{var r;return t.jsx(i,{labelText:"Additional Information",inputIcon:!0,placeholder:"Additional Information",type:"text",...e,value:e.value??"",isError:!!a.additionalInfo,errorText:(r=a.additionalInfo)==null?void 0:r.message,isInput:!1,areaPlaceholder:"Additional Information"})}}),t.jsxs("div",{className:"btnsWrapper",children:[t.jsxs("button",{type:"button",className:"clear",onClick:x,children:[t.jsx(I,{}),"Clear the form"]}),t.jsx(N,{typeButton:"submit",text:"Send",variant:"fill"})]})]})]})})},J=()=>{const[o,m]=h.useState(!1),{data:n,isLoading:d}=B(),a=P(975),p=h.useMemo(()=>n?n.map(s=>({id:s.id,tagText:s.tag_text,title:s.main_text,description:s.description,buttonText:s.button_enabled?s.button_text:"",backgroundImage:`https://new.gosht.com${s.background_image}`,buttonLink:s.button_link})):[],[n]),c=()=>{m(!1)},x=()=>{console.log("true"),m(!0)};return d?t.jsx("div",{children:"Loading..."}):t.jsxs("div",{children:[!a&&t.jsx(b,{btnClick:x,data:p}),a&&t.jsx(y,{data:p,btnClick:()=>m(!0)}),t.jsx(f,{}),t.jsx(F,{isOpen:o,onClose:c})]})};export{J as default};
