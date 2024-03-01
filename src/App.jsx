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
  const [myLibrary, setMyLibrary] = useState([]);

  function handleOnChange(e) {
    setQuery(e.target.value);
  }
  const addToMyLibrary = id => {
    const selectedBook = books.find(book => book.id === id);
    const isDuplicate = myLibrary.some(book => book.id === id);
    if (!isDuplicate) {
      setMyLibrary([...myLibrary, selectedBook]);
    } else {
      console.log("This book already exists in your library!");
    }
  };

  return (
    <>
      <Navigation numberResults={books.length}>
        <SearchInput query={query} handleOnChange={handleOnChange} />
      </Navigation>
      <Main>
        <Section>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <BookList books={books} handleOnCardClick={addToMyLibrary} />
          )}
          {error && <h2>There was an error!</h2>}
        </Section>
        <Section>
          <BookList books={myLibrary} />
        </Section>
      </Main>
    </>
  );
}
