import styled from "styled-components";

export const SKidsEventFormInfo = styled.section`
  height: calc(10.2vw + 337px);
  padding: 52px ${(props) => props.theme.padding.padding6024};
  background-image: url("/img/Kids.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const SKidsEventPrograms = styled.section`
  padding: 52px ${(props) => props.theme.padding.padding6024};
  h2 {
    text-align: center;
    margin-bottom: 8px;
    line-height: 120%;
    display: flex;
    justify-content: center;
    div {
      margin-left: 10px;
    }
  }
  p {
    color: ${(props) => props.theme.colors.grey};
    font-size: ${(props) => props.theme.fontSize.font20$16};
    text-align: center;
    max-width: 778px;
    margin: 0 auto calc(2.4vw + 17px);
    font-family: ${(props) => props.theme.fontFamily.roboto};
  }
  .swiper-slide {
    height: calc(14.2vw + 274px);
    display: grid;
    grid-template-columns: 1fr calc(17.2vw + 262px) 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    margin-bottom: 42px;
    .galleryImg {
      background-image: url("/img/ladyBag.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  .sliderBtns {
    display: flex;
    justify-content: space-between;
    .arrBtn {
      width: 38px;
      height: 38px;
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colors.grey};
      border-radius: 4px;
      cursor: pointer;
      z-index: 30;
    }
  }
  .swiper-slide .galleryImg.main {
    grid-column: 2/3;
    grid-row: 1/3;
  }
  .programsWrapper {
    display: flex;
    gap: 42px 30px;
    margin-bottom: calc(0.9vw + 38.5px);
    .image {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 8px;
      height: calc(4.5vw + 310px);
      margin-bottom: calc(1.1vw + 16px);
    }
    h4 {
      text-align: left;
      margin-bottom: calc(0.4vw + 10.6px);
      font-weight: 500;
      font-family: ${(props) => props.theme.fontFamily.robotoSerif};
    }
    p {
      text-align: left;
      margin: 0 0 24px;
      font-size: ${(props) => props.theme.fontSize.font16$14};
      max-width: 530px;
    }
    .masterClass {
      .image {
        background-image: url("/img/master.png");
      }
      width: 50%;

      .plans_wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px 15px;
        margin-bottom: 12px;
      }
      .plan {
        padding: 16px 0;
        text-align: center;
        border: 2px solid #00000033;
        border-radius: 12px;
        cursor: pointer;
        font-family: ${(props) => props.theme.fontFamily.robotoSerif};
        font-weight: 500;
      }
      .plan.red {
        color: white;
        margin-top: 32px;
        background-color: ${(props) => props.theme.colors.red};
        border-color: ${(props) => props.theme.colors.red};
      }
    }
    .shows {
      width: 50%;
      .image {
        background-image: url("/img/IronMan 55.png");
      }
      .shows_wrapper {
        border: 2px solid #00000033;
        border-radius: 12px;
        padding: 24px;
        h6 {
          padding-left: 10px;
          border-left: 4px solid ${(props) => props.theme.colors.red};
          margin-bottom: 6px;
          font-family: ${(props) => props.theme.fontFamily.robotoSerif};
          font-weight: 500;
        }
        p {
          font-size: 16px;
          font-family: ${(props) => props.theme.fontFamily.roboto};
        }
      }
    }
  }
  .gallery {
    .gallerySlider {
      .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
        display: flex;
        justify-content: center;
        align-items: center;
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          background: ${(props) => props.theme.colors.red};
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  @media (max-width: 975px) {
    .swiper-slide {
      height: auto;
      grid-template-columns: 1fr;
      .galleryImg {
        height: 200px;
      }
      .galleryImg.none {
        display: none;
      }
    }
    .programsWrapper {
      flex-direction: column;
      .masterClass,
      .shows {
        width: 100%;
      }
    }
  }
  @media (max-width: 675px) {
    .programsWrapper {
      .masterClass {
        .plans_wrapper {
          grid-template-columns: 1fr;
          .plan {
            text-align: left;
            padding: 16px 26px;
          }
        }
      }
    }
  }
`;
