import { useState, useEffect } from "react";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import MiniCart from "./components/MiniCart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao carregar dados", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  function addToCart(product) {
    setCart((prevCart) => {
      const verificaProdutoNoCarrinho = prevCart.find(
        (item) => item.id === product.id,
      );

      if (verificaProdutoNoCarrinho) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(product) {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }

  return (
    <div>
      <Header cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      {isCartOpen && (
        <MiniCart
          cart={cart}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}

      <Produtos
        products={products}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}
