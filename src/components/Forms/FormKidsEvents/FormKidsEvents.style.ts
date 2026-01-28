import styled from "styled-components";

export const SFormKidsEvent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 20px calc(3vw + 8.7px);
  .exit {
    position: absolute;
    top: calc(4.1vw + 4.5px);
    right: calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #b9bcbb;
  }
  h4 {
    max-width: 606px;
    text-align: center;
    font-weight: 500;
    font-family: ${(props) => props.theme.fontFamily.robotoSerif};
    margin-bottom: calc(1.9vw + 13px);
  }
  form {
    display: flex;
    width: calc(48.4vw + 105.6px);
    flex-direction: column;
    gap: calc(1.7vw + 5.6px) 0;
    .formFlex {
      display: flex;
      justify-content: space-between;
      gap: 0 30px;
    }
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
    .choose {
      border-radius: 4px;
      background-color: #aa181a0d;
      text-align: center;
      padding: calc(-0.8vw + 22.8px) 20px;
      font-family: ${(props) => props.theme.fontFamily.roboto};
      h5 {
        font-size: calc(0.4vw + 14.6px);
      }
    }
    .chooseWrapper {
      display: flex;
      justify-content: space-between;
      gap: 20px 30px;
      .masterClass {
        width: 50%;

        .checkboxWrapper {
          display: flex;
          margin-top: 20px;
        }
      }
      .show {
        width: 50%;
        label {
          textarea {
            height: 132px;
          }
        }
      }
    }
    .btnsWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .clear {
        background-color: transparent;
        font-family: ${(props) => props.theme.fontFamily.roboto};
        color: #8c8e91;
        font-size: 16px;
        svg {
          margin-right: 12px;
        }
      }
    }
  }
  @media (max-width: 875px) {
    h4 {
      text-align: left;
    }
    form {
      .formFlex {
        flex-direction: column;
        gap: 12px;
      }
      .chooseWrapper {
        flex-direction: column;
        .masterClass,
        .show {
          width: 100%;
        }
      }
      .btnsWrapper {
        flex-direction: column-reverse;
        gap: 24px;
        .clear,
        .Button.fill {
          width: 90vw;
        }
        .clear {
          padding: 12px 0;
        }
      }
    }
  }
`;

export const SKidsDropDown = styled.div`
  width: 100%;
  p {
    margin-bottom: 8px;
    font-size: calc(0.4vw + 10.6px);
    font-family: "Roboto";
    font-weight: 500;
  }
  select {
    width: 100%;
    border: 1px solid #00000033;
    padding: 16px;
    border-radius: 12px;
    cursor: pointer;
    option {
      font-size: calc(0.4vw + 10.6px);
      font-weight: 500;
    }
  }
`;
