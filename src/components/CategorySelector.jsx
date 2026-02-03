export default function CategorySelector({
  category,
  onCategoryChange,
  categories,
}) {
  return (
    <div>
      <div className="h-6 w-px bg-gray-300 mx-2"></div>
      <select
        className="bg-transparent outline-none text-sm font-medium text-shopText cursor-pointer"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all" ? "Todas as categorias" : cat}
          </option>
        ))}
      </select>
    </div>
  );
}
