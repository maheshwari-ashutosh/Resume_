import React from 'react';
import './Header.css';

const Header = (props) => {
  const headerInfo = props.data;
  const {name, currentPosition, ...rest} = headerInfo;
  return (
    <div id='Header'>
      <h1>{name}</h1>
      <h2>{currentPosition}</h2>
      {Object.keys(rest).map((key) => {
        return <p key={key}>{rest[key]}</p>;
      })}
    </div>
  );
};

export default Header;
