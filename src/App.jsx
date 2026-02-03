import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategorySelector from "./components/CategorySelector";
import Cart from "./components/Cart";
import MiniCart from "./components/MiniCart";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao carregar dados", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase());

    const matchCategory = category === "all" || product.category === category;

    return matchName && matchCategory;
  });

  return (
    <div>
      <Header />
      <div>
        <SearchBar searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
        <CategorySelector
          category={category}
          onCategoryChange={setCategory}
          categories={categories}
        />
        <Cart onOpenCart={() => setIsCartOpen(true)} />
      </div>

      {isCartOpen && <MiniCart onClose={() => setIsCartOpen(false)} />}
      <Produtos products={filteredProducts} />

      <Footer />
    </div>
  );
}
