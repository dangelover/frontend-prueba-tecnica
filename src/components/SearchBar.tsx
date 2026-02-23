import type React from "react";

interface Props {
  search: string;
  setSearch: (s: string) => void;
}
const SearchBar: React.FC<Props> = ({ search, setSearch }) => (
  <div className="my-4">
    <label htmlFor="search" className="mr-2 font-medium">
      Buscar:
    </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar producto..."
      aria-label="Buscar producto"
      className="border rounded px-2 py-1"
    />
  </div>
);

export default SearchBar;
