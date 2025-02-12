import { Link } from "react-router-dom";
import { SHeader } from "./Header.style";

import { FaUser } from "react-icons/fa";
import { IoMdBasket } from "react-icons/io";
import { FaUtensils } from "react-icons/fa";
import { BurgerMenu } from "../widgets/BurgerMenu/BurgerMenu";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Header = () => {
  const isMobile = useIsMobile(1075);
  return (
    <SHeader>
      {isMobile && <BurgerMenu />}
      <img src="/icons/header-logo.svg" className="logo" alt="brand logotype" />
      <nav>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/kids-event">Kids Events</Link>
          </li>
          <li>
            <Link to="#">Hours & Location</Link>
          </li>
          <li>
            <Link to="#">Review</Link>
          </li>
        </ul>
      </nav>
      <div className="header_buttons">
        <button>
          <FaUser />
          <span>Log in</span>
        </button>
        <button id="basketBtn">
          <IoMdBasket />
          <span>Cart</span>
        </button>
        <button>
          <FaUtensils />
          <span>Book a table</span>
        </button>
      </div>
    </SHeader>
  );
};
