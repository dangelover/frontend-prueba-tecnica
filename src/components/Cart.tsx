import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart: React.FC = () => {
  const cart = useContext(CartContext);
  if (!cart) return null;

  const { items, removeFromCart, getTotalItems, getTotalPrice } = cart;

  return (
    <div
      className="border p-4 rounded shadow mt-6"
      aria-label="Carrito de compras"
    >
      <h2 className="font-semibold text-lg">
        Carrito ({getTotalItems()} items)
      </h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="mt-2">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between items-center mb-2">
              <span>
                {i.title} x {i.quantity} = ${i.price * i.quantity}
              </span>
              <button
                onClick={() => removeFromCart(i.id)}
                aria-label={`Eliminar ${i.title}`}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="font-semibold mt-2">Total: ${getTotalPrice()}</p>
    </div>
  );
};

export default Cart;
