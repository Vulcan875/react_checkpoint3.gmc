import React, { useState } from 'react';

function RemoveFirstLastChars() {
  const [inputString, setInputString] = useState('');
  const [outputString, setOutputString] = useState('');

  const removeFirstLastChars = (str) => {
    return str.slice(1, -1);
  };

  const handleInputChange = (event) => {
    setInputString(event.target.value);
    if (event.target.value.length >= 2) {
      setOutputString(removeFirstLastChars(event.target.value));
    } else {
      setOutputString('');
    }
  };

  return (
    <div>
      <h2>Remove First and Last Characters</h2>
      <input
        type="text"
        value={inputString}
        onChange={handleInputChange}
        placeholder="Enter a string"
      />
      <p>Original String: {inputString}</p>
      {outputString && <p>Modified String: {outputString}</p>}
    </div>
  );
}

export default RemoveFirstLastChars;
