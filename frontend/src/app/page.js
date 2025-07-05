'use client';
import { useState } from 'react';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>User Cred</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button onClick={() => setShowAdd(true)}>Add User</button>
        <button onClick={() => setShowDelete(true)}>Delete User</button>
        <button onClick={() => router.push('/list')}>List Users</button>
      </div>

      {showAdd && <AddUser onClose={() => setShowAdd(false)} />}
      {showDelete && <DeleteUser onClose={() => setShowDelete(false)} />}
    </div>
  );
}
