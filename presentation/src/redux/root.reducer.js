/* Framework */
import { combineReducers } from 'redux';

/* Internal */
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
