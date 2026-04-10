import { Link } from "react-router-dom";

function Book({ book }) {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/all-books/${bookId}`}>
      <div className="flex flex-col h-full w-full p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-2xl border border-gray-200 bg-white shadow-sm font-sans cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex justify-center bg-gray-100 rounded-lg sm:rounded-xl py-4 sm:py-8 mb-4 sm:mb-6">
          <img
            src={image}
            alt={bookName}
            className="shadow-lg h-32 sm:h-44 lg:h-[220px] object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#F4FBF2] text-[#23B028] px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold font-serif text-gray-900 mb-2 sm:mb-3 tracking-tight line-clamp-2">
          {bookName}
        </h2>

        <p className="text-sm sm:text-base text-gray-500 font-medium mb-3 sm:mb-5">
          {author}
        </p>

        <hr className="border-t border-dashed border-gray-300 mt-auto mb-3 sm:mb-5" />

        <div className="flex justify-between items-center text-gray-500 font-medium text-sm sm:text-base lg:text-lg">
          <span className="truncate">{category}</span>

          <div className="flex items-center gap-1 text-gray-800 flex-shrink-0">
            <span>{rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.148.621-.531 1.115-1.069.8l-4.87-2.846a.563.563 0 00-.561 0l-4.87 2.846c-.538.315-1.217-.179-1.069-.8l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Book;
