import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]); 

  const handleUserAdded = (newUser) => {
    
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId)); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-center mb-10">User Management</h1>
      <UserForm onUserAdded={handleUserAdded} />
      {users.length > 0 && (
        <div className="mt-10">
          <UserTable users={users} onDeleteUser={handleDeleteUser} />
        </div>
      )}
    </div>
  );
}

export default App;
