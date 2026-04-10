import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import Book from "../components/Book";

function ListedBooks() {
  const allBooks = useLoaderData();

  return (
    <main className="px-4 sm:px-6 lg:px-0">
      <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center text-xl sm:text-2xl md:text-4xl py-6">
        <NavLink
          className={({ isActive }) =>
            `border px-2 sm:px-3 py-2 rounded-lg text-sm sm:text-base ${isActive ? "text-orange-500 bg-orange-100" : "text-gray-600 bg-gray-100"} `
          }
          to={"/listed-books"}
          end
        >
          Read
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border px-2 sm:px-3 py-2 rounded-lg text-sm sm:text-base ${isActive ? "text-orange-500 bg-orange-100" : "text-gray-600 bg-gray-100"} `
          }
          to={"wish-list"}
          end
        >
          Wish List
        </NavLink>
      </div>
      <Outlet context={allBooks} />
    </main>
  );
}
export default ListedBooks;
