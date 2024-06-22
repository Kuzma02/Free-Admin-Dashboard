import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Products
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
      }
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
