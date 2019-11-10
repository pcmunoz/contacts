import React from 'react';
import { Contact } from './model';

export interface Props {
    contacts: Contact[];
    deleteContact: (id?:number) => void;
    editContact: (contact:Contact) => void;
}

const ContactList = ({contacts, deleteContact, editContact}:Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {contacts.length > 0 ? (
              contacts.map(contact => (
              <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.contactNumber}</td>
                  <td>
                  <button className="button muted-button" onClick={() => {editContact(contact)}}>Edit</button>
                  <button className="button muted-button" onClick={() => {deleteContact(contact.id)}}>Delete</button>
                  </td>
              </tr>
              ))
          ) : (
              <tr>
              <td colSpan={3}>No Contacts</td>
              </tr>
          )}
      </tbody>
    </table>
  )
}

export default ContactList;
