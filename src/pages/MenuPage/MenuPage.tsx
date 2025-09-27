import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { MenuAsside } from "./MenuAsside";
import { SMenuPage } from "./MenuPage.style";
import { MainMenu } from "./MainMenu";

interface IMenuPageProps {}

 const MenuPage = ({}: IMenuPageProps) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://0.0.0.0:1515/menu?cat_id="+params.id, {});

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Преобразуем данные к твоей структуре
        console.log(data)

        setMenu(data);
      } catch (error) {
        console.error("Ошибка загрузки меню:", error);
      }
    };
    if (params.id) {
      fetchMenu();
    }
  }, [params.id]);
  return (
    <SMenuPage>
      <MenuAsside />
      <MainMenu link={params.id as string} menu={menu} />
    </SMenuPage>
  );
};

export default MenuPage