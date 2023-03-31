import { useState, useEffect } from 'react';
import CardComponent from '../common/card';
import store from "../store";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('store:', store.getState());

        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((response) => setProducts(response));
    }, []);

    store.subscribe(() => console.log('State:', store.getState()))

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <button className='btn' onClick={() => {
                    store.dispatch({
                        type: 'SET_PRODUCTS',
                        payload: products
                    })
                }}>Save Data to Store</button>
                {products && products.map((product) => {
                    return <>
                        <CardComponent key={product.id} product={product} />
                    </>
                })}
            </div>
        </>
    )
}

