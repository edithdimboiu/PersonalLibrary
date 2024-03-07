import MyLibraryCard from "./MyLibraryCard";
import Statistics from "./Statistics";
import { useState } from "react";

function MyLibrary({ books, handleRemoveBook }) {
  const [readBooks, setReadBooks] = useState([]);
  const [showStatistics, setShowStatistics] = useState(false);

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
    <>
      {books.length > 0 && (
        <div className="summary">
          <h2>
            You have {books.length} books in your library, of which you read{" "}
            {readBooks.length} .
          </h2>
          <button
            className="btn text-btn"
            onClick={() => setShowStatistics(!showStatistics)}
          >
            Statistics
          </button>
          {showStatistics && <Statistics readBooks={readBooks} myLibrary={books} />}
        </div>
      )}
      <ul className="list list-books">
        {books.map(book => (
          <MyLibraryCard
            book={book}
            key={book.id}
            readBooks={readBooks}
            markAsRead={markAsRead}
            handleRemoveBook={handleRemoveBook}
          ></MyLibraryCard>
        ))}
      </ul>
    </>
  );
}

export default MyLibrary;
