import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts, selectLoading, selectError } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
// import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

import css from "../ContactList/ContactList.module.css";
import Loader from "../Loader/Loader";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError); //? перевірити
  const dispatch = useDispatch();

  // перевірити
  // if (!Array.isArray(contacts)) {
  //   console.error("Contacts is not an array:", contacts);
  //   return null;
  // }
  // перевірити
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const handleDelete = (id) => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      {loading && <Loader />}
      {error && <p>Error loading contacts</p>}
      <ul className={css.contactList}>
        {/* {visibleContacts.map(contact => ( */}
        {contacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              contact={contact}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
