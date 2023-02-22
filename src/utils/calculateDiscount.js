export const calculateDiscount = (amount, percent) => {
  let discount = (amount * percent) / 100;
  return discount.toFixed(2);
};
