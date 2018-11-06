import React from 'react';


function Where(){

  const inputStyles = {
    height: '46px',
    width: '365px',
    fontSize: '17px',
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
      <p style={titleStyles}>WHERE</p>
      <input style={inputStyles} type="text" placeholder="Oregon"></input>
    </div>
  );

}
export default Where;
