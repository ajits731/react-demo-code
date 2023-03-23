import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {  
            counter: 0
        };

        this.updateCounter = this.updateCounter.bind(this);
        this.sampleFunc = this.sampleFunc.bind(this);
        console.log('Constructor Lifecyle');
    }

    componentDidMount() {
        console.log('component Lifecyle');
    }

    updateCounter() {
        let oldState = this.state.counter;
        this.setState({
            counter: oldState+1
        });
    }

    sampleFunc(name) {
        alert(name);
    }



    render() {
        const {counter} = this.state;
        const {name, age, gender} = this.props;
        console.log(this.state);
        return(
            <>
            <h1>Hi! I'm a class based component</h1>
            <p>My current state of counter is: {counter}</p>
            <button className='btn' onClick={this.updateCounter}> Increase count for class</button>
            <button className='btn' onClick={() => {this.sampleFunc('Ajit')}}>Name Function</button>
            </>
        )
    }
}

export default ClassComponent;


//Component state: Private to the component.

//App State: Global state variables which are accesible from all the components. 

