import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Auto Email Classifier
          </h1>

          <div className="flex items-center gap-4">
            <a
              href="https://www.github.com/Vincenzo140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              <Github size={18} />
              <span className="hidden sm:inline">Vincenzo140</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vincenzo-amendola-9aab38264/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">Vincenzo Amendola</span>
            </a>

            <ThemeToggle />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
