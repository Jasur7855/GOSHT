import { MenuBadge } from "../../ui/MenuBadge/MenuBadge";
import { SMenuCard } from "./MenuCard.style";

interface IMenuCard {
  cardSubtitle: string;
  cardTitle: string;
  cardBadge: string;
  cardImg: string;
}

export const MenuCard = ({
  cardTitle,
  cardSubtitle,
  cardBadge,
  cardImg,
}: IMenuCard) => {
  return (
    <SMenuCard>
      <div className="img" style={{ backgroundImage: `url(${cardImg})` }}>
        <MenuBadge cardBadge={cardBadge}/>
      </div>
      <div className="description">
        <h5>{cardTitle}</h5>
        <p>{cardSubtitle}</p>
      </div>
    </SMenuCard>
  );
};
