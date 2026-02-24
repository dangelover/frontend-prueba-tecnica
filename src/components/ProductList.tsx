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

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No se encontraron productos
          </h3>

          <p className="text-gray-600">
            {search && category !== "Todos"
              ? `No hay productos que coincidan con "${search}" en la categoría ${category}`
              : search
                ? `No hay productos que coincidan con "${search}"`
                : category !== "Todos"
                  ? `No hay productos en la categoría ${category}`
                  : "No hay productos disponibles"}
          </p>
          {(search || category !== "Todos") && (
            <p className="text-sm text-gray-500 mt-4">
              Intenta con otros términos o limpia los filtros
            </p>
          )}
        </div>
      </div>
    );
  }
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
