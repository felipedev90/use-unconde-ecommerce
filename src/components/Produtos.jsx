import ProdutoCard from "./ProdutoCard";

export default function Produtos({ products, onAddToCart, onRemoveFromCart }) {
  return (
    <div>
      <h2>Nossos produtos:</h2>
      {products.map((produto) => (
        <ProdutoCard
          key={produto.id}
          produto={produto}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
}
