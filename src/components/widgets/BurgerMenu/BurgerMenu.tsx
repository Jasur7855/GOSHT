import { useState } from "react";
import { IoMdBasket, IoMdClose } from "react-icons/io";
import { FaUser, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SBurgerMenu } from "./BurgerMenu.style";
import { RiMenu2Line } from "react-icons/ri";

interface IBurgerMenuProps {}

export const BurgerMenu = ({}: IBurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          backgroundColor: "transparent",
          fontSize: "36px",
          color: "white",
        }}
      >
        <RiMenu2Line />
      </button>

      <SBurgerMenu isOpen={isOpen}>
        <div className="top">
          <IoMdClose
            onClick={() => setIsOpen(false)}
            style={{ cursor: "pointer" }}
          />
          <img src="/icons/header-logo.svg" alt="Logo" />
          <FaUser />
        </div>

        <nav>
          <ul>
            <Link to="/menu-page/starter" onClick={() => setIsOpen(false)}>
              <li>Menu</li>
            </Link>
            <Link to="/about-page" onClick={() => setIsOpen(false)}>
              <li>About us</li>
            </Link>
            {/* <Link to="/events" onClick={() => setIsOpen(false)}>
              <li>Events</li>
            </Link>
            <Link to="/kids-event" onClick={() => setIsOpen(false)}>
              <li>Kids Events</li>
            </Link> */}
            <Link to="/location-page" onClick={() => setIsOpen(false)}>
              <li>Hours & Location</li>
            </Link>
            <Link to="/career-page" onClick={() => setIsOpen(false)}>
              <li>Review</li>
            </Link>
          </ul>
          <div className="burgerBtns">
            <button>
              <IoMdBasket />
              <span>Cart</span>
            </button>

            {/* <button className="outline">
              <FaUtensils style={{ color: "white" }} />
              <span>Book a table</span>
            </button> */}
          </div>
        </nav>
      </SBurgerMenu>
    </>
  );
};
