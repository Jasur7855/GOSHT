import styled from "styled-components";

interface IActivityProps {
  $isWrap: boolean;
}

export const SActivityItem = styled.div<IActivityProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.$isWrap ? "row" : "row-reverse")};
  gap: 20px calc(6.1vw + 17.1px);
  margin-bottom: calc(2.4vw + 16.8px);
  .ActivityImg {
    width: calc(20vw + 252px);
    img{
      border-radius:8px ;
    }
  }
  .ActivityInfo {
    width: calc(17.6vw + 261px);
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.$isWrap ? "flex-start" : "flex-end")};
    gap: 16px;
    text-align: left;
    h3 {
      text-align: ${(props) => (props.$isWrap ? "left" : "right")};
    }
    .description {
      font-family: ${props=>props.theme.fontFamily.roboto};
      font-size: 16px;
      line-height: 150%;
      font-weight: 400;
      color: var(--black);
      margin-bottom: 0;
      text-align: ${(props) => (props.$isWrap ? "left" : "right")};
    }
    
  }

  @media (max-width: 875px) {
    h3,.description {
        text-align: left !important;
    }
    flex-direction: column;
    .ActivityInfo {
      width: 100%;
    }
    .ActivityImg {
      width: 100%;
    }
  }
`;
