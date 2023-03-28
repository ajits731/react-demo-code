import React, {useEffect, useState} from 'react';

function FunctionalComponent() {

    const [counter, setCounter] = useState(0);

    //mounting
    useEffect(() => { // once
        console.log('componentDidMount 1')
    },[]);

    //Updating
    useEffect(() => {
        console.log('ComponentDidUpdate');
    },[counter]); //loggedin -> 12hr -> //expired

    //Unmounting
    useEffect(() => {
        console.log('componentDidMount 2');
        return () => {
            console.log('componentWillUnmount')
        }
    },[]);
    return (    
        <>
        <h1>Functional Component</h1>
        <button className='btn' onClick={() => setCounter(counter+1)}>{counter}</button>
        </>
    )
}

export default FunctionalComponent;
