import { useContext } from "react";
import { CartContext } from "./cartContext";

export function useCart() {
  // Lê o valor atual do CartContext (cart + funções)
  const context = useContext(CartContext);

  // Proteção: se alguém usar useCart fora do Provider, dá erro claro
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context; // Retorna o objeto do contexto para o componente usar
}
