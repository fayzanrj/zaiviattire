const getExpectedDeliveryDate = () => {
  // Get the current date
  const currentDate = new Date();

  // Adding 7 days to the current date
  const deliveryStartDate = new Date(currentDate);
  deliveryStartDate.setDate(currentDate.getDate() + 6);

  // Setting the delivery end date
  const deliveryEndDate = new Date(deliveryStartDate);
  deliveryEndDate.setDate(deliveryStartDate.getDate() + 3);

  // Formating the dates as strings in the desired format
  const deliveryStartDateString = deliveryStartDate.toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric" }
  );
  const deliveryEndDateString = deliveryEndDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return `Delivery by ${deliveryStartDateString} - ${deliveryEndDateString}`;
};

export default getExpectedDeliveryDate;
