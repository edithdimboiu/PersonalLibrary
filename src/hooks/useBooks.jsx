import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
export function useBooks() {
  return useContext(BooksContext);
}
