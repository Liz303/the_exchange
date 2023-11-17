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
      <svg viewBox="0 0 48 48">
        <path d="M23.9914 47.9828C37.2415 47.9828 47.9828 37.2415 47.9828 23.9914C47.9828 10.7413 37.2415 0 23.9914 0C10.7413 0 0 10.7413 0 23.9914C0 37.2415 10.7413 47.9828 23.9914 47.9828Z" />
        <path d="M24.1956 7.91162L22.6352 9.47113L35.9885 22.832L8.54312 22.8242L8.53032 25.0301L35.9757 25.0378L22.6271 38.379L24.1866 39.9394L40.205 23.93L24.1956 7.91162Z" />
      </svg>
    </button>
  );
};

export const SliderWrapper = ({ children, length }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: length >= 4 ? 4 : length,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Arrow next={false} />,
    nextArrow: <Arrow next={true} />,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: length >= 3 ? 3 : length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: length >= 2 ? 2 : length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};
