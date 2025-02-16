import {  useParams } from "react-router-dom";
import { MenuAsside } from "./MenuAsside";
import { SMenuPage } from "./MenuPage.style";
import { MainMenu } from "./MainMenu";

interface IMenuPageProps {}

export const MenuPage = ({}: IMenuPageProps) => {
  const params = useParams()
  return (
    <SMenuPage>
      <MenuAsside />
      <MainMenu link={params.id as string} />
    </SMenuPage>
  );
};
