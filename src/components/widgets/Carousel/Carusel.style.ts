import styled from "styled-components";

export const SCarusel = styled.div`
  position: relative;

  .swiper {
    width: 100% !important;
    height: calc(10.2vw + 337px);
    .swiper-wrapper {
      .swiper-slide {
        height: 100%;
        background-image: url("/img/slider-desktop-1.svg");
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
    flex: 1;
    display: flex;
    justify-content: flex-end;
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
