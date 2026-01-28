import "swiper/swiper-bundle.css";
import { useState } from "react";
import { Heading } from "../../components/typography/Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const KidsGallery = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="gallery">
      <Heading text="Gallery" variant="h2" />
      <p>Here you can see photo reports of our events</p>
      <div className="gallerySlider">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          <SwiperSlide>
            <div className="galleryImg"></div>
            <div className="galleryImg"></div>
            <div className="galleryImg"></div>
            <div className="galleryImg none"></div>
            <div className="galleryImg none main"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="galleryImg "></div>
            <div className="galleryImg"></div>
            <div className="galleryImg"></div>
            <div className="galleryImg none"></div>
            <div className="galleryImg none main"></div>
          </SwiperSlide>
          <div className="sliderBtns">
            <IoIosArrowBack
              onClick={() => swiperInstance?.slidePrev()}
              className="arrBtn"
            />

            <IoIosArrowForward
              onClick={() => swiperInstance?.slideNext()}
              className="arrBtn"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};
