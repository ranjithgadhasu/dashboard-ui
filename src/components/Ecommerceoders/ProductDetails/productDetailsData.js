import Picture from "../../../assets/images/picture.png"; // Adjust the path

const productDetailsData = {
  id: 1,

  name: "Apple iPhone 11",

  sku: "IPH11-64-BLK",

  description:
    "iPhone 11 features a 6.1-inch Liquid Retina HD display powered by the A13 Bionic chip. Capture stunning photos with the dual-camera system and enjoy all-day battery life in a premium glass and aluminum design.",

  price: 699,

  originalPrice: 799,

  currency: "$",

  images: [
    Picture,
    Picture,
    Picture,
    Picture,
  ],

  specifications: [
    {
      label: "Display",
      value: '6.1" inch',
    },
    {
      label: "Chip",
      value: "A13 Bionic chip",
    },
    {
      label: "Camera",
      value: "Dual 12MP Ultra Wide",
    },
    {
      label: "Front Camera",
      value: "12MP TrueDepth",
    },
    {
      label: "Storage",
      value: "64 GB",
    },
    {
      label: "Battery",
      value: "3110 mAh",
    },
    {
      label: "Operating System",
      value: "iOS 13",
    },
    {
      label: "Color",
      value: "Black",
    },
  ],
};

export default productDetailsData;