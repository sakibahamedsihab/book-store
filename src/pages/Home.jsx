import { useLoaderData } from "react-router-dom";
import Book from "../components/Book";

function Homepage() {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="max-w-270 mx-auto space-y-5 font-sans px-4 sm:px-6 lg:px-0 py-6 sm:py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center">
        Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}
export default Homepage;
