export default function Header({ cart }) {
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
