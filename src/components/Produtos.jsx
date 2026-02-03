import ProdutoCard from "./ProdutoCard";

export default function Produtos({ products }) {
  if (products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <div>
      <h2>Nossos produtos:</h2>
      {products.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
