import React from "react";

import { ContactPicker } from '../../components/contactPicker/ContactPicker'
import {
  TextField,
  Button
} from '@mui/material';

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
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = ({target}) => {
    switch(target.name) {
      case 'title':
        setTitle(target.value);
        break;
      case 'contact':
        setContact(target.value);
        break;
      case 'date':
        setDate(target.value);
        break;
      case 'time':
        setTime(target.value);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField size="small" sx={{margin: 2}} type="text" name="title" value={title} onChange={handleChange} placeholder="Title" />
      </div>
      
      <ContactPicker options={contacts} handleChange={handleChange} value={contact} />
      
      <div>
        <TextField size="small" sx={{margin: 2}} type="date" min={getTodayString.toString()} name="date" value={date} onChange={handleChange} placeholder="Date" />
      </div>
      
      <div>
        <TextField size="small" sx={{margin: 2}} type="time" name="time" value={time} onChange={handleChange} placeholder="Time" />
      </div>

      <Button type="submit" variant="outlined" sx={{margin: 2}}>Add Appointment</Button>
    </form>
  );
};
