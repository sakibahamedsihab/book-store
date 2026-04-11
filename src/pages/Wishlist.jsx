import BookCard from "../components/BookCard";
import { BookContext } from "../context/BookContext";
import { useContext } from "react";

function Wishlist() {
  const { wishList } = useContext(BookContext);
  return (
    <div>
      {wishList.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
}
export default Wishlist;
