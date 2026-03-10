import "swiper/swiper-bundle.css";
import { useState } from "react";
import { Heading } from "../../components/typography/Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useIsMobile } from "../../hooks/useIsMobile";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const galleryImages = [
  { id: 1, className: "galleryImg" },
  { id: 2, className: "galleryImg" },
  { id: 3, className: "galleryImg" },
  { id: 4, className: "galleryImg" },
  { id: 5, className: "galleryImg main" },
  { id: 6, className: "galleryImg" },
  { id: 7, className: "galleryImg" },
  { id: 8, className: "galleryImg" },
  { id: 9, className: "galleryImg" },
  { id: 10, className: "galleryImg main" },
];

export const KidsGallery = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const isMobile = useIsMobile(768);

  // На мобильном показываем по 1 фото на слайд
  if (isMobile) {
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
            {galleryImages.map((img) => (
              <SwiperSlide key={img.id}>
                <div className={img.className}></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sliderBtns">
            <button className="arrBtn" onClick={() => swiperInstance?.slidePrev()}>
              <IoIosArrowBack />
            </button>
            <button className="arrBtn" onClick={() => swiperInstance?.slideNext()}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            <button className="arrBtn" onClick={() => swiperInstance?.slidePrev()}>
              <IoIosArrowBack />
            </button>
            <button className="arrBtn" onClick={() => swiperInstance?.slideNext()}>
              <IoIosArrowForward />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
