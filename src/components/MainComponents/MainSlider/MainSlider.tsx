import "swiper/swiper-bundle.css";
import { Swiper } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ReactNode } from "react";

import { SSliderMobile } from "../../widgets/Carousel/Slider.style";

interface IMainSliderProps {
  children: ReactNode;
  slidesPerView: number;
}

export const MainSlider = ({ children, slidesPerView }: IMainSliderProps) => {
  return (
    <SSliderMobile>
      <Swiper
        modules={[Navigation, A11y, Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        initialSlide={1}
        
      >
        {children}
        <div className="sliderBtns">
          <button className="arrBtn prev-btn">
            <IoIosArrowBack />
          </button>
          <button className="arrBtn next-btn">
            <IoIosArrowForward />
          </button>
        </div>
      </Swiper>
    </SSliderMobile>
  );
};
