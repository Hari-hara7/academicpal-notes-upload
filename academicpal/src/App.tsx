import React, { useRef } from "react";
import { FaGoogle, FaUpload, FaLock, FaEye, FaGithub, FaLinkedin, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "./assets/academicpal.jpg"; // Import your logo (replace with the actual path)
import useFirebaseAuth from "./hooks/useFirebaseAuth";
import Home from "./pages/Home";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  const { user, signInWithGoogle, signOutUser } = useFirebaseAuth();
 



  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo */}
      <header className="flex justify-between items-center p-6 bg-black shadow-lg">
        <img src={Logo} alt="Logo" className="h-12" />

        {/* Sign In / Sign Out Button */}
        <div className="space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              {/* Profile photo and name */}
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white">{user.displayName}</span>
              <button
                onClick={signOutUser}
                className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
              >
                Sign Out
              </button>
            </div>
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
      </header>

{/* Welcome Message Section */}
{user && (
  <section className="text-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-black">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
      Welcome, {user.displayName}! 
      {/* Animated Handshake Icon */}
      <motion.div
        className="inline-block ml-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        whileHover={{ scale: 1.2, rotate: 15, color: "#ff00ff" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaHandshake />
      </motion.div>
    </h1>
    <p className="text-md sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mt-4 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
      Let’s get started! Upload your resources to help others.
    </p>
  </section>
)}
   
      

      {/* Main Content */}
      <main className="mt-8 px-4">
        {/* Feature Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-300 mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-transparent p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out border-2 border-gray-700 card-border-flow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <FaLock className="text-white text-4xl mr-4" />
                <h3 className="text-xl font-semibold text-white">How to Use This Website</h3>
              </div>
              <p className="text-gray-200">
                This website allows users to upload and manage educational resources. You can easily share your valuable content, access public resources, and sign in securely using your Google account.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Create an account or sign in with Google to access exclusive features.</li>
                <li>Upload educational resources and manage them in your profile.</li>
                <li>Share resources with others for public access.</li>
                <li>Ensure your content is secure with the platform's authentication process.</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-transparent p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out border-2 border-gray-700 card-border-flow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <FaUpload className="text-white text-4xl mr-4" />
                <h3 className="text-xl font-semibold text-white">How It Helps Other Students</h3>
              </div>
              <p className="text-gray-200">
                When one student uploads valuable resources, it benefits the entire student community. Shared resources allow peers to access materials they may not have, providing equal opportunities for learning and success.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Students can share textbooks, notes, research papers, and more, helping others study efficiently.</li>
                <li>Resources are made available to all, ensuring that no student is left behind due to lack of materials.</li>
                <li>Collaborating through shared resources fosters a community of learning and mutual support among peers.</li>
                <li>It provides easy access to crucial educational content, which can be referenced anytime by students in need.</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-transparent p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out border-2 border-gray-700 card-border-flow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <FaUpload className="text-white text-4xl mr-4" />
                <h3 className="text-xl font-semibold text-white">Resource Upload</h3>
              </div>
              <p className="text-gray-200">
                Easily upload and manage your resources. Provide links to useful files or websites.
              </p>
            </motion.div>

            <motion.div
              className="bg-transparent p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out border-2 border-gray-700 card-border-flow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <FaLock className="text-white text-4xl mr-4" />
                <h3 className="text-xl font-semibold text-white">Secure Authentication</h3>
              </div>
              <p className="text-gray-200">
                Sign in securely using your Google account with email validation for authorized users.
              </p>
            </motion.div>

            <motion.div
              className="bg-transparent p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out border-2 border-gray-700 card-border-flow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <FaEye className="text-white text-4xl mr-4" />
                <h3 className="text-xl font-semibold text-white">Public Access</h3>
              </div>
              <p className="text-gray-200">
                Share resources publicly with others, ensuring easy access to important educational material.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Display Admin Panel if the user is authenticated with @nmamit.in email */}
        {user && user.email.endsWith("@nmamit.in") && <AdminPanel user={user} />}

        {/* Display Home page content */}
        <Home />
      </main>

      {/* Footer */}
      <footer className="bg-black text-center text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-sm sm:text-base">
            Designed and Developed by{" "}
            <a
              href="https://hariharanath.is-cod.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Hari Haranath
            </a>
          </p>

          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/harianth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition duration-300"
            >
              <FaGithub className="text-3xl sm:text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/harianth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition duration-300"
            >
              <FaLinkedin className="text-3xl sm:text-4xl" />
            </a>
          </div>

          <p className="text-sm sm:text-base text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
