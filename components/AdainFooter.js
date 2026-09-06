import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AdainFooter = () => {
  return (
    <footer className="w-full bg-nexablack text-nexawhite py-10 mt-5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Grid layout: 3 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

          {/* Column 1: Social Links & Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="flex gap-6 mb-4">
              <li>
                <a href="#" className="text-nexagreen hover:text-white transition-colors duration-300">
                  <FaFacebook size={28} />
                </a>
              </li>
              <li>
                <a href="#" className="text-nexagreen hover:text-white transition-colors duration-300">
                  <FaInstagram size={28} />
                </a>
              </li>
              <li>
                <a href="#" className="text-nexagreen hover:text-white transition-colors duration-300">
                  <FaTwitter size={28} />
                </a>
              </li>
              <li>
                <a href="#" className="text-nexagreen hover:text-white transition-colors duration-300">
                  <FaLinkedin size={28} />
                </a>
              </li>
            </ul>
            <p className="text-sm mb-1">Along Aso B Mararaba Road, Nasarawa State</p>
            <p className="text-sm">info@nexadataease.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-nexagreen transition-colors duration-200">Home</a></li>
              <li><a href="/products" className="hover:text-nexagreen transition-colors duration-200">Projects</a></li>
              <li><a href="/about" className="hover:text-nexagreen transition-colors duration-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-nexagreen transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 max-w-xs">
              Subscribe to our newsletter to get our news & deals delivered to you.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-nexawhite text-nexablack placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nexagreen"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-nexagreen hover:bg-green-700 text-white rounded font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Optional footer bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} NexaDataEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AdainFooter;