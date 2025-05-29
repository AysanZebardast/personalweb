import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full focus:outline-none"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" size={20} />
      ) : (
        <FaMoon className="text-gray-700" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
