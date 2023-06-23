import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import FormContact from "../contacts/form";
import ContactList from "../contacts/list";
import { Contact, initialState } from "../contacts/model";
import "../primitive.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};
interface Sort {
  type: "asc" | "desc";
  field: string;
}

interface Meta {
  currentPage: number;
  perPage: number;
  pageNumbers: number[];
}

const PER_PAGE = 5;

const initialMetaState = (length: number) => {
  const perPage = PER_PAGE;
  const pageNumbers = calculatePageNumbers(length);
  return {
    currentPage: 1,
    perPage,
    pageNumbers,
  };
};

const calculatePageNumbers = (length: number) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(length / PER_PAGE); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};

const ContactComponent: React.FC = () => {
  const data: Contact[] = [
    { id: 1, name: "Tania", email: "tania@mail.com", contactNumber: "123123123" },
    { id: 2, name: "Craig", email: "craig@email.com", contactNumber: "6546456" },
    { id: 3, name: "Ben1", email: "ben1@email.com", contactNumber: "2342134" },
    { id: 4, name: "Ben2", email: "ben2@email.com", contactNumber: "2342234" },
    { id: 5, name: "Ben3", email: "ben3@email.com", contactNumber: "2342334" },
    { id: 6, name: "Ben4", email: "ben4@email.com", contactNumber: "2342434" },
    { id: 7, name: "Ben5", email: "ben5@email.com", contactNumber: "23425 34" },
  ];

  const [contacts, setContacts] = useState(data);
  const [list, setList] = useState(data);
  const [sort, setSort] = useState<Sort>({ type: "asc", field: "name" });
  const [meta, setMeta] = useState<Meta>(initialMetaState(contacts.length));
  const [showModal, setShowModal] = useState(false);

  const addContact = (contact: Contact) => {
    contact.id = contacts.length + 1;
    setContacts(orderBy([...contacts, contact], [sort.field], [sort.type]));
  };

  const deleteContact = (id?: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const sortContacts = (sort: "desc" | "asc", field: string) => {
    const sortedContacts = orderBy(contacts, [field], [sort]); // Use Lodash to sort array by 'name'
    setContacts(sortedContacts);
  };

  const [currentContact, setCurrentContact] = useState(initialState);

  const editContact = (contact: Contact) => {
    setCurrentContact(contact);
  };

  const updateContact = (id: number, updatedContact: Contact) => {
    setContacts(contacts.map((contact) => (contact.id === id ? updatedContact : contact)));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const mode = currentContact.id === 0 ? "Add Contact" : "Edit Contact";
  useEffect(() => {
    const pageNumbers = calculatePageNumbers(contacts.length);
    let currentPage = meta.currentPage;
    if (pageNumbers[pageNumbers.length - 1] < meta.currentPage) {
      currentPage = pageNumbers[pageNumbers.length - 1];
    }
    setMeta({ perPage: PER_PAGE, currentPage, pageNumbers });
  }, [contacts.length, meta.currentPage]);

  useEffect(() => {
    const metaPage = meta.currentPage * meta.perPage;
    const beforePage = (meta.currentPage - 1) * meta.perPage;
    const indexOfLast = metaPage < contacts.length ? meta.currentPage * meta.perPage : contacts.length;
    const lastPage = meta.pageNumbers[meta.pageNumbers.length - 1];
    const indexOfFirst =
      meta.currentPage === lastPage
        ? contacts.length - (contacts.length - beforePage)
        : indexOfLast - meta.perPage;
    setList(contacts.slice(indexOfFirst, indexOfLast));
  }, [meta, contacts]);

  return (
    <div className="container">
      <h1>Contacts</h1>
      <div className="flex-row">
        <Modal isOpen={showModal} style={customStyles} contentLabel={mode}>
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
          <button
            onClick={() => {
              editContact(initialState);
              toggleModal();
            }}
          >
            Add Contact
          </button>
          <ContactList
            contacts={list}
            meta={meta}
            setMeta={setMeta}
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
};

export default ContactComponent;
