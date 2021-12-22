import React from "react";
import './Contact.css';

import contactInfo from "../../data/ContactInfo";
import ContactTile from "./ContactTile";

const Contact = (props) => {
  return <div className='d-flex flex-wrap justify-content-between' id='Contact'>
    {Object.keys(contactInfo).map(key => {
      return <ContactTile key={key} contact={contactInfo[key]} />
    })}
  </div>;
}

export default Contact;