import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Contact, initialState } from "./model";
import validateContact, { initialErrorState, validForm } from "./validate";

interface Props {
  currentContact: Contact;
  updateContact: (id: number, contact: Contact) => void;
  toggleModal: () => void;
  mode: string;
  addContact: (contact: Contact) => void;
}

const ContactForm = ({ currentContact, updateContact, toggleModal, mode, addContact }: Props) => {
  const [contact, setContact] = useState(currentContact);
  const [errors, setErrors] = useState(initialErrorState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setErrors(validateContact(errors, name, value));

    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, id: number, contact: Contact) => {
    event.preventDefault();
    if (!contact.name || !contact.email || !contact.contactNumber) return;
    if (!validForm(errors)) return;

    if (id === 0) {
      addContact(contact);
    } else {
      updateContact(id, contact);
    }

    setContact(initialState);
    toggleModal();
  };

  useEffect(() => {
    setContact(currentContact);
    setErrors(initialErrorState);
  }, [currentContact]);

  return (
    <form onSubmit={(e) => handleSubmit(e, currentContact.id || 0, contact)}>
      <label>Name</label>
      <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
      {errors.name.length > 0 && <span className="error">{errors.name}</span>}
      <label>Email</label>
      <input type="email" name="email" value={contact.email} onChange={handleInputChange} />
      {errors.email.length > 0 && <span className="error">{errors.email}</span>}
      <label>Contact Number</label>
      <input
        type="text"
        name="contactNumber"
        value={contact.contactNumber}
        onChange={handleInputChange}
      />
      {errors.contactNumber.length > 0 && <span className="error">{errors.contactNumber}</span>}
      <button>{mode}</button>
      <button onClick={() => toggleModal()} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default ContactForm;
