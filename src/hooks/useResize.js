import { useEffect, useState } from "react";

export function useResize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    function changeWidth() {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", changeWidth);
    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return isMobile;
}