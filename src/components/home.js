import { useState, useEffect } from 'react';
import CardComponent from '../common/card';
import store from "../store";
import {SaveProductsData, SaveUserDetails, SaveProductsDataFromApi}  from '../actions/action';

export default function Home() {
    const [products, setProducts] = useState([]);

    store.subscribe(() => {
        let state = store.getState();
        console.log('App State:', state);
        setProducts(state.product.products);
    })

    return (
        <>
            <div className='btn-section'>
            <button className='btn btn-primary' onClick={() => {
                    store.dispatch(SaveProductsData(products))
                }}>Save Data to Store</button>

                <button className='btn btn-primary' onClick={() => {
                    store.dispatch(SaveProductsDataFromApi());
                }}>Save Data to Store From API</button>

                <button className='btn btn-danger' onClick={() => {
                    store.dispatch(SaveUserDetails({
                        username: 'John',
                        useremail: 'JOhn@test.com',
                        userphone: '1111111'
                    }))
                }}>Save User Details</button>

                <button className='btn btn-success' onClick={() => {
                    store.dispatch({
                        type: 'SET_USER_CONF',
                        payload: {
                            theme: 'blue',
                            role: 'manager',
                            access_level: 'Pro'
                        }
                    })
                }}>Save User Conf</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {products && products.map((product) => {
                    return <>
                        <CardComponent key={product.id} product={product} />
                    </>
                })}
            </div>
        </>
    )
};






