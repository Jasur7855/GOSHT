import{d as n,j as e}from"./ui-CuDAUpxO.js";const a=n.div`
  display: inline-block;
  padding: 5px;
  background-color: #fff;
  border-radius: 4px;
  img {
    width: 20px;
    height: 20px;
  }
  p{
    display: inline-block;
    margin-left: 8px;
    font-size: 12px;
    line-height: 128%;
    color: #1A1A1A;
    font-family: ${i=>i.theme.fontFamily.robotoSerif};
  }
`,d=({cardBadge:i,badgeText:o})=>e.jsxs(a,{children:[e.jsx("img",{src:i,alt:"",className:"badge"}),o&&e.jsx("p",{children:o})]}),s=n.div`
  display: flex;
  flex-direction: column;
  .img {
    border-radius: 12px 12px 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: calc(12.5vw + 0px);
    padding: 6px;
    margin-bottom: 16px;
   
  }
  .description{
    h5{
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #151515;
        font-family: ${i=>i.theme.fontFamily.robotoSerif};
        font-weight: 400;
        line-height: 118%;
    }
    p{
        font-family: ${i=>i.theme.fontFamily.roboto};
        line-height: 129%;
    }
  }
  @media (max-width:975px) {
    .img {
        height:calc(23.3vw + 92.5px);
    }
  }
`,c=({cardTitle:i,cardSubtitle:o,cardBadge:t,cardImg:r})=>e.jsxs(s,{children:[e.jsx("div",{className:"img",style:{backgroundImage:`url(${r})`},children:e.jsx(d,{cardBadge:t})}),e.jsxs("div",{className:"description",children:[e.jsx("h5",{children:i}),e.jsx("p",{children:o})]})]});export{c as M,d as a};
