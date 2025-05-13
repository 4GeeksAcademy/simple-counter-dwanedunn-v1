import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter';

//create your first component
const Home = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center mt-5">Counter</h1>
      </div>
      <SecondsCounter />
    </>
  );
};

export default Home;
