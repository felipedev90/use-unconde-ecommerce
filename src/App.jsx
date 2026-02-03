import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategorySelector from "./components/CategorySelector";
import Cart from "./components/Cart";
import MiniCart from "./components/MiniCart";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

import Home from "./pages/Home";
import Product from "./pages/Product";

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
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao carregar dados", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase());

    const matchCategory = category === "all" || product.category === category;

    return matchName && matchCategory;
  });

  return (
    <div>
      <Header className="min-h-screen bg-gray-50">
        <div className="hidden md:block w-full max-w-xl">
          <SearchBar searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
        </div>

        <div className="hidden md:block">
          <CategorySelector
            category={category}
            onCategoryChange={setCategory}
            categories={categories}
          />
        </div>

        <Cart onOpenCart={() => setIsCartOpen(true)} />
      </Header>

      {isCartOpen && <MiniCart onClose={() => setIsCartOpen(false)} />}

      <Routes>
        <Route path="/" element={<Home products={filteredProducts} />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>

      <Footer />
    </div>
  );
}
