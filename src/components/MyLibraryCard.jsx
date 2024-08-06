import { AiOutlineRead, AiFillRead } from "react-icons/ai";
import noImage from "../assets/noImage.jpeg";
import { useBooks } from "../hooks/useBooks";

export default function Card({ book }) {
  const { readBooks, markAsRead, handleRemoveBook } = useBooks();
  const isRead = readBooks.some(mark => mark.id === book.id);

  return (
    <li>
      <img
        src={book.volumeInfo.imageLinks?.smallThumbnail || noImage}
        alt={`${book.volumeInfo?.title} image`}
      />
      <h3>{book.volumeInfo?.title}</h3>
      <h4>{book.volumeInfo?.authors}</h4>
      <p>
        {isRead ? (
          <AiFillRead size={30} onClick={() => markAsRead(book.id)} />
        ) : (
          <AiOutlineRead size={30} onClick={() => markAsRead(book.id)} />
        )}
        <span>
          {book.volumeInfo.pageCount
            ? `${book.volumeInfo.pageCount} pages`
            : "Unknown number of pages"}
        </span>
        <span className="no-price">
          {book.saleInfo.saleability === "NOT_FOR_SALE"
            ? " No price details"
            : ""}
          {book.saleInfo.saleability === "FREE" ? "Free" : ""}
        </span>
      </p>

      <button
        className=" btn btn-remove"
        onClick={() => handleRemoveBook(book.id)}
      >
        -
      </button>
    </li>
  );
}
