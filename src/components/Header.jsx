import React from 'react';
import { Newspaper } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-orange-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Newspaper className="h-8 w-8" />
          <span className="text-2xl font-bold">HN Reader</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Official HN</a></li>
            <li><a href="https://github.com/HackerNews/API" target="_blank" rel="noopener noreferrer" className="hover:underline">HN API</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;