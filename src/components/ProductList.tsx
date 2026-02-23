import type React from "react";
import type { Product } from "../types";
import { useMemo } from "react";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  search: string;
  category: string;
}

const ProductList: React.FC<Props> = ({ products, search, category }) => {
  const filtered = useMemo(
    () =>
      products
        .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
        .filter((p) => (category === "Todos" ? true : p.category === category)),
    [products, search, category],
  );

  return (
    <div
      role="list"
      tabIndex={0}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr"
    >
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
