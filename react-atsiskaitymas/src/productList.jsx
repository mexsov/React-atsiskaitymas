import { useEffect, useState } from "react"
import { Product } from "./products";
import axios from 'axios';
 
 
export const ProductList = () => {
 
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        axios.get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books.')
        .then (response => {
            console.log('response', response);
            console.log('data', response.data);
            setProducts(response.data.products)
        })
        .catch(err => console.log(err))
    }, [])
 
 
    return (<>
 
        <h1>Product list page</h1>
        {products.map(product => <Product key={product.id} product={product} />)}
    </>)
}