import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Heading } from "../../components/typography/Heading/Heading";
import { DropDown } from "../../components/ui/DropDown/DropDown";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SAsside } from "./MenuPage.style";

export const MenuAsside = () => {
  const mobile = useIsMobile();
  const [menuArray, setMenuArray] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("https://gosht.ddmedia.uz/categories", {});

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Преобразуем данные к твоей структуре
        console.log(data)

        setMenuArray(data);
      } catch (error) {
        console.error("Ошибка загрузки меню:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <SAsside>
      {!mobile ? (
        <div className="dev">
          <Heading variant="h6" text="Menu" />
          <nav>
            <ul>
              {menuArray.map((elem, index) => (
                <li key={index}>
                    <Link to={'/menu-page/'+elem.link}>{elem.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <DropDown btnText="Menu" menuElems={menuArray} />
      )}
    </SAsside>
  );
};
