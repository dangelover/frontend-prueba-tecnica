import React from "react";
import type { Product } from "../types";

interface Props {
  category: string;
  setCategory: (c: string) => void;
  products: Product[];
}

const CategoryFilter: React.FC<Props> = ({
  category,
  setCategory,
  products,
}) => {
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  return (
    <div className="my-4">
      <label htmlFor="category" className="mr-2 font-medium">
        Categoría:
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filtrar por categoría"
        className="border rounded px-2 py-1"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
