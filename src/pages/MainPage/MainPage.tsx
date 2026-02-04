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
import { useGetHomeBannersQuery } from "../../store/Api/homeBannerApi";
import { useGetHomeMenuQuery } from "../../store/Api/homeMenuApi";
import { useGetAchievementsQuery } from "../../store/Api/achievementApi";
import { useGetHomeInformationQuery } from "../../store/Api/homeInformationApi";
import { useGetAboutBlockQuery } from "../../store/Api/aboutBlockApi";
import { useMemo, useState } from "react";
import { useGetMenuQuery } from "../../store/Api/menuApi";
import MenuItemModal from "../../components/MenuItemModal/MenuItemModal";
import { IMenuItem } from "../../store/Api/menuApi";


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
  const [selectedMenuItem, setSelectedMenuItem] = useState<IMenuItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: bannersData, isLoading } = useGetHomeBannersQuery();
  const { data: menuData, isLoading: isMenuLoading } = useGetHomeMenuQuery();
  const { data: achievementsData, isLoading: isAchievementsLoading } =
    useGetAchievementsQuery();
  const { data: informationData, isLoading: isInformationLoading } =
    useGetHomeInformationQuery();
  const { data: aboutBlockData, isLoading: isAboutBlockLoading } =
    useGetAboutBlockQuery();
  const { data: fullMenuData, isLoading: isFullMenuLoading } =
    useGetMenuQuery();

  const dataMain = useMemo(() => {
    if (!bannersData) return [];

    return bannersData
      .filter((banner) => banner.is_visible)
      .map((banner) => ({
        id: banner.id,
        tagText: banner.tag_text,
        title: banner.main_text,
        description: banner.description,
        buttonText: banner.button_enabled ? banner.button_text : "",
        backgroundImage: `https://new.gosht.com${banner.background_image}`,
        buttonLink: banner.button_link,
      }));
  }, [bannersData]);

  const visibleMenuItems = useMemo(() => {
    if (!menuData) return [];
    return menuData.filter((item) => item.is_visible);
  }, [menuData]);

  const handleMenuItemClick = (menuItemName: string) => {
    if (!fullMenuData) return;

    // Находим блюдо по названию (сравниваем в нижнем регистре для гибкости)
    const foundItem = fullMenuData.find(
      (item) => item.title.toLowerCase() === menuItemName.toLowerCase(),
    );

    if (foundItem) {
      setSelectedMenuItem(foundItem);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMenuItem(null);
  };

  if (
    isLoading ||
    isMenuLoading ||
    isAchievementsLoading ||
    isInformationLoading ||
    isAboutBlockLoading ||
    isFullMenuLoading
  ) {
    return <div>Loading...</div>;
  }

  return (
    <SMainPage>
      {!isMobile && <SliderDesk btnClick={() => {}} data={dataMain} />}
      {isMobile && <SliderMobile data={dataMain} />}
      <div className="adaptive">
        <section className="menuInfo container">
          <div className="bgImg container">
            <img src="/img/burger4.png" className="burger" />
            {achievementsData?.map((achievement) => (
              <div
                key={achievement.type}
                className={achievement.type === "second" ? "center" : ""}
              >
                <h6>
                  <img src="/icons/starWhite.svg" alt="" />
                  {achievement.title}
                </h6>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mainMenu container">
          {visibleMenuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleMenuItemClick(item.main_text)}
              style={{ cursor: "pointer" }}
            >
              <MenuCard
                cardBadge={
                  item.tag_icon_url?.[0]
                    ? `https://new.gosht.com${item.tag_icon_url[0]}`
                    : "/icons/badge.svg"
                }
                cardSubtitle={item.description}
                cardTitle={item.main_text}
                cardImg={item.image ? `https://new.gosht.com${item.image}` : "/img/placeholder.png"}
              />
            </div>
          ))}
        </section>
        {informationData?.map((info) => (
          <section key={info.id} className="allFood container">
            <div className="allFoodImg">
              {info.tag_icon_url[0] && (
                <MenuBadge
                  cardBadge={`https://new.gosht.com${info.tag_icon_url[0]}`}
                  badgeText={info.tag_text}
                />
              )}
              {info.image && (
                <img
                  src={`https://new.gosht.com${info.image}`}
                  alt={info.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
            <div className="allFoodText">
              <Heading text={info.title} variant="h4" />
              <p>{info.description}</p>
              {info.button_enabled && (
                <Button
                  btnLink={info.button_link}
                  text={info.button_text}
                  typeButton="button"
                  variant="outlined"
                />
              )}
            </div>
          </section>
        ))}
        {aboutBlockData?.map((aboutBlock) => (
          <section key={aboutBlock.id} className="aboutGosht container">
            <div className="restaurant">
              <GoshtBadge
                badgeLogo={aboutBlock.firstProject?.image || "/img/placeholder.png"}
                subTitle={aboutBlock.firstProject?.short_description || ""}
                title={aboutBlock.firstProject?.name || ""}
                children={
                  <>
                    <h5>{aboutBlock.firstProject?.info_1?.title || ""}</h5>
                    <p>{aboutBlock.firstProject?.info_1?.description || ""}</p>
                  </>
                }
              />
              <GoshtBadge
                children={
                  <>
                    <h5>{aboutBlock.firstProject?.info_2?.title || ""}</h5>
                    <p>{aboutBlock.firstProject?.info_2?.description || ""}</p>
                  </>
                }
              />
            </div>
            <div className="kidsWrapper">
              <GoshtBadge
                badgeLogo={aboutBlock.secondProject?.image || "/img/placeholder.png"}
                title={aboutBlock.secondProject?.name || ""}
                subTitle={aboutBlock.secondProject?.short_description || ""}
                children={
                  <div className="kids">
                    {aboutBlock.secondProject?.image && (
                      <img
                        src={aboutBlock.secondProject.image}
                        alt={aboutBlock.secondProject?.name || ""}
                        className="goshtKids"
                      />
                    )}
                    <div className="instagram">
                      <MdArrowOutward />
                      <span>Open instagram</span>
                    </div>
                    <div className="kidsText">
                      <h5>{aboutBlock.secondProject?.info?.main_text || ""}</h5>
                      <p>{aboutBlock.secondProject?.info?.description || ""}</p>
                    </div>
                  </div>
                }
              />
              {aboutBlock.buttonEnabled && (
                <Button
                  btnLink={aboutBlock.buttonLink}
                  text={aboutBlock.buttonText}
                  typeButton="button"
                  variant="outlined"
                />
              )}
            </div>
          </section>
        ))}
        <EventsSection className="container" />
        <section className="clientSlider container">
          <span>Review</span>
          
          <Heading
            text={`Don't believe me, check what Clients\nthink about us!`}
            variant="h4"
          />
          <Button typeButton="button" text="Leave a review" variant="fill" btnLink="#" />
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
      </div>
      <MenuItemModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        menuItem={selectedMenuItem}
      />
    </SMainPage>
  );
};

export default MainPage;
