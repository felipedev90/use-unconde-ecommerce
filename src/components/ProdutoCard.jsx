import { useCart } from "../context/useCart";
import { formatCurrency } from "/src/utils/formatCurrency";

export default function ProdutoCard({ produto }) {
  const { addToCart, removeFromCart } = useCart();
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

        <button onClick={() => removeFromCart(produto)}>
          Remover do carrinho
        </button>

        <button onClick={() => addToCart(produto)}>
          Adicionar ao carrinho
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
