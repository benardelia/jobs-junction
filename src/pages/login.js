import React, { useState } from 'react';
import pic1 from './pics/astronaut-bitcoin-ethereum-cryptocurrency-planet-earth-3840x2160-8247.jpg'
import {
  NavLink, Link
} from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add login logic here
  };
  return (
    <div className='flex w-full'>
      <div className='w-1/3 bg-red-300 h-auto'>
        <img src={pic1} className='w-full h-full' />
      </div>
      <div className="flex w-2/3 items-center justify-center min-h-screen bg-blue-50">
        <Link to="/"><div className='flex absolute top-8 text-gray-100 left-4 items-center'><IoArrowBack />Home</div></Link>
        <div className="w-72 max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center text-blue-600">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-1 mt-1 text-xs border border-gray-300 rounded-lg
   focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-1 mt-1 text-sm border border-gray-300 rounded-lg
   focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-1 text-white bg-blue-600 text-xs rounded-md hover:bg-blue-700
   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>
          <p className="text-xs text-center text-gray-600">
            Don’t have an account? <a href="/register" className="text-blue-600
   hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login