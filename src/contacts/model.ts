export interface Contact {
    id?: number;
    name: string;
    email: string;
    contactNumber: string;
}

export const initialState: Contact = {
    name: '', email: '', contactNumber: '' 
}
