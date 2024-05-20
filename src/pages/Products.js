import React, { useEffect, useState } from 'react';
import '../styles/Products.css';

function Products() {
    
    const token = localStorage.getItem('token');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchdata = () =>
        fetch('https://lwlc-proj-2024.onrender.com/products',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            }
        })
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        fetchdata();
    }, [token]);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.product_id} className='product'> 
                    <img src={product.photo_link} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: {product.price} €</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products