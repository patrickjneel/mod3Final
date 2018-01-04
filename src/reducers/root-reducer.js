import { combineReducers } from 'redux';
import { addHousesReducer } from './fake-reducer';

const rootReducer = combineReducers({
  data: addHousesReducer
});


export default rootReducer;
