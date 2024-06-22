import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";

const statuses = {
  ["In stock"]: "text-green-400 bg-green-400/10",
  ["Out of stock"]: "text-rose-400 bg-rose-400/10",
};
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
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductTable = () => {
  return (
    <div className="bg-blackPrimary py-10">
      <h2 className="px-4 text-2xl font-bold leading-7 text-whiteSecondary sm:px-6 lg:px-8">
        All products
      </h2>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-whiteSecondary">
          <tr>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
            >
              Product
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              SKU
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
            >
              Status
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
            >
              Price
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
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
                  <div className="truncate text-sm font-medium leading-6 text-whiteSecondary">
                    {item.product.name}
                  </div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-whiteSecondary">
                    {item.sku}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <div
                    className={classNames(
                      statuses[item.status],
                      "flex-none rounded-full p-1"
                    )}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="hidden text-whiteSecondary sm:block">
                    {item.status}
                  </div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-red-300 md:table-cell lg:pr-20">
                {item.price}
              </td>
              <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-whiteSecondary sm:table-cell sm:pr-6 lg:pr-8">
                <div className="flex gap-x-1 justify-end">
                  <Link
                    to="#"
                    className="bg-blackPrimary text-whiteSecondary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:bg-gray-600"
                  >
                    <HiOutlinePencil className="text-lg" />
                  </Link>
                  <Link
                    to="#"
                    className="bg-blackPrimary text-whiteSecondary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:bg-gray-600"
                  >
                    <HiOutlineEye className="text-lg" />
                  </Link>
                  <Link
                    to="#"
                    className="bg-blackPrimary text-whiteSecondary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:bg-gray-600"
                  >
                    <HiOutlineTrash className="text-lg" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductTable;
