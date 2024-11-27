'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full min-w-5xl">
      <div className="relative flex min-w-5xl items-center">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username..."
          className="w-full px-4 py-3 pl-12 bg-[#364153] text-[#CDD5E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-4  text-[#CDD5E0]" size={20} />
        <button
          type="submit"
          className="absolute right-3 px-4 py-1.5 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          Search
        </button>
      </div>
    </form>
  );
}