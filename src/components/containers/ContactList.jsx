import ContactCard from '../pure/ContactCard';
import propTypes from 'prop-types';
import '../../styles/ContactList.scss';

export default function ContactList({contacts, deleteContact, toggleConnection}) {
  return (
    
    <div className='contactContainer'>
      {contacts.length > 0 ?
      contacts.map((contact,index)=>
        <ContactCard
          contact={contact}
          key={index}
          
          deleteContact={ deleteContact }
          toggleConnection={ toggleConnection }
        ></ContactCard>
      ) : 'No hay contactos registrados...'
      }    
    </div>
  )
}

ContactList.propTypes = {
  contacts: propTypes.array.isRequired
}
