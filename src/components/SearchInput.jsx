export default function SearchInput({ query, handleOnChange }) {
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
