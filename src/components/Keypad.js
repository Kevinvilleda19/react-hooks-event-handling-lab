// Code Keypad Component Here
import React from "react";

function Keypad({ onClick }) {
    const keys = [
      '1', '2', '3',
      '4', '5', '6',
      '7', '8', '9',
      '*', '0', '#'
    ];

    function handleInputChange() {
      console.log('Entering password...');
    }

    function handleButtonClick(key) {
      onClick(key);
    }

    return (
      <div className="keypad">
        <input
          type="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        {keys.map(function(key) {
          return (
            <button key={key} onClick={function() { handleButtonClick(key); }}>
              {key}
            </button>
          );
        })}
      </div>
    );
  }

  export default Keypad;