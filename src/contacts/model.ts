export interface Contact {
    id?: number;
    name: string;
    email: string;
    contactNumber: string;
}

export const initialState: Contact = {
    id: 0, name: '', email: '', contactNumber: '' 
}
