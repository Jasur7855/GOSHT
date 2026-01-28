import { Link } from "react-router-dom";
import { SFooter } from "./Footer.style";

import { IoIosArrowForward } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { DropDown } from "../../ui/DropDown/DropDown";
import { useGetFooterQuery } from "../../../store/Api/footerApi";

const menuMob = {
  navigate: [
    {
      link: "/",
      text: "Menu",
    },
    {
      link: "/about-page",
      text: "About us",
    },
    {
      link: "/location-page",
      text: "Hours & Location",
    },
    {
      link: "#",
      text: "Review",
    },
  ],
  events: [
    {
      link: "/kids-event",
      text: "Kid’s events",
    },
    {
      link: "/events",
      text: "Private events",
    },
  ],
  cooperation: [
    {
      link: "/career-page",
      text: "Career",
    },
    {
      link: "#",
      text: "Contact us",
    },
  ],
};

export const Footer = () => {
  const { data: footerData, isLoading } = useGetFooterQuery();

  if (isLoading) {
    return null;
  }

  return (
    <SFooter className="footerApadtive">
      <footer className="footer container">
        <div className="top">
          <div className="footer_logo">
            <img src="/icons/footer-logo.svg" alt="footer-logo" />
          </div>
          <div className="links_list">
            <span className="title">Navigation</span>
            <Link to={"/"}>Menu</Link>
            <Link to={"/about-page"}>About us</Link>
            <Link to={"/location-page"}>Hours & Location</Link>
            <Link to={"/review-page"}>Review</Link>
          </div>
          <div className="links_list">
            <span className="title">Events</span>
            <Link to="/kids-event">Kid’s events</Link>
            <Link to={"/events"}>Private events</Link>
          </div>
          <div className="links_list">
            <span className="title">Cooperation</span>
            <Link to={"/workWithUs-page"}>Career</Link>
            <Link to={"/contactUs-page"}>Contact us</Link>
          </div>
          <div className="info">
            <div className="info_item">
              <span className="title">Feedback</span>
              <p className="phone_number">
                {footerData?.feedback_text || "Contact us for feedback"}
              </p>
            </div>
            <div className="info_item">
              <span className="title">Address</span>
              <p>
                {footerData?.address || "3215 Coney Island Ave, Brooklyn, NY 11235, United States"}
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="bottom">
          <div className="schedule">
            <span>{footerData?.work_hours || "7 Days a week, 11:00 AM - 12:00 AM"}</span>
          </div>
          <div className="social_media">
            {footerData?.telegram_enabled && (
              <a href={footerData.telegram_link} target="_blank" rel="noopener noreferrer">
                <img src="/icons/telegram-logo.svg" alt="telegram" />
              </a>
            )}
            {footerData?.instagram_enabled && (
              <a href={footerData.instagram_link} target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram-logo.svg" alt="instagram" />
              </a>
            )}
            {footerData?.facebook_enabled && (
              <a href={footerData.facebook_link} target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook-logo.svg" alt="facebook" />
              </a>
            )}
          </div>
        </div>
      </footer>
      <footer className="footerMob">
        <div className="footerLogo">
          <img src="/icons/footer-logo.svg" alt="" />
          <div className="footerLogoInfo">
            <span className="title">Schedule</span>
            <span className="subTitle">
              {footerData?.work_hours || "7 Days a week, 11:00 AM - 12:00 AM"}
            </span>
          </div>
        </div>
        <div className="footerLinks">
          <div className="footerDropDown">
            <DropDown menuElems={menuMob.navigate} btnText="Navigation" />
            <DropDown menuElems={menuMob.events} btnText="Events" />
            <DropDown menuElems={menuMob.cooperation} btnText="Cooperation" />
          </div>
          <div className="footerAddress">
            <div className="address">
              <h5>Feedback</h5>
              <p>{footerData?.feedback_text || "Contact us for feedback"}</p>
            </div>
            <div className="address">
              <h5>Address</h5>
              <p>{footerData?.address || "3215 Coney Island Ave, Brooklyn, NY 11235, United States"}</p>
            </div>
          </div>
        </div>
        <div className="footerSocial">
          {footerData?.telegram_enabled && (
            <a href={footerData.telegram_link} target="_blank" rel="noopener noreferrer" className="social">
              <FaTelegramPlane />
            </a>
          )}
          {footerData?.instagram_enabled && (
            <a href={footerData.instagram_link} target="_blank" rel="noopener noreferrer" className="social">
              <FaInstagram />
            </a>
          )}
          {footerData?.facebook_enabled && (
            <a href={footerData.facebook_link} target="_blank" rel="noopener noreferrer" className="social">
              <FaFacebookF />
            </a>
          )}
        </div>
      </footer>
    </SFooter>
  );
};
