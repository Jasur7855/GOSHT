import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Heading } from "../../typography/Heading/Heading";
import { Button } from "../../ui/Button/Button";
import { SSliderMobile } from "./Slider.style";
import { FormBtn } from "../../ui/Button/FormBtn";

interface ISlide {
  tagText: string;
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

interface ISliderMobileProps {
  data: ISlide[];
  btnClick?: () => void;
}

export const SliderMobile = ({ data, btnClick }: ISliderMobileProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <SSliderMobile>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {data.map((elem: ISlide) => (
          <SwiperSlide>
            <div
              className="sliderImg"
              style={{ backgroundImage: `url(${elem.backgroundImage})` }}
            ></div>
            <div className="sliderText">
              <span className="tag">{elem.tagText}</span>
              <Heading variant="h1" text={elem.title} />
              <p>{elem.description}</p>
              <FormBtn
                typeButton="button"
                text={elem.buttonText}
                variant="fill"
                onClick={btnClick}
              />
            </div>
          </SwiperSlide>
        ))}

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
