import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Contact, initialState } from './model';

export interface Props {
    addContact: (contact:Contact) => void;
}

const AddContact = ({addContact}:Props) => {
    const [contact, setContact] = useState(initialState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        
        setContact({ ...contact, [name]: value });
    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!contact.name || !contact.email || !contact.contactNumber) return;
    
        addContact(contact);
        setContact(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="email" name="email" value={contact.email} onChange={handleInputChange} />
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={contact.contactNumber} onChange={handleInputChange} />        
            <button>Add new contact</button>
        </form>
    )
}

export default AddContact;