import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

function ReadBooks() {
  const { readList } = useContext(BookContext);
  console.log(readList, "readlist");

  return (
    <div>
      {readList.map((book) => {
        return <BookCard key={book.bookId} book={book} />;
      })}
    </div>
  );
}

export default ReadBooks;
