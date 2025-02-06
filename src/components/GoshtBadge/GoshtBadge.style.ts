import styled from "styled-components";

export const SGoshtBadge = styled.div`
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    gap: 0 14px;
    margin-bottom: calc(0.8vw + 13.2px);
    img {
      width: calc(2.1vw + 34px);
    }
    .text {
      h5 {
        font-size: calc(0.8vw + 13px);
        font-family: ${(props) => props.theme.fontFamily.robotoSerif};
        margin-bottom: 4px;
        line-height: 117%;
      }
      span {
        font-size: calc(0.6vw + 10px);
        color: ${(props) => props.theme.colors.grey};
        font-family: ${(props) => props.theme.fontFamily.roboto};
      }
    }
  }
  .children {
    border: 1.5px solid #00000033;
    border-radius: 12px;
    padding: calc(0.8vw + 13.2px);
    h5 {
      font-size: calc(0.8vw + 17.2px);
      font-family: ${(props) => props.theme.fontFamily.robotoSerif};
    }
    p {
      font-size: calc(0.2vw + 13.2px);
      font-family: ${(props) => props.theme.fontFamily.roboto};
    }
  }
`;
