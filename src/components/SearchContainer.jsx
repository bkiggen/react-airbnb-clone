import React from 'react';
import Search from './Search';


function SearchContainer() {
  const searchStyles = {
    height: '500px',
    width: '62%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '45px'
  };
  return (
    <div style={searchStyles}>
      <Search/>
    </div>
  );
}

export default SearchContainer;
