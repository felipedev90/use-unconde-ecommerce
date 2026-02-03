// Hook responsável por buscar os produtos na API e expor:
// - products (dados)
// - loading (estado de carregamento)
// - error (erro caso falhe)
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productsService";

export function useProducts() {
  const [products, setProducts] = useState([]); // Lista de produtos carregada da API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Evita setState após unmount
    let ignore = false;

    fetchProducts()
      .then((data) => {
        if (!ignore) setProducts(data); // Só atualiza o estado se o componente ainda estiver montado
      })
      .catch((err) => {
        if (!ignore) setError(err);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    // Cleanup
    return () => {
      ignore = true;
    };
  }, []); // Array vazio => roda uma vez (na montagem)

  return { products, loading, error };
}
