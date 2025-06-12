const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      // Avoid adding duplicates
      if (state.find(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];

    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload.id);
      //return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};


export default wishlistReducer;