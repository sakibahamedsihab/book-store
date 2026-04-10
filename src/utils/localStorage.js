export const getStoredReadBooks = () => {
  const storedBooks = localStorage.getItem("read-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

export const saveReadBook = (bookId) => {
  const storedbooks = getStoredReadBooks();

  const exist = storedbooks.find((id) => id === bookId);

  if (!exist) {
    storedbooks.push(bookId);
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

export const saveWishlistedBooks = (bookId) => {
  const storedBooks = getWishlistedBooks();
  const readBooks = getStoredReadBooks();

  const existInReadBooks = readBooks.find((id) => id === bookId);
  if (existInReadBooks) {
    alert("Already in Read list");
    return;
  }

  const exist = storedBooks.find((id) => id === bookId); // what is wrong

  if (exist) {
    alert("Already is in wishlist");
  } else {
    storedBooks.push(bookId);
    localStorage.setItem("wishlist-books", JSON.stringify(storedBooks));
  }
};
