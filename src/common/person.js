import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props);
        console.log('Props of child:', this.props);
    }

    render() {
        return (
            <>
            <h1>Name: {this.props.name} </h1>
            <h1>Age: {this.props.age} </h1>
            <h1>Gender: {this.props.gender} </h1>
            <button onClick={this.props.sampleFunc}>Btn</button>
            </>
        )
    }
}

export default Person;
