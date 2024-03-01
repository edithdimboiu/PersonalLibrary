import { CiCalendar } from "react-icons/ci";
import noImage from "../assets/noImage.jpeg";

export default function Card({ book, handleOnCardClick }) {
  return (
    <li onClick={() => handleOnCardClick(book.id)}>
      <img
        src={book.volumeInfo.imageLinks?.smallThumbnail || noImage}
        alt={`${book.volumeInfo?.title} image`}
      />
      <h3>{book.volumeInfo?.title}</h3>
      <h4>{book.volumeInfo?.authors}</h4>
      <div>
        <p>
          <CiCalendar />
          <span>
            {new Date(book.volumeInfo?.publishedDate).getFullYear() ||
              "Unknown release year"}
          </span>
        </p>
      </div>
    </li>
  );
}
