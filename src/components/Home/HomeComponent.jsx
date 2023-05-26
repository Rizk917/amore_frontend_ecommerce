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
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getPopular();
    getBanners();
    // axios
    //   .get("http://127.0.0.1:5000/popular")
    //   .then((response) => {
    //     setPopular(response.data);

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);


  const getPopular =()=>{
    axios.get('http://127.0.0.1:5000/popular')
    .then((response)=>{
      setPopular(response.data)
    })
    .catch((error)=>{
      console.log(error);
  });
  }

  const getBanners =()=>{
    axios.get('http://127.0.0.1:5000/imageCarousel')
    .then((response)=>{
      setSlides(response.data.data)
    })
    .catch((error)=>{
      console.log(error);
  });
  }
  const categ = [
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
    {
      id: 4,
      image: "https://via.placeholder.com/500x500",
    },
    {
    id: 5,
    image: "https://via.placeholder.com/500x500",
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
                <span className="p_span">Popular</span>
              </Link>
            </p>
      
      <div className="listing fixing">
      {popular.map((populars, key) => {
        return (
          <CardComp productName={populars.productId.productName} productPrice={populars.productId.productPrice} FinalPrice={populars.productId.FinalPrice} productImage={populars.productId.productImage} _id={populars.productId._id} />

        )
      })}
  
        
      </div>
      </div>
</div></div>
  );
}

export default HomeComponent;
