import styled from "styled-components";
interface IEventsCardProps {
  $mainBg: string;
}

export const SEventsCard = styled.div<IEventsCardProps>`
  display: flex;
  padding: calc(4.1vw + 4.5px) calc(3.4vw + 11.3px) calc(4.7vw + 34.4px);
  gap: 42px 135px;

  .leftSide {
    width: calc(7.3vw + 300px);
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    h6{
      font-weight: 500;
      padding-bottom: 8px;
      border-bottom:1px solid  #B9BCBB;

    }
  }

  .Main {
    flex: 1;

    .breadcrumb {
      display: flex;
      gap: 16px;
      align-items: center;
      color: ${(props) => props.theme.colors.textGrey};
      font-size: ${(props) => props.theme.fontSize.font20$16}; /* Исправлено */
      margin-bottom: 32px;
      font-family: "Roboto";
      svg {
        color: ${(props) => props.theme.colors.red};
      }
    }

    h4 {
      margin-bottom: calc(0.9vw + 18.5px);
    }

    .mainImg {
      display: block;
      width: 100%;
      height: calc(17.5vw + 134.5px);
      background-image: url(${(props) => props.$mainBg});
      background-size: cover;
      background-position: center;
      border-radius: 8px;
      margin-bottom: 32px;
    }

    h5 {
      line-height: 115%;
      max-width: 825px;
      font-family: "Roboto Serif";
      margin-bottom: calc(2.4vw + 16.8px);
    }

    .btnWrapper {
      display: flex;
      gap: 0 6px;
      margin-bottom: calc(0.4vw + 18.6px);

      button {
        font-family: ${(props) => props.theme.fontFamily.roboto};
        padding: 4px 12px;
        font-weight: 500;
      }
    }

    .eventDateTime {
      h5 {
        border-left: 4px solid ${(props) => props.theme.colors.red};
        padding-left: 10px;
        margin-bottom: calc(0.9vw + 18.5px);
      }

      p {
        margin-bottom: 16px;
        font-size: 16px;
        font-family: ${(props) => props.theme.fontFamily.roboto};
        color: rgba(0, 0, 0, 0.4);
        max-width: 825px;
        line-height: 112.5%;
      }

      .last {
        margin-bottom: 32px;
      }
    }
    .bookingWrapper {
      .fill {
        font-family: ${(props) => props.theme.fontFamily.robotoSerif};
      }
    }
    .bookingWrapper h5:nth-child(3),
    .bookingWrapper h5:nth-child(4) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1190px) {
    flex-direction: column-reverse;
    align-items: center;
    .leftSide{
        width: 100%;
    }
    .mainImg {
      width: 100%;
      height: auto;
    }
    .bookingWrapper .btnWrapper {
      flex-direction: column;
      gap: 12px 0;
      .Button {
        display: block;
        width: 100%;
      }
    }
  }
`;
