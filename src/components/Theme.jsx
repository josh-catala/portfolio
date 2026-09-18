import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check if light mode class is present on html tag
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-lg bg-deep-teal-300/40 hover:bg-deep-teal-300 light:bg-pale-slate-700 light:hover:bg-pale-slate-600 text-pearl-aqua-400 light:text-deep-teal-600 transition-colors focus:outline-none"
      aria-label="Toggle dark and light theme"
    >
      {isLight ? (
        /* Moon Icon for Light Mode */
        <FaMoon className="w-5 h-5 text-deep-teal-600 transition-transform hover:rotate-12" />
      ) : (
        /* Sun Icon for Dark Mode */
        <FaSun className="w-5 h-5 text-pearl-aqua-400 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}