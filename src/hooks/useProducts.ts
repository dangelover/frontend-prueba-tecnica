import { useEffect, useState } from "react";
import data from "../data/Products.json";
import type { Product } from "../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(data as Product[]);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return { products, loading };
};
