import { createContext, useState } from "react";
import { useGet } from "../hooks/useGet";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const { books, error, isLoading } = useGet(query);
  const [myLibrary, setMyLibrary] = useLocalStorage("myLibrary", []);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [readBooks, setReadBooks] = useLocalStorage("readBooks", []);

  const markAsRead = id => {
    if (readBooks.some(book => book.id === id)) {
      setReadBooks(readBooks.filter(book => book.id !== id)); //remove the book from readBooks if already marked as read
    } else {
      const bookToAdd =
        books.find(book => book.id === id) ||
        myLibrary.find(book => book.id === id);
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
    <BooksContext.Provider
      value={{
        books,
        error,
        isLoading,
        query,
        setQuery,
        myLibrary,
        setMyLibrary,
        showAlert,
        setShowAlert,
        alertMessage,
        setAlertMessage,
        readBooks,
        setReadBooks,
        markAsRead,
        handleRemoveBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
