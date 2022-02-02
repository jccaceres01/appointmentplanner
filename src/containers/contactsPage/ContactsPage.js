import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicated, setDuplicated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicated && name.trim() !== '') {
      // Add new Contact to contacts's array
      props.addContacts({name, phone, email})
      // clear data
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert('Name duplicated or empty!');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    (props.contacts.find(t => t.name.toLowerCase().trim() === name.toLowerCase().trim()) !== undefined)
      ? setDuplicated(true)
      : setDuplicated(false)
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objectArray={props.contacts} />
      </section>
    </div>
  );
};
