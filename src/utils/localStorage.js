export const getStoredReadBooks = () => {
  const storedBooks = localStorage.getItem("read-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

export const saveReadBook = (book) => {
  const storedbooks = getStoredReadBooks();

  const exist = storedbooks.find(
    (storeBook) => storeBook.bookId === book.bookId,
  );

  if (!exist) {
    storedbooks.push(book);
    localStorage.setItem("read-books", JSON.stringify(storedbooks));
    alert("Books added successfully");
  } else alert("You have already added this book");
};

export const getWishlistedBooks = () => {
  const storedBooks = localStorage.getItem("wishlist-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  } else {
    return [];
  }
};

export const saveWishlistedBooks = (book) => {
  const storedBooks = getWishlistedBooks();
  const readBooks = getStoredReadBooks();

  const existInReadBooks = readBooks.find(
    (readBook) => readBook.bookId === book.bookId,
  );
  if (existInReadBooks) {
    alert("Already in Read list");
    return;
  }

  const exist = storedBooks.find(
    (storeBook) => storeBook.bookId === book.bookId,
  ); // what is wrong

  if (exist) {
    alert("Already is in wishlist");
  } else {
    storedBooks.push(book);
    localStorage.setItem("wishlist-books", JSON.stringify(storedBooks));
  }
};
