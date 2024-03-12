export const CHECKOUT_STEPS = [
  {
    stepNumber: 1,
    name: "Receiver Info",
    isCompleted: false,
    fields: ["firstName", "lastName", "email", "phoneNumber"],
  },
  {
    stepNumber: 2,
    name: "Shipping Info",
    isCompleted: false,
    fields: ["address", "city", "zip"],
  },
  {
    stepNumber: 3,
    name: "Payment",
    isCompleted: false,
    fields: [],
  },
  {
    stepNumber: 4,
    name: "Order Placement",
    isCompleted: false,
    fields: [],
  },
];
