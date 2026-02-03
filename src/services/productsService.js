export async function fetchProducts() {
  const res = await fetch("api/products");
  if (!res.ok) throw new Error("Falha ao buscar produtos");

  const data = await res.json();

  return Array.isArray(data) ? data : (data.products ?? []);
}
