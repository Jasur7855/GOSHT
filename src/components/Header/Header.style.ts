import styled from "styled-components";

export const SHeader = styled.header`
  background-color: ${props=>props.theme.colors.red};
  padding:12px ${props=>props.theme.padding.padding6024} ;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 100px;
    height: 38px;
  }

  nav ul {
    display: flex;
    gap: 0 24px;

    a {
      color: #fff;
    }
  }

  #burgerMenu {
    display: none;
    padding: 0 calc(1.1vw + 8px);
  }

  .header_buttons {
    display: flex;
    gap: 0 20px;
    align-items: center;

    button {
      background-color: transparent;
      padding: calc(0.6vw + 6px) calc(1.1vw + 8px);
      border-radius: 4px;
      border: 1px solid transparent;
      transition: border 0.3s;
      color:${props=>props.theme.colors.white};
      display: flex;
      align-items: center;
      gap: 0 10px;

      &:hover {
        border: 1px solid ${props=>props.theme.colors.grey};
      }

      svg {
        width: 22px;
        height: 22px;
      }

      span {
        background-color: transparent !important;
      }
    }

    button:nth-child(2) {
      background-color: ${props=>props.theme.colors.white};
      color: #1a1a1a;
    }
  }

  @media (max-width: 1050px) {
    #burgerMenu {
      display: block;
      width: auto;
      font-size: 24px;
      font-weight: 900;
      color: white;
    }

    nav {
      display: none;
    }

    .header_buttons button {
      display: none;
    }

    .header_buttons button:nth-child(2) {
      display: block;
      span {
        display: none;
      }
    }
  }

  @media (max-width: 875px) {
    // Тут добавь свои стили
  }
`;
