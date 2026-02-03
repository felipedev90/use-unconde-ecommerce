export default function SearchBar({ searchTerm, onSearchTerm }) {
  return (
    <div className="flex w-full items-center bg-white rounded-full px-3 py-2 border border-gray-200 focus-within:border-emerald-600 transition-all">
      <input
        className="flex-1 bg-transparent outline-none text-sm text-gray-900 px-2"
        type="text"
        placeholder="Buscar produto..."
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
      />
    </div>
  );
}
