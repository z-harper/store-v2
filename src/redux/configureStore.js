import { combineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';

const reducer = combineReducers({
  cart: cartReducer
})

const store = createStore(reducer);

export default store;