import React, { useState } from "react";
import {Routes, Route, Outlet, useNavigate } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import {
  Container,
  Box,
  AppBar, 
  Toolbar,
  Button
} from '@mui/material';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  
  const addContacts = (contact) => {
    setContacts(prevContacts => {
      return [
        ...prevContacts,
        contact
      ]
    })
  }

  const addAppointments = (appointment) => {
    setAppointments(prevAppointments => {
      return [
        ...prevAppointments,
        appointment
      ]
    })
  }

  const handleNavigationClick = ({target}) => {
    navigate(target.getAttribute('route'))
  }

  return (
    <>
        <Box>
          <AppBar position="static">
            <Toolbar sx={{backgroundColor: 'darkcyan'}}>
              <nav>
                <Button type="button" size="small" variant="contained" color="primary" sx={{marginRight: 2}} route={ROUTES.CONTACTS} onClick={handleNavigationClick}>Contacts</Button>
                <Button type="button" size="small" variant="contained" color="primary" route={ROUTES.APPOINTMENTS} onClick={handleNavigationClick}>Appointments</Button>
              </nav>
            </Toolbar>
          </AppBar>

          <Container>
            <Outlet />
          </Container>
        </Box>
        <Routes>
          <Route path="/" element={<main><h1>Appointment App</h1></main>} />
          <Route path="contacts" element={<ContactsPage contacts={contacts} addContacts={addContacts} />} />
          <Route path="appointments" element={<AppointmentsPage appointments={appointments} addAppointments={addAppointments} contacts={contacts} />} />
          <Route path="*" element={<main><h1>Page Not found!</h1></main>} />
        </Routes>
    </>
  );
}

export default App;
