import React, { useState } from "react";
import { FaGoogle, FaTimes, FaBars } from "react-icons/fa";
import useFirebaseAuth from "../hooks/useFirebaseAuth"; // Assuming you have this hook set up
import Logo from "../assets/academicpal.jpg"; // Replace with your actual logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signInWithGoogle, signOutUser } = useFirebaseAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      {/* Navbar Top */}
      <div className="flex justify-between items-center p-6 shadow-lg">
        <img src={Logo} alt="Logo" className="h-12" />

        {/* Desktop Sign In / Sign Out Button */}
        <div className="hidden lg:flex space-x-4">
          {user ? (
            <button
              onClick={signOutUser}
              className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 hover:text-black transition-all"
            >
              <FaGoogle className="inline-block mr-2" />
              Sign In with Google
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <FaBars className="text-white text-3xl" />
        </button>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center mb-8">
          <img src={Logo} alt="Logo" className="h-12" />
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes className="text-white text-3xl" />
          </button>
        </div>

        {/* Menu Links */}
        <nav>
          <ul className="space-y-6">
            <li>
              <a href="/resources" className="text-xl hover:text-gray-400">
                Resources
              </a>
            </li>
            <li>
              <a href="/upload" className="text-xl hover:text-gray-400">
                Upload
              </a>
            </li>
          </ul>
        </nav>

        {/* Sign In / Sign Out Button inside Menu */}
        <div className="mt-8">
          {user ? (
            <button
              onClick={signOutUser}
              className="w-full px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="w-full px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 hover:text-black transition-all"
            >
              <FaGoogle className="inline-block mr-2" />
              Sign In with Google
            </button>
          )}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center space-x-6 mt-6">
        <a href="/resources" className="text-xl text-white hover:text-gray-400">
          Resources
        </a>
        <a href="/upload" className="text-xl text-white hover:text-gray-400">
          Upload
        </a>
      </div>
    </header>
  );
};

export default Navbar;
