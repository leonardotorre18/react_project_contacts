import '../../styles/FiltersTask.scss';
import { connect } from 'react-redux';
import { actions } from '../../store/actions/actions'
import { filterTypes } from '../../store/reducers/FilterReducer'


function FiltersTask({toggleTask}) {
  return (
    <div className='filters'>
      <button className="allTasks"
        onClick={()=> toggleTask(filterTypes.SHOW_ALL)}
      >All Tasks</button>
      <button className='completedTasks'
        onClick={()=> toggleTask(filterTypes.SHOW_COMPLETED)}
      >Completed Tasks</button>
      <button className="incompletedTasks"
        onClick={()=> toggleTask(filterTypes.SHOW_INCOMPLETED)}
      >Incompleted Tasks</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    toggleTask: (filter) => {
      dispatch(actions.setFilter(filter))
    }
  }
}

export default connect(null, mapDispatchToProps)(FiltersTask)