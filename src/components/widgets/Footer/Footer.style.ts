import styled from "styled-components";

export const SFooter = styled.div`
  user-select: none;
  background-color: ${(props) => props.theme.colors.red};
  .footer {
    padding: 52px ${(props) => props.theme.padding.padding6024};
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    .top {
      display: flex;
      justify-content: space-between;
      .footer_logo {
        width: 136px;
        height: 136px;
      }
      .links_list {
        display: flex;
        flex-direction: column;
        gap: 28px;
        .title {
          font-family: ${(props) => props.theme.fontFamily.robotoSerif};
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        a {
          text-decoration: none;
          font-family: ${(props) => props.theme.fontFamily.roboto};
          color: var(--white);
          font-size: 16px;
          font-weight: 400;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 50px 0;
        .info_item {
          display: flex;
          flex-direction: column;
          .title {
            font-family: ${(props) => props.theme.fontFamily.roboto};
            font-size: 18px;
            font-weight: 500;
          }
          p{
            font-family: ${(props) => props.theme.fontFamily.roboto};
            font-size: 16px;
            font-weight: 400;
          }
          a:nth-child(2) {
            margin-top: 24px;
          }
          a {
            text-decoration: none;
            font-family: ${(props) => props.theme.fontFamily.font};
            font-size: 16px;
            font-weight: 400;
            color: ${(props) => props.theme.colors.white};
          }
        }
      }
    }
    .divider {
      margin-top: 30px;
      margin-bottom: 36px;
      width: 100%;
      height: 1px;
      background-color: gray;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .schedule {
        display: flex;
        flex-direction: column;
        span {
          font-family: var(--font);
          font-size: 16px;
          font-weight: 400;
          color: ${(props) => props.theme.colors.white};
        }
      }
      .social_media {
        display: flex;
        gap: 12px;
        a {
          width: 72px;
          height: 48px;
        }
      }
    }
  }
  .footerMob {
    display: none;
    flex-direction: column;
    align-items: center;
    padding: calc(1.9vw + 25px) ${(props) => props.theme.padding.padding6024};
    gap: 32px 0;
    .footerLogo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        width: calc(5.6vw + 55px);
      }
      .footerLogoInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: ${(props) => props.theme.fontSize.font18$14};
          color: ${(props) => props.theme.colors.white};
          font-weight: 500;
          text-align: right;
        }
        .subTitle {
          font-size: ${(props) => props.theme.fontSize.font16$12};
          color: ${(props) => props.theme.colors.white};
          font-weight: 300;
          line-height: 150%;
          font-family: "Roboto";
          text-align: right;
        }
      }
    }
    .footerLinks {
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      padding-bottom: 32px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 22px 0;
      .footerDropDown {
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        cursor: pointer;
        .dropDown {
          
          color: #ffffff;
          padding: 6px 0;
          font-size: ${(props) => props.theme.fontSize.font18$14};
        }
        .footerAddress {
          display: flex;
        }
      }
      .footerAddress {
        display: flex;
        flex-direction: column;
        gap: 12px 0;
        .address {
          h5 {
            font-size: ${(props) => props.theme.fontSize.font18$14};
            color: white;
            margin-bottom: 6px;
            line-height: 170%;
          }
          p {
            font-size: ${(props) => props.theme.fontSize.font16$12};
            color: white;
            font-family: "Roboto Serif";
          }
        }
      }
    }

    .footerSocial {
      display: flex;
      gap: 0 30px;
      .social {
        padding: 16px 26px;
        border: 1px solid #cccccc80;
        border-radius: 4px;
        color: white;
        font-size: 24px;
      }
    }
  }
  @media (max-width: 975px) {
    .footer {
      display: none;
    }
    .footerMob {
      display: flex;
    }
  }
`;
