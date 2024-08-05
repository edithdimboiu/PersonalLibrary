import { createContext, useState } from "react";
import { useGet } from "../hooks/useGet";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const { books, error, isLoading } = useGet(query);
  const [myLibrary, setMyLibrary] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [readBooks, setReadBooks] = useState([]);

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
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
