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
      <Footer />
    </SMainPage>
  );
};
