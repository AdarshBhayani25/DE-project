import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://www.vgecg.ac.in/clogo.png" alt="Logo" className="h-8 mr-2" /> {/* Adjust the path and size of the logo */}
        <h1 className="text-xl font-semibold">VGEC</h1>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-4">
        <li><RouterLink to="/" className="hover:text-blue-300">Home</RouterLink></li>
        <li><RouterLink to="/department" className="hover:text-blue-300">Department</RouterLink></li>
        <li><RouterLink to="/faculty" className="hover:text-blue-300">Faculty</RouterLink></li>
        <li><RouterLink to="/campus" className="hover:text-blue-300">Campus</RouterLink></li>
        {/* <li><ScrollLink to="AboutUs" spy={true} smooth={true} duration={500} className="hover:text-blue-300">About Us</ScrollLink></li> */}
        <li><ScrollLink to="ContactUs" spy={true} smooth={true} duration={500} className="hover:text-blue-300">Contact Us</ScrollLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
