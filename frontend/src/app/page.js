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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">User Credentials</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => setShowAdd(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
        >
          Add User
        </button>

        <button
          onClick={() => setShowDelete(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow transition"
        >
          Delete User
        </button>

        <button
          onClick={() => router.push('/list')}
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg shadow transition"
        >
          List Users
        </button>
      </div>

      {/* Modals */}
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <AddUser onClose={() => setShowAdd(false)} />
        </div>
      )}
      {showDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <DeleteUser onClose={() => setShowDelete(false)} />
        </div>
      )}
    </div>
  );
}
