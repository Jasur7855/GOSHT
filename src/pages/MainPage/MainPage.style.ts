import styled from "styled-components";

export const SMainPage = styled.div`
  .menuInfo {
    margin: 0 ${(props) => props.theme.padding.padding6024};
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
      padding-right:52px ;
      
      .burger{
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
          font-family: ${props=>props.theme.fontFamily.roboto};
          font-weight: 300;
          max-width: 156px;
          line-height: 128%;
        }
      }
      .center{
        margin: 0 calc(5.1vw + 7px);
        padding: 0 calc(5.1vw + 7px);
        border-left:  1px solid #FFFFFF80;
        border-right: 1px solid #FFFFFF80;
      }
    }
  }
  .mainMenu {
    display: grid;
    padding: 60px ${(props) => props.theme.padding.padding6024};
    grid-template-columns: repeat(5, 1fr);
    gap: 36px 30px;
  }
  .allFood {
    padding: calc(1.9vw + 25px) ${(props) => props.theme.padding.padding6024};
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
        font-family: ${(props) => props.theme.fontFamily.roboto};
      }
    }
  }
  @media (max-width: 1190px) {
    
    .mainMenu {
      grid-template-columns: repeat(4, 1fr);
    }
    .burger{
      display: none;
    }
  }
  @media (max-width: 975px) {
    .menuInfo{
      height: auto;
      padding: 42px 0;
      .bgImg {
        background-color: transparent;
        flex-direction: column;
        gap: 6px 0;
        height: auto;
        padding: 0;
        div,.center{
          background-color: #151515;
          width:100%;
          border-radius: 6px;
          padding:26px 16px;
          p{
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
  }
  @media (max-width: 575px) {
    .mainMenu {
      grid-template-columns: 1fr;
    }
  }
`;
