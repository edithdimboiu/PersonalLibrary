import "./App.css";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import BookList from "./components/BookList";
import Loader from "./components/Loader";
import Section from "./components/Section";
import Alert from "./components/Alert";
import MyLibrary from "./components/MyLibrary";
import MyLibraryCard from "./components/MyLibraryCard";
import { useBooks } from "./hooks/useBooks";

export default function App() {
  const { books, error, isLoading, myLibrary, setMyLibrary, showAlert, setShowAlert, alertMessage, setAlertMessage, readBooks, setReadBooks } = useBooks();

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

  const markAsRead = id => {
    if (readBooks.some(book => book.id === id)) {
      setReadBooks(readBooks.filter(book => book.id !== id)); //remove the book from readBooks if already marked as read
    } else {
      const bookToAdd = books.find(book => book.id === id);
      if (bookToAdd) {
        setReadBooks([...readBooks, bookToAdd]);
      }
    }
  };

  function handleRemoveBook(id) {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
    setReadBooks(readBooks.filter(book => book.id !== id));
  }

  return (
    <>
      <Navigation numberResults={books?.length || 0}></Navigation>
      <Main>
        <Section>
          {!books && <h2>We are sorry, there are no results. Please try searching again by another title or author.</h2>}
          {isLoading && <Loader />}
          {!isLoading && !error && books && <BookList books={books} handleOnClick={addToMyLibrary} />}
          {error && <h2>There was an error!</h2>}
          {showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
        </Section>
        <Section>
          <MyLibrary books={myLibrary} readBooks={readBooks}>
            {myLibrary.map(book => (
              <MyLibraryCard book={book} key={book.id} readBooks={readBooks} markAsRead={markAsRead} handleRemoveBook={handleRemoveBook}></MyLibraryCard>
            ))}
          </MyLibrary>
        </Section>
      </Main>
    </>
  );
}
