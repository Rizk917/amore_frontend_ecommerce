import React, { useEffect, useContext } from "react";

import CartContext from "../Cart/CartContext";
import secureLocalStorage from "react-secure-storage";

function CardComp(props) {
    const { productImage, productName, FinalPrice, _id } = props;
    const { cart, handleAddProduct, UserId } = useContext(CartContext);
  
    return (
      <div className="card">
        <img className="img_card" src={productImage} alt="chocolate" />
        <div className="product_name">
          <h2>{productName}</h2>
        </div>
        <div className="details_product">
          <div className="product_price">
            <h2>{FinalPrice} $</h2>
          </div>
          <div className="button_card">
            <button
              type="button"
              onClick={() => handleAddProduct(UserId, _id, productName, 1, FinalPrice)}
            >
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
export default CardComp;
