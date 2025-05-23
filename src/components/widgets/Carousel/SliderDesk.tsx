import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { CarouselItem } from "./CarouselItem";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SSliderDesk } from "./Slider.style";
import { ReactNode, useState } from "react";
import { Swiper as SwiperType } from "swiper";

interface ISlide {
  tagText: string;
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

interface ISliderDeskProps {
  data: ISlide[];
  sliderForm?: ReactNode;
  btnClick:()=>void
}

export const SliderDesk = ({ data, sliderForm,btnClick }: ISliderDeskProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <SSliderDesk>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {data.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <CarouselItem
              tagText={item.tagText}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              onClick={btnClick}
            />
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
      {sliderForm}
    </SSliderDesk>
  );
};
