import counterReducer from './counter';
import { combineReducers } from 'redux';
//全てのreducerを1つにまとめる（combine）
const allReducers = combineReducers({
  counter: counterReducer,
});

export default allReducers;
