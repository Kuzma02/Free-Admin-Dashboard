import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Categories,
  CreateCategory,
  CreateOrder,
  CreateProduct,
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
        path: "/products/add-product",
        element: <CreateProduct />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/add-category",
        element: <CreateCategory />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/create-order",
        element: <CreateOrder />,
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
