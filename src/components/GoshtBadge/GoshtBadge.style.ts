import styled from "styled-components";

export const SGoshtBadge = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
    flex: 1;
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

interface IGoshtChildrenProps {
  $bgImg: string;
}

export const SGoshtChildren = styled.div<IGoshtChildrenProps>`
  background: url(${(props) => props.$bgImg}) no-repeat center/cover;
  height: calc(12vw + 331px);
  border-radius: 12px;
  position: relative;
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
      font-size: calc(0.2vw + 13.3px);
      color: #fff;
      font-weight: 400;
    }
  }
  .kidsText {
    h5 {
      font-size: calc(0.2vw + 25.2px);
      color: #fff;
      margin-bottom: 16px;
      
    }
    p {
      max-width: calc(21.3vw + 150px);
      color: #fff;
      font-family: ${(props) => props.theme.fontFamily.roboto};
      font-weight: 300;
      font-size:calc(0.9vw + 10.5px);
    }
  }
  .instagram:hover {
    border-bottom: 1px solid white;
  }

  @media (max-width: 597px) {
    .goshtKids {
      display: none;
    }
  }
`;
