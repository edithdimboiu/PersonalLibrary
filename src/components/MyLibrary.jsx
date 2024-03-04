import MyLibraryCard from "./MyLibraryCard";

function MyLibrary({ books }) {
  return (
    <ul className="list list-books">
      <div className="summary">
        <h2>
          You have {books.length} books in your library, of which you read 0 .
        </h2>
      </div>
      {books.map(book => (
        <MyLibraryCard book={book} key={book.id}></MyLibraryCard>
      ))}
    </ul>
  );
}

export default MyLibrary;
