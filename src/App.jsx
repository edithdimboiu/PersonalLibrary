import "./App.css";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SearchInput from "./components/SearchInput";
import { useState } from "react";
import BookList from "./components/BookList";
import Loader from "./components/Loader";
import { useGet } from "./hooks/useGet";
import Section from "./components/Section";

export default function App() {
  const [query, setQuery] = useState("");
  const { books, error, isLoading } = useGet(query);

  function handleOnChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <Navigation>
        <SearchInput query={query} handleOnChange={handleOnChange} />
      </Navigation>
      <Main>
        <Section>
          {isLoading && <Loader />}
          {!isLoading && !error && <BookList books={books} />}
          {error && <h2>There was an error!</h2>}
        </Section>
      </Main>
    </>
  );
}
