import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Form from './components/pure/form/Form';
import ContactList from './components/containers/ContactList';
import Contact from './models/Contact';
import './App.scss';


function App() {
  const [contacts, setContacts] = useState([
    new Contact('Leonardo', 'Torrealba', 'Leonardotorre14@gmail.com', true),
    // new Contact('Liyimar', 'Gamboa', 'Corinami2021.l@gmail.com', true),
    new Contact('Omaira', 'Yanez', 'Ynaara@hotmail.com', false),
    new Contact('Salvador', 'Torrealba', 'Salvatorre62_167@gmail.com', false)
  ])

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
      <Form
        addContact={addContact}
      ></Form>
      <ContactList
        contacts={contacts}
        deleteContact={ deleteContact }
        toggleConnection={ toggleConnection }
      ></ContactList>
    </div>
  );
}

export default App;
