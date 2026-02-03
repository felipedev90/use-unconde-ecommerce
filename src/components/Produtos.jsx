import ProdutoCard from "./ProdutoCard";

export default function Produtos({ products }) {
  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="font-text text-gray-600">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-end justify-between gap-3">
        <h2 className="font-title text-xl md:text-2xl font-semibold text-gray-900">
          Nossos produtos
        </h2>
        <p className="font-text text-sm text-gray-500">
          {products.length} itens
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </main>
  );
}
