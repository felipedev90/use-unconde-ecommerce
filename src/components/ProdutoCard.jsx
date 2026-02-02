import { formatCurrency } from "/src/utils/formatCurrency";

export default function ProdutoCard({
  produto,
  onAddToCart,
  onRemoveFromCart,
}) {
  return (
    <div>
      <div>
        <img src={produto.image} alt={produto.name} />
      </div>

      <div>
        <span>{produto.category}</span>
        <h3>{produto.name}</h3>
        <p>{produto.description}</p>
        <p>{formatCurrency(produto.price)}</p>
        <button onClick={() => onRemoveFromCart(produto)}>
          Remover do carrinho
        </button>
        <button onClick={() => onAddToCart(produto)}>
          Adicionar ao carrinho
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
