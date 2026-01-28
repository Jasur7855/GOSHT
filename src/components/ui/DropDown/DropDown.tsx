import { useState } from "react";
import { SDropDown, DropDownContent } from "./DropDown.style";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface IDropDownItem {
  text: string;
  link: string;
}

interface IDropDownProps {
  btnText: string;
  menuElems: IDropDownItem[];
}

export const DropDown = ({ btnText, menuElems }: IDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SDropDown className="dropDown">
      <span onClick={toggleDropdown} className="dropDown">
        <h5>{btnText}</h5>
        <IoIosArrowForward
          style={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </span>
      <DropDownContent $isOpen={isOpen}>
        {menuElems.map((elem, indx) => (
          <Link  key={indx} to={'/menu-page/'+elem.link}>{elem.text}</Link>
        ))}
      </DropDownContent>
    </SDropDown>
  );
};
