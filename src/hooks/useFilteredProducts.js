// Hook que retorna uma lista filtrada de produtos, baseado em:
// - termo de busca (searchTerm) no nome
// - categoria selecionada (category)
// Usa useMemo para evitar recalcular o filtro sem necessidade.
import { useMemo } from "react";

export function useFilteredProducts(products, searchTerm, category) {
  return useMemo(() => {
    // Normaliza termo de busca
    const term = searchTerm.trim().toLowerCase();

    // Filtra por nome + categoria (ou "all")
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(term);
      const matchCategory = category === "all" || p.category === category;
      // Só entra na lista se passar nas duas regras
      return matchName && matchCategory;
    });
  }, [products, searchTerm, category]); // Recalcula apenas quando algum desses valores mudar
}
