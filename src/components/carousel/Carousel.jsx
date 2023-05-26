import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // import your own custom CSS for the carousel
import { Link } from "react-router-dom";
function Carousel({ slides }) {
  // define the settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
<>
    <Slider {...settings}>
      {slides.map((item) => (
        <div key={item.id}>
          <img src={item.imageCarouselItem} alt="battikh" />

        </div>
      ))}
    </Slider>

    <div className="imageButton">
    <Link to="/shop" class="button">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text">Shop Now</span>
    <div class="button__drow1"></div>
    <div class="button__drow2"></div>
  </Link>
  </div>
</>
  );
}

export default Carousel;
