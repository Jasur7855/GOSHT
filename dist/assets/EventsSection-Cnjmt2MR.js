import{d as s,j as i}from"./ui-CuDAUpxO.js";import{H as c,m as l,A as o}from"./index-D7ge506g.js";import{B as p}from"./Button-CvnSNFOY.js";const x=s.div`
  display: flex;
  align-items: center;
  flex-direction: ${t=>t.$isWrap?"row":"row-reverse"};
  gap: 20px calc(6.1vw + 17.1px);
  margin-bottom: calc(2.4vw + 16.8px);
  .ActivityImg {
    width: calc(20vw + 252px);
    img{
      border-radius:8px ;
    }
  }
  .ActivityInfo {
    width: calc(17.6vw + 261px);
    display: flex;
    flex-direction: column;
    align-items: ${t=>t.$isWrap?"flex-start":"flex-end"};
    gap: 16px;
    text-align: left;
    h3 {
      text-align: ${t=>t.$isWrap?"left":"right"};
    }
    .description {
      font-family: ${t=>t.theme.fontFamily.roboto};
      font-size: 16px;
      line-height: 150%;
      font-weight: 400;
      color: var(--black);
      margin-bottom: 0;
      text-align: ${t=>t.$isWrap?"left":"right"};
    }
    
  }

  @media (max-width: 875px) {
    h3,.description {
        text-align: left !important;
    }
    flex-direction: column;
    .ActivityInfo {
      width: 100%;
    }
    .ActivityImg {
      width: 100%;
    }
  }
`,v=({isWrap:t,onClick:n,eventTitle:e,eventSubtitle:a,eventImg:r})=>i.jsxs(x,{$isWrap:t,children:[i.jsx("div",{className:"ActivityImg ",children:i.jsx("img",{src:r,alt:"activity"})}),i.jsxs("div",{className:"ActivityInfo",children:[i.jsx(c,{variant:"h3",text:e}),i.jsx("p",{className:"description",children:a}),i.jsx(p,{btnLink:n,typeButton:"button",text:"Know more",variant:"outlined"})]})]}),d=s.div`
  padding: calc(0.9vw + 38.5px) calc(3.4vw + 11.3px) calc(4.7vw + 34.3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: calc(0.2vw + 5.3px);
  }
  p {
    margin-bottom: calc(4.9vw + 7.7px);
    color: rgba(0, 0, 0, 0.5);
    font: calc(0.4vw + 14.6px) / 0.9 "Roboto";
  }
  .eventsWrapper {
    width: 100%;
  }
  a {
    width: 100% !important;
  }
`,f=()=>{const{data:t}=l(null),n=(t==null?void 0:t.filter(e=>e.is_visible))||[];return i.jsxs(d,{className:"container",children:[i.jsx(c,{variant:"h2",text:"Activities"}),i.jsx("p",{children:"Activities inside the Gōsht Restaurant"}),i.jsx("div",{className:"eventsWrapper",children:n.length>0?n.map((e,a)=>i.jsx(v,{eventTitle:e.main_title,eventSubtitle:e.main_description,eventImg:`${o}${e.media.path}`,isWrap:a%2===0,onClick:`/events/${e.id}`},e.id)):i.jsx("p",{children:"No events available."})})]})};export{f as E};
