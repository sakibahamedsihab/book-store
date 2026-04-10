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
    <div className="px-4 sm:px-6 lg:px-0 max-w-4xl mx-auto space-y-4 sm:space-y-5 font-sans py-8 sm:py-10">
      {readBooks.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
}
export default ReadBooks;
