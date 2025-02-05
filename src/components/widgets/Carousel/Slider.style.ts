import { fontFamily } from './../../../theme/roots';
import styled from "styled-components";

export const SSliderDesk = styled.div`
  position: relative;

  .swiper {
    width: 100% !important;
    height: calc(10.2vw + 337px);

    .swiper-wrapper {
      .swiper-slide {
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 113px calc(3.4vw + 11.3px) calc(3.4vw + 11.3px);
      }
    }
  }

  .sliderBtns {
    position: absolute !important;
    z-index: 10;
    right: 56px;
    bottom: 60px;
    display: flex;
    gap: 20px;

    button {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #cccccc80;
      background-color: transparent;
      color: white;
      font-size: 24px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .swiper-pagination-bullet {
    background: white;
  }
`;

export const SCarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  .tag {
    width: fit-content;
    color: white;
    background-color: #aa181acc;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: calc(0.4vw + 10.6px);
  }

  .title {
    font-family: "Roboto Serif";
    line-height: 110%;
    color: white;
  }

  .description {
    font-family: "Roboto";
    font-size: calc(0.4vw + 12.6px);
    line-height: 22px;
    color: white;
    max-width: 400px;
  }
`;
export const SSliderMobile = styled.div`
  .swiper-pagination-bullet-active{
    background-color: #000 !important;
  }
  .sliderImg {
    background-image: url(/img/Main.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(50vw + 12.5px);
    margin-bottom: 20px;
    
  }
  .sliderText {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    margin-bottom: 20px;
    .tag {
      color: white;
      background-color: ${props=>props.theme.colors.red};
      padding: 4px 0;
      border-radius: 4px;
      font-size: calc(0.4vw + 10.6px);
      text-transform: uppercase;
      width: 100px;
      text-align: center;
    }
    h1{
    }
    p{
      font-family: ${props=>props.theme.fontFamily.roboto};
      font-size: calc(0.4vw + 12.6px);
      font-weight: 300;
      line-height: 114%;
    }
    button{
      width: 100%;
    }
  }
  .sliderBtns {
    display: flex;
    justify-content: space-between;
    padding:0 24px;

    button {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #0000004D;
      background-color: transparent;
      color: #0000004D;
      font-size: 24px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }

  }
`;
