import { useState, useEffect } from "react";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import MiniCart from "./components/MiniCart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao carregar dados", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  function removeItemFromCart(product) {
    const confirm = window.confirm(`Deseja remover este item do carrinho?`);

    if (confirm) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    }
  }

  return (
    <div>
      <Header cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      {isCartOpen && (
        <MiniCart
          cart={cart}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onRemoveItemFromCart={removeItemFromCart}
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
