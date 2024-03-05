import MyLibraryCard from "./MyLibraryCard";
import { useState } from "react";

function MyLibrary({ books }) {
  const [readBooks, setReadBooks] = useState([]);

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

  return (
    <ul className="list list-books">
      {books.length > 0 && (
        <div className="summary">
          <h2>
            You have {books.length} books in your library, of which you read{" "}
            {readBooks.length} .
          </h2>
        </div>
      )}
      {books.map(book => (
        <MyLibraryCard
          book={book}
          key={book.id}
          readBooks={readBooks}
          markAsRead={markAsRead}
        ></MyLibraryCard>
      ))}
    </ul>
  );
}

export default MyLibrary;
