import { useEffect, useState } from "react";

export const useGet = query => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query && query.length > 3) {
      setIsLoading(true);
      const key = "AIzaSyCrN9f1ugzEZns_Gp8O_8E7po1iBXsQvGY";
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&key=${key}`;

      fetch(url)
        .then(response => response.json())
        .then(data => setBooks(data.items))
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    } else {
      setBooks([]);
      setError(null);
      setIsLoading(false);
    }
  }, [query]);

  return { books, error, isLoading };
};
