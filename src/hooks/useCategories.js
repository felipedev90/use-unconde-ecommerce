// Hook que deriva (gera) a lista de categorias a partir dos produtos.
// Ele remove duplicadas, ordena e adiciona a opção "all" no começo.
import { useMemo } from "react";

export function useCategories(products) {
  return useMemo(() => {
    // Categorias únicas (remove duplicadas)
    const list = Array.from(new Set(products.map((p) => p.category)));

    // Ordena com regras do pt-BR (case/acento)
    list.sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base" }));

    // Retorna a lista final, com "all" como primeira opção
    return ["all", ...list];
  }, [products]); // Recalcula só quando products mudar
}
