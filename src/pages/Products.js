import React, { useEffect, useState } from 'react';
import '../styles/Products.css';

function Products() {
    const token = sessionStorage.getItem('token');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const isAdmin = sessionStorage.getItem('isAdmin');
    const [newProduct, setNewProduct] = useState({ name: '', price: '', photo_link: '' });
    const [showForm, setShowForm] = useState(false);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    useEffect(() => {
        const fetchData = () =>
            fetch('https://lwlc-proj-2024.onrender.com/products', {
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
        fetchData();
    }, [token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        fetch('https://lwlc-proj-2024.onrender.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => {
                setProducts([...products, data]);
                setShowForm(false); // Fecha o forms depois de adicionar um produto
                setNewProduct({ name: '', price: '', photo_link: '' }); // Reseta o forms
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='list'>
            <h1>Products</h1>
            {isAdmin === 'true' ? (
                <div className='admin-buttons'>
                    <button className='product-delete'>Delete</button>
                    <button className='product-edit'>Edit</button>
                    <button className='product-add' onClick={() => setShowForm(!showForm)}>Add</button>
                </div>
            ) : null}
            {showForm && (
                <form className='product-form' onSubmit={handleAddProduct}>
                    <input type='text' name='name' value={newProduct.name} onChange={handleInputChange} placeholder='Product Name' required/>
                    <input type='number' name='price' value={newProduct.price} onChange={handleInputChange} placeholder='Price' required/>
                    <input type='text' name='photo_link' value={newProduct.photo_link} onChange={handleInputChange} placeholder='Photo URL' required/>
                    <button type='submit'>Add Product</button>
                </form>
            )}
            <div className='products'>
                {products.map(product => (
                    <div key={product.product_id} className='product-id'>
                        <img src={product.photo_link} alt={product.name} />
                        <div className='product-info'>
                            <h3>{product.name}</h3>
                            <p>Price: {product.price} €</p>
                            <button className='product-button' onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
