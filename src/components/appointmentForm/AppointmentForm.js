import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

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

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input 
      name="title"
      type="text"
      value={title}
      onChange={(e)=> {
        setTitle(e.target.value)
      }}
      required
      placeholder="Appointment Title"
      />
      </label>
      <br />
      <label>
      <input 
      name="date"
      type="date"
      min={getTodayString()}
      onChange={(e) => {
        setDate(e.target.value)
      }}
      required
      />
      </label>
      <br />
      <label>
        <input 
        name="time"
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value)
        }}
        required
        />
      </label>
      <br />
      <ContactPicker
      name="contact"
      value={contact}
      contacts={getContactNames()}
      onChange={(e) => {
        setContact(e.target.value)
      }}
      placeholder="Appointment with"
      
      />
    </form>
  );
};
