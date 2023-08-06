import React from 'react';

class SumOfMultiplesComponent extends React.Component {
    calculateSum = (number) => {
        if (number < 0) {
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };

    render() {
        const { inputNumber } = this.props;
        const sum = this.calculateSum(inputNumber);

        return (
            <div>
                <h2>Input Number: {inputNumber}</h2>
                <h2>Sum of Multiples: {sum}</h2>
            </div>
        );
    }
}

// Example usage
const App = () => {
    const inputNumber = 10;

    return (
        <div>
            <h1>Sum of Multiples Using React</h1>
            <SumOfMultiplesComponent inputNumber={inputNumber} />
        </div>
    );
};

export default App;
