import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ReactNode, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { CareerCard } from "./CareerCard";

interface ISlide {
  cardImg: string;
  title: string;
  cardText: string;
  cardExperience: string;
  cardPay: string;
}

interface ISliderDeskProps {
  data: ISlide[];
  sliderForm?: ReactNode;
}

export const CareerSlider = ({ data }: ISliderDeskProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="career-slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{ height: "100%" }}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx} style={{height:"100%"}}>
            <CareerCard
              cardImg={item.cardImg}
              title={item.title}
              cardText={item.cardText}
              cardExperience={item.cardExperience}
              cardPay={item.cardPay}
            />
          </SwiperSlide>
        ))}
        <div className="sliderBtns">
          <button
            className="arrBtn left"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            {/* <IoIosArrowBack /> */}
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="arrBtn right"
          ></button>
          {/* <IoIosArrowForward
            
          /> */}
        </div>
      </Swiper>
    </div>
  );
};
