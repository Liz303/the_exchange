import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: undefined,
    winHeight: undefined,
    isMobile: false,
    isXSmall: false,
  });

  const handleResize = () => {
    let vh = window.innerHeight * 0.01;
    if (window.visualViewport) {
      vh = window.visualViewport.height * 0.01;
    }
    setWindowDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
      isMobile: window.innerWidth <= 768 && window.innerWidth > 430,
      isXSmall: window.innerWidth <= 430,
      ethosSwap: window.innerWidth <= 1079,
      vh: vh || 0.01,
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
