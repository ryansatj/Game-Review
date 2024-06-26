import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 mt-4">
        <div>
          <div className="bg-customBlue p-2 rounded-lg text-2xl font-bold">Game Review</div>
        </div>
        <div className="flex space-x">
          <a href="google.com" className="hover:bg-gradient-to-r from-gray-900 to-gray-800 hover:scale-105 px-3 py-2 rounded">Home</a>
          <a href="/about" className="hover:bg-gradient-to-r from-gray-900 to-gray-800 hover:scale-105 px-3 py-2 rounded">About Us</a>
          <a href="/login" className="hover:bg-gradient-to-r from-gray-900 to-gray-800 hover:scale-105 px-3 py-2 rounded">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
