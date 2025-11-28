import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [loginUser,{isLoading}] = useLoginUserMutation()
  console.log(loginUser);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = { email,password}
    console.log('Attempting to log in with:', { email, password });
    
    try {
      const response = await loginUser(data).unwrap()
      console.log(response);
      const {token,user} = response
      console.log(token,user);
      dispatch(setUser({user}))
      alert('login successful')
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Please login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition duration-200 text-lg shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? {' '}
          <Link to="/register" className="text-red-500 hover:underline font-semibold">
            Register here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;