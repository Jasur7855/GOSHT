import { SMenuBadge } from "./MenuBadge.style";

interface IMenuBadgeProps {
  cardBadge: string;
  badgeText?: string;
}

export const MenuBadge = ({ cardBadge, badgeText }: IMenuBadgeProps) => {
  return (
    <SMenuBadge>
      <img src={cardBadge} alt="" className="badge" />
      {badgeText && <p>{badgeText}</p>}
    </SMenuBadge>
  );
};
