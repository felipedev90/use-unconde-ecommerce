export default function CategorySelector({
  category,
  onCategoryChange,
  categories,
}) {
  return (
    <div className="flex items-center">
      <select
        className="bg-transparent text-white outline-none appearance-none text-sm font-medium cursor-pointer focus:bg-emerald-950 focus:text-white"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="text-gray-900 bg-white">
            {cat === "all" ? "Todas as categorias" : cat}
          </option>
        ))}
      </select>
    </div>
  );
}
