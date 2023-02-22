import React, { useEffect, useState } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(true);

  const resetValues = () => {
    setName('');
    setPhone('');
    setEmail('');
    setIsDuplicate(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate) return;
    if (!name || !phone) return; // name or phone is falsy
    if (
      // if phone does not match regexp
      !new RegExp(
        '[+]?[0-9]{2}[ -]{1}[0-9]{3}[ -]{1}[0-9]{3}[ -]{1}[0-9]{3}'
      ).test(phone)
    )
      return;

    let phoneNum = phone;
    if (phoneNum[0] !== '+') phoneNum = '+' + phoneNum;

    onAddContact(name.trim(), phoneNum.replaceAll('-', ' '), email.trim());

    resetValues();
  };

  useEffect(() => {
    if (!name) return;

    // check if a new contact name would be a duplicate
    const duplicate = contacts.some((contact) => contact.name === name);
    setIsDuplicate(duplicate);
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
