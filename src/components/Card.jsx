import { CiCalendar } from "react-icons/ci";
import noImage from "../assets/noImage.jpeg";
import { useState } from "react";

export default function Card({ book, handleOnClick }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <li onClick={() => setIsClicked(!isClicked)}>
      <img
        src={book.volumeInfo.imageLinks?.smallThumbnail || noImage}
        alt={`${book.volumeInfo?.title} image`}
      />
      <h3>{book.volumeInfo?.title}</h3>
      <h4>{book.volumeInfo?.authors}</h4>
      <div className="release-date">
        <p>
          <CiCalendar />
          <span>
            {new Date(book.volumeInfo?.publishedDate).getFullYear() ||
              "Unknown release year"}
          </span>
        </p>
      </div>
      {isClicked && (
        <div className="description">
          <h3>Description</h3>
          <p>{book.volumeInfo.description || "No description available"}</p>
          <button className="btn" onClick={() => handleOnClick(book.id)}>
            Add to My library
          </button>
        </div>
      )}
    </li>
  );
}
