import React from 'react';
import Nav from './Nav';
import SearchContainer from './SearchContainer';

function Hero(){
  const heroStyles = {
    background: 'url(https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: 'auto'
  };
  return (
    <div style={heroStyles}>
      <Nav/>
      <SearchContainer/>
    </div>
  );
}


export default Hero;



// <img sizes="100vw" src="https://a0.muscache.com/4ea/air/r:w775-h518-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg" srcset="https://a0.muscache.com/4ea/air/r:w775-h518-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg 775w,https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg 1550w,https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg 3100w">
