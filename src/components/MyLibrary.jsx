import Statistics from "./Statistics";
import { useState } from "react";

function MyLibrary({ books, readBooks,children }) {
  const [showStatistics, setShowStatistics] = useState(false);



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
       {children}
      </ul>
    </>
  );
}

export default MyLibrary;
