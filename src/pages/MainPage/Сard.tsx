import { FaStar } from "react-icons/fa";
import { SMainCard } from "./MainPage.style";
import { CiStar } from "react-icons/ci";

export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <SMainCard>
      <img src="/icons/mainCardImg.svg" alt="ladyBag" className="img" />
      <div className="content">
        <h3>{title}</h3>
        <div className="stars">
          <FaStar style={{ color: "#AA181A" }} />
          <FaStar style={{ color: "#AA181A" }} />
          <FaStar style={{ color: "#AA181A" }} />
          <FaStar style={{ color: "#AA181A" }} />
          <CiStar />
        </div>
        <p>{description}</p>
      </div>
    </SMainCard>
  );
};
