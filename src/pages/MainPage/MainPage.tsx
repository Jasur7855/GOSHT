import { Header } from "../../components/Header/Header";
import { MenuCard } from "../../components/MainComponents/MenuCard/MenuCard";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
import { Footer } from "../../components/widgets/Footer/Footer";
import { SMainPage } from "./MainPage.style";
import { SliderMobile } from "../../components/widgets/Carousel/SliderMobile";
import { useIsMobile } from "../../hooks/useIsMobile";
import { MenuBadge } from "../../components/ui/MenuBadge/MenuBadge";
import { Heading } from "../../components/typography/Heading/Heading";
import { Button } from "../../components/ui/Button/Button";
import { GoshtBadge } from "../../components/GoshtBadge/GoshtBadge";

import { MdArrowOutward } from "react-icons/md";
const dataMain = [
  {
    id: 1,
    tagText: "BOOK AN EVENT",
    title: "Caesar",
    description:
      "Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",
    buttonText: "Inquire Now",
    backgroundImage: "/public/img/Main.jpg",
  },
  {
    id: 2,
    tagText: "книга про Эвенты",
    title: "Private Events",
    description:
      "For all inquiries, please fill out the form below and we’ll be in touch soon. ",
    buttonText: "Inquire Now",
    backgroundImage: "/public/img/Kids.png",
  },
];

export const MainPage = ({}) => {
  const isMobile = useIsMobile(975);

  return (
    <SMainPage>
      <Header />
      {!isMobile && <SliderDesk data={dataMain} />}
      {isMobile && <SliderMobile tagText="NEW DISH" />}
      <section className="menuInfo">
        <div className="bgImg">
          <img src="/public/img/burger4.png" className="burger" />
          <div>
            <h6>
              <img src="/public/icons/starWhite.svg" alt="" />
              Fresh Food
            </h6>
            <p>Food is not stored for extended periods of time</p>
          </div>
          <div className="center">
            <h6>
              <img src="/public/icons/starWhite.svg" alt="" />
              Countless Choices
            </h6>
            <p>A varied menu for every taste and budget</p>
          </div>
          <div>
            <h6>
              <img src="/public/icons/starWhite.svg" alt="" />
              Online Payment
            </h6>
            <p>Convenient pay in cash or online</p>
          </div>
        </div>
      </section>
      <section className="mainMenu">
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
        <MenuCard
          cardBadge="/icons/badge.svg"
          cardSubtitle="Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg"
          cardTitle="Греческий"
          cardImg="/img/MenuCard.png"
        />
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
            badgeLogo="/public/icons/KidsGosht.svg"
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
        </div>
      </section>
      <Footer />
    </SMainPage>
  );
};
