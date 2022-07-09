export const actionsTypes = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  SET_FILTER: 'SET_FILTER',
  DELETE_TASK: 'DELETE_TASK'
}
export const filterTypes = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_INCOMPLETED: 'SHOW_INCOMPLETED',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}



let nextID = 0;
export const actions = {

  addTask: (task)=>{
    return {
      type: actionsTypes.ADD_TASK,
      payload: {
        ...task,
        completed: false,
        id: nextID++
      }
    }
  },
  deleteTask: (task) => {
    return {
      type: actionsTypes.DELETE_TASK,
      payload: {
        id: task.id
      }
    }
  },

  toggleTask: (task) => {
    return {
      type: actionsTypes.TOGGLE_TASK,
      payload: {
        id: task.id
      }
    }
  },

  setFilter: (filter) => {
    return {
      type: actionsTypes.SET_FILTER,
      payload: {
        filter
      }
    }
  }
}