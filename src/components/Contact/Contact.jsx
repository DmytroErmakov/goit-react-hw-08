import React from "react";
// import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
// import { deleteContact } from "../../redux/contactsOps";

import css from "../Contact/Contact.module.css";

export default function Contact({ contact, onDelete }) {
  // const dispatch = useDispatch();

  // const handleDelete = () => {
  //   dispatch(deleteContact(contact.id));
  // };

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <FaUser className={css.icon} />
        <p className={css.text}>{contact.name}</p>
      </div>
      <div className={css.contactInfo}>
        <FaPhone className={css.icon} />
        <p className={css.text}>{contact.number}</p>
      </div>
      {/* <button className={css.btn} onClick={handleDelete}> */}
      <button className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
