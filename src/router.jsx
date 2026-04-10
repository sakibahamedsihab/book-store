import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import ListedBooks from "./pages/ListedBooks";
import ReadBooks from "./pages/ReadBooks";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/all-books",
        element: <h1>About Page</h1>,
      },
      {
        path: "/all-books/:bookId",
        element: <BookDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/booksData.json");
          const allBooks = await res.json();

          const singleBook = allBooks.find(
            (book) => book.bookId == params.bookId,
          );
          return singleBook;
        },
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"),
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wish-list",
            element: <Wishlist />,
          },
        ],
      },
    ],
  },
]);

export default router;
