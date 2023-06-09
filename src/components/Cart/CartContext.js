import { createContext, useState, useEffect } from "react";
import  secureLocalStorage  from  "react-secure-storage";
const CartContext = createContext();

export function CartProvider({ children }) {
  const UserId = secureLocalStorage.getItem("id");
  const [data, setData] = useState([]);

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(secureLocalStorage.getItem('cart'));
    return savedCart ? savedCart : { userId: UserId, products: [] };
  });
 

  const fetchData = async () => {
    try {
      const response = await fetch(`https://amore-backend.onrender.com/cart/${UserId}`);
      const dataFetched = await response.json();
      setData(dataFetched);
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = (userId, productId, productName, quantity, FinalPrice,) => {
    let cartData = secureLocalStorage.getItem('cart');
    let cart = cartData ? JSON.parse(cartData) : { userId: "", products: [] };
    if (!cart.userId) {
      cart = {
        userId: UserId,
        products: [{
          productId: productId,
          productName: productName,
          quantity: quantity,
          price: Number(FinalPrice),
          total: quantity * FinalPrice
        }]
      };
    } else {
      let productExists = false;
      const updatedProducts = cart.products.map(product => {
        if (product.productId === productId) {
          product.quantity += quantity;
          product.total = product.quantity * FinalPrice;
          productExists = true;
        }
        return product;
      });
      if (productExists) {
        cart = { ...cart, products: updatedProducts };
      } else {
        cart = {
          ...cart,
          products: [
            ...cart.products,
            {
              productId: productId,
              productName: productName,
              quantity: quantity,
              price: Number(FinalPrice),
              total: quantity * FinalPrice
            }
          ]
        };
      }
    }
    secureLocalStorage.setItem('cart', JSON.stringify(cart));
    setCart(cart); // update state
    // console.log(cart);
  };

  const handleRemoveProduct = (productId) => {
    const productIndex = cart.products.findIndex(product => product.productId === productId);

    if (productIndex === -1) {
      console.log('Product is not in the cart');
      return;
    }

    const updatedProducts = [...cart.products];
    updatedProducts[productIndex].quantity -= 1;

    if (updatedProducts[productIndex].quantity <= 0) {
      updatedProducts.splice(productIndex, 1);
    }

    const updatedCart = { ...cart, products: updatedProducts };
    setCart(updatedCart);

    secureLocalStorage.setItem('cart', JSON.stringify(updatedCart));
    // console.log(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleAddProduct, handleRemoveProduct, UserId, data, fetchData }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;