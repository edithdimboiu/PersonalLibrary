import Card from "./Card";

export default function BookList({ books, handleOnClick }) {
  return (
    <ul className="list list-books">
      {books?.map(book => (
        <Card book={book} key={book.id} handleOnClick={handleOnClick} />
      ))}
    </ul>
  );
}
