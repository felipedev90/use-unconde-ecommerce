import { formatCurrency } from "/src/utils/formatCurrency";

export default function MiniCart({
  cart,
  onAdd,
  onRemove,
  onRemoveItemFromCart,
  onClose,
}) {
  const totalCart = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Carrinho</h2>

      {cart.length === 0 && <p>Carrinho vazio.</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <span>Quantidade: {item.quantity}</span> <br />
          {item.quantity > 1 && (
            <button onClick={() => onRemove(item)}>-</button>
          )}
          <button onClick={() => onAdd(item)}>+</button>
          <button onClick={() => onRemoveItemFromCart(item)}>🗑️</button>
          <p>{formatCurrency(item.price * item.quantity)}</p>
        </div>
      ))}

      <h3>Total: {formatCurrency(totalCart)}</h3>
      <button onClick={onClose}>Fechar Carrinho</button>
      <button>Finalizar compra</button>
    </div>
  );
}
