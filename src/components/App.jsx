import React from 'react';
import Hero from './Hero';
import WebFont from 'webfontloader';
import TicketList from './TicketList';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

function App(){
  return (
    <div>
      <Hero/>
      <TicketList/>
    </div>
  );
}

export default App;
