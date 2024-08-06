import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";

import css from "../ContactList/ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error loading contacts</p>}
      <ul className={css.contactList}>
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
