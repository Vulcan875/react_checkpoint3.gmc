import React from 'react';

class OutlierFinderComponent extends React.Component {
    findOutlier = (arr) => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        const oddNumbers = arr.filter(num => num % 2 !== 0);

        if (evenNumbers.length === 1) {
            return evenNumbers[0];
        } else if (oddNumbers.length === 1) {
            return oddNumbers[0];
        }
    };

    render() {
        const { inputArray } = this.props;
        const outlier = this.findOutlier(inputArray);

        return (
            <div>
                <h2>Input Array: {inputArray.join(', ')}</h2>
                <h2>Outlier: {outlier}</h2>
            </div>
        );
    }
}

// Example usage
const App = () => {
    const array1 = [2, 4, 0, 100, 4, 11, 2602, 36];
    const array2 = [160, 3, 1719, 19, 11, 13, -21];

    return (
        <div>
            <h1>Outlier Finder Using React</h1>
            <OutlierFinderComponent inputArray={array1} />
            <OutlierFinderComponent inputArray={array2} />
        </div>
    );
};

export default App;
