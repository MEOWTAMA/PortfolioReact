import React from 'react';
import { FaLinkedin, FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 text-center">
      <p className="text-sm">© 2025 Chetan Khole | Built with ❤️ and React.js</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/chetan-khole-607263187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 text-xl transition duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:chetankhole2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 text-xl transition duration-200"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://x.com/microchetan?t=GOkqRaq-PAIOHmxCab6wDQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 text-xl transition duration-200"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/MEOWTAMA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 text-xl transition duration-200"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
