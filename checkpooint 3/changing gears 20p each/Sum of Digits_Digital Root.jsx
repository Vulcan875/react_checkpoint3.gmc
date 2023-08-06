import React from 'react';

class DigitalRootComponent extends React.Component {
    calculateDigitalRoot = (n) => {
        while (n >= 10) {
            n = n.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
        }
        return n;
    };

    render() {
        const { inputNumber } = this.props;
        const digitalRoot = this.calculateDigitalRoot(inputNumber);

        return (
            <div>
                <h2>Input Number: {inputNumber}</h2>
                <h2>Digital Root: {digitalRoot}</h2>
            </div>
        );
    }
}

// Example usage
const App = () => {
    const inputNumber = 493193;

    return (
        <div>
            <h1>Digital Root Using React</h1>
            <DigitalRootComponent inputNumber={inputNumber} />
        </div>
    );
};

export default App;
