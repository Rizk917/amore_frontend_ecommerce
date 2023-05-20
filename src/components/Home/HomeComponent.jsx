import Chocolate from "../../images/chocolate1.png";
import "./homeComp.css";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "../Cart/CartContext";
import Carousel from "../carousel/Carousel";
import CardComp from "../card/Cardcomp";
import { Link } from "react-router-dom";

function HomeComponent() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/popular")
      .then((response) => {
        setPopular(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/500x500",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/500x500",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/500x500",
    },
  ];
  return (
    <div className="homepage">
      <div className="home-content">
        <div className="container-home">
      <Carousel slides={slides} />
      </div>
      <div className="container-home">

      <p className="red_text pCenter">
              <Link to="/shop">
                <span className="p_span">Our Products</span>
              </Link>
            </p>
      
      <div className="row">
      {popular.map((populars, key) => {
        return (
          <CardComp productName={populars.productId.productName} FinalPrice={populars.productId.FinalPrice} productImage={populars.productId.productImage} _id={populars.productId._id} />

        )
      })}
  
        
      </div>
      </div>
</div></div>
  );
}

export default HomeComponent;
