import Chocolate from "../../images/chocolate1.png";
import "./homeComp.css";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "../Cart/CartContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "../carousel/Carousel";
import CardComp from "../card/Cardcomp";
import { Link } from "react-router-dom";
import image1 from "../../images/100050984_266989381378337_5939627848368128000_n.jpg";
import image2 from "../../images/5332caad6fb67b75eee6c8355995babe53246304.jpg";
import image3 from "../../images/DSC_0891.jpg";
import image4 from "../../images/formil-laundry-600x450.jpeg.webp";
import image5 from "../../images/c8e13415279f285509af3ac5c6536c44c8611c37.jpg";
import Testimonials from "./Testimonials";
function HomeComponent() {
  const [popular, setPopular] = useState([]);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getPopular();
    getBanners();
    // axios
    //   .get("https://amore-backend.onrender.com/popular")
    //   .then((response) => {
    //     setPopular(response.data);

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const getPopular = () => {
    axios
      .get("https://amore-backend.onrender.com/popular")
      .then((response) => {
        setPopular(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBanners = () => {
    axios
      .get("https://amore-backend.onrender.com/imageCarousel")
      .then((response) => {
        setSlides(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const categ = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
  ];


  return (
    <div className="homepage">
      <div className="home-content">
        <div>
          {/* <div className="container-home"> */}
          <Carousel slides={slides} />
        </div>
        <div className="container-home">
          <p className="yellowish_text pCenter">
            <Link to="/shop">
              <span className="p_span">Categories</span>
            </Link>
          </p>
          <div className="cntr-cat-all">
            <div className="cntr-cat">
              {categ.map((catego, key) => (
                <div className="imgs-cat" key={key}>
                  <img src={catego.image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <p className="yellowish_text pCenter">
            <Link to="/shop">
              <span className="p_span">Testimonials</span>
            </Link>
          </p>
<Testimonials/>


        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
