import Cart from "../components/Cart";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Carrito</h1>

        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Volver a productos
        </Link>
      </div>

      <Cart />
    </div>
  );
}

export default CartPage;
