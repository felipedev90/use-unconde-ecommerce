import { useCart } from "../context/useCart";

export default function Cart({ onOpenCart }) {
  const { cart } = useCart();

  return (
    <div className="shrink-0">
      <button
        className="relative flex items-center gap-2 bg-shopGreen text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
        onClick={onOpenCart}
      >
        <span className="text-2xl">🛒</span>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
          {cart.length}
        </span>
      </button>
    </div>
  );
}
