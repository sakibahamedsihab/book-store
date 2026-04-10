import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-270 mx-auto py-6 sm:py-10 px-4 sm:px-0">
      <h1 className="text-lg sm:text-xl font-bold">Book Vibe.</h1>
      <ul className="hidden md:flex gap-3 sm:gap-5 items-center">
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

      <div className="hidden sm:flex gap-2 sm:gap-5">
        <button className="btn text-orange-400 bg-transparent rounded-md shadow-none focus:ring-2 focus:ring-orange-400 btn-sm sm:btn-md">
          Log in
        </button>
        <button className="btn text-orange-400 bg-transparent rounded-md shadow-none focus:ring-2 focus:ring-orange-400 btn-sm sm:btn-md">
          Sign up
        </button>
      </div>

      <div className="md:hidden">
        <button className="btn btn-ghost btn-sm">☰</button>
      </div>
    </div>
  );
}
export default Navbar;
