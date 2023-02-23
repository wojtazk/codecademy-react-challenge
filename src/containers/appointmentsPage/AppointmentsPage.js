import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
  appointments,
  contacts,
  onAddAppointment,
}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const resetValues = () => {
    setTitle('');
    setContact('');
    setDate(null);
    setTime(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !contact || !date || !time) return;

    onAddAppointment(title, contact, date, time);
    resetValues();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
