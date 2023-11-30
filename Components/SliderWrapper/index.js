import { useRef } from "react";
import Slider from "react-slick";

const Arrow = ({ onClick, className, style, next }) => {
  const arrowRef = useRef();

  return (
    <button
      role="button"
      title={next ? "Next" : "Previous"}
      aria-label={next ? "Next" : "Previous"}
      ref={arrowRef}
      onClick={onClick}
      className={className}
      style={{ ...style }}
    >
      <svg viewBox="0 0 89 51">
        <path
          d="M0 26.5415H85.6661"
          stroke="#F2F2E9"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M60.8434 1.25391L86.4273 26.6104L63.0539 49.7434"
          stroke="#F2F2E9"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </button>
  );
};

export const SliderWrapper = ({ children, length, projects }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    mobileFirst: true,
    autoplay:true,
    nextArrow: <Arrow next={true} />,
    className: projects ? "projects-slider" : "bio-press-slider",
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          infinite: true,
          slidesToShow: projects ? 2 : length >= 4 ? 4 : length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1079,
        settings: {
          infinite: true,
          slidesToShow: projects ? 2 : length >= 3 ? 3 : length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          infinite: true,
          slidesToShow: projects ? 2 : length >= 2 ? 2 : length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};
