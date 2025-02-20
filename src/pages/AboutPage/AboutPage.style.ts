import styled from "styled-components";

export const SContainer = styled.main`
  padding: 0 ${(props) => props.theme.padding.padding6024} calc(4.7vw + 34.4px) ;
  position: relative;
  padding-top: 96px;
  .bigBlack{
    position: absolute;
    z-index: 1000;
    left: calc(5.3vw - 21.6px);
    top:-70px;
    width: calc(10.7vw + 60px);
    height: calc(10.7vw + 60px);
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: calc(2.4vw + 17px) 0;
    .formWrapper{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 42px 30px;
      .children{
        display: flex;
        flex-direction: column;
        gap: 12px ;
        h4{
          font-weight: 500 !important;
        }
        p{
          font-size: calc(0.9vw + 10.5px);
        }
      }
      .form{
        h4{
          font-family: ${props => props.theme.fontFamily.robotoSerif};
          margin-bottom:calc(0.8vw + 13.2px);
          font-weight: 500;
          min-height: 64px;
          
        }
        button{
          margin-left:  auto;
          margin-top: 40px;
        }
      }
    }
  }
  @media (max-width:1075px) {
    .bigBlack{
      top: -30px;
    }
    .wrapper{
      .formWrapper{
        grid-template-columns: 1fr;
      }
    }
  }
`;

export const SAboutPageSocial = styled.section`
  height: calc(21.6vw + 79px);
  background-image: url(/img/aboutdesk.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: calc(1.5vw + 10.4px) 0;
  .footerSocial {
    display: flex;
    gap: 0 30px;
    margin-right: ${props => props.theme.padding.padding6024};
    .social {
      padding: 12px 24px;
      border: 1px solid #cccccc80;
      border-radius: 4px;
      color: white;
      font-size: 24px;
    }
  }
`;
export const SAboutGosht = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: calc(2.8vw + 31.4px) 0;
  .children {
    h3 {
      margin-bottom: 12px;
    }
    p {
      font-size: calc(0.9vw + 10.5px);
      font-family: ${(props) => props.theme.fontFamily.roboto};
      line-height: 120%;
    }
  }
  @media (max-width: 975px) {
    flex-direction: column;
  }
`;
export const SAboutLavka = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: calc(0.9vw + 38.5px);
  .img {
    width: calc(18vw + 260px);
    img {
      width: 100%;
    }
  }
  .text {
    h3 {
      margin-bottom: 12px;
    }
    p {
      font-size: calc(0.9vw + 10.5px);
      font-family: ${(props) => props.theme.fontFamily.roboto};
      line-height: 120%;
      width: calc(30vw + 214px);
    }
  }
  @media (max-width: 975px) {
    flex-direction: column;
  }
`;
