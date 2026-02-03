import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";

export function CartProvider({ children }) {
  // Checa se o navegador tem algum dado para carregar
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Salva a versão mais atual no navegador
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adiciona o novo produto ao carrinho
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      const currentQuantity = existing?.quantity ?? 0;

      if (currentQuantity >= product.stock) {
        return prev;
      }

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // Remove o item do carrinho
  function removeFromCart(product) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // Exclui o item do carrinho
  function removeItemFromCart(product) {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
