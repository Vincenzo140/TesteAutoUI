import React, { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('@dark-mode-react-tailwind:theme-1.0.0', newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('@dark-mode-react-tailwind:theme-1.0.0');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  return (
    <button
      className="p-2 text-sm bg-white-200 dark:bg-gray-900 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}
