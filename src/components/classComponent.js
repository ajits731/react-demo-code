import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.updateCounter = this.updateCounter.bind(this);
    }
    updateCounter() {
        let oldState = this.state.counter;
        this.setState({
            counter: oldState+1
        });
    }

    render() {
        const {counter} = this.state;
        console.log(this.state);
        return(
            <>
            <h1>Hi! I'm a class based component</h1>
            <p>My current state of counter is: {counter}</p>
            <button className='btn' onClick={this.updateCounter}> Increase count for class</button>
            </>
        )
    }
}

export default ClassComponent;


//Component state: Private to the component.

//App State: Global state variables which are accesible from all the components. 

