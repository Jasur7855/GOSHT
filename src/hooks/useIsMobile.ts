import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 975) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener("resize", handleResize);
    handleResize(); // Проверка при монтировании

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
