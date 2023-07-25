export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate the items price
  const itemsPrice = state.cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const qty = parseInt(item.qty, 10);
    if (!isNaN(price) && !isNaN(qty)) {
      return acc + price * qty;
    }
    return acc;
  }, 0);

  // Update the itemsPrice in the state
  state.itemsPrice = itemsPrice;

  // Calculate the shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Calculate the tax price
  state.taxPrice = addDecimals(0.15 * state.itemsPrice);

  // Calculate the total price
  state.totalPrice = (
    parseFloat(state.itemsPrice) +
    parseFloat(state.shippingPrice) +
    parseFloat(state.taxPrice)
  ).toFixed(2);

  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
