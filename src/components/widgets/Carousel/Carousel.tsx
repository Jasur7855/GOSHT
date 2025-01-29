import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { CarouselItem } from "./CarouselItem";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { SCarusel } from "./Carusel.style";
import { useState } from "react";

// Типизируем состояние, используя typeof Swiper
export const Carousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const data = [
    {
      tagText: "BOOK AN EVENT",
      title: "Private Events",
      description:
        "For all inquiries, please fill out the form below and we’ll be in touch soon. ",
      buttonText: "Inquire Now",
    },
    {
      tagText: "книга про Эвенты",
      title: "Private Events",
      description:
        "For all inquiries, please fill out the form below and we’ll be in touch soon. ",
      buttonText: "Inquire Now",
    },
  ];

  return (
    <SCarusel>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CarouselItem
              tagText={item.tagText}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
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
    </SCarusel>
  );
};
