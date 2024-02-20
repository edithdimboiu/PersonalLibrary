import { useState } from "react";

export default function SearchInput() {
    const [query, setQuery] = useState("");

    return (
    <input
      className="search"
      type="text"
      placeholder="Search book..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />)
}