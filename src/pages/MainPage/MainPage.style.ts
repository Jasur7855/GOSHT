import styled from "styled-components";

export const SMainPage = styled.div`
  .mainMenu {
    display: grid;
    padding: 60px ${props=>props.theme.padding.padding6024};
    grid-template-columns: repeat(5, 1fr);
    gap: 36px 30px;
  }
  @media (max-width:1190px) {
    .mainMenu {
        grid-template-columns: repeat(4, 1fr);

    }
  }
  @media (max-width:975px) {
    .mainMenu {
        grid-template-columns: 1fr;

    }
  }
`;
