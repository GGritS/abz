import { useLayoutEffect, useState } from "react";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      const isMobile = window.innerWidth >= 320 && window.innerWidth <= 767;
      setIsMobile(isMobile);
    };
    window.addEventListener("resize", updateSize);
    // updateSize();
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};
