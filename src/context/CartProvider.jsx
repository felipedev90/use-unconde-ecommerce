import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";

export function CartProvider({ children }) {
  // Checa se o navegador tem algum dado para carregar
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Side effect: persiste o carrinho no localStorage sempre que "cart" mudar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adiciona 1 unidade do produto ao carrinho, respeitando o estoque
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id); // Procura se o produto já existe no carrinho
      const currentQuantity = existing?.quantity ?? 0; // Quantidade atual no carrinho (se não existir, assume 0)

      // Bloqueia incremento se já atingiu o stock do produto
      if (currentQuantity >= product.stock) {
        return prev;
      }

      // Se já existir, incrementa a quantidade desse item
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }]; // Se não existir, adiciona o produto com quantity = 1
    });
  }

  // Remove o item do carrinho
  function removeFromCart(product) {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 } // Decrementa quantity do item correspondente
              : item,
          )
          .filter((item) => item.quantity > 0), // Remove itens que ficaram com quantity <= 0
    );
  }

  // Remove o item inteiro do carrinho (independente da quantidade)
  function removeItemFromCart(product) {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  }

  // Fornece estado + ações para toda a árvore abaixo do Provider
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
