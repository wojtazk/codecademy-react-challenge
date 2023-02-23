import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        required
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ContactPicker
        contacts={contacts}
        contact={contact}
        handleChange={(e) => setContact(e.target.value)}
      />

      <label htmlFor="date">Date</label>
      <input
        type="date"
        min={getTodayString()}
        required
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Time</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <input type="submit" value="Add Appointment" />
    </form>
  );
};
