import { connect } from 'react-redux'
import '../../styles/HeaderBar.scss'

function HeaderBar({ fetching, login }) {
  return (
    <header className="header">
      {
        fetching ? <p className='text waiting'>Loading request...</p> :
        login ? <p className="text active">You're Logged</p> :
                <p className="text off">Please Login</p>
      }
    </header>
  )
}
const mapStateToProps = state => {
  return {
    fetching: state.request.fetching,
    login: state.request.login
  }
}

export default connect(mapStateToProps,null)(HeaderBar)