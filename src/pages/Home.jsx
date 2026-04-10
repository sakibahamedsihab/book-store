import { useLoaderData } from "react-router-dom";
import Book from "../components/Book";

function Homepage() {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="max-w-270 mx-auto space-y-5 font-sans">
      <h1 className="text-4xl font-extralight text-center">Books</h1>
      <div className="grid grid-cols-3 gap-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}
export default Homepage;
