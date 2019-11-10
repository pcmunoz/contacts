import React, { useState } from 'react';
import './primitive.css';
import ContactList from './contacts/list';
import AddContact from './contacts/add';
import EditContact from './contacts/edit';
import { Contact, initialState } from './contacts/model';

const App: React.FC = () => {
  const data: Contact[] = [
    { id: 1, name: 'Tania', email: 'tania@mail.com', contactNumber: '123123123' },
    { id: 2, name: 'Craig', email: 'craig@email.com', contactNumber: '123123123' },
    { id: 3, name: 'Ben', email: 'ben@email.com', contactNumber: '123123123' },
  ]

  const [contacts, setContacts] = useState(data);

  const addContact = (contact: Contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  }

  const deleteContact = (id?:number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const [editing, setEditing] = useState(false);

  const [currentContact, setCurrentContact] = useState(initialState)

  const editContact = (contact:Contact) => {
    setEditing(true)
  
    setCurrentContact(contact)
  }
  
  const updateContact = (id:number, updatedContact: Contact) => {
    setEditing(false)
  
    setContacts(contacts.map(contact => (contact.id === id ? updatedContact : contact)))
  }

  return (
    <div className="container">
      <h1>Contacts</h1>
      <div className="flex-row">
        {editing ? (
          <div className="flex-large">
            <h2>Edit user</h2>
            <EditContact
              editing={editing}
              setEditing={setEditing}
              currentContact={currentContact}
              updateContact={updateContact}
            />
          </div>
        ) : (
          <div className="flex-large">
            <h2>Add user</h2>
            <AddContact addContact={addContact} />
          </div>
        )}
        <div className="flex-large">
          <h2>View Contacts</h2>
          <ContactList 
            contacts={contacts} 
            editContact={editContact}
            deleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
