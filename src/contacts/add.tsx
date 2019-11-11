import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Contact, initialState } from './model';
import validateContact, {initialErrorState, validForm} from './validate';

export interface Props {
    addContact: (contact:Contact) => void;
}

const AddContact = ({addContact}:Props) => {
    const [contact, setContact] = useState(initialState);
    const [errors, setErrors] = useState(initialErrorState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        
        setErrors(validateContact(errors, name, value));
        
        setContact({ ...contact, [name]: value });
    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!contact.name || !contact.email || !contact.contactNumber) return;
        if (!validForm(errors)) return;

        addContact(contact);
        setContact(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
            {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
            <label>Email</label>
            <input type="email" name="email" value={contact.email} onChange={handleInputChange} />
            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={contact.contactNumber} onChange={handleInputChange} />
            {errors.contactNumber.length > 0 && <span className='error'>{errors.contactNumber}</span>} 
            <br/>   
            <br/>     
            <button>Add new contact</button>
        </form>
    )
}

export default AddContact;