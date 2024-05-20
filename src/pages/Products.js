import React, { useEffect, useState } from 'react';
import '../styles/Products.css';

function Products() {
    
    const token = sessionStorage.getItem('token');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); 
    const isAdmin = sessionStorage.getItem('isAdmin');

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

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
        <div className='list'>
            <h1>Products</h1>
            {isAdmin === 'true' ? (
                <div className='admin-buttons'>
                    <button className='product-delete'> Delete </button>
                    <button className='product-edit'> Edit </button>
                    <button className='product-add'> Add </button>
                </div>
            ) : null}
            <div className='products'>
                {products.map(product => (
                    <div key={product.product_id} className='product-id'> 
                    <img src={product.photo_link} alt={product.name} />
                    <div className='product-info'>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price} €</p>
                        <button className='product-button' onClick={() => addToCart(product)}> Add to Cart</button>
                    </div>
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default Products