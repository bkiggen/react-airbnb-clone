import React from 'react';

function SubmitButton() {
  const buttonStyles = {
    height: '50',
    width: '104.55',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF5A5F',
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontSize: '14px'
  };

  const buttonContainer = {
    margin: '30px',
    display: 'flex',
    justifyContent: 'flex-end'
  };

  return (
    <div style={buttonContainer}>
      <button style={buttonStyles} type="button">Search</button>
    </div>
  );
}

export default SubmitButton;
