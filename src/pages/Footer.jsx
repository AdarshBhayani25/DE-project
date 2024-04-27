import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="ContactUs" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <section>
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <ul className="flex">
              <li className="mr-4">
                <a href="https://www.facebook.com/Official.Vgec/" className="text-gray-400 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://twitter.com/OfficialVgec" className="text-gray-400 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/vgec.official/" className="text-gray-400 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/school/vishwakarma-government-engineering-college-chandkheda-gandhinagar-017/" className="text-gray-400 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                </a>
              </li>
              {/* Add more social media icons as needed */}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: <a href="mailto:est@vgecg.ac.in" className="text-gray-400 hover:text-white transition duration-300">est@vgecg.ac.in</a></p>
            <p className="text-gray-400">Phone: <a href="tel:(+079) 23293866" className="text-gray-400 hover:text-white transition duration-300">(+079) 23293866</a></p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="text-gray-400">
                    Nr. Visat three roads, Sabarmati-Koba highway, Chandkheda
            </p>
            <p className="text-gray-400">Ahmedabad, India-382424</p>
            <div className="mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7355115591367!2d72.5918534793457!3d23.106776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c959d4de6f%3A0x748d0828c02cf9fa!2sVishwakarma%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714119139743!5m2!1sen!2sin"
                width="100%"
                height="200"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </section>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
