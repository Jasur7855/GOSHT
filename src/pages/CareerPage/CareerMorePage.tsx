import { Link } from "react-router-dom";
import { CareerCard } from "./widgets/CareerCard";
import { Heading } from "../../components/typography/Heading/Heading";
import { SCareerMore } from "./CareerPage.style";

export const CareerMorePage = () => {
  return (
    <SCareerMore>
      <Link to="/career-page">
        <img src="/icons/arrLeft.svg" alt="Back" />
        Career/Team Member
      </Link>
      <div className="mainWrapper">
        <div className="left">
          <img src="/icons/RedGosht.svg" className="logo" />
          <CareerCard
            cardImg="/img/ladyBag.png"
            title="Team Member"
            cardText="Pret is always growing, one shop at a time..."
            cardExperience="from 2 years"
            cardPay="21$ per hour"
          />
        </div>
        <div className="right">
          <Heading text="Full Job Description:" variant="h5" />
          <p>
            Our Leaders support and coach the team to ensure they reach their
            potential, in both the shop and the kitchen. As a Leader your area
            of expertise is the knowledge and standards of leading a successful
            front of house or kitchen operation. Our Leaders take pride in
            leading our team and being the gatekeepers of safety and standards.
            People at Pret work hard, have fun, learn a lot and really grow.
            Everything we do as a business is built on the enthusiasm and
            professionalism of our leaders. At Pret, we have a dedicated Academy
            that ensures the right training, development and support of our
            wonderful people. There are opportunities for our Leaders to
            progress towards an Assistant Manager role.
          </p>
          <Heading text="Job Type: " variant="h5" />
          <p>Full-time</p>
          <Heading text="Pay: " variant="h5" />
          <p>$21.00 per hour</p>
          <Heading text="Referral Bonus: " variant="h5" />
          <p>$100.00</p>
          <Heading text="Benefits:" variant="h5" />
          <p></p>
          <Heading text="Shift:" variant="h5" />
          <p>8 hour shift</p>
          <Heading text="About Gōsht:" variant="h5" />
          <p>
            Gōsht works a little like a restaurant. We build kitchens in every
            shop. We don’t use ‘sell-by’ dates because at the end of every day
            we offer our unsold food to charity rather than keeping it to sell
            the next day. We love making fresh, delicious food, and our milk and
            coffee is 100% organic. Our people are the key to our success, so we
            are keen to give all of Team Pret the opportunity to develop through
            the Pret Academy, which ensures the right training, development and
            support for our wonderful people. We are committed to equal
            employment opportunity regardless of race, color, ancestry,
            religion, sex, national origin, sexual orientation, age,
            citizenship, marital status, disability, gender, gender identity or
            expression, or veteran status. We are proud to be an equal
            opportunity workplace.
          </p>
        </div>
      </div>
    </SCareerMore>
  );
};
