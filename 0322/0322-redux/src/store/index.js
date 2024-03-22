import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisivleReducer from "./isVisibleReducer";
import moneyReducer from "./moneyReducer";
import bankReducer from "./bankReducer";

//combineReducers: 여러 개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisivleReducer,
  money: moneyReducer,
  bank: bankReducer,
});

export default rootReducer;
