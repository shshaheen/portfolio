
import { useState } from "react";

// Navbar Component
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Shaheen
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-gray-700 text-2xl hover:text-blue-600 transition-colors"
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col bg-white/95 backdrop-blur-md p-4 space-y-3 border-t border-gray-200">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
