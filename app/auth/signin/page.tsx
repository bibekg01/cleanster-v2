"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SignInPageProps {
  onSignIn?: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onCreateAccount?: () => void;
}

const SignInPage: React.FC<SignInPageProps> = ({
  onSignIn,
  onForgotPassword,
  onCreateAccount
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const features: Feature[] = [
    {
      id: '1',
      icon: <MoneyBagIcon />,
      title: 'Short-term Rental',
      description: 'Enables managers and owners to improve the quality, efficiency and seamless rental turnovers.'
    },
    {
      id: '2',
      icon: <HouseIcon />,
      title: 'Homeowner',
      description: 'Book a cleaner on a weekly, bi-weekly and monthly and get vetted cleaners on demand.'
    },
    {
      id: '3',
      icon: <BuildingIcon />,
      title: 'Real Estate',
      description: 'Attract and retain tenants with turnkey cleaning and maintenance on-demand.'
    },
    {
      id: '4',
      icon: <LampIcon />,
      title: 'Hotels',
      description: 'Delight your guests with a clean space and save money on complimentary packages.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSignIn) {
      onSignIn(email, password);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Sign In Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 sm:px-12 lg:px-16">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sign In</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@mail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-pink-600 hover:text-pink-700 font-medium text-sm"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
            >
              Sign In
            </button>
          </form>

          {/* Create Account Link */}
          <div className="mt-8 text-center">
            <span className="text-gray-600">New to Cleanster.com app? </span>
            <button
              onClick={onCreateAccount}
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-600 to-pink-700 text-white p-12 lg:p-16 items-center">
        <div className="w-full max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-12">
            The #1 cleaning platform for property owners and short-term rentals
          </h2>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-pink-100 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Icon Components
const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const MoneyBagIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C10.89 2 10 2.89 10 4V5H8C6.89 5 6 5.89 6 7V9C6 10.11 6.89 11 8 11H10V12C8.34 12 7 13.34 7 15V19C7 20.66 8.34 22 10 22H14C15.66 22 17 20.66 17 19V15C17 13.34 15.66 12 14 12V11H16C17.11 11 18 10.11 18 9V7C18 5.89 17.11 5 16 5H14V4C14 2.89 13.11 2 12 2M12 4C12.55 4 13 4.45 13 5V7H11V5C11 4.45 11.45 4 12 4M8 7H16V9H8V7M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"/>
  </svg>
);

const HouseIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

const LampIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 3v1c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1zm5.14 2.86l-.71.71c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l.71-.71c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41zM12 7c-2.76 0-5 2.24-5 5 0 1.64.8 3.09 2.03 4H15c1.23-.91 2.03-2.36 2.03-4 0-2.76-2.24-5-5.03-5zm-2 11h4v1h-4v-1zm0 2h4v1h-4v-1z"/>
  </svg>
);

export default SignInPage;