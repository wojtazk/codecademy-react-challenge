import React, { useState } from 'react';

export const ContactsPage = ({ contacts, onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate) return;

    onAddContact(name, phone, email);
    e.target.reset();
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
