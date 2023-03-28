import React, {useState} from 'react';

const ListsComponent = () => {
    const [arr, SetArr] = useState([
        {
            name: 'John',
            age: 28,
            id:1
        }, 
        {
            name: 'John',
            age: 25,
            id:2
        }, 
        {
            name: 'Eddy',
            age: 29,
            id:3
        }
    ]);

    //john0,john1,eddy2 
    //Eddy0, John1, john2
    return (
        <>
        <h1>List Component</h1>
        {arr.map((user)=> {
            return <p key={user.id}>{user.name}</p>
        })}
        </>
    )
}

export default ListsComponent;