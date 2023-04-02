import React, { useCallback, useMemo } from "react";
import "./Cart.css";
const Cart = ({ cart, dispatch }) => {
  const changeCartQuantity = useCallback(
    (product, quantity) => {
      if (quantity === 0) {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: product,
        });
      } else {
        dispatch({
          type: "CHANGE_CART_QTY",
          payload: { productId: product.id, quantity },
        });
      }
    },
    [dispatch]
  );
  const total = useMemo(
    () =>
      cart.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.price * currentValue.qty,
        0
      ),
    [cart]
  );
  return (
    <div className="cart">
      <h1>
        <b>Cart</b>
      </h1>
      <h2>
        <b>Subtotal: $ {total}</b>
      </h2>
      <div className="cartItem-container">
        {cart.map((cartItem) => {
          return (
            <div className="cartItem">
              <img src={cartItem.images[0]} alt={cartItem.title} />
              <div className="cartItem-info">
                <p>{cartItem.title}</p>
                <p>
                  <b>$ {cartItem.price}</b>
                </p>
              </div>
              <div className="qty-change">
                <button
                  onClick={() => changeCartQuantity(cartItem, cartItem.qty - 1)}
                >
                  -
                </button>
                {cartItem.qty}
                <button
                  onClick={() => changeCartQuantity(cartItem, cartItem.qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
