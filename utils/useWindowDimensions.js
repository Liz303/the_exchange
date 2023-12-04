import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: undefined,
    winHeight: undefined,
    isMobile: false,
    isXSmall: false,
  });

  const handleResize = () => {
    setWindowDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
      isMobile: window.innerWidth <= 768 && window.innerWidth > 428,
      isXSmall: window.innerWidth <= 428,
    });
  };
  useEffect(() => {
    try {
      window;
      handleResize();
      window.addEventListener("resize", handleResize);
    } catch (err) {
      console.log("Oops, `window` is not defined");
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};
