import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root {
}
* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family:${(props) => props.theme.fontFamily.font} , ${(props) =>
  props.theme.fontFamily.titleFont}, serif, sans-serif;
  background-color: ${(props) => props.theme.colors.white};
  
}
html {
  scrollbar-width: none; 
}
html::-webkit-scrollbar {
  display: none;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}


nav,
footer,
header,
aside {
  display: block;
}


html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 100%;
  line-height: 1;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}


input,
button,
textarea {
  font-family: inherit;
}


input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
/* Для WebKit-браузеров (Chrome, Safari, Edge) */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Для Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}


img {
  width: 100%;
  height: 100%;
}
h1{
  font-size: calc(6.9vw - 0.056px)/*100-26*/ ;
}
h2{
  font-size: calc(2.4vw + 16.8px )/*52-26*/;
  font-family: ${(props) => props.theme.fontFamily.robotoSerif};
  font-weight: 500;
}
h3{
  font-size: calc(1.5vw + 20.3px)/*42-26*/;
}
h4{
  font-size: calc(0.9vw + 22.5px)/*36-26*/;
  
}
h5{
  font-size: calc(0.4vw + 18.6px)/*24-20*/;
  font-weight: 500;
}
h6{
  font-size: 20px;
}
label{
  font-weight: 500;
}
a{
  color:#222;
}
@media (min-width: 1920px) {
  .container {
    max-width: 1440px;
  }
  .mainMenu {
    grid-template-columns: repeat(4, 1fr) !important;
    padding: 60px 0 !important;
  }
  .allFood, .aboutGosht, .clientSlider {
    padding: 60px 0 !important;
  }
  .adaptive, .footerApadtive {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menuInfo, .footer {
    width: 1440px !important;
    margin: 0 !important;
  }
}
`;
