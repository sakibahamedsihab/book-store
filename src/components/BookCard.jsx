function BookCard({ book }) {
  const {
    bookName,
    authorName,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    image,
  } = book;

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-rose-50 border border-rose-200 rounded-lg sm:rounded-2xl p-3 sm:p-5 w-full">
      <img
        src={image}
        alt={bookName}
        className="w-16 h-24 sm:w-20 sm:h-28 rounded-lg object-cover shrink-0"
      />
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
          {bookName}
        </h3>
        <p className="text-xs text-gray-400">By : {authorName}</p>

        <div className="flex flex-wrap gap-2 items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-pink-100 text-pink-700 text-xs px-2 sm:px-3 py-1 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
          <span className="text-xs text-gray-400">📍 {yearOfPublishing}</span>
        </div>

        <div className="flex gap-2 sm:gap-4 flex-wrap text-xs">
          <span className="text-gray-500">👤 {publisher}</span>
          <span className="text-gray-500">📄 {totalPages}p</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap mt-2">
          <span className="text-xs border border-pink-300 text-pink-600 bg-pink-50 px-2 sm:px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs border border-pink-300 text-pink-600 bg-pink-50 px-2 sm:px-3 py-1 rounded-full">
            ⭐ {rating}
          </span>
          <button className="w-full sm:w-auto sm:ml-auto bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-3 sm:px-4 py-2 rounded-full">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
