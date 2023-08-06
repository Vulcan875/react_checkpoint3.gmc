import React from 'react';

class DoubleArrayComponent extends React.Component {
    render() {
        const { inputArray } = this.props;
        const doubledArray = inputArray.map(num => 2 * num);

        return (
            <div>
                <h2>Original Array: {inputArray.join(', ')}</h2>
                <h2>Doubled Array: {doubledArray.join(', ')}</h2>
            </div>
        );
    }
}

// Example usage
const App = () => {
    const inputArray = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1>Double Array Using React</h1>
            <DoubleArrayComponent inputArray={inputArray} />
        </div>
    );
};

export default App;
