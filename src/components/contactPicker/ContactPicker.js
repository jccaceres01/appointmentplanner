import React from "react";

import {
  Select,
  MenuItem
} from '@mui/material';

export const ContactPicker = ({options, handleChange, value}) => {
  return (
    <div>
      <Select size="small" sx={{ margin: 2, width: 200}} name="contact" onChange={handleChange} label="Pick a contact" value={value}>
        <MenuItem defaultValue={null}>No Contact</MenuItem>
        {options.map((el, index) => {
          return (
            <MenuItem value={el.name} key={index}>{el.name}</MenuItem>
          )
        })}
      </Select>
    </div>
  );
};
