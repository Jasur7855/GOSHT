import styled from "styled-components";

export const SFormPrivateEvent = styled.div`
  padding: 52px calc(3vw + 8.7px) calc(3vw + 8.7px);
  position: relative;
  .exit{
    position: absolute;
    top:calc(4.1vw + 4.5px);
    right:calc(3.2vw + 8px);
    font-size: 28px;
    cursor: pointer;
    color: #B9BCBB;
  }
  h4 {
    text-align: center;
    max-width: 801px;
    font-family: ${(props) => props.theme.fontFamily.robotoSerif};
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
        font-family: ${(props) => props.theme.fontFamily.roboto};
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
`;
