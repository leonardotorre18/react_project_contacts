import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import FormContact from './components/pure/form/FormContact';
import ContactList from './components/containers/ContactList';
import ContactsAPI from './ContactsAPI';
import './App.scss';

function App() {
  const [contacts, setContacts] = useState(ContactsAPI)
  
  const addContact = contact => {
    setContacts([
      ...contacts,
      contact
    ]); 
  }
  const deleteContact = contact => {
    let index = contacts.indexOf(contact)
    let tempContact = contacts;
    tempContact.splice(index, 1);
    setContacts([...tempContact]);
  }
  const toggleConnection = contact => {
    let index = contacts.indexOf(contact)
    let tempContact = contacts;
    tempContact[index].status = !contacts[index].status
    setContacts([...tempContact]);

  } 

  return (
    <div className="App">
      <Navbar></Navbar>
      <FormContact
        addContact={addContact}
      ></FormContact>
      <ContactList
        contacts={contacts}
        deleteContact={ deleteContact }
        toggleConnection={ toggleConnection }
      ></ContactList>
    </div>
  );
}

export default App;
