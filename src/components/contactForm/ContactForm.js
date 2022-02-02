import React from "react";

import {
  TextField,
  Button
} from '@mui/material';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChange = ({target}) => {
    switch(target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'phone':
        setPhone(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField size="small" sx={{margin: 2}} type="text" name="name" value={name} onChange={handleChange} placeholder="Full Name" />
      </div>
      <div>
        <TextField size="small" sx={{margin: 2}} type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone Number" />
      </div>
      <div>
        <TextField size="small" sx={{margin: 2}} type="email" name="email" value={email} onChange={handleChange} placeholder="Email Address" />
      </div>
      <Button sx={{margin: 2}} variant="outlined" type="submit">Add Contact</Button>
    </form>
  );
};
