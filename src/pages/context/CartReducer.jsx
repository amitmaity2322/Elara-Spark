const CartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        const exists = state.find((item) => item.id === action.payload.id);
        if (exists) {
          // If product exists, update quantity
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          );
        } else {
          // If product does not exist, add it
          return [...state, { ...action.payload }];
        }

      case "Remove":
        return state.filter(item => item.id !== action.payload);

      case "Increase":
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      case "Decrease":
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        );

      case "Clear":
          return [];

      default:
        return state;
    }
  };
  
export default CartReducer;
  