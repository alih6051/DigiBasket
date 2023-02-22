export const isAlreadyAdded = (cart, id) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return true;
    }
  }
  return false;
};
