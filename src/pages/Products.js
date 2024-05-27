import React, { useEffect, useState } from 'react';
import '../styles/Products.css';

function Products() {
    const token = sessionStorage.getItem('token');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const isAdmin = sessionStorage.getItem('isAdmin');
    const [newProduct, setNewProduct] = useState({ name: '', price: '', photo_link: '' });
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

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
        const method = editingProduct ? 'PUT' : 'POST';
        const url = editingProduct 
            ? `https://lwlc-proj-2024.onrender.com/products/${editingProduct.product_id}`
            : 'https://lwlc-proj-2024.onrender.com/products';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => {
                setShowForm(false);
                setNewProduct({ name: '', price: '', photo_link: '' });
                setEditingProduct(null);
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setNewProduct({ name: product.name, price: product.price, photo_link: product.photo_link });
        setShowForm(true);
    };

    const handleDeleteProduct = (productId) => {
        fetch(`https://lwlc-proj-2024.onrender.com/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            }
        })
            .then(response => {
                if (response.ok) {
                    setProducts(products.filter(product => product.product_id !== productId));
                } else {
                    console.error('Failed to delete the product');
                }
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
                    <button className='product-add' onClick={() => setShowForm(!showForm)}>Add</button>
                </div>
            ) : null}
            {showForm && (
                <form className='product-form' onSubmit={handleAddProduct}>
                    <input type='text' name='name' value={newProduct.name} onChange={handleInputChange} placeholder='Product Name' required/>
                    <input type='number' name='price' value={newProduct.price} onChange={handleInputChange} placeholder='Price' required/>
                    <input type='text' name='photo_link' value={newProduct.photo_link} onChange={handleInputChange} placeholder='Photo URL' required/>
                    <button type='submit'>{editingProduct ? 'Update Product' : 'Add Product'}</button>
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
                            {isAdmin === 'true' && (
                                <>
                                    <button className='product-edit' onClick={() => handleEditProduct(product)}>Edit</button>
                                    <button className='product-delete' onClick={() => handleDeleteProduct(product.product_id)}>Delete</button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
