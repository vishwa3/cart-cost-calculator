import React, { useCallback } from "react";
import "./Products.css";
const Products = ({ products, cart, dispatch }) => {
  const addToCart = useCallback(
    (product) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    },
    [dispatch]
  );
  const removeFromCart = useCallback(
    (product) => {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      });
    },
    [dispatch]
  );
  console.log("prod", products);
  return (
    <div className="products">
      {" "}
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <div className="product-details">
              <p>{product.title}</p>
              <p>$ {product.price}</p>
            </div>
            {cart.some((cartItem) => cartItem.id === product.id) ? (
              <button
                className="button removeCart"
                onClick={() => removeFromCart(product)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="button addCart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
