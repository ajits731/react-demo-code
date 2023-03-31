import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const {productid} = useParams();
    const [ProductDetail, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productid}`).then((res) => res.json()).then((response)=> setProduct(response));
    },[])

    return(
        <>
            <h1>Product Details for ID: {productid}</h1>
            <div>
                <img src={ProductDetail.image} />
                <h1>{ProductDetail.title}</h1>
                <p>{ProductDetail.description}</p>
            </div>
        </>
    )
}