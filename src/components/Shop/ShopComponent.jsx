  import React, { useState, useEffect, useContext } from "react";
  import './shopComponent.css'
  import axios from "axios";
  import CartContext from "../Cart/CartContext";
  import  secureLocalStorage  from  "react-secure-storage";
import CardComp from "../card/Cardcomp";



  function ShopComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(true)




    const{ cart, handleAddProduct, setCart, UserId } = useContext(CartContext)

    //get all categories
    useEffect(() => {
      axios
        .get("http://127.0.0.1:5000/categories")
        .then((response) => {
          setCategories(response.data.data);

        })
        .catch((error) => {
          console.log(error);
        });
    }, [categories]);

  //get all products && products for each category using Id
    const handleShowProduct = async (id) => {
      if (id === "all") {

        try {
          const url = "http://127.0.0.1:5000/products/display";
          await axios.get(url).then((response) => {
            setProducts(response.data.products);
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        const url = `http://127.0.0.1:5000/products/display/${id}`;
        try {
          await axios.get(url).then((response) => {
            // console.log(response)
            setProducts(response.data.products);
          
          });
        } catch (error) {
          console.log(error);
        }
      }
      setAllProducts(false)
    };

    useEffect(() => {
      if (allProducts) {
        handleShowProduct('all');
      }
    }, []);

    useEffect(() => {
      const data = secureLocalStorage.getItem("cart");
      if (data) {
        setCart(JSON.parse(data));
      }
    }, []);

    return (
      <div className="shop_product">
        <div className="hamburger">
            <div className="sideBar_products">
            <div className="select_categories">
              <select className="select_category" onChange={(e) => handleShowProduct(e.target.value)}>
                <option value='all'>
                  All Products
                  </option>
                {categories.map((category, key) => (
                <option key={key} value={category._id}>{category.categoryName}</option>
                ))}
              </select>
            </div>
          <div className="div_color">
            
          <div className="list_categories">
              <div className="list_category">
                <ul>
                  <li className="li_category" 
                  onClick={() => handleShowProduct('all')}
    
                  ><span>All Products</span></li>
                  {categories.map((category, key) => {
                    return(
                  <li className="li_category" key={key}
                  onClick={() => handleShowProduct(category._id)}
    
                  ><span>{category.categoryName}</span></li>
                    )
                })}
                  
                  
                </ul>
              </div>
            </div>
          </div>
            

          
          

  <div className="product_search">
      {products.map((product, key) => {
        return (
          <CardComp productName={product.productName} FinalPrice={product.FinalPrice} productImage={product.productImage} _id={product._id} />

        // <CardComp productName={product.productName} FinalPrice={product.FinalPrice} productImage={product.productImage} productID= {product._id} / >
        )
      })}
  
  </div>
          </div>
          </div>
      </div>
      
      
    )
  }

  export default ShopComponent


