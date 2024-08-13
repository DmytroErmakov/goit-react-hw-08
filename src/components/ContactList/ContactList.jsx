import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";

import css from "../ContactList/ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  return (
    <div>
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
