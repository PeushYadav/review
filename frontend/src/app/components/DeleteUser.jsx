'use client';
import { useState } from 'react';
import axios from 'axios';

export default function DeleteUser({ onClose }) {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  const handleDelete = async () => {
    await axios.delete('http://localhost:5000/api/users/delete', {
      data: { name, userId }
    });
    onClose();
  };

  return (
    <div style={modalStyle}>
      <h2>Delete User</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="User ID" onChange={e => setUserId(e.target.value)} />
      <br />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: '30%',
  left: '35%',
  background: '#fff',
  padding: '20px',
  border: '1px solid black',
};
