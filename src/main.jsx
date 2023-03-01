import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import ShopContextProv from "./Context/ShopContextProv";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProv>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopContextProv>
);
