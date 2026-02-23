import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { Link } from "react-router-dom";

function Home() {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center mt-20 space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 animate-pulse">Cargando productos...</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Productos</h1>

        <Link
          to="/cart"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ver carrito
        </Link>
      </div>

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter
        category={category}
        setCategory={setCategory}
        products={products}
      />

      <ProductList products={products} search={search} category={category} />
    </div>
  );
}

export default Home;
