import { ReactNode } from "react";
import { SGoshtBadge } from "./GoshtBadge.style";
import { Heading } from "../typography/Heading/Heading";

interface IGoshtBadgeProps {
  children?: ReactNode;
  title?: string;
  subTitle?: string;
  badgeLogo?: string;
}

export const GoshtBadge = ({
  children,
  title,
  subTitle,
  badgeLogo,
}: IGoshtBadgeProps) => {
  return (
    <SGoshtBadge>
      {badgeLogo && (
        <div className="header">
          <img src={badgeLogo} alt={badgeLogo} />
          <div className="text">
            {title && <Heading text={title} variant="h5" />}
            <span>{subTitle}</span>
          </div>
        </div>
      )}
      <div className="children"> {children}</div>
    </SGoshtBadge>
  );
};
