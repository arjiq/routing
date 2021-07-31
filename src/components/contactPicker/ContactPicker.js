import React from "react";

export const ContactPicker = ({name, onChange, contacts}) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} selected="selected">
        Select A Contact
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} ket={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
