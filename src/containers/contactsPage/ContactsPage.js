import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    // check if a new contact name would be a duplicate
    const duplicate = contacts.some((contact) => contact.name === name);
    setIsDuplicate(duplicate);
  }, [name]);

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
