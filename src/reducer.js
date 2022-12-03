const reducer = (state, action) => {
  if (action.type === "UPDATE_CART") {
    return { ...state, cart: {} };
  }
  return state;
};

export default reducer;
