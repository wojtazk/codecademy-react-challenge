import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  const addContact = (name, phoneNumber, email) => {
    setContacts((contacts) => [...contacts, { name, phoneNumber, email }]);
  };
  const addAppointment = (title, contact, date, time) => {
    setAppointments((appointments) => [
      ...appointments,
      { title, contact, date, time },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} onAddContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              onAddAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
