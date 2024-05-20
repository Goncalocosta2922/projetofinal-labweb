import React, { useEffect, useState } from 'react';
import '../styles/Users.css';

function Users() {

    const token = sessionStorage.getItem('token');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchdata = () =>
        fetch('https://lwlc-proj-2024.onrender.com/users',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            }
        })
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        fetchdata();
    }, [token]);

    return (
        <div className='container'> 
            <h1>Users</h1>
            <div className='users'>
                {users.map(user => (
                    <div key={user.user_id} className='user-id'> 
                    <h3>Username: {user.username}</h3>
                    <p>Name: {user.full_name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phone_number}</p>
                    <p>Address: {user.address}</p>
                    <p>Password: {user.password}</p>
                    <p>Admin: {user.is_admin}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users