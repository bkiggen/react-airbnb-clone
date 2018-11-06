import React from "react";
import Header from './Header';
import Where from './Where';
import Guests from './Guests';
import Check from './Check';
import SubmitButton from './SubmitButton'

function Search() {
  const searchStyles = {
    backgroundColor: "white",
    borderRadius: "5px",
    width: "377px",
    padding: "32px"
  }

  const flex = {
    display: "flex",
    width: "380px",
    justifyContent: "space-between"
  }

  return (
    <div style={searchStyles}>
      <Header/>
      <Where/>
      <div style={flex}>
        <Check finisher=" IN"/>
        <Check finisher=" OUT"/>
      </div>
      <Guests/>
      <SubmitButton/>
    </div>
  )
}

export default Search;
