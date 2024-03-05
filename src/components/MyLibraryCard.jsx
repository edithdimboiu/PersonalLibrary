import { AiOutlineRead, AiFillRead } from "react-icons/ai";
import noImage from "../assets/noImage.jpeg";

export default function Card({ book, markAsRead, readBooks }) {
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
        <span>{`${book.volumeInfo.pageCount} pages`}</span>
      </p>
    </li>
  );
}
