'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/list')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h1>All Users</h1>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.name} - {user.userId}</li>
        ))}
      </ul>
    </div>
  );
}
