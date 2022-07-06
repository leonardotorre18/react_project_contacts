import { actionsTypes } from '../actions/actions'

export const filterTypes = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_INCOMPLETED: 'SHOW_INCOMPLETED'
}

export const FilterReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actionsTypes.SET_FILTER:
      return action.payload.filter;

    default:
      return state
  }
}