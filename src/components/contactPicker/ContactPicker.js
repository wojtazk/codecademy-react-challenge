import React from 'react';

export const ContactPicker = ({ contacts, contact, handleChange }) => {
  return (
    <>
      <label htmlFor="contact">Contact</label>
      <select id="contact" onChange={handleChange} value={contact} required>
        <option value="">-</option>
        {contacts.map((contact, indx) => (
          <option value={contact.name} key={indx}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};
