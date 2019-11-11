import React, { useState } from 'react';
import { orderBy } from 'lodash';
import './primitive.css';
import ContactList from './contacts/list';
import AddContact from './contacts/add';
import EditContact from './contacts/edit';
import { Contact, initialState } from './contacts/model';

interface Sort {
  type: "asc" | "desc";
  field: string;
}

const App: React.FC = () => {
  const data: Contact[] = [
    { id: 1, name: 'Tania', email: 'tania@mail.com', contactNumber: '123123123' },
    { id: 2, name: 'Craig', email: 'craig@email.com', contactNumber: '6546456' },
    { id: 3, name: 'Ben', email: 'ben@email.com', contactNumber: '234234' },
  ]

  const [contacts, setContacts] = useState(data);
  const [sort, setSort] = useState<Sort>({ type: "asc", field: "name"});

  const addContact = (contact: Contact) => {
    contact.id = contacts.length + 1;
    setContacts(orderBy([...contacts, contact], [sort.field],[sort.type]));
  }

  const deleteContact = (id?:number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const sortContacts = (sort: "desc" | "asc", field: string) => {
    const sortedContacts = orderBy(contacts, [field],[sort]); // Use Lodash to sort array by 'name'
    setContacts(sortedContacts)
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
            <h2>Edit Contact</h2>
            <EditContact
              editing={editing}
              setEditing={setEditing}
              currentContact={currentContact}
              updateContact={updateContact}
            />
          </div>
        ) : (
          <div className="flex-large">
            <h2>Add Contact</h2>
            <AddContact addContact={addContact} />
          </div>
        )}
        <div className="flex-large">
          <h2>View Contacts</h2>
          <ContactList 
            contacts={contacts}
            sortContacts={sortContacts}
            editContact={editContact}
            deleteContact={deleteContact}
            sort={sort}
            setSort={setSort}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
