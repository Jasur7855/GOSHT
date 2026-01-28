import { useParams } from "react-router-dom";

import { MenuAsside } from "./MenuAsside";
import { SMenuPage } from "./MenuPage.style";
import { MainMenu } from "./MainMenu";
import { useGetMenuQuery } from "../../store/Api/menuApi";

interface IMenuPageProps {}

 const MenuPage = ({}: IMenuPageProps) => {
  const params = useParams<{ id: string }>();
  const { data: menu = [], isLoading } = useGetMenuQuery(params.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SMenuPage>
      <MenuAsside />
      <MainMenu link={params.id as string} menu={menu} name={params.id} />
    </SMenuPage>
  );
};

export default MenuPage