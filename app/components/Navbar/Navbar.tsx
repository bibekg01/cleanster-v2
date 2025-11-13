"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


interface HeaderProps {
  onSignUp?: () => void;
  onLogIn?: () => void;
  onLanguageChange?: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onSignUp,
  onLogIn,
  onLanguageChange
}) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    'English',
    'Français',
    'Español',
    'Deutsch',
    'Italiano',
    'Português'
  ];
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/auth/signup');
  };
  const handleSignIn = () => {
    router.push('/auth/signin');
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-pink-600">Cleanster</span>
          </Link>

          {/* Right Side Navigation */}
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors"
                aria-label="Select language"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
                  />
                </svg>
                <span className="font-medium">{selectedLanguage}</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsLanguageDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => handleLanguageSelect(language)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          selectedLanguage === language ? 'text-pink-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Log In Link */}
            <button
              onClick={handleSignIn}
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Log in
            </button>

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;