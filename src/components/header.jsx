import { Link } from "react-router-dom";
import headerLogo from "../images/logo.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black border-b border-gray-700 sticky top-0 z-50">
      <div className="px-4 max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex">
              <img className="w-auto h-8 lg:h-10" src={headerLogo} alt="Logo" />
            </Link>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800 h-1/2" // Adjust height
            style={{ height: '50%' }} // Inline style for height
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <div className={`hidden md:flex md:items-center md:space-x-10 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link to="/" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">New</Link>
            <Link to="/" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">Men</Link>
            <Link to="/" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">Kids</Link>
            <Link to="/" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">Jordans</Link>
            <Link to="/" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">Sale</Link>
          </div>
        </nav>
        <nav className={`min-h-screen px-4 py-10 text-center bg-black md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col items-center mt-10 space-y-2">
            <Link to="/" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">New</Link>
            <Link to="/" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Men</Link>
            <Link to="/" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Kids</Link>
            <Link to="/" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Jordans</Link>
            <Link to="/" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Sale</Link>
          </nav>
        </nav>
      </div>
    </header>
  );
}