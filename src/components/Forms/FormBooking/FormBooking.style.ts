import styled from "styled-components";

export const SFormBooking = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  max-height: 100vh;
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
  }
  .image {
    flex-grow: 1;
    img {
      width: 100%;
    }
  }

  @media (max-width: 975px) {
    flex-direction: column;
    padding: 56px 20px;
    .image {
      height: 400px   ;
      flex-grow: 0;
      img{
        border-radius: 12px;
      }
    }
  }
`;
