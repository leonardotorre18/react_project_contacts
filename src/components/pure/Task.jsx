import '../../styles/Task.scss';
import iconDelete from '../../assets/img/icon-delete.png'
import iconCheck from '../../assets/img/icon-check.png'
import globalContext from '../../context/config';
import { useContext } from 'react';
import { actions } from '../../context/actions';



function Task({task }) {

  const { TasksDispatch } = useContext(globalContext);

  return (
    <div className="task high">
      <div className='task-body'
        style={ task.completed ? { 'opacity': '.5', 'textDecoration': 'line-through'} : {} }
      >
        <h4 className="title">{ task.title }</h4>
        <p className='description'>{ task.description }</p>
      </div>
      <div className='task-buttons'>
        <div className="delete"
          onClick={()=> TasksDispatch(actions.deleteTask(task))}
        >
          <img 
            src={iconDelete}
            alt="Delete Icon"
          />
        </div>
        <div className="checked"
          onClick={()=> TasksDispatch(actions.toggleTask(task))}
        >
          <img 
            src={iconCheck}
            alt="Check Icon"
          />
        </div>
      </div>
    </div>
  )
}

export default Task;