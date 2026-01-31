import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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
    setCart((prevCart) => [...prevCart, product]);
  }

  console.log(cart);

  return (
    <div>
      <Header cart={cart} />
      <Produtos products={products} onAddToCart={addToCart} />
      <Footer />
    </div>
  );
}

function Loading() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>Carregando produtos...</p>
    </div>
  );
}

function Header({ cart }) {
  return (
    <div>
      <h1>Uncode Commerce</h1>
      <button>
        <span>🛒</span>
        <span>{cart.length}</span>
      </button>
    </div>
  );
}

function Produtos({ products, onAddToCart }) {
  return (
    <div>
      <h2>Nossos produtos:</h2>
      {products.map((produto) => (
        <ProdutoCard
          key={produto.id}
          produto={produto}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

function ProdutoCard({ produto, onAddToCart }) {
  return (
    <div>
      <div>
        <img src={produto.image} alt={produto.name} />
      </div>

      <div>
        <span>{produto.category}</span>
        <h3>{produto.name}</h3>
        <p>R${produto.price}</p>
        <button onClick={() => onAddToCart(produto)}>
          Adicionar ao carrinho
        </button>{" "}
        <br />
        <br />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Uncode Shop - Desenvolvido por Felipe Augusto</p>
    </footer>
  );
}
