import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const ContactTile = (props) => {
  const {icon, value, displayValue} = props.contact;
  return <div className='contactTile d-flex align-items-center' >
    <i className={icon}></i>
    <a href={value}>{displayValue}</a>
  </div>
}

export default ContactTile;