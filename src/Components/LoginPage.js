import React, { useState } from 'react';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex h-screen flex-col  items-center justify-center bg-black">
        <h1 className='text-white mb-10 font-bold text-[50px]  uppercase'>welcome to daily wages</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-[500px] h-[400px] border-2 border-yellow-500 rounded-md bg-black p-10">
        <div className="mb-4">
          <label htmlFor="username" className="block text-white font-bold uppercase mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white font-bold uppercase mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  border-yellow-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className=" hover:bg-yellow-700 border uppercase border-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;