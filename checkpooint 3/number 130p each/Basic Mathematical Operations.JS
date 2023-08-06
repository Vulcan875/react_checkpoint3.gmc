import React, { useState } from 'react';

function BasicMathOperation() {
    const [operation, setOperation] = useState('+');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState('');

    const handleOperationChange = (event) => {
        setOperation(event.target.value);
    };

    const handleValue1Change = (event) => {
        setValue1(event.target.value);
    };

    const handleValue2Change = (event) => {
        setValue2(event.target.value);
    };

    const calculateResult = () => {
        if (value1 === '' || value2 === '') {
            setResult('Please provide both values');
            return;
        }

        switch (operation) {
            case '+':
                setResult(Number(value1) + Number(value2));
                break;
            case '-':
                setResult(Number(value1) - Number(value2));
                break;
            case '*':
                setResult(Number(value1) * Number(value2));
                break;
            case '/':
                if (Number(value2) !== 0) {
                    setResult(Number(value1) / Number(value2));
                } else {
                    setResult('Cannot divide by zero');
                }
                break;
            default:
                setResult('Invalid operation');
                break;
        }
    };

    return (
        <div>
            <h2>Basic Math Operation</h2>
            <div>
