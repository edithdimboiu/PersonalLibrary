import { useBooks } from "../hooks/useBooks";

export default function SearchInput() {
  const { query, setQuery } = useBooks();

  function handleOnChange(e) {
    setQuery(e.target.value);
  }
  return (
    <input
      className="search"
      type="text"
      placeholder="Search book..."
      value={query}
      onChange={handleOnChange}
    />
  );
}
