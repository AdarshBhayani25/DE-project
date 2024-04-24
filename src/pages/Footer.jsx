// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id='ContactUs' className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-wrap">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
          <ul className="flex">
            <li className="mr-4">
              <div>
                <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl" />
              </div>
            </li>
            <li className="mr-4">
              <div>
                <FontAwesomeIcon icon={faTwitterSquare} className="text-2xl" />
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faInstagramSquare} className="text-2xl" />
              </div>
            </li>
            {/* Add more social media icons as needed */}
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Visit Us</h3>
          <p>123 Street Name,</p>
          <p>City, Country - Zip Code</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
