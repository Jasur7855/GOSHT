import { ButtonHTMLAttributes } from "react";
import { SButton } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "outlined" | "fill";
  childText?: string;
  typeButton: "button" | "submit";
  onClick?: () => void;
}

export const FormBtn = ({
  text,
  onClick,
  variant,
  childText,
  typeButton = "button",
}: ButtonProps) => {
  return (
    <SButton
      className={`Button ${variant}`}
      onClick={onClick}
      type={typeButton}
    >
      {text}
      {childText && <span>{childText}</span>}
    </SButton>
  );
};
