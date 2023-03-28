import React, {useState} from 'react';

const RenderComponent = () => {
    const [isAuth, setAuth] = useState(false);
    const [counter, setCounter] = useState(0);
    return(
        <>  
            <h1>Conditional Rendering</h1>
            <button className='btn' onClick={() => {setAuth(true)}}>Change State</button>
            <button className='btn' onClick={() => {setCounter(counter+1)}}>Change Counter</button>
            <p>{counter}</p>
            {isAuth || counter>2 ? <h2>User is Authenticated</h2> : <h3>User is unauthorized</h3>}
            <p>{isAuth}</p>
        </>
    )
}

export default RenderComponent;