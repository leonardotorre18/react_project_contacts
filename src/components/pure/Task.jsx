import '../../styles/Task.scss';
import { connect } from 'react-redux/es/exports';
import { actions } from '../../store/actions/actions';
import iconDelete from '../../assets/img/icon-delete.png'
import iconCheck from '../../assets/img/icon-check.png'

function Task({ task, deleteTask, toggleTask }) {
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
          onClick={()=> deleteTask(task.id)}
        >
          <img 
            src={iconDelete}
            alt="Delete Icon"
          />
        </div>
        <div className="checked"
          onClick={()=> toggleTask(task.id)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => {
      dispatch(actions.deleteTask(id))
    },
    toggleTask: (id) => {
      dispatch(actions.toggleTask(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Task)