import { createContext, useState } from "react";
import {
  getStoredReadBooks,
  getWishlistedBooks,
  saveReadBook,
  saveWishlistedBooks,
} from "../utils/localStorage";

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [readList, setReadList] = useState(() => getStoredReadBooks() || []);
  const [wishList, setWishList] = useState(() => getWishlistedBooks() || []);

  function handleMarkAsRead(currentBook) {
    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      alert("already exisst in reading list");
      return;
    }

    setReadList([...readList, currentBook]);
    saveReadBook(currentBook);
  }

  function handleWishList(currentBook) {
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      alert("already in readlist");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      alert("already in wishlist");
      return;
    }

    setWishList([...wishList, currentBook]);
    saveWishlistedBooks(currentBook);
  }

  const contextValues = {
    readList,
    setReadList,
    wishList,
    setWishList,
    handleMarkAsRead,
    handleWishList,
  };

  return (
    <>
      <BookContext.Provider value={contextValues}>
        {children}
      </BookContext.Provider>
    </>
  );
}
export default BookContextProvider;
