export default function SearchBar({ searchTerm, onSearchTerm }) {
  return (
    <div className="hidden md:flex flex-1 max-w-xl items-center bg-gray-100 rounded-full px-2 py-2 border border-transparent focus-within:border-shopGreen focus-within:bg-white transition-all">
      <input
        className="flex-1 bg-transparent outline-none text-sm text-shopText px-2 pl-4"
        type="text"
        placeholder="Buscar produto..."
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
      />
    </div>
  );
}
