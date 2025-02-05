import { Link } from "react-router-dom";
import { Button } from "../../ui/Button/Button";
import { SCarouselItem } from "./Slider.style";

interface CarouselItemProps {
  tagText: string;
  title: string;
  description: string;
  buttonText: string;
}

export const CarouselItem = ({
  buttonText,
  description,
  tagText,
  title,
}: CarouselItemProps) => {
  return (
    <>
      <SCarouselItem className="left">
        <span className="tag">{tagText}</span>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        
          <Button btnLink="/form-event" typeButton="button" text={buttonText} variant="fill" />
       
      </SCarouselItem>
    </>
  );
};
