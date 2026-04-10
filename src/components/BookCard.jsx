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
    <div className="flex gap-4 bg-rose-50 border border-rose-200 rounded-2xl p-5 max-w-2xl">
      <img
        src={image}
        alt={bookName}
        className="w-20 h-28 rounded-lg object-cover shrink-0"
      />
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-lg font-semibold text-gray-900">
          {bookName}
        </h3>
        <p className="text-xs text-gray-400">By : {authorName}</p>

        <div className="flex flex-wrap gap-2 items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
          <span className="text-xs text-gray-400">
            📍 Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        <div className="flex gap-4 flex-wrap">
          <span className="text-xs text-gray-500">
            👤 Publisher: {publisher}
          </span>
          <span className="text-xs text-gray-500">📄 Page {totalPages}</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap mt-1">
          <span className="text-xs border border-pink-300 text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
            Category: {category}
          </span>
          <span className="text-xs border border-pink-300 text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
            Rating: {rating}
          </span>
          <button className="ml-auto bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-4 py-2 rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
