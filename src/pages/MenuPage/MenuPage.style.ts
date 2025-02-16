import styled from "styled-components";

export const SMenuPage = styled.section`
  padding: calc(2.3vw + 31.5px) ${(props) => props.theme.padding.padding6024}
    calc(15.8vw - 7.2px);
  display: flex;
  gap: 0 135px;
  @media (max-width: 975px) {
    flex-direction: column;
  }
`;

export const SAsside = styled.aside`
  .dev {
    width: calc(7.3vw + 300px);
    h6 {
      padding-bottom: 6px;
      border-bottom: 1px solid #b9bcbb;
    }

    nav {
      margin-top: 24px;

      ul {
        li {
          position: relative; /* Добавляем relative для правильного позиционирования */
          transition: all.3s;
          a {
            display: inline-block;
            position: relative;
            padding: 12px 24px;
            font-size: 24px;
            font-family: ${(props) => props.theme.fontFamily.robotoSerif};
          }
        }

        li::after {
          /* Исправляем селектор, убираем пробел */
          content: "";
          background-image: url(/icons/starRed.svg);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 26px;
          height: 26px;
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.3s ease-in-out; /* Добавляем плавное появление */
        }

        li:hover::after {
          opacity: 1;
        }
        li:hover {
          transform: translateX(10px);
          a {
            color: #aa181a;
          }
        }
      }
    }
  }

  .dropDown {
    width: 405px;

    h5 {
      font-size: 16px !important;
      font-weight: 400;
      color: black;
      border-bottom: 1px solid #b9bcbb;
    }

    font-family: ${(props) => props.theme.fontFamily.robotoSerif};

    ul {
      a {
        color: black;
        transition: all 0.2s ease-in-out;
      }
      a::after {
        /* Исправляем селектор, убираем пробел */
        content: "";
        background-image: url(/icons/starRed.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 16px;
        height: 16px;
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        
      }

      a:hover::after {
        opacity: 1;
      }
      a:hover {
        transform: translateX(10px);

        color: #aa181a;
      }
    }
  }
  @media (max-width: 975px) {
    .dropDown {
      width: 100%;
    }
  }
`;

export const SMainMenu = styled.main`
  h4 {
    margin-bottom: calc(0.4vw + 4.6px);
    font-family: ${(props) => props.theme.fontFamily.robotoSerif};
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    max-width: 375px;
    font-family: ${(props) => props.theme.fontFamily.roboto};
    color: #b9bcbb;
    margin-bottom: calc(0.6vw + 24px);
  }
  .menuWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 36px 30px;
  }
  @media (max-width: 1190px) {
    .menuWrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 975px) {
    .menuWrapper {
      grid-template-columns: 1fr;
    }
  }
`;
