import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getStoredReadBooks } from "../utils/localStorage";
import BookCard from "../components/BookCard";

function ReadBooks() {
  const allBooks = useOutletContext();

  const [readBooks, setReadBooks] = useState([]);

  useEffect(
    function () {
      const storedId = getStoredReadBooks();
      const readList = allBooks.filter((book) =>
        storedId.includes(book.bookId),
      );
      setReadBooks((prev) => [...prev, ...readList]);
    },
    [allBooks],
  );

  return (
    <div className="max-w-270 mx-auto space-y-5 font-sans py-10">
      {readBooks.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
}
export default ReadBooks;
