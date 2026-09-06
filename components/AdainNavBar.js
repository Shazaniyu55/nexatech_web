import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaCaretDown } from 'react-icons/fa';

function AdainNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

  // Ref for the dropdown container (to detect outside clicks)
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="transition-opacity duration-500 w-full top-0 h-25 shadow-lg fixed lg:mb-8 bg-nexawhite backdrop-blur-3xl hover:bg-nexagreen opacity-100 z-50 hover:bg-avista2">
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 3 }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
          <div className={`mt-top-adjusted ${navbar ? 'adjust-down' : ''}`}>
            <div className="flex text-adainblack hover:text-adainwhite items-center justify-between py-5">
                <Image src="/images/logo.png" width={100} height={100} alt="Avista Beach Resort Logo" />
              <div className="md:hidden text-nexablack hover:text-nexawhite">
                <button className="text-nexablack hover:text-nexawhite pt-2 rounded-md" onClick={handleClick}>
                  {navbar ? (
                    <svg className="text-nexablack hover:text-nexawhite icon icon-tabler icon-tabler-letter-x" fill="none" height="24" stroke="currentColor" 
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                      <line x1="7" x2="17" y1="4" y2="20"/>
                      <line x1="17" x2="7" y1="4" y2="20"/>
                    </svg>
                  ) : (
                    <div className='text-nexablack hover:text-nexawhite'>
                      <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="2" fill="#1B1919"/>
                        <rect y="3" width="21" height="2" fill="#1B1919"/>
                        <rect y="6" width="21" height="2" fill="#1B1919"/>
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`text-nexablack hover:text-nexawhite flex-2 justify-self-center pl-2 tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <div className="space-x-4 text-lg">
                <ul className="mb-4 mt-2 items-center pr-20 font-medium text-sm justify-center space-y-4 md:flex md:space-x-4 md:space-y-0">
                  <li className={`text-nexablack hover:text-nexawhite pr-16 ${activeNavItem === 'home' ? 'active' : ''}`}>
                    <Link href="/" onClick={() => handleClick('home')}>
                      Home
                    </Link>
                  </li>

                  {/* Dropdown for Products & Services */}
                

                  <li className={`text-nexablack hover:text-nexawhite ${activeNavItem === 'about' ? 'active' : ''}`}>
                    <Link href="/about" onClick={() => handleClick('about')}>
                      About Us
                    </Link>
                  </li>
                 
             
                  <li className={`text-nexablack hover:text-nexawhite pr-20 ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/contact" onClick={() => handleClick('experiences')}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </nav>
  );
}

export default AdainNavBar;