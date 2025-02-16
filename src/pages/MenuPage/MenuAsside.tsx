import { Link } from "react-router-dom";
import { Heading } from "../../components/typography/Heading/Heading";
import { DropDown } from "../../components/ui/DropDown/DropDown";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SAsside } from "./MenuPage.style";

export const MenuAsside = () => {
  const mobile = useIsMobile();
  const menuArray = [
    {
      text: "Starter’s",
      link: "#",
    },
    {
      text: "Salads",
      link: "#",
    },
    {
      text: "Steaks",
      link: "#",
    },
    {
      text: "Soups",
      link: "#",
    },
    {
      text: "Pasta",
      link: "#",
    },
    {
      text: "Between Buns",
      link: "#",
    },
    {
      text: "Beef",
      link: "#",
    },
    {
      text: "Chiken & Seafood",
      link: "#",
    },
    {
      text: "Side Dishes",
      link: "#",
    },
    {
      text: "Desserts",
      link: "#",
    },
  ];
  return (
    <SAsside>
      {!mobile ? (
        <div className="dev">
          <Heading variant="h6" text="Menu" />
          <nav>
            <ul>
              <li>
                <Link to="starter">Starter’s</Link>
              </li>
              <li>
                <Link to="#">Salads</Link>
              </li>
              <li>
                <Link to="#">Steaks</Link>
              </li>
              <li>
                <Link to="#">Soups</Link>
              </li>
              <li>
                <Link to="#">Pasta</Link>
              </li>
              <li>
                <Link to="#">Between Buns</Link>
              </li>
              <li>
                <Link to="#">Beef</Link>
              </li>
              <li>
                <Link to="#">Chiken & Seafood</Link>
              </li>
              <li>
                <Link to="#">Side Dishes</Link>
              </li>
              <li>
                <Link to="#">Desserts</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <DropDown btnText="Menu" menuElems={menuArray} />
      )}
    </SAsside>
  );
};
