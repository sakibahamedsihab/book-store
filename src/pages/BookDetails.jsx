import React from "react";
import { useLoaderData } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { useContext } from "react";

const BookDetails = () => {
  const { handleMarkAsRead, handleWishList } = useContext(BookContext);
  const singleBook = useLoaderData();
  if (!singleBook) {
    return (
      <div className="text-center p-10 text-2xl font-bold">Book not found!</div>
    );
  }
  const {
    bookName,
    author,
    image,
    review,
    category,
    tags,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* বাম অংশ: বইয়ের ছবি */}
        <div className="bg-[#F3F3F3] p-12 rounded-2xl flex justify-center items-center h-full min-h-[500px]">
          <img
            src={image}
            alt={bookName}
            className="w-2/3 lg:w-3/4 object-contain drop-shadow-2xl"
          />
        </div>

        <div className="font-sans">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            {bookName}
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-6">
            By : {author}
          </p>

          <hr className="border-gray-200" />

          <p className="text-lg text-gray-500 font-medium py-4">{category}</p>

          <hr className="border-gray-200 mb-6" />

          <p className="text-gray-600 leading-relaxed mb-8">
            <span className="font-bold text-gray-900">Review : </span>
            {review}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="font-bold text-gray-900">Tag</span>
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-[#F4FBF2] text-[#23B028] px-4 py-1.5 rounded-full text-sm font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="border-gray-200 mb-6" />

          <div className="flex flex-col gap-3 mb-8 w-2/3">
            <div className="flex justify-between">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-semibold text-gray-900">
                {totalPages || 281}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-semibold text-gray-900">
                {publisher || "J.B Lippincott & Co."}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-semibold text-gray-900">
                {yearOfPublishing || 1960}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Rating:</span>
              <span className="font-semibold text-gray-900">{rating}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => handleMarkAsRead(singleBook)}
              className="px-8 py-3 rounded-lg border border-gray-300 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Read
            </button>
            <button
              onClick={() => handleWishList(singleBook)}
              className="px-8 py-3 rounded-lg bg-[#50B1C9] font-semibold text-white hover:bg-[#3d96ac] transition-colors shadow-sm"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
