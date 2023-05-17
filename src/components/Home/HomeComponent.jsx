import Chocolate from "../../images/chocolate1.png";
import "./homeComp.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "../Cart/CartContext";
import Carousel from "../carousel/Carousel";


function HomeComponent() {
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

      <h1 className="center-h1">Our latest Products</h1>
      
      <div className="row">
        
      </div>
      </div>
</div></div>
  );
}

export default HomeComponent;
