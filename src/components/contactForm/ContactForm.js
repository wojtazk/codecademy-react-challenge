import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        required
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        required
        pattern="[+]?[0-9]{2}[ -]{1}[0-9]{3}[ -]{1}[0-9]{3}[ -]{1}[0-9]{3}"
        title="Accepted formats: (+12 123 123 123), (12 123 123 123), (+12-123-123-123)"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="submit" value="Add contact" />
    </form>
  );
};
