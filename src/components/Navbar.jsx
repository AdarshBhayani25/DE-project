import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link to="/department" className="hover:text-blue-300">Department</Link></li>
        <li><Link to="/campus" className="hover:text-blue-300">Campus</Link></li>
        <li><Link to="/faculty" className="hover:text-blue-300">Faculty</Link></li>
        <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
        <li><Link to="/profile" className="hover:text-blue-300">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
