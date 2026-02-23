import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { CartProvider } from "../context/CartContext";

const mockProducts = [
  {
    id: 1,
    title: "Cuenta de Ahorro Digital",
    price: 200,
    category: "Cuenta",
    image: "credito2.png",
  },
  {
    id: 2,
    title: "Cuenta Corriente Premium",
    price: 300,
    category: "Cuenta",
    image: "credito2.png",
  },
  {
    id: 3,
    title: "Crédito Personal",
    price: 10000,
    category: "Crédito",
    image: "credito2.png",
  },
];

describe("ProductList", () => {
  it("muestra todos los productos cuando no hay filtros", () => {
    render(
      <CartProvider>
        <ProductList products={mockProducts} search="" category="Todos" />
      </CartProvider>,
    );

    expect(screen.getByText("Cuenta de Ahorro Digital")).toBeInTheDocument();
    expect(screen.getByText("Cuenta Corriente Premium")).toBeInTheDocument();
    expect(screen.getByText("Crédito Personal")).toBeInTheDocument();
  });

  it("filtra productos por categoría", () => {
    render(
      <CartProvider>
        <ProductList products={mockProducts} search="" category="Cuenta" />
      </CartProvider>,
    );

    expect(screen.getByText("Cuenta de Ahorro Digital")).toBeInTheDocument();
    expect(screen.getByText("Cuenta Corriente Premium")).toBeInTheDocument();
  });
});
