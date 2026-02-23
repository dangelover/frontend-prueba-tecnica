import { useContext } from "react";
import type { Product } from "../types";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const cart = useContext(CartContext);
  if (!cart) return null;
  const { addToCart } = cart;
  const handleAdd = () => {
    addToCart(product);

    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${product.title} fue agregado al carrito`,
      timer: 1500,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });
  };

  return (
    <div
      tabIndex={0}
      role="listitem"
      className="border rounded-lg p-4 m-2 flex flex-col items-center shadow hover:shadow-md transition"
    >
      <img
        src={new URL(`../image/icons/${product.image}`, import.meta.url).href}
        alt={product.title}
        className="w-32 h-32 object-contain mb-2"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button
        onClick={handleAdd}
        aria-label={`Agregar ${product.title} al carrito`}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded "
      >
        Agregar
      </button>
    </div>
  );
};
export default ProductCard;
