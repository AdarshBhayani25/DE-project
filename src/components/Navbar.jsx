import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";

function Navbar() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    // if used in more components, this should be in context
    // axios to logout endpoint
    await logout();
    navigate('/login');
  }

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
        <button className="hover:text-blue-300" onClick={signOut}>Sign Out</button>
        {/* <button onClick={signOut} className="px-4 py-2 bg-blue-500 text-white rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600">Sign Out</button> */}
      </ul>
    </nav>
  );
}

export default Navbar;
