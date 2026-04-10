import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import Book from "../components/Book";

function ListedBooks() {
  const allBooks = useLoaderData();

  return (
    <main>
      <div className="flex gap-5 justify-center items-center text-4xl">
        <NavLink
          className={({isActive}) =>
            `border px-3 py-2 rounded-lg  ${isActive ? "text-orange-500 bg-orange-100" : "text-gray-600 bg-gray-100"} `
          }
          to={"/listed-books"}
          end
        >
          Read
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border px-3 py-2 rounded-lg  ${isActive ? "text-orange-500 bg-orange-100" : "text-gray-600 bg-gray-100"} `
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
