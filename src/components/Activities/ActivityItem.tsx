import { Heading } from "../typography/Heading/Heading";
import { Button } from "../ui/Button/Button";

import { SActivityItem } from "./ActivityItem.style";

interface ActivityItemProps {
  isWrap: boolean;
  onClick: string;
  eventTitle: string;
  eventSubtitle: string;
  eventImg:string;
}

export const ActivityItem = ({
  isWrap,
  onClick,
  eventTitle,
  eventSubtitle,
  eventImg,
}: ActivityItemProps) => {
  return (
    <SActivityItem $isWrap={isWrap}>
      <div className="ActivityImg ">
        <img src={eventImg} alt="activity" />
      </div>
      <div className="ActivityInfo">
        <Heading variant={"h3"} text={eventTitle} />
        <p className="description">{eventSubtitle}</p>
        <Button btnLink={onClick}
          typeButton="button"
          text={"Know more"}
          variant={"outlined"}
          
        />
      </div>
    </SActivityItem>
  );
};
