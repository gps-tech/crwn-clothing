import { createContext, useState } from "react";

// you can call this whatever you want
import PRODUCTS from "../shop-data.json";

//what do we want to store? an array of products, a function to set those products
export const ProductsContext = createContext({
  products: [],
});

// for any context, we need both the context value, as well as the provider itself
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
