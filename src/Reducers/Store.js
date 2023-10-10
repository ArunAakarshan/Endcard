
import { createStore, combineReducers } from 'redux';
import userReducer from './Userreducers'
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);

export default store;
