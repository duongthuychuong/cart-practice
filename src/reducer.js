const reducer = (state, action) => {
  if (action.type === "UPDATE_CART") {
    return { ...state, cart: action.payload.cart };
  }
  return state;
};

export default reducer;
