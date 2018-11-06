import React from 'react';


function Check(props){

  const inputStyles = {
    height: '46px',
    width: '160px',
    fontSize: '14px',
    fontFamily: 'Montserrat',
    paddingLeft: '10px',
    margin: '0 auto',
    borderRadius: '5px',
    border: '2px solid whitesmoke'
  };

  const titleStyles = {
    fontFamily: 'Montserrat',
    fontSize: '12px'
  };

  return (
    <div>
      <p style={titleStyles}>CHECK {props.finisher}</p>
      <input style={inputStyles} type="date" placeholder=""></input>
    </div>
  );

}
export default Check;
