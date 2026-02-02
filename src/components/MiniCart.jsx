export default function MiniCart({ cart, onAdd, onRemove, onClose }) {
  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 && <p>Carrinho vazio.</p>}
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantidade: {item.quantity}</p>
          <p>R$ {item.price}</p>
        </div>
      ))}
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}
