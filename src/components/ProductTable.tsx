import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";

const inStockClass: string = "text-green-400 bg-green-400/10 flex-none rounded-full p-1";
const outOfStockClass:string = "text-rose-400 bg-rose-400/10 flex-none rounded-full p-1";

const activityItems = [
  {
    product: {
      name: "Samsung Galaxy S21 Ultra",
      imageUrl: "/src/assets/phone 1.jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$1000",
  },
  {
    product: {
      name: "Iphone 13 Pro Max",
      imageUrl: "/src/assets/phone 2.jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$1200",
  },
  {
    product: {
      name: "Ipod Touch 8th Gen",
      imageUrl: "/src/assets/phone 3.jpg",
    },
    sku: "SK-2323-2323",
    status: "Out of stock",
    price: "$300",
  },
  {
    product: {
      name: "Samsung A52s 5G",
      imageUrl: "/src/assets/phone 4.jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$500",
  },
  {
    product: {
      name: "Samsung Galaxy A12",
      imageUrl: "/src/assets/phone 5.jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$200",
  },
  {
    product: {
      name: "Samsung Galaxy A22 5G",
      imageUrl: "/src/assets/phone 6.jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$300",
  },
  {
    product: {
      name: "Alcatel 1S 2021",
      imageUrl: "/src/assets/phone 7.jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$100",
  },
  {
    product: {
      name: "Huaewi Y9a",
      imageUrl: "/src/assets/phone 8.jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$250",
  },
  {
    product: {
      name: "Samsung Galaxy Tab A7 Lite",
      imageUrl: "/src/assets/tablet (1).jpg",
    },
    sku: "SK-2323-2323",
    status: "Out of stock",
    price: "$150",
  },
  {
    product: {
      name: "Tab S7 FE 5G",
      imageUrl: "/src/assets/tablet (2).jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$400",
  },
  {
    product: {
      name: "Tab B10",
      imageUrl: "/src/assets/tablet (3).jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$200",
  },
  {
    product: {
      name: "Tab A5 8.0",
      imageUrl: "/src/assets/tablet (4).jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$100",
  },
  {
    product: {
      name: "Alcatel 1T 7",
      imageUrl: "/src/assets/tablet (5).jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$50",
  },
  {
    product: {
      name: "Alcatel 3T 10",
      imageUrl: "/src/assets/tablet (6).jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$150",
  },
  {
    product: {
      name: "Alcatel 1T 10",
      imageUrl: "/src/assets/tablet (7).jpg",
    },
    sku: "SK-2323-2323",
    status: "In stock",
    price: "$100",
  },
];

const ProductTable = () => {
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
            Product
          </th>
          <th
            scope="col"
            className="py-2 pl-0 pr-8 font-semibold table-cell"
          >
            SKU
          </th>
          <th
            scope="col"
            className="py-2 pl-0 pr-8 font-semibold table-cell"
          >
            Status
          </th>
          <th
            scope="col"
            className="py-2 pl-0 pr-8 font-semibold table-cell lg:pr-20"
          >
            Price
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
                  src={item.product.imageUrl}
                  alt=""
                  className="h-8 w-8 rounded-full bg-gray-800"
                />
                <div className="truncate text-sm font-medium leading-6 dark:text-whiteSecondary text-blackPrimary">
                  {item.product.name}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 table-cell pr-8">
              <div className="flex gap-x-3">
                <div className="font-mono text-sm leading-6 dark:text-whiteSecondary text-blackPrimary">
                  {item.sku}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
              <div className="flex items-center gap-x-2 justify-start">
                <div
                  className={item.status === "In stock" ? inStockClass : outOfStockClass}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-current" />
                </div>
                <div className="dark:text-whiteSecondary text-blackPrimary block">
                  {item.status}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-8 text-sm leading-6 dark:text-rose-200 text-rose-600 font-medium table-cell lg:pr-20">
              {item.price}
            </td>
            <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell pr-6 lg:pr-8">
              <div className="flex gap-x-1 justify-end">
                <Link
                  to="/products/1"
                  className="dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:border-gray-400"
                >
                  <HiOutlinePencil className="text-lg" />
                </Link>
                <Link
                  to="/products/1"
                  className="dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:border-gray-400"
                >
                  <HiOutlineEye className="text-lg" />
                </Link>
                <Link
                  to="#"
                  className="dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:border-gray-400"
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
export default ProductTable;
