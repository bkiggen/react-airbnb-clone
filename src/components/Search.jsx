import React from 'react';
import Header from './Header';
import Where from './Where';
import Guests from './Guests';
import Check from './Check';
import SubmitButton from './SubmitButton';


const masterCheckList = [
  {
    finisher: ' IN'
  },
  {
    finisher: ' OUT'
  }
];

function Search() {
  const searchStyles = {
    backgroundColor: 'white',
    borderRadius: '5px',
    width: '377px',
    padding: '32px'
  };

  const flex = {
    display: 'flex',
    width: '380px',
    justifyContent: 'space-between'
  };

  return (
    <div style={searchStyles}>
      <Header/>
      <Where/>
      <div style={flex}>
        {masterCheckList.map((check, index) =>
          <Check finisher={check.finisher}
          key={index}/>
        )}
      </div>
      <Guests/>
      <SubmitButton/>
    </div>
  );
}

export default Search;

// <Check finisher=" IN"/>
// <Check finisher=" OUT"/>