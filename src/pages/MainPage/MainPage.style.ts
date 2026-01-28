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
          font-family: ${(props) => props.theme.fontFamily.roboto};
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
    padding: 60px ${(props) => props.theme.padding.padding6024};
    grid-template-columns: repeat(4, 1fr);
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
  .aboutGosht {
    padding: 0 ${(props) => props.theme.padding.padding6024}
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
            font-family: ${(props) => props.theme.fontFamily.robotoSerif};
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
            font-family: ${(props) => props.theme.fontFamily.roboto};
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
   .fill{
    margin: 36px auto 0;
   }
    span {
      font-size: calc(0.4vw + 14.6px);
      color: ${(props) => props.theme.colors.red};
      font-family: ${(props) => props.theme.fontFamily.roboto};
      display: block;
      text-align: center;
      margin-bottom: calc(0.3vw + 12px);
    }
    h4 {
      text-align: center;
      font-weight: 500;
      font-family: ${(props) => props.theme.fontFamily.robotoSerif};
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
      .sliderBtns {
        padding: 0 ${(props) => props.theme.padding.padding6024};
        margin-top: 32px;
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
`;

export const SMainCard = styled.div`
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
      font-family: ${(props) => props.theme.fontFamily.roboto};
      font-weight: 500;
      margin-bottom: 8px;
    }
    .stars {
      margin: 0 auto 16px;
      padding: 0;
    }
    p {
      font-family: ${(props) => props.theme.fontFamily.roboto};
      font-size: calc(0.4vw + 12.6px);
      text-align: center;
    }
  }
`;
