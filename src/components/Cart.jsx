import { useCart } from "../context/useCart";
import { ShoppingCart } from "lucide-react";

export default function Cart({ onOpenCart }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="shrink-0">
      <button
        className="relative flex items-center gap-2 bg-shopGreen text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity font-medium cursor-pointer"
        onClick={onOpenCart}
      >
        {totalItems > 0 && (
          <div className="relative">
            <ShoppingCart className="w-6 h-6" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
              {totalItems}
            </span>
          </div>
        )}
      </button>
    </div>
  );
}
