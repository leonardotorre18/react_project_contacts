import '../../styles/TaskList.scss';
import Task from '../pure/Task';
import { filterTypes } from '../../store/reducers/FilterReducer';
import { connect } from 'react-redux';

import FiltersTask from '../pure/FiltersTask';

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
function TaskList({ tasks }) {
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
const mapStateToProps = (state) => {
  return {
    tasks: filterTask(state.Tasks, state.Filter)
  }
}

export default connect(mapStateToProps,null)(TaskList)



