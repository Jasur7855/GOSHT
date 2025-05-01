import { MenuCard } from "../../components/MainComponents/MenuCard/MenuCard";
import { Card } from "./Сard";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
import { SMainPage } from "./MainPage.style";
import { SliderMobile } from "../../components/widgets/Carousel/SliderMobile";
import { useIsMobile } from "../../hooks/useIsMobile";
import { MenuBadge } from "../../components/ui/MenuBadge/MenuBadge";
import { Heading } from "../../components/typography/Heading/Heading";
import { Button } from "../../components/ui/Button/Button";
import { GoshtBadge } from "../../components/GoshtBadge/GoshtBadge";
import { MdArrowOutward } from "react-icons/md";
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { MainSlider } from "../../components/MainComponents/MainSlider/MainSlider";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const dataMain = [
  {
    id: 1,
    tagText: "BOOK AN EVENT",
    title: "Caesar",
    description:
      "Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",
    buttonText: "Order now",
    backgroundImage: "/img/Main.jpg",
  },
  {
    id: 2,
    tagText: "книга про Эвенты",
    title: "Private Events",
    description:
      "For all inquiries, please fill out the form below and we’ll be in touch soon. ",
    buttonText: "Order now",
    backgroundImage: "/img/Kids.png",
  },
];
const cards = [
  {
    id: 1,
    title: "Thomas Party",
    description:
      "Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent",
  },
  {
    id: 2,
    title: "Thomas Party",
    description:
      "Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent",
  },
  {
    id: 3,
    title: "Thomas Party",
    description:
      "Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent",
  },
  {
    id: 4,
    title: "Thomas Party",
    description:
      "Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent",
  },
  {
    id: 5,
    title: "Thomas Party",
    description:
      "Our fast-food network includes projects like Blaсk Star Burger, with 7 locations solely in Tashkent, Mahalla with 6 spots also in Tashkent",
  },
];

const MainPage = ({}) => {
  const isMobile = useIsMobile(975);

  return (
    <SMainPage>
      {!isMobile && <SliderDesk btnClick={() => {}} data={dataMain} />}
      {isMobile && <SliderMobile data={dataMain} />}
      <section className="menuInfo">
        <div className="bgImg">
          <img src="/img/burger4.png" className="burger" />
          <div>
            <h6>
              <img src="/icons/starWhite.svg" alt="" />
              Fresh Food
            </h6>
            <p>Food is not stored for extended periods of time</p>
          </div>
          <div className="center">
            <h6>
              <img src="/icons/starWhite.svg" alt="" />
              Countless Choices
            </h6>
            <p>A varied menu for every taste and budget</p>
          </div>
          <div>
            <h6>
              <img src="/icons/starWhite.svg" alt="" />
              Online Payment
            </h6>
            <p>Convenient pay in cash or online</p>
          </div>
        </div>
      </section>
      <section className="mainMenu">
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
        <Link to="https://www.toasttab.com/local/order/gosht-3225-coney-island-avenue/r-d6d97f8d-513d-4bcf-ba76-8a40e1b23651">
          <MenuCard
            cardBadge="/icons/badge.svg"
            cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
            cardTitle="Греческий"
            cardImg="/img/MenuCard.png"
          />
        </Link>
      </section>
      <section className="allFood">
        <div className="allFoodImg">
          <MenuBadge cardBadge="/icons/badge.svg" badgeText="Chief's choice!" />
        </div>
        <div className="allFoodText">
          <Heading text="Our food and drink menu" variant="h4" />
          <p>
            Discover a variety of flavours: from mouth-watering appetizers to
            gourmet meals. Each dish is prepared with love and attention to
            detail.
          </p>
          <Button
            btnLink="#"
            text="View menu"
            typeButton="button"
            variant="outlined"
          />
        </div>
      </section>
      <section className="aboutGosht">
        <div className="restaurant">
          <GoshtBadge
            badgeLogo="/icons/RedGosht.svg"
            subTitle="3215 Coney Island Avenue, Brooklyn, NY 11235"
            title="Gōsht Group"
            children={
              <>
                <h5>About Gōsht</h5>
                <p>
                  The Gosht restaurant chain consists of 3 locations in
                  Uzbekistan, 1 in Brooklyn and one more soon to open in
                  Manhattan. We are proud to offer our guests an unforgettable
                  experience and impeccable service in each of our
                  establishments.
                </p>
              </>
            }
          />
          <GoshtBadge
            children={
              <>
                <h5>About Gōsht</h5>
                <p>
                  The Gosht restaurant chain consists of 3 locations in
                  Uzbekistan, 1 in Brooklyn and one more soon to open in
                  Manhattan. We are proud to offer our guests an unforgettable
                  experience and impeccable service in each of our
                  establishments.
                </p>
              </>
            }
          />
        </div>
        <div className="kidsWrapper">
          <GoshtBadge
            badgeLogo="/icons/KidsGosht.svg"
            title="Gōsht Kids"
            subTitle="Мы ждем всех самых маленьких!"
            children={
              <div className="kids">
                <img
                  src="/icons/goshtKids.svg"
                  alt="goshtKids"
                  className="goshtKids"
                />
                <div className="instagram">
                  <MdArrowOutward />
                  <span>Open instagram</span>
                </div>
                <div className="kidsText">
                  <h5>Gōsht Kids</h5>
                  <p>
                    Is an interactive children's restaurant within Gosht
                    establishments, where kids can enjoy delicious meals and
                    entertainment.
                  </p>
                </div>
              </div>
            }
          />
          <Button
            btnLink="#"
            text="Know more about us"
            typeButton="button"
            variant="outlined"
          />
        </div>
      </section>
      <EventsSection />
      <section className="clientSlider">
        <span>Review</span>
        <Heading
          text={`Don’t believe me, check what Clients\nthink about us!`}
          variant="h4"
        />

        {isMobile ? (
          <MainSlider slidesPerView={1}>
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="cardWrapper">
                  <Card title={card.title} description={card.description} />
                  <Card title={card.title} description={card.description} />
                  <Card title={card.title} description={card.description} />
                </div>
              </SwiperSlide>
            ))}
          </MainSlider>
        ) : (
          <div className="desktop">
            <MainSlider slidesPerView={3}>
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <Card title={card.title} description={card.description} />
                </SwiperSlide>
              ))}
            </MainSlider>
          </div>
        )}
      </section>
    </SMainPage>
  );
};

export default MainPage;
