import React, {useState} from 'react';

function FunctionalComponent() {
    const [counter, setCounter] = useState(0);
   
    return (    
        <>
        <h1>Hi! I'm a functional Component</h1>
        <p>My current state of counter is: {counter}</p>
        <button className='btn' onClick={() => {setCounter(counter+1)}}>Increase functional counter</button>
        </>
    )
}

export default FunctionalComponent;
