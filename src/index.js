import React from "react";
import { render } from "react-dom";
//BrowserRouter leverages the URL in order to keep track of the history of there the user is navigating through
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./context/user.context";
import { ProductsProvider } from "./context/products.context";
import { CartProvider } from "./context/cart.context";

import "./index.scss";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    {/* nesting the app in BrowserRouter allows us to use all the features of React Router within the app component tree*/}
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
