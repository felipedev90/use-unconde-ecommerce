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
    <div className="p-4">
      <Link className="underline font-text" to="/">
        ← Voltar
      </Link>

      <div className="mt-4">
        <img src={product.image} alt={product.name} className="max-w-sm" />
        <h2 className="font-title text-2xl font-bold mt-3 pb-3">
          {product.name}
        </h2>
        <h3 className="font-text font-bold">Descrição:</h3>
        <p className="font-text mt-2">{product.description}</p>
        <p className="font-text mt-2 font-semibold">
          {formatCurrency(product.price)}
        </p>
        <p className="font-text mt-1 text-sm">Categoria: {product.category}</p>
        <p className="font-text mt-1 text-sm">Estoque: {product.stock}</p>

        <button
          className="font-text mt-4 px-4 py-2 rounded bg-emerald-600 text-white"
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
