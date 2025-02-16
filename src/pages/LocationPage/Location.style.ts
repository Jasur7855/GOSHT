import styled from "styled-components";

export const SLocation = styled.main`
  .hours {
    background-image: url(/img/Location.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: calc(41vw + 46.5px);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 52px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      font-family: ${(props) => props.theme.fontFamily.robotoSerif};
      h1 {
        margin-bottom: 10px;
        line-height: 110%;
      }
      p {
        margin-bottom: 24px;
        font-family: ${(props) => props.theme.fontFamily.roboto};
        font-size: calc(1.3vw + 0px);
        font-weight: 300;
        text-align: center;
        line-height: 122%;
      }
    }
  }
  .menuInfo {
    margin: 0 ${(props) => props.theme.padding.padding6024};
    display: flex;
    align-items: flex-end;
    height: 190px;
    position: relative;
    margin-bottom: calc(6.3vw - 48px);
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
  .location {
    h2 {
      text-align: center;
      margin-bottom: calc(0.4vw + 4.6px);
    }
    span {
      display: block;
      color: #aa181a;
      text-align: center;
      font-size: calc(0.4vw + 14.6px);
      font-family: ${(props) => props.theme.fontFamily.roboto};
      margin-bottom: calc(0.4vw + 24.6px);
    }
    .wrapper {
      padding: calc(0.8vw + 13.2px);
      border: 1px solid #00000033;
      border-radius: 20px;
      margin: 0 calc(3.4vw + 11.3px);
      margin-bottom: calc(2.4vw + 67px);
      height: calc(19.5vw + 319px);
    }
  }
  @media (max-width: 1190px) {
    .menuInfo {
      .burger {
        display: none;
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
  }
`;
