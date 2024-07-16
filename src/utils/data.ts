export const selectList = [
  {
    label: "Select category",
    value: "default",
  },
  {
    label: "PC",
    value: "pc",
  },
  {
    label: "Smart Phones",
    value: "smart-phones",
  },
  {
    label: "TV",
    value: "tv",
  },
  {
    label: "iPhone",
    value: "iphone",
  },
];

export const stockStatusList = [
  {
    label: "In stock",
    value: "in-stock",
  },
  {
    label: "Out of stock",
    value: "out-of-stock",
  },
];

export const roles = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

export const products = [
  {
    label: "Product 1",
    value: "product1",
  },
  {
    label: "Product 2",
    value: "product2",
  },
];

export const categoryAdminItems = [
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

export const faqs = [
  {
    question: "How to reset my password?",
    answer: "Go to settings and click on 'Reset Password'.",
  },
  {
    question: "Where can I find my purchase history?",
    answer:
      "Your purchase history is available in your account settings under 'Purchase History'.",
  },
  {
    question: "How can I edit a user?",
    answer:
      "Click on the users button in the sidebar and there choose a user that you want to edit by clicking pencil button.",
  },
  {
    question: "How can I edit a product?",
    answer:
      "Click on the products button in the sidebar and there choose a product that you want to edit by clicking pencil button.",
  },
  {
    question: "How can I edit a order?",
    answer:
      "Click on the orders button in the sidebar and there choose a order that you want to edit by clicking pencil button.",
  },
  {
    question: "How can I edit a category?",
    answer:
      "Click on the categories button in the sidebar and there choose a category that you want to edit by clicking pencil button.",
  },
  // Add more FAQs as needed
];

export const orderAdminItems = [
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

export const productAdminItems = [
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

export const reviewsAdminItems = [
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

export const userAdminItems = [
  {
    user: {
      name: "Brent Fesi",
      imageUrl: "/src/assets/random user 1.jpg",
    },
    email: "brentfesi@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Benito Nickley",
      imageUrl: "/src/assets/random user 2.jpg",
    },
    email: "benitonickley@gmail.com",
    role: "admin",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Lesley Ghouse",
      imageUrl: "/src/assets/random user 3.jpg",
    },
    email: "lesleyghouse@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Cherie Kros",
      imageUrl: "/src/assets/random user 4.jpg",
    },
    email: "cheriekros@hotmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Ivory Volkmar",
      imageUrl: "/src/assets/random user 5.jpg",
    },
    email: "ivoryvolkmar@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Assunta Aimes",
      imageUrl: "/src/assets/random user 6.jpg",
    },
    email: "assuntaimes@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Pearle Yousef",
      imageUrl: "/src/assets/random user 7.jpg",
    },
    email: "pearleyousef@gmail.com",
    role: "admin",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Latoyia Fiscus",
      imageUrl: "/src/assets/random user 8.jpg",
    },
    email: "latoyiafiscus@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Siu Manak",
      imageUrl: "/src/assets/random user 9.jpg",
    },
    email: "siumanak@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Cruz Arciniegas",
      imageUrl: "/src/assets/random user 10.jpg",
    },
    email: "cruzarciniegas",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Ronnie Vondohlen",
      imageUrl: "/src/assets/random user 11.jpg",
    },
    email: "ronnie92@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Demarcus Fahrenbach",
      imageUrl: "/src/assets/random user 12.jpg",
    },
    email: "demarcus01@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Latoyia Longcrier",
      imageUrl: "/src/assets/random user 13.jpg",
    },
    email: "latoyial92@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Dayle Blumreich",
      imageUrl: "/src/assets/random user 14.jpg",
    },
    email: "dayleblumreich@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    user: {
      name: "Elfrieda Rowberry",
      imageUrl: "/src/assets/random user 15.jpg",
    },
    email: "elfrieda02@gmail.com",
    role: "user",
    lastLogin:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
];
