import '../../styles/TaskList.scss';

import { useContext } from "react"
import globalContext from "../../context/config"
import Task from '../pure/Task'

import FiltersTask from '../pure/FiltersTask';
import { filterTypes } from '../../context/actions';

const filterTask = (tasks, filter) => {
  switch (filter) {
    case filterTypes.SHOW_ALL:
      return tasks;

    case filterTypes.SHOW_COMPLETED:
      return tasks.filter((task) => task.completed);

    case filterTypes.SHOW_INCOMPLETED:
      return tasks.filter((task) => !task.completed);

    default:
      return tasks;
  }
}

function TaskList() {
  
  const { TasksState, FilterState } = useContext(globalContext)
  
  const tasks = filterTask(TasksState, FilterState)
  return (
    <div className='container'>
      <FiltersTask />
      {
        tasks.length > 0 ?
        tasks.map((task, i) => <Task 
          task={task}
          key={i}
        />) : 
        <p style={{'textAlign':'center','padding':'2em 1em'}}>There's not tasks here...</p>
      } 

    </div>
  )
}

export default TaskList;



