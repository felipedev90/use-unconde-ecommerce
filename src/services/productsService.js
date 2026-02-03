export async function fetchProducts() {
  const res = await fetch("api/products");
  if (!res.ok) throw new Error("Falha ao buscar produtos");
  return res.json;
}
