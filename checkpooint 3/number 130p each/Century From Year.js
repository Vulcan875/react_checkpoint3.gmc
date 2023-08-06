import React, { useState } from 'react';

function App() {
const [year, setYear] = useState('');
const [century, setCentury] = useState('');

const handleYearChange = (event) => {
setYear(event.target.value);
};

const calculateCentury = () => {
if (!year || isNaN(year)) {
setCentury('Invalid input');
return;
}

const yearNum = parseInt(year);
const centuryNum = Math.ceil(yearNum / 100);
setCentury(centuryNum);
};

return (
<div>
    <h1>Century Calculator</h1>
    <input type="text" placeholder="Enter a year" value={year} onChange={handleYearChange} />
    <button onClick={calculateCentury}>Calculate</button>
    <p>{century && `The year ${year} is in the ${century} century.`}</p>
</div>
);
}

export default App;