import React, { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';

const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="d-flex justify-content-evenly gap-1 align-items-center p-2 bg-dark text-white counter">
      <div
        id="digit-icon"
        className="border border-2 border-secondary rounded p-1"
      >
        <FaRegClock />
      </div>
      <div
        id="digit-6"
        className="border border-2 border-secondary rounded p-1"
      >
        {props.digitFive % 10}
      </div>
      <div
        id="digit-5"
        className="border border-2 border-secondary rounded p-1"
      >
        {props.digitFour % 10}
      </div>
      <div
        id="digit-4"
        className="border border-2 border-secondary rounded p-1"
      >
        {props.digitThree % 10}
      </div>
      <div
        id="digit-3"
        className="border border-2 border-secondary rounded p-1"
      >
        0
      </div>
      <div
        id="digit-2"
        className="border border-2 border-secondary rounded p-1"
      >
        {props.digitTwo % 10}
      </div>
      <div
        id="digit-1"
        className="border border-2 border-secondary rounded p-1"
      >
        {props.digitOne % 10}
      </div>
    </div>
  );
};

export default SecondsCounter;
