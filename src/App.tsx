import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Categories,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Reviews,
  Users
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/users",
        element: <Users />,
      },

    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
