import { createContext, useState } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// you can call this whatever you want
import SHOP_DATA from "../shop-data.js";

//what do we want to store? an array of products, a function to set those products
export const ProductsContext = createContext({
  products: [],
});

// for any context, we need both the context value, as well as the provider itself
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
