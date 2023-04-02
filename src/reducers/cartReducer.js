function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS": {
      return { ...state, products: [...state.products, ...action.payload] };
    }
    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    }
    case "CHANGE_CART_QTY": {
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload.productId
            ? { ...cartItem, qty: action.payload.quantity }
            : cartItem
        ),
      };
    }
    default:
      return state;
  }
}

export default reducer;
