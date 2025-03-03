import React from "react";
import { FaGoogle, FaUpload, FaLock, FaEye, FaGithub, FaLinkedin, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "./assets/academicpal.jpg"; 
import useFirebaseAuth from "./hooks/useFirebaseAuth";
import Home from "./pages/Home";
import AdminPanel from "./components/AdminPanel";
const App = () => {
  const { user, signInWithGoogle, signOutUser } = useFirebaseAuth();
  const features = [
    {
      icon: <FaLock className="text-white-400 text-5xl" />, 
      title: "How to Use This Website",
      description: "Upload and manage educational resources effortlessly. Share valuable content and sign in securely.",
      list: [
        "Create an account or sign in with Google.",
        "Upload and manage educational resources.",
        "Share resources for public access.",
        "Ensure security with authentication."
      ]
    },
    {
      icon: <FaUpload className="text-white-400 text-5xl" />, 
      title: "How It Helps Other Students",
      description: "Shared resources ensure equal learning opportunities and enhance collaboration among students.",
      list: [
        "Share textbooks, notes, and research papers.",
        "Ensure no student is left behind.",
        "Foster a learning community.",
        "Provide easy access to study materials."
      ]
    },
    {
      icon: <FaUpload className="text-white-400 text-5xl" />, 
      title: "Resource Upload",
      description: "Easily upload and manage study resources with simple tools."
    },
    {
      icon: <FaLock className="text-white-400 text-5xl" />, 
      title: "Secure Authentication",
      description: "Sign in securely using Google authentication with email validation."
    },
    {
      icon: <FaEye className="text-white-400 text-5xl" />, 
      title: "Public Access",
      description: "Share resources publicly to make learning materials accessible to everyone."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-6 bg-black shadow-lg">
        <img src={Logo} alt="Logo" className="h-12" />

        <div className="space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
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

      {user && (
        <section className="text-center py-12 bg-black">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Welcome, {user.displayName}! 
            <motion.div
              className="inline-block ml-2 text-4xl"
              whileHover={{ scale: 1.2, rotate: 15, color: "#ff00ff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHandshake />
            </motion.div>
          </h1>
          <p className="text-lg text-gray-300 mt-4 px-6">
            Let’s get started! Upload your resources to help others.
          </p>
        </section>
      )}
      
      {user && user.email.endsWith("@nmamit.in") && <AdminPanel user={user} />}

      {!user && (
        <main className="mt-8 px-4">
         <section>
  <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center tracking-wide">Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        className="bg-gradient-to-br from-gray-800 to-dark-900 p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center mb-6">
          {feature.icon}
          <h3 className="text-2xl font-semibold text-white ml-4">{feature.title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
        {feature.list && (
          <ul className="list-disc pl-6 mt-4 text-gray-400 space-y-2">
            {feature.list.map((item, idx) => (
              <li key={idx} className="hover:text-gray-200 transition-colors">{item}</li>
            ))}
          </ul>
        )}
      </motion.div>
    ))}
  </div>
</section>

        </main>
      )}
      
      <Home />
      
      <footer className="bg-black text-center text-gray-400 py-8">
        <p>
          Designed by <a href="https://hariharanath.is-cod.in/" className="text-blue-500 hover:text-blue-700 font-semibold">Hari Haranath</a>
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Hari-hara7" className="text-gray-400 hover:text-gray-300">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/hari-hara-nath-a13583282/" className="text-gray-400 hover:text-gray-300">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
