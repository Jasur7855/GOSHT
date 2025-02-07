import { ButtonHTMLAttributes } from "react";
import { SButton } from "./Button.style";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "outlined" | "fill";
  childText?: string;
  typeButton: "button" | "submit";
  btnLink: string;
  onClick?:()=>void
}

export const Button = ({
  text,
  onClick,
  variant,
  childText,
  typeButton = "button",
  btnLink,
}: ButtonProps) => {
  return (
    <Link to={btnLink}>
      <SButton
        className={`Button ${variant}`}
        onClick={onClick}
        type={typeButton}
      >
        {text}
        {childText && <span>{childText}</span>}
      </SButton>
    </Link>
  );
};
