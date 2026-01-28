import styled from "styled-components";

export const SMenuCard = styled.div`
  display: flex;
  flex-direction: column;
  .img {
    border-radius: 12px 12px 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: calc(12.5vw + 0px);
    padding: 6px;
    margin-bottom: 16px;
   
  }
  .description{
    h5{
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #151515;
        font-family: ${props=>props.theme.fontFamily.robotoSerif};
        font-weight: 400;
        line-height: 118%;
    }
    p{
        font-family: ${props=>props.theme.fontFamily.roboto};
        line-height: 129%;
    }
  }
  @media (max-width:975px) {
    .img {
        height:calc(23.3vw + 92.5px);
    }
  }
`;
