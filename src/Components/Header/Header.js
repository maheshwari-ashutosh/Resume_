import React from "react";
import './Header.css';

import headerInfo from "../../data/HeaderInfo";

const Header = (props) => {
  const {name, currentPosition, ...rest} = headerInfo;
  return <div id='Header'>
    <h1>{name}</h1>
    <h2>{currentPosition}</h2>
    {Object.keys(rest).map(key => {
      return <p key={key}>{rest[key]}</p>
    })}
  </div>
}

export default Header;