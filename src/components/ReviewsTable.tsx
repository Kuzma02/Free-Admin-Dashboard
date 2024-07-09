import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";
import { HiStar } from "react-icons/hi";


const activityItems = [
  {
    user: {
      name: "Brent Fesi",
      imageUrl: "/src/assets/random user 1.jpg",
    },
    rating: 5,
    product: "Iphone 12 Pro Max",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Benito Nickley",
      imageUrl: "/src/assets/random user 2.jpg",
    },
    rating: 4,
    product: "Iphone 12 Pro Max",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Lesley Ghouse",
      imageUrl: "/src/assets/random user 3.jpg",
    },
    rating: 5,
    product: "Tablet Pro Max",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Cherie Kros",
      imageUrl: "/src/assets/random user 4.jpg",
    },
    rating: 4,
    product: "Samsung Galaxy S21 Ultra 5G",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Ivory Volkmar",
      imageUrl: "/src/assets/random user 5.jpg",
    },
    rating: 5,
    product: "Samsung Galaxy S20 Ultra 5G",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Assunta Aimes",
      imageUrl: "/src/assets/random user 6.jpg",
    },
    rating: 3,
    product: "Nokia 3310 3G",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Pearle Yousef",
      imageUrl: "/src/assets/random user 7.jpg",
    },
    rating: 4,
    product: "Alcatel 1B (2020)",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Latoyia Fiscus",
      imageUrl: "/src/assets/random user 8.jpg",
    },
    rating: 5,
    product: "Alcatel Pixi 4 (6) 3G",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Siu Manak",
      imageUrl: "/src/assets/random user 9.jpg",
    },
    rating: 5,
    product: "Samsung Galaxy A12",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Cruz Arciniegas",
      imageUrl: "/src/assets/random user 10.jpg",
    },
    rating: 4,
    product: "Poco X3 NFC",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Ronnie Vondohlen",
      imageUrl: "/src/assets/random user 11.jpg",
    },
    rating: 5,
    product: "LG K42",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Demarcus Fahrenbach",
      imageUrl: "/src/assets/random user 12.jpg",
    },
    rating: 5,
    product: "Huawei P40 Pro+",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Latoyia Longcrier",
      imageUrl: "/src/assets/random user 13.jpg",
    },
    rating: 4,
    product: "Huaewi P40 Pro",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Dayle Blumreich",
      imageUrl: "/src/assets/random user 14.jpg",
    },
    rating: 5,
    product: "OnePlus 8T",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Elfrieda Rowberry",
      imageUrl: "/src/assets/random user 15.jpg",
    },
    rating: 5,
    product: "Samsung Galaxy A71 5G",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
];

// Function to render stars based on the rating
const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<HiStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

const ReviewsTable = () => {
  return (
    <table className="mt-6 w-full whitespace-nowrap text-left max-lg:block max-lg:overflow-x-scroll">
    <colgroup>
      <col className="w-full sm:w-4/12" />
      <col className="lg:w-4/12" />
      <col className="lg:w-2/12" />
      <col className="lg:w-1/12" />
      <col className="lg:w-1/12" />
    </colgroup>
    <thead className="border-b border-white/10 text-sm leading-6 dark:text-whiteSecondary text-blackPrimary">
      <tr>
        <th
          scope="col"
          className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
        >
          User
        </th>
        <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
          Rating
        </th>
        <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
          Product
        </th>
        <th
          scope="col"
          className="py-2 pl-0 pr-8 font-semibold table-cell lg:pr-20"
        >
          Date
        </th>
        <th
          scope="col"
          className="py-2 pl-0 pr-4 text-right font-semibold table-cell sm:pr-6 lg:pr-8"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-white/5">
      {activityItems.map((item) => (
        <tr key={nanoid()}>
          <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
            <div className="flex items-center gap-x-4">
              <img
                src={item.user.imageUrl}
                alt=""
                className="h-8 w-8 rounded-full bg-gray-800"
              />
              <div className="truncate text-sm font-medium leading-6 dark:text-whiteSecondary text-blackPrimary">
                {item.user.name}
              </div>
            </div>
          </td>
          <td className="py-4 pl-0 pr-4 table-cell pr-8">
            <div className="flex gap-x-3">
              <div className="text-lg leading-6 py-1 flex">
                {renderStars(item.rating)}
              </div>
            </div>
          </td>
          <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
            <div className="flex items-center gap-x-2 justify-start">
              <div className="dark:text-whiteSecondary text-blackPrimary block font-medium">
                {item.product}
              </div>
            </div>
          </td>
          <td className="py-4 pl-0 pr-8 text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell lg:pr-20">
            {item.lastLogin}
          </td>
          <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell pr-6 lg:pr-8">
            <div className="flex gap-x-1 justify-end">
              <Link
                to="/reviews/1"
                className="dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer dark:hover:border-gray-500 hover:border-gray-400"
              >
                <HiOutlinePencil className="text-lg" />
              </Link>
              <Link
                to="#"
                className="dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer dark:hover:border-gray-500 hover:border-gray-400"
              >
                <HiOutlineEye className="text-lg" />
              </Link>
              <Link
                to="#"
                className="dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer dark:hover:border-gray-500 hover:border-gray-400"
              >
                <HiOutlineTrash className="text-lg" />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
export default ReviewsTable