import propTypes from 'prop-types';
import Contact from '../../models/Contact';
import '../../styles/ContactCard.scss'

export default function ContactCard({contact, deleteContact, toggleConnection }) {
  return (
    <div className='contactCard'>
      <h5 className="name">{contact.name} {contact.lastname}</h5>
      <p className="email">{contact.email}</p>
      <p className='status'>Conexión: 
        {
          contact.status ? 
            <span className='online' onClick={()=>toggleConnection(contact)}>Online</span> :
            <span className='offline' onClick={()=>toggleConnection(contact)}>Offline</span>
        }
      </p>
      <div className="buttons">
        <button className='delete' onClick={()=>deleteContact(contact)}>Eliminar</button>
        <button className='edit'>Editar</button>

      </div>
    </div>
  )
}
ContactCard.propTypes = {
  contact: propTypes.instanceOf(Contact).isRequired,
  deleteContact: propTypes.func.isRequired,
  toggleConnection: propTypes.func.isRequired
}