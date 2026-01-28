import { useEffect, useState } from "react";

import { Heading } from "../../components/typography/Heading/Heading";
import { MenuCard } from "../../components/MainComponents/MenuCard/MenuCard";
import { SMainMenu } from "./MenuPage.style";
import MenuItemCard from "./MenuItemCard";

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
export const MainMenu = ({ name, description, link, menu }: IMainMenu) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  return (
    <div>
      {/* Если выбран элемент — показываем MenuItemCard */}
      {selectedItem ? (
        <MenuItemCard
          category={selectedItem.category}
          title={selectedItem.title}
          id={selectedItem.id}
          price={selectedItem.price}
          description={selectedItem.subTitle || ""}
          image={selectedItem.img}
          weight={selectedItem.weight}
          onAddToCart={() => alert("Added to cart!")}
          // 👇 при клике на категорию возвращаемся назад
          onBack={() => setSelectedItem(null)}
        />
      ) : (
        // Иначе показываем список
        <SMainMenu>
          <Heading variant="h4" text={name.toUpperCase()} />
          <p>
            Served with roasted garlic and cherry tomatoes Certified Halal meat
            from local butchers
          </p>
          <div className="menuWrapper">
            {menu.map((elem, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(elem)} // 👈 открываем карточку
                style={{ cursor: "pointer" }}
              >
                <MenuCard
                  cardBadge={elem.badge}
                  cardSubtitle={elem.subTitle}
                  cardTitle={elem.title}
                  cardImg={elem.img}
                />
              </div>
            ))}
          </div>
        </SMainMenu>
      )}
    </div>
  );
};
