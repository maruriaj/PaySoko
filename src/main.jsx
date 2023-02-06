import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CategoryContext from "./context/CategoryContext";
import ProductContext from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContext>
        <CategoryContext>
          <App />
        </CategoryContext>
      </ProductContext>
    </BrowserRouter>
  </React.StrictMode>
);
