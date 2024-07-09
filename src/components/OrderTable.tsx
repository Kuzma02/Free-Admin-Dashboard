import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";

const activityItems = [
  {
    user: {
      name: "Brent Fesi",
      imageUrl: "/src/assets/random user 1.jpg",
    },
    status: "Processing",
    total: "$120",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Benito Nickley",
      imageUrl: "/src/assets/random user 2.jpg",
    },
    status: "Processing",
    total: "$210",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Lesley Ghouse",
      imageUrl: "/src/assets/random user 3.jpg",
    },
    status: "Processing",
    total: "$350",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Cherie Kros",
      imageUrl: "/src/assets/random user 4.jpg",
    },
    status: "On hold",
    total: "$210",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Ivory Volkmar",
      imageUrl: "/src/assets/random user 5.jpg",
    },
    status: "Cancelled",
    total: "$122",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Assunta Aimes",
      imageUrl: "/src/assets/random user 6.jpg",
    },
    status: "Processing",
    total: "$13",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Pearle Yousef",
      imageUrl: "/src/assets/random user 7.jpg",
    },
    status: "Completed",
    total: "$62",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Latoyia Fiscus",
      imageUrl: "/src/assets/random user 8.jpg",
    },
    status: "Completed",
    total: "$178",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Siu Manak",
      imageUrl: "/src/assets/random user 9.jpg",
    },
    status: "On hold",
    total: "$312",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Cruz Arciniegas",
      imageUrl: "/src/assets/random user 10.jpg",
    },
    status: "Cancelled",
    total: "$158",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Ronnie Vondohlen",
      imageUrl: "/src/assets/random user 11.jpg",
    },
    status: "Completed",
    total: "$109",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Demarcus Fahrenbach",
      imageUrl: "/src/assets/random user 12.jpg",
    },
    status: "Completed",
    total: "$531",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Latoyia Longcrier",
      imageUrl: "/src/assets/random user 13.jpg",
    },
    status: "Completed",
    total: "$627",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Dayle Blumreich",
      imageUrl: "/src/assets/random user 14.jpg",
    },
    status: "Completed",
    total: "$421",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Elfrieda Rowberry",
      imageUrl: "/src/assets/random user 15.jpg",
    },
    status: "Completed",
    total: "$490",
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
];

const OrderTable = () => {
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
            Customer
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
            Status
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
            Total
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
                <div
                  className={`text-sm leading-6 py-1 px-2 ${
                    item.status === "Completed" &&
                    "bg-green-900 text-whiteSecondary font-semibold"
                  } ${
                    item.status === "On hold" &&
                    "bg-yellow-900 text-whiteSecondary font-semibold"
                  } ${
                    item.status === "Cancelled" &&
                    "bg-red-900 text-whiteSecondary font-semibold"
                  } ${
                    item.status === "Processing" &&
                    "bg-blue-900 text-whiteSecondary font-semibold"
                  }`}
                >
                  {item.status}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
              <div className="flex items-center gap-x-2 justify-start">
                <div className="dark:text-rose-200 text-rose-500 block font-medium">
                  {item.total}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-8 text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell lg:pr-20">
              {item.date}
            </td>
            <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell pr-6 lg:pr-8">
              <div className="flex gap-x-1 justify-end">
                <Link
                  to="/orders/1"
                  className="dark:bg-blackPrimary dark:text-whiteSecondary text-blackPrimary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer dark:hover:border-gray-500 hover:border-gray-400"
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
  );
};
export default OrderTable;
