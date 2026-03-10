import "swiper/swiper-bundle.css";
import { Swiper } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ReactNode, useState } from "react";

import { SSliderMobile } from "../../widgets/Carousel/Slider.style";

interface IMainSliderProps {
  children: ReactNode;
  slidesPerView: number;
}

export const MainSlider = ({ children, slidesPerView }: IMainSliderProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <SSliderMobile>
      <Swiper
        modules={[Navigation, A11y, Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{ 
          clickable: true,
          el: ".custom-pagination"
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        initialSlide={1}
        
      >
        {children}
      </Swiper>
      <div className="sliderBtns">
        <button className="arrBtn prev-btn" onClick={() => swiperInstance?.slidePrev()}>
          <IoIosArrowBack />
        </button>
        <div className="custom-pagination"></div>
        <button className="arrBtn next-btn" onClick={() => swiperInstance?.slideNext()}>
          <IoIosArrowForward />
        </button>
      </div>
    </SSliderMobile>
  );
};
