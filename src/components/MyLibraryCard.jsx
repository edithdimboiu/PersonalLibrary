import { AiOutlineRead } from "react-icons/ai";
import noImage from "../assets/noImage.jpeg";

export default function Card({ book }) {
  return (
    <li>
      <img
        src={book.volumeInfo.imageLinks?.smallThumbnail || noImage}
        alt={`${book.volumeInfo?.title} image`}
      />
      <h3>{book.volumeInfo?.title}</h3>
      <h4>{book.volumeInfo?.authors}</h4>
      <p>
        <AiOutlineRead size={30} />
        <span>{`${book.volumeInfo.pageCount} pages`}</span>
      </p>
    </li>
  );
}
