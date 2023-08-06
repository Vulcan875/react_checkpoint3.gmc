import React from 'react';

class LikeSystemComponent extends React.Component {
    formatLikes = (names) => {
        const length = names.length;
        if (length === 0) {
            return 'no one likes this';
        } else if (length === 1) {
            return `${names[0]} likes this`;
        } else if (length === 2) {
            return `${names[0]} and ${names[1]} like this`;
        } else if (length === 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        } else {
            const remainingCount = length - 2;
            return `${names[0]}, ${names[1]} and ${remainingCount} others like this`;
        }
    };

    render() {
        const { names } = this.props;
        const displayText = this.formatLikes(names);

        return (
            <div>
                <p>{displayText}</p>
            </div>
        );
    }
}

// Example usage
const App = () => {
    const likes1 = [];
    const likes2 = ["Peter"];
    const likes3 = ["Jacob", "Alex"];
    const likes4 = ["Max", "John", "Mark"];
    const likes5 = ["Alex", "Jacob", "Mark", "Max"];

    return (
        <div>
            <h1>Like System Using React</h1>
            <LikeSystemComponent names={likes1} />
            <LikeSystemComponent names={likes2} />
            <LikeSystemComponent names={likes3} />
            <LikeSystemComponent names={likes4} />
            <LikeSystemComponent names={likes5} />
        </div>
    );
};

export default App;
