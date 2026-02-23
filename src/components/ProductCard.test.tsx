import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext";

const mockProduct = {
  id: 1,
  title: "Laptop Gamer",
  price: 1500,
  category: "tech",
  image: "test.jpg",
};
vi.mock("sweetalert2", () => ({
  default: {
    fire: vi.fn(),
  },
}));

describe("ProductCard", () => {
  it("renderiza correctamente la información del producto", () => {
    render(
      <CartContext.Provider value={{ addToCart: vi.fn() } as any}>
        <ProductCard product={mockProduct} />
      </CartContext.Provider>,
    );

    expect(screen.getByText("Laptop Gamer")).toBeInTheDocument();
    expect(screen.getByText("$1500")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("llama a addToCart cuando se hace click en el botón", async () => {
    const mockAdd = vi.fn();

    render(
      <CartContext.Provider value={{ addToCart: mockAdd } as any}>
        <ProductCard product={mockProduct} />
      </CartContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /agregar/i });
    await userEvent.click(button);

    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(mockAdd).toHaveBeenCalledWith(mockProduct);
  });
});
