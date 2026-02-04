// Busca a lista de produtos na API.
export async function fetchProducts() {
  const res = await fetch("api/products"); // endpoint da API
  if (!res.ok) throw new Error("Falha ao buscar produtos"); // força tratamento de erro

  const data = await res.json();

  // Garante consistência: devolve array mesmo se a API mudar o shape do JSON ou responda em formato “envelopado”.
  return Array.isArray(data) ? data : (data.products ?? []);
}
