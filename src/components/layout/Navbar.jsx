import '../../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function Navbar() {
  const [styleLeft, setLeft] = useState({ 'left': '-75%'});

  function toggleLeft (){
    styleLeft.left == '-75%' ?
      setLeft({'left': '0'}) :
      setLeft({'left': '-75%'}) 
  }

  return (
    <nav 
      className='navbar'
      style={styleLeft}
      onClick={toggleLeft}
    >
      <div className='Links'>
        <Link to="/">Home</Link>
        <Link to="/form">Agregar Contactos</Link>
        <Link to="/list">Lista de Contactos</Link>
      </div>
    </nav>
  )
}