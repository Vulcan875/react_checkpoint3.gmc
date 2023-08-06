import React, { useState } from 'react';

function WaterIntakeCalculator() {
    const [cyclingTime, setCyclingTime] = useState('');
    const [waterIntake, setWaterIntake] = useState(0);

    const calculateWaterIntake = (time) => {
        return Math.floor(time * 0.5);
    };

    const handleTimeChange = (event) => {
        const time = parseFloat(event.target.value);
        setCyclingTime(time);
        setWaterIntake(calculateWaterIntake(time));
    };

    return (
        <div>
            <h2>Water Intake Calculator</h2>
            <label>
                Enter Cycling Time (in hours):
                <input
                    type="number"
                    value={cyclingTime}
                    onChange={handleTimeChange}
                    step="0.01"
                />
            </label>
            {waterIntake > 0 && (
                <p>
                    Nathan will drink approximately {waterIntake} litre(s) of water.
                </p>
            )}
        </div>
    );
}

export default WaterIntakeCalculator;
