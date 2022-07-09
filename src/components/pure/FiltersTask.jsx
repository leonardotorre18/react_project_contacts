import { useContext } from 'react';
import { actions, filterTypes } from '../../context/actions';
import globalContext from '../../context/config';
import '../../styles/FiltersTask.scss';


export default function FiltersTask() {

  const { FilterDispatch } = useContext(globalContext)

  return (
    <div className='filters'>
      <button className="allTasks"
        onClick={()=> FilterDispatch(actions.setFilter(filterTypes.SHOW_ALL))}
      >All Tasks</button>
      <button className='completedTasks'
        onClick={()=> FilterDispatch(actions.setFilter(filterTypes.SHOW_COMPLETED))}
      >Completed Tasks</button>
      <button className="incompletedTasks"
        onClick={()=> FilterDispatch(actions.setFilter(filterTypes.SHOW_INCOMPLETED))}
      >Incompleted Tasks</button>
    </div>
  )
}
