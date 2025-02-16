import { Heading } from "../../components/typography/Heading/Heading";
import { MenuCard } from "../../components/MainComponents/MenuCard/MenuCard";
import { SMainMenu } from "./MenuPage.style";
interface MenuItem {
  img: string;
  title: string;
  subTitle: string;
  badge: string;
}

interface IMainMenu {
  name?: string;
  description?: string;
  menu?: MenuItem[];
  link: string;
}
export const MainMenu = ({ name, description, link }: IMainMenu) => {
  return (
    <SMainMenu>
      <Heading variant="h4" text="Steaks" />
      <p>
        Served with roasted garlic and cherry tomatoes Certified Halal meat from
        local butchers
      </p>
      <div className="menuWrapper">
        <h3>{link}</h3>
        {/* {menu.map((elem) => (
          <MenuCard
            cardBadge={elem.badge}
            cardSubtitle={elem.subTitle}
            cardTitle={elem.title}
            cardImg={elem.img}
          />
        ))} */}
      </div>
    </SMainMenu>
  );
};
