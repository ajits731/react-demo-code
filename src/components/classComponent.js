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
        this.handleMouseOver = this.handleMouseOver.bind(this);
        console.log('Constructor Lifecyle');
    }

    componentDidMount() {
        console.log('component Lifecyle');
    }

    //updating lifecyle 

    shouldComponentUpdate(prevProps, props) {
        if(prevProps.group.length === props.group.length) {
            return false
        }

        return true;
    }

    componentDidUpdate() {

    }

    //unmounting

    componentWillUnmount() {

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

    handleMouseOver() {
        console.log('OnMouseOver');
    }

    render() {
        const {counter} = this.state;
        const {name, age, gender} = this.props;
        console.log(this.state);
        return(
            <>
            <div>
            <a href='/'>Go back to home</a>    
            <h1 onMouseOver={this.handleMouseOver} onMouseLeave={() => console.log('OnMouseLeave')}>Hi! I'm a class based component</h1>
            <p>My current state of counter is: {counter}</p>
            <button className='btn' onClick={this.updateCounter}> Increase count for class</button>
            <button className='btn' onClick={() => {this.sampleFunc('Ajit')}}>Name Function</button>
            </div>
            </>
        )
    }
}

export default ClassComponent;


//Component state: Private to the component.

//App State: Global state variables which are accesible from all the components. 

