import { useMemo } from "react";

export function useCategories(products) {
  return useMemo(() => {
    const list = Array.from(new Set(products.map((p) => p.category)));

    list.sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base" }));

    return ["all", ...list];
  }, [products]);
}
