import { Link } from "react-router-dom"

export default function Navbar({isLogged,setLogged}) {
  const menuLogged = <div className="navbar-nav d-flex flex-row">
    <Link to='/' className="mx-2 nav-item nav-link active">Home</Link>
    <div href="#" className="mx-2 nav-item nav-link active" 
      style={{'cursor': 'pointer'}}
      onClick={()=> {
        setLogged(false);
        localStorage.removeItem('password')
        localStorage.removeItem('email')
      } }>Sign Out</div>
    <Link to='/register' className="mx-2 nav-item nav-link active">Register</Link>
  </div>
  const menuUnlogged = <div className="navbar-nav d-flex flex-row">
    <Link to='/' className="mx-2 nav-item nav-link active">Home</Link>
    <Link to='/login' className="mx-2 nav-item nav-link active">Login</Link>
    <Link to='/register' className="mx-2 nav-item nav-link active">Register</Link>
  </div>


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h2 className="navbar-brand">React Application Task</h2>
          {
            isLogged ? menuLogged : menuUnlogged
          }
      </div>
    </nav>
  )
}
