import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Contact, initialState } from './model';
import validateContact, {initialErrorState, validForm} from './validate';

interface Props {
    currentContact: Contact;
    editing: boolean;
    updateContact: (id:number, contact:Contact) => void;
    setEditing:(toggle:boolean)=>void;
}

const EditUserForm = ({currentContact,updateContact,setEditing}:Props) => {
    const [contact, setContact] = useState(currentContact);
    const [errors, setErrors] = useState(initialErrorState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;

        setErrors(validateContact(errors, name, value));

        setContact({ ...contact, [name]: value });
    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>,id:number,contact:Contact) => {
        event.preventDefault();
        if (!contact.name || !contact.email || !contact.contactNumber) return;
        if (!validForm(errors)) return;
    
        updateContact(id,contact);
        setContact(initialState);
    }

    useEffect(() => {
        setContact(currentContact);
        setErrors(initialErrorState);
    }, [currentContact])

    return (
        <form
            onSubmit={e=>handleSubmit(e,currentContact.id || 0,contact)}
        >
            <label>Name</label>
            <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="email" name="email" value={contact.email} onChange={handleInputChange} />
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={contact.contactNumber} onChange={handleInputChange} />    
            <button>Update user</button>
            <button onClick={() => setEditing(false)} className="button muted-button">
            Cancel
            </button>
        </form>
    )
}

export default EditUserForm