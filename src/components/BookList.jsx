import Card from "./Card";

export default function BookList({ books, handleOnCardClick }) {
  return (
    <ul className="list list-books">
      {books?.map(book => (
        <Card book={book} key={book.id} handleOnCardClick={handleOnCardClick} />
      ))}
    </ul>
  );
}
