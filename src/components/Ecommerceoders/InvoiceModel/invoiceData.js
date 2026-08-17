import LogoOne  from "../../../assets/icons/LogoOne.png"

const invoiceData = {
  invoiceNo: "790841",
  date: "September 12, 2019",

  company: {
    name: "ROCKET INC.",
    address: "Russell st. 50, Boston, MA, USA, 02199",
    phone: "+1 (070) 123-4567",
    email: "info@rocket.com",
    website: "www.rocketboard.com",
  },

  customer: {
    name: "FLOWER",
    logo: LogoOne,
  },

  products: [
    {
      id: 1,
      product: "MacBook Pro 15 Retina Touch Bar MV902",
      price: "$2.500",
      quantity: 1,
      total: "$2.500",
    },
    {
      id: 2,
      product: "Apple Watch Series 5 Edition GPS + Cellular",
      price: "$1.500",
      quantity: 2,
      total: "$3.000",
    },
    {
      id: 3,
      product: "Apple iPhone 11 Pro Max 256GB Space Gray",
      price: "$1.100",
      quantity: 1,
      total: "$1.100",
    },
  ],

  subtotal: "$6.600",
  tax: "$7.920",
  discount: "-$792",
  total: "$7.128",
};

export default invoiceData;