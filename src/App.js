import { useCallback, useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";
import Products from "./components/Products";
import reducer from "./reducers/cartReducer";
import Cart from "./components/Cart";
function App() {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
  });
  console.log("cart", state.cart);
  const getProducts = useCallback(async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div className="App">
      {state?.products ? (
        <>
          <Products
            products={state.products}
            cart={state.cart}
            dispatch={dispatch}
          />
          <Cart cart={state.cart} dispatch={dispatch} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
