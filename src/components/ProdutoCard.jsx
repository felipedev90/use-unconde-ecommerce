import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProdutoCard({ produto }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/products/${produto.id}`} className="block">
        <div className="aspect-square bg-gray-50 overflow-hidden">
          <img
            src={produto.image}
            alt={produto.name}
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        </div>

        <div className="p-4">
          <p className="font-text text-xs font-semibold text-emerald-700">
            {produto.category}
          </p>
          <h3 className="mt-1 font-title font-semibold text-gray-900 line-clamp-2">
            {produto.name}
          </h3>
          <p className="mt-2 font-text text-lg font-bold text-gray-900">
            {formatCurrency(produto.price)}
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          onClick={() => addToCart(produto)}
          className="w-full py-2 rounded-xl bg-emerald-600 text-white font-text font-medium hover:bg-emerald-700 transition-colors"
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
