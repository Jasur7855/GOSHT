import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ReactNode } from "react";

import { SSliderMobile } from "../../widgets/Carousel/Slider.style";

interface IMainSliderProps {
  children: ReactNode;
}

export const MainSlider = ({ children }: IMainSliderProps) => {
  return (
    <SSliderMobile>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={"auto"}
        spaceBetween={10} // Отступ между слайдами
        centeredSlides={true} // Центрирует активный слайд
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
      >
        {children}
      </Swiper>

      <div className="sliderBtns">
        <button className="arrBtn prev-btn">
          <IoIosArrowBack />
        </button>
        <button className="arrBtn next-btn">
          <IoIosArrowForward />
        </button>
      </div>
    </SSliderMobile>
  );
};
