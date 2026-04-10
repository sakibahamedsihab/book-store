import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-270 mx-auto py-10">
      <h1>Book Vibe.</h1>
      <ul className="flex gap-5 items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "text-gray-500"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "text-gray-500"
          }
          to={"/listed-books"}
        >
          Listed Books
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "text-gray-500"
          }
          to={"/read"}
        >
          Pages to Read
        </NavLink>
      </ul>

      <div className="flex gap-5">
        <button className="btn text-orange-400 bg-transparent rounded-md shadow-none focus:ring-2 focus:ring-orange-400">
          Log in
        </button>
        <button className="btn text-orange-400 bg-transparent rounded-md shadow-none focus:ring-2 focus:ring-orange-400">
          Sign up
        </button>
      </div>
    </div>
  );
}
export default Navbar;
