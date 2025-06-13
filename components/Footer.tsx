import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="hover:text-gray-300">
              About Emergency Toolkit
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Become a Contributor
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Submit a Suggestion
            </Link>
            {/* <Link href="#" className="hover:text-gray-300">
                CYMRAEG
              </Link> */}
            <Link href="#" className="hover:text-gray-300">
              LOGIN
            </Link>
          </div>
          <div className="flex space-x-4 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-blue-600"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-sky-500"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-pink-500"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-blue-700"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="hover:text-gray-300">
                Privacy
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Terms
              </Link>
              {/* <Link href="#" className="hover:text-gray-300">
                  Submit a Suggestion
                </Link> */}
              {/* <Link href="#" className="hover:text-gray-300">
                  Modern slavery statement
                </Link> */}
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>Accessibility</p>
            <p className="mt-2">©2025 Emergency Toolkit</p>
            <p className="mt-2">
              Emergency Toolkit is a public resource project created to help
              individuals navigate urgent situations with calm and clarity. All
              content is for educational and informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
