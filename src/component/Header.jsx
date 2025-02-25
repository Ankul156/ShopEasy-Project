import { useState, useContext } from "react";
import React from "react";
import { MainContext } from "./Context";
import { Link, useLocation } from "react-router-dom";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { prod, setProd, user, logoutHandler } = useContext(MainContext);

  const totalQuantity = prod.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {  // Ensure it only closes on mobile
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" className="w-[150px]" alt="Logo" />
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 border rounded-lg md:border-0">
            <Link to="/" onClick={handleLinkClick}>
              <li className={`block cursor-pointer py-2 px-4 rounded-md text-white hover:bg-blue-500  hover:text-white ${location.pathname === "/" ? "bg-blue-500 text-white" : ""}`}>
                Home
              </li>
            </Link>
            <Link to="/about" onClick={handleLinkClick}>
              <li className={`block py-2 px-4 rounded-md text-white hover:bg-blue-500  hover:text-white ${location.pathname === "/about" ? "bg-blue-500 text-white" : ""}`}>
                About
              </li>
            </Link>
            <Link to="/listing" onClick={handleLinkClick}>
              <li className={`block py-2 px-4 rounded-md text-white hover:bg-blue-500  hover:text-white ${location.pathname === "/listing" ? "bg-blue-500 text-white" : ""}`}>
                Shop
              </li>
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <li className={`block py-2 px-4 rounded-md text-white hover:bg-blue-500  hover:text-white ${location.pathname === "/contact" ? "bg-blue-500 text-white" : ""}`}>
                Contact
              </li>
            </Link>
            {
              user == null ?
                <Link to="/login" onClick={handleLinkClick}>
                  <li className={`block py-2 px-4 rounded-md text-white hover:bg-blue-500  hover:text-white ${location.pathname === "/login" ? "bg-blue-500 text-white" : ""}`}>
                    Login
                  </li>
                </Link>
                :
                <div onClick={logoutHandler}>
                  <li className={`block py-2 px-4 rounded-md cursor-pointer text-white hover:bg-blue-500  hover:text-white ${location.pathname === "/login" ? "bg-blue-500 text-white" : ""}`}>
                    Logout
                  </li>
                </div>
            }
            <Link to="/cart" onClick={handleLinkClick}>
              <li className={`block py-3 px-5 rounded-md text-white hover:bg-blue-500 text-[20px] hover:text-white ${location.pathname === "/cart" ? "bg-blue-500 text-white" : ""}`}>
                <div className="relative">
                  <FaCartShopping />
                  {totalQuantity > 0 && (
                    <span className="absolute top-[-10px] right-[-13px] inline-block w-4 h-4  text-xs text-white bg-red-500 rounded-full text-center">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
