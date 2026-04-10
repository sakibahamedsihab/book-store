import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getWishlistedBooks } from "../utils/localStorage";
import BookCard from "../components/BookCard";

function Wishlist() {
  const allBooks = useOutletContext();

  const [wishList, setWishList] = useState([]);

  useEffect(
    function () {
      const storedId = getWishlistedBooks();
      const readList = allBooks.filter((book) =>
        storedId.includes(book.bookId),
      );
      setWishList((prev) => [...prev, ...readList]);
    },
    [allBooks],
  );

  return (
    <div className="max-w-270 mx-auto space-y-5 font-sans py-10">
      {wishList.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
}
export default Wishlist;
