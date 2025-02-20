import { Heading } from "../../../components/typography/Heading/Heading";
import { Button } from "../../../components/ui/Button/Button";
import { SCareerCard } from "../CareerPage.style";
interface ICareerCard {
  title: string;
  cardText: string;
  cardExperience: string;
  cardPay: string;
  cardImg: string;
}
export const CareerCard = ({
  title,
  cardText,
  cardExperience,
  cardPay,
  cardImg,
}: ICareerCard) => {
  return (
    <SCareerCard className="careerCard">
      <div>
        <img src={cardImg} alt="" className="img" />
        <Heading text={title} variant="h5" />
        <p>{cardText}</p>
      </div>
      <div>
        <div className="experience">
          Experience: <span>{cardExperience}</span>
        </div>
        <div className="experience">
          Pay: <span>{cardPay}</span>
        </div>
        <div className="cardBtns">
          <Button
            btnLink="#"
            text="Apply for"
            typeButton="button"
            variant="fill"
          />

          <Button
            btnLink="/career-more-page"
            text="Find out more"
            typeButton="button"
            variant="outlined"
          />
        </div>
      </div>
    </SCareerCard>
  );
};
