import { MdArrowOutward } from "react-icons/md";
import { SGoshtChildren } from "./GoshtBadge.style";

interface IGoshtBadgechildrenProps {
  instagram: string;
  title: string;
  paragraph: string;
  bgImg: string;
  img: string;
}

export const GoshtBadgechildren = ({
  title,
  instagram,
  paragraph,
  bgImg,
  img,
}: IGoshtBadgechildrenProps) => {
  return (
    <SGoshtChildren $bgImg={bgImg}>
      <img src={img} alt="goshtKids" className="goshtKids" />
      <div className="instagram">
        <MdArrowOutward />
        <span>{instagram}</span>
      </div>
      <div className="kidsText">
        <h5>{title}</h5>
        <p>{paragraph}</p>
      </div>
    </SGoshtChildren>
  );
};
