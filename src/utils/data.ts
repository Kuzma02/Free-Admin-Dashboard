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

]

export const roles = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },

]

export const products = [
  {
    label: "Product 1",
    value: "product1",
  },
  {
    label: "Product 2",
    value: "product2",
  },

]


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
