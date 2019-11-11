import React, { useState } from 'react';
import { orderBy } from 'lodash';
import './primitive.css';
import ContactList from './contacts/list';
import FormContact from './contacts/form';
import { Contact, initialState } from './contacts/model';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px'
  }
};
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
  const [showModal, setShowModal] = useState(false);

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

  const [currentContact, setCurrentContact] = useState(initialState)

  const editContact = (contact:Contact) => {
    setCurrentContact(contact)
  }
  
  const updateContact = (id:number, updatedContact: Contact) => {
    setContacts(contacts.map(contact => (contact.id === id ? updatedContact : contact)))
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const mode = currentContact.id===0 ? 'Add Contact' : 'Edit Contact';

  return (
    <div className="container">
      <h1>Contacts</h1>
      <div className="flex-row">
        <Modal 
           isOpen={showModal}
           style={customStyles}
           contentLabel={mode}
        >
            <h2>{mode}</h2>
            <FormContact
              currentContact={currentContact}
              addContact={addContact}
              updateContact={updateContact} 
              toggleModal={toggleModal}
              mode={mode}
            />
        </Modal>
        <div className="flex-large">
          <h2>View Contacts</h2>
          <button onClick={()=>{editContact(initialState);toggleModal()}}>Add Contact</button>
          <ContactList 
            contacts={contacts}
            sortContacts={sortContacts}
            editContact={editContact}
            deleteContact={deleteContact}
            sort={sort}
            setSort={setSort}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
