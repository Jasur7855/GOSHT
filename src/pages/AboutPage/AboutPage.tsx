import { Link } from "react-router-dom";
import {
  SAboutGosht,
  SAboutLavka,
  SAboutPageSocial,
  SContainer,
} from "./AboutPage.style";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { GoshtBadge } from "../../components/GoshtBadge/GoshtBadge";
import { GoshtBadgechildren } from "../../components/GoshtBadge/GoshtBadgechildren";
import { Heading } from "../../components/typography/Heading/Heading";
import { LabelInput } from "../../components/ui/LabelInput/LabelInput";
import { FormBtn } from "../../components/ui/Button/FormBtn";
import { useIsMobile } from "../../hooks/useIsMobile";
const AboutPage = () => {
  const mobile = useIsMobile();
  return (
    <div>
      <SAboutPageSocial>
        <div className="footerSocial">
          <Link to="#" className="social">
            <FaTelegramPlane />
          </Link>
          <Link to="#" className="social">
            <PiInstagramLogoFill />
          </Link>
          <Link to="#" className="social">
            <FaFacebookF />
          </Link>
        </div>
      </SAboutPageSocial>

      <SContainer>
        <img src="/icons/BigBlackgosht.svg" className="bigBlack" alt="" />
        <img
          src={`${mobile ? "/img/aboutGosht.png" : "/img/aboutGosht.png"}`}
          alt=""
        />
        <SAboutGosht>
          <GoshtBadge
            badgeLogo="/icons/BlackGosht.svg"
            title="Gōsht Group"
            subTitle="3215 Coney Island Avenue, Brooklyn, NY 11235"
            children={
              <>
                <h3>About Gōsht</h3>
                <p>
                  Our Gosht restaurant chain boasts 3 locations in Uzbekistan, 1
                  in Brooklyn, and another opening soon in Manhattan. We take
                  pride in offering our guests unforgettable experiences and
                  impeccable service at each of our establishments.
                </p>
              </>
            }
          />
          <GoshtBadge
            badgeLogo="/icons/BlackGosht.svg"
            title="Gōsht Group"
            subTitle="3215 Coney Island Avenue, Brooklyn, NY 11235"
            children={
              <>
                <h3>Fast-food</h3>
                <p>
                  Our fast-food network includes projects like Blaсk Star
                  Burger, with 7 locations solely in Tashkent, Mahalla with 6
                  spots also in Tashkent, and Doner by Gosht with 9 outlets
                  across Uzbekistan. Gosht City offers fast food in Brooklyn,
                  with 2 more locations currently under construction.
                </p>
              </>
            }
          />
        </SAboutGosht>
        <SAboutLavka>
          <div className="img">
            <img src="/img/Lavka.png" alt="" />
          </div>
          <div className="text">
            <h3>Lavka by Gōsht</h3>
            <p>
              Lavka by Gosht is a hub and retail market for semi-prepared halal
              meat products, providing high-quality goods for discerning
              palates.
            </p>
          </div>
        </SAboutLavka>
        <div className="wrapper ">
          <GoshtBadge
            badgeLogo="/icons/KidsGosht.svg"
            title="Gōsht Kids"
            subTitle="We are waiting for all the little ones!"
            children={
              <GoshtBadgechildren
                bgImg="/img/Kids2.png"
                instagram="Open instagram"
                paragraph="Is an interactive children's restaurant within Gosht
                    establishments, where kids can enjoy delicious meals and
                    entertainment."
                img="/icons/goshtKids.svg"
                title="Gōsht Kids"
              />
            }
          />
          <GoshtBadge
            badgeLogo="/icons/Topor.svg"
            title="Topor Barbershop"
            subTitle="The best solution for men"
            children={
              <GoshtBadgechildren
                bgImg="/img/toporBG.png"
                instagram="Open instagram"
                paragraph="The Topor hair salon chain spans the globe,
              offering top-notch grooming services."
                img="/icons/toporImg.svg"
                title="Topor Barbershop"
              />
            }
          />
          <div className="formWrapper">
            <GoshtBadge
              badgeLogo="/icons/BlackGosht.svg"
              subTitle="3215 Coney Island Avenue, Brooklyn, NY 11235"
              title="Gōsht Group"
              children={
                <>
                  <h4>We are ❤️</h4>
                  <p>
                    These are just some of Gosht Group's projects and we
                    continue to evolve and expand to delight our guests with new
                    and unique offerings.
                  </p>
                  <p>
                    Welcome to the world of Gosht Group, where we treat every
                    guest with awe and deep respect!
                  </p>
                </>
              }
            />
            <div className="form">
              <Heading text="What you think about Gōsht group?" variant="h4" />
              <LabelInput
                isError
                labelText="First name"
                placeholder="First name"
              />
              <LabelInput
                isError
                labelText="Above opinion"
                isInput={false}
                areaPlaceholder="Above opinion"
              />
              <FormBtn text="Send" typeButton="submit" variant="fill" />
            </div>
          </div>
        </div>
      </SContainer>
    </div>
  );
};

export default AboutPage;
