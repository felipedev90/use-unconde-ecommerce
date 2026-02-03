import { useMemo } from "react";

export function useFilteredProducts(products, searchTerm, category) {
  return useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(term);
      const matchCategory = category === "all" || p.category === category;
      return matchName && matchCategory;
    });
  }, [products, searchTerm, category]);
}
