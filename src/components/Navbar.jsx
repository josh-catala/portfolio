import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './Theme.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to handle active page link styling
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-deep-teal-300 text-pearl-aqua-500 light:bg-pale-slate-700 light:text-deep-teal-600'
        : 'text-pale-slate-400 hover:text-pale-slate-800 light:text-deep-teal-400 light:hover:text-deep-teal-200'
    }`;

  return (
    <header className="sticky top-0 z-50 horizontal-glow-ltr pb-[3px]">
      <div className="bg-deep-teal-100 light:bg-pale-slate-900/90 backdrop-blur-md transition-colors duration-200">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo / Brand Name */}
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-pale-slate-900 light:text-deep-teal-200 hover:opacity-90 transition-opacity"
            >
              josh.<span className="text-pearl-aqua-400 light:text-deep-teal-600">Catala</span>
            </Link>

            {/* Desktop Navigation Links & Theme Toggle */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              {/* Desktop Theme Toggle */}
              <div className="ml-2 pl-2 border-l border-deep-teal-300 light:border-pale-slate-700">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Right Controls (Theme Toggle + Animated Hamburger) */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />

              {/* Animated Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-lg text-pale-slate-400 light:text-deep-teal-400 hover:bg-deep-teal-300 light:hover:bg-pale-slate-700 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                  {/* Top Line */}
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                      isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  {/* Middle Line */}
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                      isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                    }`}
                  />
                  {/* Bottom Line */}
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                      isOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Drawer with Smooth Slide Transition */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-64 opacity-100 py-3 border-t border-deep-teal-300 light:border-pale-slate-700' : 'max-h-0 opacity-0 py-0'
            }`}
          >
            <div className="space-y-1">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-deep-teal-300 text-pearl-aqua-500 light:bg-pale-slate-700 light:text-deep-teal-600'
                      : 'text-pale-slate-400 light:text-deep-teal-400 hover:bg-deep-teal-300/50 light:hover:bg-pale-slate-700/50'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-deep-teal-300 text-pearl-aqua-500 light:bg-pale-slate-700 light:text-deep-teal-600'
                      : 'text-pale-slate-400 light:text-deep-teal-400 hover:bg-deep-teal-300/50 light:hover:bg-pale-slate-700/50'
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-deep-teal-300 text-pearl-aqua-500 light:bg-pale-slate-700 light:text-deep-teal-600'
                      : 'text-pale-slate-400 light:text-deep-teal-400 hover:bg-deep-teal-300/50 light:hover:bg-pale-slate-700/50'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-deep-teal-300 text-pearl-aqua-500 light:bg-pale-slate-700 light:text-deep-teal-600'
                      : 'text-pale-slate-400 light:text-deep-teal-400 hover:bg-deep-teal-300/50 light:hover:bg-pale-slate-700/50'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}