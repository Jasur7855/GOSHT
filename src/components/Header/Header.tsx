import React, { useState } from "react";
import CartModal from "./CartModal";

import { Link } from "react-router-dom";
import { SHeader } from "./Header.style";

import { FaUser } from "react-icons/fa";
import { IoMdBasket } from "react-icons/io";
import { FaUtensils } from "react-icons/fa";
import { BurgerMenu } from "../widgets/BurgerMenu/BurgerMenu";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Header = () => {
  const isMobile = useIsMobile(1075);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SHeader>
      {isMobile && <BurgerMenu />}
      {isOpen && <CartModal onClose={() => setIsOpen(false)} />}
      <Link to="/">
        <img
          src="/icons/header-logo.svg"
          className="logo"
          alt="brand logotype"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/menu-page/starter">Menu</Link>
          </li>
          <li>
            <Link to="/about-page">About us</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/kids-event">Kids Events</Link>
          </li>
          <li>
            <Link to="/location-page">Hours & Location</Link>
          </li>
          <li>
            <Link to="/review-page">Review</Link>
          </li>
        </ul>
      </nav>
      <div className="header_buttons">
        <button>
          <FaUser />
          <span>Log in</span>
        </button>
        <button onClick={() => setIsOpen(true)}>
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
