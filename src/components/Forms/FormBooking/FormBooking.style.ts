import styled from "styled-components";

export const SFormBooking = styled.div`
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
      font-family: ${(props) => props.theme.fontFamily.robotoSerif};
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
`;
