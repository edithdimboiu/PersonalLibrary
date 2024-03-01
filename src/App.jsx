import "./App.css";
import Navigation from "./components/Navigation";
import SearchInput from "./components/SearchInput";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  function handleOnChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <Navigation>
        <SearchInput query={query} handleOnChange={handleOnChange} />
      </Navigation>
      <Main />
    </>
  );
}
