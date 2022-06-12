import { useRef } from 'react';
import Contact from '../../../models/Contact';
import '../../../styles/Form.scss';
import propTypes from 'prop-types';

export default function Form({addContact}) {

  const nameRef = useRef('');
  const lastnameRef = useRef('');
  const emailRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
      const newContact = new Contact(
        nameRef.current.value,
        lastnameRef.current.value,
        emailRef.current.value
      )
      addContact(newContact);
      nameRef.current.value = '';
      lastnameRef.current.value = '';
      emailRef.current.value = '';
  }

  return (
    <form 
      action="" 
      onSubmit={e => handleSubmit(e)} 
      className="form"
    >
      <h3 className='title'>Agregar Contacto</h3>

      <div className='form-group'>
        <label htmlFor='name'>Nombre</label>
        <input type="text" id='name' ref={nameRef} />
      </div>
      <div className='form-group'>
        <label htmlFor='lastname'>Apellido</label>
        <input type="text" id='lastname' ref={lastnameRef} />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type="email" id='email' ref={emailRef} />
      </div>

      <input type="submit" value="Agregar"/>

    </form>
  )
}


Form.propTypes = {
    addContact: propTypes.func.isRequired
};