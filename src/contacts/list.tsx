import React from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { Contact } from "./model";

interface Sort {
  type: "asc" | "desc";
  field: string;
}

interface Meta {
  currentPage: number;
  perPage: number;
  pageNumbers: number[];
}

export interface Props {
  contacts: Contact[];
  meta: Meta;
  setMeta: (meta: Meta) => void;
  deleteContact: (id?: number) => void;
  editContact: (contact: Contact) => void;
  sortContacts: (sort: "asc" | "desc", field: string) => void;
  sort: Sort;
  setSort: (sort: Sort) => void;
  toggleModal: () => void;
}

const ContactList = ({
  contacts,
  meta,
  setMeta,
  deleteContact,
  editContact,
  sortContacts,
  sort,
  setSort,
  toggleModal,
}: Props) => {
  const SortColumn = (field: string) => {
    const asc = (
      <FaSortUp
        onClick={() => {
          sortContacts("asc", field);
          setSort({ type: "asc", field });
        }}
      />
    );
    const desc = (
      <FaSortDown
        onClick={() => {
          sortContacts("desc", field);
          setSort({ type: "desc", field });
        }}
      />
    );
    const individualSort = sort.type === "asc" ? desc : asc;

    const AllSort = (
      <>
        {asc} {desc}
      </>
    );

    return field === sort.field ? individualSort : AllSort;
  };

  const renderPageNumbers = meta.pageNumbers.map((number) => {
    return (
      <span
        key={number}
        onClick={() => {
          setMeta({ ...meta, currentPage: number });
        }}
      >
        {number}
      </span>
    );
  });

  return (
    <>
      <span> Current Sort: {`${sort.field} ${sort.type}`}</span>
      <table>
        <thead>
          <tr>
            <th>Name{SortColumn("name")}</th>
            <th>Email{SortColumn("email")}</th>
            <th>Contact Number{SortColumn("contactNumber")}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.contactNumber}</td>
                <td>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      editContact(contact);
                      toggleModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Contacts</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>{renderPageNumbers}</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ContactList;
