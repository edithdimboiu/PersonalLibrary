import "./App.css";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SearchInput from "./components/SearchInput";
import { useState } from "react";
import BookList from "./components/BookList";
import Loader from "./components/Loader";
import { useGet } from "./hooks/useGet";
import Section from "./components/Section";
import Alert from "./components/Alert";
import MyLibrary from "./components/MyLibrary";

export default function App() {
  const [query, setQuery] = useState("");
  const { books, error, isLoading } = useGet(query);
  const [myLibrary, setMyLibrary] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  function handleOnChange(e) {
    setQuery(e.target.value);
  }
  const addToMyLibrary = id => {
    const selectedBook = books.find(book => book.id === id);
    const isDuplicate = myLibrary.some(book => book.id === id);
    if (!isDuplicate) {
      setMyLibrary([...myLibrary, selectedBook]);
    } else {
      setAlertMessage("This book already exists in your library!");

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  function handleRemoveBook(id) {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
  }

  return (
    <>
      <Navigation numberResults={books.length}>
        <SearchInput query={query} handleOnChange={handleOnChange} />
      </Navigation>
      <Main>
        <Section>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <BookList books={books} handleOnClick={addToMyLibrary} />
          )}
          {error && <h2>There was an error!</h2>}
          {showAlert && (
            <Alert message={alertMessage} onClose={() => setShowAlert(false)} />
          )}
        </Section>
        <Section>
          <MyLibrary books={myLibrary} handleRemoveBook={handleRemoveBook} />
        </Section>
      </Main>
    </>
  );
}
