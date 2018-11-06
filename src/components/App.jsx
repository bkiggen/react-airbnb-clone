import React from "react";
import Hero from "./Hero";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

function App(){
  return (
    <div>
      <Hero/>
    </div>
  );
}

export default App;
