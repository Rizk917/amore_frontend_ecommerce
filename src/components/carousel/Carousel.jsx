import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // import your own custom CSS for the carousel
function Carousel({ slides }) {
  // define the settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {slides.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="battikh" />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
