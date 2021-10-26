import React from "react";
// import PropTypes from "prop-types";
import cs from "./ContactBook.module.css";

const ContactBook = ({ data }) => {
  return (
    <>
      <h2 className={cs.title}>Contacts</h2>
      <ul className={cs.list}>
        {data.map(({ name, number, id }) => (
          <>
            <li className={cs.item} key={id}>
              {name}: {number}
              <button
                className={cs.btnDeleteContact}
                type="button"
                name="delete"
                // onClick={() => onRemoveContact(contact.id)}
              >
                DELETE
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default ContactBook;
