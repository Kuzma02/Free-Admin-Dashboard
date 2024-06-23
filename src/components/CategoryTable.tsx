import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";

const activityItems = [
  {
    category: {
      name: "Mobile phones",
      imageUrl: "/src/assets/phone 1.jpg",
    },
    slug: "mobile-phones",
    productsNumber: 100,
    parentCategory: "/",
  },
  {
    category: {
      name: "Laptops",
      imageUrl: "/src/assets/phone 2.jpg",
    },
    slug: "laptops",
    productsNumber: 200,
    parentCategory: "/",
  },
  {
    category: {
      name: "Computers",
      imageUrl: "/src/assets/phone 3.jpg",
    },
    slug: "computers",
    productsNumber: 350,
    parentCategory: "/",
  },
  {
    category: {
      name: "Cameras",
      imageUrl: "/src/assets/phone 4.jpg",
    },
    slug: "cameras",
    productsNumber: 210,
    parentCategory: "/",
  },
  {
    category: {
      name: "Tablets",
      imageUrl: "/src/assets/phone 5.jpg",
    },
    slug: "tablets",
    productsNumber: 122,
    parentCategory: "/",
  },
  {
    category: {
      name: "TVs",
      imageUrl: "/src/assets/phone 6.jpg",
    },
    slug: "tv",
    productsNumber: 13,
    parentCategory: "/",
  },
  {
    category: {
      name: "Macbooks",
      imageUrl: "/src/assets/phone 7.jpg",
    },
    slug: "macbooks",
    productsNumber: 62,
    parentCategory: "Laptops",
  },
  {
    category: {
      name: "Audio",
      imageUrl: "/src/assets/phone 8.jpg",
    },
    slug: "audio",
    productsNumber: 78,
    parentCategory: "/",
  },
  {
    category: {
      name: "Mixers",
      imageUrl: "/src/assets/tablet (1).jpg",
    },
    slug: "mixers",
    productsNumber: 12,
    parentCategory: "/",
  },
  {
    category: {
      name: "Touchscreen laptops",
      imageUrl: "/src/assets/tablet (2).jpg",
    },
    slug: "touchscreen-laptops",
    productsNumber: 58,
    parentCategory: "Laptops",
  },
  {
    category: {
      name: "MP3 players",
      imageUrl: "/src/assets/tablet (3).jpg",
    },
    slug: "mp3-players",
    productsNumber: 9,
    parentCategory: "Audio",
  },
  {
    category: {
      name: "iPhones",
      imageUrl: "/src/assets/tablet (4).jpg",
    },
    slug: "iphones",
    productsNumber: 31,
    parentCategory: "Mobile phones",
  },
  {
    category: {
      name: "Ipads",
      imageUrl: "/src/assets/tablet (5).jpg",
    },
    slug: "ipads",
    productsNumber: 27,
    parentCategory: "Tablets",
  },
  {
    category: {
      name: "Computer accessories",
      imageUrl: "/src/assets/tablet (6).jpg",
    },
    slug: "computer-accessories",
    productsNumber: 56,
    parentCategory: "Computers",
  },
  {
    category: {
      name: "Computer parts",
      imageUrl: "/src/assets/tablet (7).jpg",
    },
    slug: "computer-parts",
    productsNumber: 421,
    parentCategory: "Computers",
  },
];

const CategoryTable = () => {
  return (
    <table className="mt-6 w-full whitespace-nowrap text-left max-lg:block max-lg:overflow-x-scroll">
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
              Category
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-8 font-semibold table-cell"
            >
              Slug
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
            >
              Number of products
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-8 font-semibold table-cell lg:pr-20"
            >
              Parent category
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
                    src={item.category.imageUrl}
                    alt=""
                    className="h-8 w-8 rounded-full bg-gray-800"
                  />
                  <div className="truncate text-sm font-medium leading-6 text-whiteSecondary">
                    {item.category.name}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 table-cell pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-whiteSecondary">
                    {item.slug}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center gap-x-2 justify-start">
                  <div
                    className="flex-none rounded-full p-1"
                    
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="text-whiteSecondary block">
                    {item.productsNumber}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-8 text-sm leading-6 text-whiteSecondary table-cell lg:pr-20">
                {item.parentCategory}
              </td>
              <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 text-whiteSecondary table-cell pr-6 lg:pr-8">
                <div className="flex gap-x-1 justify-end">
                  <Link
                    to="#"
                    className="bg-blackPrimary text-whiteSecondary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:border-gray-500"
                  >
                    <HiOutlinePencil className="text-lg" />
                  </Link>
                  <Link
                    to="#"
                    className="bg-blackPrimary text-whiteSecondary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:border-gray-500"
                  >
                    <HiOutlineEye className="text-lg" />
                  </Link>
                  <Link
                    to="#"
                    className="bg-blackPrimary text-whiteSecondary border border-gray-600 w-8 h-8 block flex justify-center items-center cursor-pointer hover:border-gray-500"
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
export default CategoryTable