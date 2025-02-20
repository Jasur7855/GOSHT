import { Heading } from "../../components/typography/Heading/Heading";
import { Button } from "../../components/ui/Button/Button";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SCarierPage } from "./CareerPage.style";
import { CareerCard } from "./widgets/CareerCard";
import { CareerSlider } from "./widgets/CareerSlider";
export const CareerPage = () => {
  const mobile = useIsMobile();
  const sliderData = [
    {
      cardImg: "/img/ladyBag.png",
      title: "Team Member",
      cardText:
        "Pret is always growing, one shop at a time (we think good things shouldn’t be rushed) so we’re always on the lookout for great Team Leaders. We need Kitchen Leaders to help our kitchens produce beautiful and delicious food throughout the day, and Front of House Leaders who can ensure our lovely customers have the best experience in our shops.",
      cardExperience: "from 2 years",
      cardPay: "21$ per hour",
    },
    {
      cardImg: "/img/ladyBag.png",
      title: "Manager",
      cardText:
        "Managers are responsible for our Pret shops. They work to develop fantastic teams, help drive the business, embed change, and they are the gatekeepers of Pret knowledge and standards. There’s a generous quarterly bonus incentive, too!",
      cardExperience: "from 2 years",
      cardPay: "21$ per hour",
    },
    {
      cardImg: "/img/ladyBag.png",
      title: "Barista",
      cardText:
        "Our baristas are coffee experts. We know because they spend three months in our academy getting trained. They make fantastic drinks and ensure we deliver amazing coffee standards every day. You’ve got to be skilled and lively, and there are plenty of opportunities to progress.",
      cardExperience: "from 2 years",
      cardPay: "21$ per hour",
    },
    {
      cardImg: "/img/ladyBag.png",
      title: "Team Member",
      cardText:
        "Pret is always growing, one shop at a time (we think good things shouldn’t be rushed) so we’re always on the lookout for great Team Leaders. We need Kitchen Leaders to help our kitchens produce beautiful and delicious food throughout the day, and Front of House Leaders who can ensure our lovely customers have the best experience in our shops.",
      cardExperience: "from 2 years",
      cardPay: "21$ per hour",
    },
    {
      cardImg: "/img/ladyBag.png",
      title: "Manager",
      cardText:
        "Managers are responsible for our Pret shops. They work to develop fantastic teams, help drive the business, embed change, and they are the gatekeepers of Pret knowledge and standards. There’s a generous quarterly bonus incentive, too!",
      cardExperience: "from 2 years",
      cardPay: "21$ per hour",
    },
    {
      cardImg: "/img/ladyBag.png",
      title: "Barista",
      cardText:
        "Our baristas are coffee experts. We know because they spend three months in our academy getting trained. They make fantastic drinks and ensure we deliver amazing coffee standards every day. You’ve got to be skilled and lively, and there are plenty of opportunities to progress.",
      cardExperience: "from 2 years",
      cardPay: "21$ per hour",
    },
  ];
  return (
    <SCarierPage>
      {!mobile ? (
        <div className="bg_img">
          <div className="subTitle">We’d love to have you join our team!</div>
          <Heading text="Join Gōsht Team! " variant="h1" />
          <p>
            Feel free to send in your resume even if you don't see the position
            you're looking for listed.
          </p>
          <Button
            btnLink="#"
            text="Apply Now"
            variant="fill"
            typeButton="button"
          />
        </div>
      ) : (
        <>
          <div className="bg_img"></div>
          <div className="mob">
            <div className="subTitle">We’d love to have you join our team!</div>
            <Heading text="Join Gōsht Team! " variant="h1" />
            <p>
              Feel free to send in your resume even if you don't see the
              position you're looking for listed.
            </p>
            <Button
              btnLink="#"
              text="Apply Now"
              variant="fill"
              typeButton="button"
            />
          </div>
        </>
      )}
      <section className="main">
        <img src="/icons/CareerGosht.svg" alt="" className="gosht" />
        <Heading text="Our team is on the hunt:" variant="h4" />
        {mobile ? (
          <div className="mainMob">
            {sliderData.map((elem, indx) => (
              <CareerCard
                key={indx}
                cardImg={elem.cardImg}
                title={elem.title}
                cardText={elem.cardText}
                cardExperience={elem.cardExperience}
                cardPay={elem.cardPay}
              />
            ))}
          </div>
        ) : (
          <CareerSlider data={sliderData} />
        )}
      </section>
    </SCarierPage>
  );
};
