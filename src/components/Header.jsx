export default function Header({ cart, onOpenCart }) {
  return (
    <div>
      <h1>useUncode Commerce</h1>
      <button onClick={onOpenCart}>
        <span>🛒</span>
        <span>{cart.length}</span>
      </button>
    </div>
  );
}
