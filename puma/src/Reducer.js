export const initialState = {
    basket: [],
    user: null,
  };
  //selector
  export const getTotalCartAmount = (basket) =>
    basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
  
  export const getTotalQuantity = (basket) =>
    basket?.reduce((quantity, item) => item.quantity + quantity, 0);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        let item = [...state.basket];
        let idx = item.findIndex((i) => i.id === action.payload.product.id);
        if (idx !== -1) {
          item[idx] = {
            ...item[idx],
            quantity: item[idx].quantity + action.payload.quantity,
          };
        } else {
          action.payload.product.quantity = action.payload.quantity;
          item = [...item, action.payload.product];
        }
        return {
          ...state,
          basket: item,
        };
  
      case "QUANTITY_UPADTE":
        let updatedBasket = [...state.basket];
        let itemIndex = updatedBasket.findIndex(
          (i) => i.id === action.payload.item.id
        );
        if (action.payload.buttonType === "inc") {
          updatedBasket[itemIndex] = {
            ...updatedBasket[itemIndex],
            quantity: updatedBasket[itemIndex].quantity + 1,
          };
        } else if (action.payload.buttonType === "dec") {
          if (updatedBasket[itemIndex].quantity === 1) return state;
          updatedBasket[itemIndex] = {
            ...updatedBasket[itemIndex],
            quantity: updatedBasket[itemIndex].quantity - 1,
          };
        }
        return {
          ...state,
          basket: updatedBasket,
        };
  
      case "REMOVE_CART":
        const filterDBasket = state.basket.filter(
          (item) => item.id !== action.payload.item.id
        );
        return {
          ...state,
          basket: filterDBasket,
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;