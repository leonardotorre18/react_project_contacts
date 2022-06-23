import { LEVELS } from '../../models/enums'

export default function Task({task, deleteTask, completeTask}) {

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    function taskLevelBadge(){
      switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

  return (
    <tr className='fw-normal' style={task.completed ? taskCompleted : {}}>


      <td>
        <span className='ms-2'>{task.name}</span>
      </td>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {/* Execution of function to return badge element */}
        {taskLevelBadge()}
      </td>
      <td className='align-middle form-check form-switch'>
        {/* Execution of function to return icon depending on completion */}
        <input 
          onClick={()=> completeTask(task)}
          className="form-check-input" 
          type="checkbox" 
          defaultChecked={task.completed}
        />
        <button className='btn btn-danger p-1' onClick={() => deleteTask(task)}>Delete</button>
      </td>
    </tr>
);

}
