import { useEffect } from "react";
import { useCart } from "../context/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import { Trash2 } from "lucide-react";

export default function MiniCart({ onClose }) {
  const { cart, addToCart, removeFromCart, removeItemFromCart } = useCart();

  const totalCart = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Fecha no ESC + trava scroll do body enquanto aberto
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <button
        className="absolute inset-0 bg-black/50"
        aria-label="Fechar carrinho"
        onClick={onClose}
        type="button"
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-title text-lg font-semibold">Carrinho</h2>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded border"
            type="button"
          >
            Fechar
          </button>
        </div>

        <div className=" mt-4">
          {cart.length === 0 && <p className="font-text">Carrinho vazio.</p>}

          {cart.map((item) => (
            <div key={item.id} className="py-3 border-b flex gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="font-title font-medium">{item.name}</p>
                <p className="font-text text-sm text-gray-600">
                  {formatCurrency(item.price)}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    className="w-8 h-8 rounded border"
                    onClick={() => removeFromCart(item)}
                    disabled={item.quantity <= 1}
                    aria-label="Diminuir quantidade"
                    title="Diminuir"
                  >
                    −
                  </button>

                  <span className="min-w-6 text-center">{item.quantity}</span>

                  <button
                    type="button"
                    className="w-8 h-8 rounded border"
                    onClick={() => addToCart(item)}
                    aria-label="Aumentar quantidade"
                    title="Aumentar"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    className="ml-auto px-2 py-1 rounded border"
                    onClick={() => {
                      const confirm = window.confirm(
                        `Deseja remover ${item.name} do carrinho?`,
                      );
                      if (confirm) removeItemFromCart(item);
                    }}
                    aria-label="Remover item"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <p className="mt-2 font-text font-semibold">
                  Subtotal: {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer do drawer */}
        <div className="mt-4">
          <div className="flex items-center justify-between font-text font-semibold">
            <span>Total</span>
            <span>{formatCurrency(totalCart)}</span>
          </div>

          <button
            type="button"
            className="mt-3 w-full py-2 rounded bg-emerald-600 font-title text-white disabled:opacity-50"
            disabled={cart.length === 0}
          >
            Finalizar compra
          </button>
        </div>
      </aside>
    </div>
  );
}
