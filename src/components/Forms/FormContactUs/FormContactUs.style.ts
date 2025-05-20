import { colors } from "./../../../theme/roots";
import styled from "styled-components";

export const SFormContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(-0.4vw + 57px) 20px;
  .exit {
    position: absolute;
    top: calc(4.1vw + 4.5px);
    right: calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #b9bcbb;
  }
  h4 {
    font-weight: 500;
    margin-bottom: calc(0.2vw + 7px);
  }
  p {
    font-size: calc(0.2vw + 15.3px);
    color: rgba(0, 0, 0, 0.5);
    font-family: ${(props) => props.theme.fontFamily.roboto};
    margin-bottom: 40px;
  }
  .wrapper {
    display: flex;
    gap: 12px 30px;
    width: calc(52vw + 117px);
    margin-bottom: 30px;
    label {
      width: 49%;
    }
    @media (max-width: 795px) {
      flex-wrap: wrap;
      margin-bottom: 12px;
      label {
        width: 100%;
      }
    }
  }
  .textarea-wrapper {
    width: calc(52vw + 117px);
    font-family: ${(props) => props.theme.fontFamily.roboto};
    margin-bottom: 40px;
    textarea {
      margin-top: 8px;
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #fff;
      font-size: ${(props) => props.theme.fontSize.font16$12};
      resize: none;
      border-radius: 12px;
      padding: 16px;
    }
  }
  .sendWrapper {
    display: flex;
    gap: 12px 30px;
    width: calc(52vw + 117px);
    flex-wrap: wrap-reverse;
    padding: 12px;
    .text {
      flex-grow: 1;
      background-color: rgba(170, 24, 26, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${(props) => props.theme.fontFamily.roboto};
      font-weight: 500;
      font-size: ${(props) => props.theme.fontSize.font20$16};
      span {
        color: rgba(170, 24, 26, 1);
        margin-left: 4px;
      }
    }
    @media (max-width: 795px) {
      button {
        width: 100%;
      }
      .text {
        flex-grow: 0;
        padding: 20px;
        width: 100%;
        flex-direction: column;
        text-align: center;
        span {
          margin-top: 8px;
        }
      }
    }
  }
`;
