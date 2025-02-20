import { Heading } from "../../components/typography/Heading/Heading";
import { FormBtn } from "../../components/ui/Button/FormBtn";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SLocation } from "./Location.style";
import { Map } from "./Map";
import "leaflet/dist/leaflet.css";

export const LocationPage = () => {
  const mobile = useIsMobile();
  return (
    <SLocation>
      {mobile ? (
        <section>
          <div className="hours"></div>
          <div className="mobHours">
            <Heading text="Gōsht Restaurant" variant="h1" />
            <p>
              For all inquiries, please fill out the form below and <br /> we’ll
              be in touch soon. 
            </p>
            <FormBtn text="Get directions" typeButton="button" variant="fill" />
          </div>
        </section>
      ) : (
        <section className="hours">
          <div>
            <Heading text="Gōsht Restaurant" variant="h1" />
            <p>
              For all inquiries, please fill out the form below and <br /> we’ll
              be in touch soon. 
            </p>
            <FormBtn text="Get directions" typeButton="button" variant="fill" />
          </div>
        </section>
      )}
      <section className="menuInfo">
        <div className="bgImg">
          <img src="/img/burger4.png" className="burger" />
          <div>
            <h6>
              <img src="/icons/starWhite.svg" alt="" />
              Fresh Food
            </h6>
            <p>Food is not stored for extended periods of time</p>
          </div>
          <div className="center">
            <h6>
              <img src="/icons/starWhite.svg" alt="" />
              Countless Choices
            </h6>
            <p>A varied menu for every taste and budget</p>
          </div>
          <div>
            <h6>
              <img src="/icons/starWhite.svg" alt="" />
              Online Payment
            </h6>
            <p>Convenient pay in cash or online</p>
          </div>
        </div>
      </section>
      <section className="location">
        <Heading text="We are on the map" variant="h2" />
        <span>We're waiting for everyone!</span>
        <div className="wrapper">
          <Map />
        </div>
      </section>
    </SLocation>
  );
};
