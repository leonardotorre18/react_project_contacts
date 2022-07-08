import { combineReducers } from "redux";
import { FilterReducer } from './FilterReducer';
import { TaskReducer } from './TaskReducer';
import { RequestReducer } from "./RequestReducer";

export default combineReducers({
  Filter: FilterReducer,
  Tasks: TaskReducer,
  request: RequestReducer
})