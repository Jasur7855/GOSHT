import styled from "styled-components";

export const SMainPage = styled.div`
  .mainMenu {
    display: grid;
    padding: 60px ${props=>props.theme.padding.padding6024};
    grid-template-columns: repeat(5, 1fr);
    gap: 36px 30px;
  }
  .allFood{
    padding: calc(1.9vw + 25px) ${props=>props.theme.padding.padding6024};
    display: flex;
    align-items: center;
    
    gap:20px 105px;
    .allFoodImg{
      background-image: url(/img/Allmenu.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 16px;
      width:calc(20vw + 252px);
      height: calc(11.5vw + 156.7px);
      border-radius: 8px;
    }
    .allFoodText{
      h4{
        margin-bottom: 16px;
        font-weight: 500;
      }
      p{
        margin-bottom: 20px;
        max-width: calc(15.3vw + 269px);
        line-height: 125%;
        font-family: ${props=>props.theme.fontFamily.roboto};
      }
    }
  }
  @media (max-width:1190px) {
    .mainMenu {
        grid-template-columns: repeat(4, 1fr);

    }
  }
  @media (max-width:975px) {
    .mainMenu {
        grid-template-columns: 1fr 1fr;

    }
    .allFood{
      flex-direction: column;
      align-items: center;
      background-color: #AA181A14;

    }
  }
  @media (max-width:575px) {
    .mainMenu {
        grid-template-columns: 1fr ;

    }
  }
`;
