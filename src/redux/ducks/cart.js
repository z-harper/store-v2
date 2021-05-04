// Actions
const ADD_TO_CART = 'addToCart';
const REMOVE_FROM_CART = 'removeFromCart';
const UPDATE_ITEM_QUANTITY = 'updateItemQuantity';
const CLEAR_CART = 'clearCart';

// Reducer
export default function cartReducer(state =[], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(item => item._id !== action.payload._id);
    case UPDATE_ITEM_QUANTITY:
      return state.map(item => item._id === action.payload._id
        ? {...item, quantity: item.quantity + action.payload.quantity}
        : item
      )
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
}

// Action Creators
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: {
    _id: item._id,
    name: item.name,
    price: item.price,
    imageUrl: item.imageUrl,
    quantity: item.quantity,
  }
});

export const removeFromCart = (_id) => ({
  type: REMOVE_FROM_CART,
  payload: _id
});

export const updateItemQuantity = (item) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: {
    _id: item._id,
    quantity: item.quantity,
  }
})

export const clearCart = () => ({
  type: CLEAR_CART,
})