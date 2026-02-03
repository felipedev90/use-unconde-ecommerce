import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import Loading from "../components/Loading";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Erro ao carregar dados", err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!product || !product.id) {
    return (
      <div className="p-4 font-text">
        <p>Produto não encontrado.</p>
        <Link className="underline" to="/">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link className="underline text-sm" to="/">
        ← Voltar
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-xl object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <span className="font-text text-xs uppercase tracking-wide text-gray-500">
            {product.category}
          </span>

          <h2 className="mt-2 text-2xl md:text-3xl font-title font-normal text-shopText">
            {product.name}
          </h2>

          <p className="mt-3 font-text text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <p className="mt-4 text-lg font-semibold">
            {formatCurrency(product.price)}
          </p>

          <p className="mt-1 text-sm text-gray-500">Estoque: {product.stock}</p>

          <button
            className="mt-6 px-5 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition"
            onClick={() => addToCart(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
