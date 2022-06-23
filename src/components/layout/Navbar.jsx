import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h2 className="navbar-brand">React Application Task</h2>
          <div className="navbar-nav d-flex flex-row">
            <Link to='/' className="mx-2 nav-item nav-link active">Home</Link>
            <Link to='/login' className="mx-2 nav-item nav-link active">Login</Link>
            <Link to='/register' className="mx-2 nav-item nav-link active">Register</Link>
          </div>
      </div>
    </nav>
  )
}
