import React, { useEffect, useContext } from "react";
import "./cardcomp.css";
import CartContext from "../Cart/CartContext";
import secureLocalStorage from "react-secure-storage";
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
  rel="stylesheet"
></link>;
function CardComp(props) {
  const { productImage, productName, productPrice, FinalPrice, _id } = props;
  const { cart, handleAddProduct, UserId } = useContext(CartContext);

  return (
    // <div className="card">
    //   <img className="img_card" src={productImage} alt="chocolate" />
    //   <div className="product_name">
    //     <h2>{productName}</h2>
    //   </div>
    //   <div className="details_product">
    //     <div className="product_price">
    //       <h2>{FinalPrice} $</h2>
    //     </div>
    //     <div className="button_card">
    //       <button
    //         type="button"
    //         onClick={() => handleAddProduct(UserId, _id, productName, 1, FinalPrice)}
    //       >
    //         <p>Add to cart</p>
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <li class="productCardNew">
      <a class="img-wrapper" href="#">
        <img src={productImage} alt="Blue running shoe" />
      </a>
      {productPrice === FinalPrice ? null : (
        <div class="note on-sale">On sale</div>
      )}
      <div class="info">
        <div class="titleCard">Some Product</div>
        {productPrice === FinalPrice ? (
          <div class="price">{productPrice}</div>
        ) : (
          <>
            {" "}
            <div class="price sale">${FinalPrice}</div>
            <div class="price old">${productPrice}</div>
          </>
        )}
      </div>

      <div class="actions-wrapper">
        <a href="#" class="add-btn wishlist">
          Wishlist
        </a>
        <a href="#" class="add-btn cart">
          Cart
        </a>
      </div>
    </li>
  );
}
export default CardComp;
