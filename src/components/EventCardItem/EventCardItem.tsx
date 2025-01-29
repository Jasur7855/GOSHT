import { SEventsCardItem } from "./EventCard.style";

interface IEventCardItemProps {
  itemBg: string;
  itemTitle: string;
}

export const EventCardItem = ({ itemBg, itemTitle }: IEventCardItemProps) => {
  return (
    <SEventsCardItem $bgImg={itemBg}>
      <div className="picture"></div>
      <h5>{itemTitle}</h5>
    </SEventsCardItem>
  );
};
