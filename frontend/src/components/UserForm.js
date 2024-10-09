import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ onUserAdded }) {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', user);
      
      
      onUserAdded(response.data);
      
      // Clear the form after successful submission
      setUser({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: ''
      });
      
    } catch (error) {
      console.error('Error adding user', error);
    }
  };
  

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={user.firstName} 
            onChange={handleChange} 
            placeholder="First Name" 
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value={user.lastName} 
            onChange={handleChange} 
            placeholder="Last Name" 
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="text" 
            name="phoneNumber" 
            value={user.phoneNumber} 
            onChange={handleChange} 
            placeholder="Phone Number" 
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            value={user.email} 
            onChange={handleChange} 
            placeholder="Email" 
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea 
            name="address" 
            value={user.address} 
            onChange={handleChange} 
            placeholder="Address" 
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserForm;
