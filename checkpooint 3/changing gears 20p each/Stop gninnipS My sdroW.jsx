import React from 'react';

class ReverseWordsComponent extends React.Component {
    spinWords = (str) => {
        const words = str.split(' ');
        const reversedWords = words.map(word => {
            return word.length >= 5 ? word.split('').reverse().join('') : word;
        });
        return reversedWords.join(' ');
    };

    render() {
        const { inputString } = this.props;
        const resultString = this.spinWords(inputString);

        return (
            <div>
                <h2>Input String: {inputString}</h2>
                <h2>Result: {resultString}</h2>
            </div>
        );
    }
}

// Example usage
const App = () => {
    const inputString1 = "Hey fellow warriors";
    const inputString2 = "This is a test";
    const inputString3 = "This is another test";

    return (
        <div>
            <h1>Reverse Words Using React</h1>
            <ReverseWordsComponent inputString={inputString1} />
            <ReverseWordsComponent inputString={inputString2} />
            <ReverseWordsComponent inputString={inputString3} />
        </div>
    );
};

export default App;
