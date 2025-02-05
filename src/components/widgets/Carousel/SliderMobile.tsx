import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Heading } from "../../typography/Heading/Heading";
import { Button } from "../../ui/Button/Button";
import { SSliderMobile } from "./Slider.style";
interface ISliderMobileProps {
  tagText: string;
}

export const SliderMobile = ({ tagText }: ISliderMobileProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <SSliderMobile>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide

        // style={{ backgroundImage: `url(${item.backgroundImage})` }} // ✅ Установка фона
        >
          <div className="sliderImg"></div>
          <div className="sliderText">
            <span className="tag">{tagText}</span>
            <Heading variant="h1" text="Caesar" />
            <p>
              Crisp hearts of Romaine lettuce tossed in robust homemade Caesar
              dressing, topped with shaved parmesan cheese and egg.
            </p>
            <Button
              typeButton="button"
              text="Order now"
              variant="fill"
              btnLink="#"
            />
          </div>
          
        </SwiperSlide>
        <SwiperSlide

// style={{ backgroundImage: `url(${item.backgroundImage})` }} // ✅ Установка фона
>
  <div className="sliderImg"></div>
  <div className="sliderText">
    <span className="tag">{tagText}</span>
    <Heading variant="h1" text="Caesar" />
    <p>
      Crisp hearts of Romaine lettuce tossed in robust homemade Caesar
      dressing, topped with shaved parmesan cheese and egg.
    </p>
    <Button
      typeButton="button"
      text="Order now"
      variant="fill"
      btnLink="#"
    />
  </div>
  
</SwiperSlide>
        <div className="sliderBtns">
            <button
              className="arrBtn"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="arrBtn"
              onClick={() => swiperInstance?.slideNext()}
            >
              <IoIosArrowForward />
            </button>
          </div>
      </Swiper>
    </SSliderMobile>
  );
};
