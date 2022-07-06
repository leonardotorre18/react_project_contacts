import { combineReducers } from "redux";
import { FilterReducer } from './FilterReducer';
import { TaskReducer } from './TaskReducer'

export default combineReducers({
  Filter: FilterReducer,
  Tasks: TaskReducer
})