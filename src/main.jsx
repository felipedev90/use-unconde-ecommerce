import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartProvider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
);
