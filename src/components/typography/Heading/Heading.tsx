import "./Heading.scss";

interface HeadingProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  childText?: string;
}

export const Heading = ({ text, variant = "h2", childText }: HeadingProps) => {
  const renderHeading = () => {
    switch (variant) {
      case "h1":
        return (
          <h1>
            {text}
            {childText && <div style={{ color: "#AA181A" }}>{childText}</div>}
          </h1>
        );
      case "h2":
        return (
          <h2>
            {text}
            {childText && <div style={{ color: "#AA181A" }}>{childText}</div>}
          </h2>
        );
      case "h3":
        return (
          <h3>
            {text}
            {childText && <div style={{ color: "#AA181A" }}>{childText}</div>}
          </h3>
        );
      case "h4":
        return (
          <h4>
            {text}
            {childText && <div style={{ color: "#AA181A" }}>{childText}</div>}
          </h4>
        );
      case "h5":
        return (
          <h5>
            {text}
            {childText && <div style={{ color: "#AA181A" }}>{childText}</div>}
          </h5>
        );
      case "h6":
        return (
          <h6>
            {text}
            {childText && <div style={{ color: "#AA181A" }}>{childText}</div>}
          </h6>
        );
      default:
        return (
          <h2>
            {text}
            {childText && <div style={{ color: "#AA181A" }}>{childText}</div>}
          </h2>
        );
    }
  };
  return renderHeading();
};
