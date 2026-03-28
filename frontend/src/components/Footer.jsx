import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const productLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ];

  const resourceLinks = [
    { name: "Docs", href: "#docs" },
    { name: "Blog", href: "#blog" },
    { name: "Support", href: "#support" },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-pink-600 via-purple-600 to-sky-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              CodeEasy.ai
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-sm">
              AI-powered code reviews for modern developers
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 transition-all duration-300 hover:text-pink-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 transition-all duration-300 hover:text-sky-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mb-10">

          <a
            href="https://github.com/Mozzocodes786"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg"
          >
            <FaGithub className="text-white text-xl" />
          </a>

          <a
            href="https://linkedin.com/in/atif-ansari-3851aa2a9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>

          <a
            href="mailto:atifansari7889@gmail.com"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg"
          >
            <FaEnvelope className="text-white text-xl" />
          </a>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 opacity-30 mb-8" />

        {/* Bottom */}
        <div className="text-center space-y-3">
          <p className="text-white/70 text-sm">
            © 2026 CodeEasy.ai. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Designed & Developed by{" "}
            <span className="font-semibold hover:text-pink-300 transition duration-300">
              Atif Ansari
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
