import ProfileDash from "../../../assets/images/ProfileDash.png";

const orderDetailsData = {
  orderNo: "790841",

  customer: {
    name: "Regina Cooper",
    email: "example@mail.com",
    phone: "+1 (070) 4567-8800",
    location: "993 E. Brewer St. Holtsville",
    avatar: ProfileDash,
  },

payment: {
  type: "Credit Card",
  provider: "Visa",
  transactionId: "000001-TXHQ",
  amount: "$2,500",
},
shipping: {
  company: "Carrier",
  trackingNumber: "FX-012345-6",
  date: "12.09.2019",
},

fulfillment: {
  orderStatus: "Delivered",
  paymentStatus: "Paid",
},
billingAddress: {
  firstName: "Regina",
  lastName: "Cooper",
  address: "993 E. Brewer St. Holtsville",
  state: "New York",
  city: "New York",
  country: "United States",
  phone: "+1(070) 4567-8800",
  email: "example@mail.com",
  postcode: "11742",
},

shippingAddress: {
  firstName: "Regina",
  lastName: "Cooper",
  address: "993 E. Brewer St. Holtsville",
  state: "New York",
  city: "New York",
  country: "United States",
  phone: "+1(070) 4567-8800",
  email: "example@mail.com",
  postcode: "11742",
},

  orderNotes:
    "Leave the package at the front door if no one is available. Please call before delivery.",
};

export default orderDetailsData;
