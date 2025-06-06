import { Link } from "react-router-dom";
import { SFooter } from "./Footer.style";

import { IoIosArrowForward } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { DropDown } from "../../ui/DropDown/DropDown";

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
  return (
    <SFooter>
      <footer className="footer">
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
              <a href="tel:718504880" className="phone_number">
                Phone number: (718) 504-880
              </a>
              <a href="mailto:info@gosht.com" className="email">
                Email: info@gosht.com
              </a>
            </div>
            <div className="info_item">
              <span className="title">Address</span>
              <a>
                3215 Coney Island Ave, Brooklyn, <br /> NY 11235, United States
              </a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="bottom">
          <div className="schedule">
            <span>7 Days a week,</span>
            <span>11:00 AM - 12:00 AM</span>
          </div>
          <div className="social_media">
            <a href="#">
              <img src="/icons/telegram-logo.svg" alt="telegram" />
            </a>
            <a href="#">
              <img src="/icons/instagram-logo.svg" alt="instagram" />
            </a>
            <a href="#">
              <img src="/icons/facebook-logo.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </footer>
      <footer className="footerMob">
        <div className="footerLogo">
          <img src="/icons/footer-logo.svg" alt="" />
          <div className="footerLogoInfo">
            <span className="title">Schedule</span>
            <span className="subTitle">
              7 Days a week,
              <br />
              11:00 AM - 12:00 AM
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
              <p>Phone number: (718) 504-880</p>
              <p>Email: info@gosht.com</p>
            </div>
            <div className="address">
              <h5>Address</h5>
              <p>3215 Coney Island Ave, Brooklyn,</p>
              <p>NY 11235, United States</p>
            </div>
          </div>
        </div>
        <div className="footerSocial">
          <Link to="#" className="social">
            <FaTelegramPlane />
          </Link>
          <Link to="#" className="social">
            <FaInstagram />
          </Link>
          <Link to="#" className="social">
            <FaFacebookF />
          </Link>
        </div>
      </footer>
    </SFooter>
  );
};
