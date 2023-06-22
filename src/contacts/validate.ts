export interface ContactError {
    name: string;
    email: string;
    contactNumber: string;
}

export const initialErrorState: ContactError = {
    name: '', email: '', contactNumber: ''
}

const validEmailRegex =
    RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

const validateLength = (name: string, value: string, length: number) =>
    value.length < 5 ?
        `${name} must be ${length} characters long!` : ''

export const validForm = (errors: ContactError) => {
    return errors.contactNumber === '' && errors.email === '' && errors.name === '';
}


const validate = (errors: ContactError, name: string, value: string) => {
    switch (name) {
        case 'name':
            errors.name =
                validateLength('Name', value, 5);
            break;
        case 'email':
            errors.email =
                validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
            break;
        case 'contactNumber':
            errors.contactNumber =
                validateLength('Contact Number', value, 4);
            break;
        default:
            break;


    }
    return errors;
}

export default validate;