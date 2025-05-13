import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter';

//create your first component
let counter = 0;
const Home = () => {
  setInterval(() => {
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(
      'one:',
      one,
      'two:',
      two,
      'three:',
      three,
      'four:',
      four,
      'five:',
      five
    );
    counter++;
  }, 1000);

  return (
    <>
      <div className="text-center">
        <h1 className="text-center mt-5">Counter</h1>
      </div>
      <SecondsCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        digitFive={five}
      />
    </>
  );
};

export default Home;
