import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import BookContextProvider from "./context/BookContext";
import "./index.css";

import router from "./router";

createRoot(document.getElementById("root")).render(
  <BookContextProvider>
    <RouterProvider router={router} />
  </BookContextProvider>,
);
