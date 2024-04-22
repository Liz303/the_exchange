import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: undefined,
    winHeight: undefined,
    isMobile: false,
    isXSmall: false,
  });

  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    const newIsMobile = newWidth <= 768 && newWidth > 430;
    const newIsXSmall = newWidth <= 430;
    const newEthosSwap = newWidth <= 1079;
    const newVh = window.visualViewport
      ? window.visualViewport.height * 0.01
      : newHeight * 0.01;

    setWindowDimensions((prevDimensions) => ({
      winWidth:
        newWidth !== prevDimensions.winWidth
          ? newWidth
          : prevDimensions.winWidth,
      winHeight:
        newHeight !== prevDimensions.winHeight
          ? newHeight
          : prevDimensions.winHeight,
      isMobile:
        newIsMobile !== prevDimensions.isMobile
          ? newIsMobile
          : prevDimensions.isMobile,
      isXSmall:
        newIsXSmall !== prevDimensions.isXSmall
          ? newIsXSmall
          : prevDimensions.isXSmall,
      ethosSwap:
        newEthosSwap !== prevDimensions.ethosSwap
          ? newEthosSwap
          : prevDimensions.ethosSwap,
      vh: newVh !== prevDimensions.vh ? newVh : prevDimensions.vh,
    }));
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
