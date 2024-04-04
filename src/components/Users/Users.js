
"use client"
import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers]  = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    })

    console.log(users);

    return (
        <div>
            
        </div>
    );
};

export default Users;