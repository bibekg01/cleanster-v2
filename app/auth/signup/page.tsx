"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  countryCode: string;
  password: string;
  companyTeam: string;
  userType: 'marketplace' | 'saas';
  propertyCount: number;
  referralCode: string;
  agreedToTerms: boolean;
}

interface SignUpPageProps {
  onSignUp?: (data: SignUpFormData) => void;
  onSignIn?: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUp, onSignIn }) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    countryCode: '+1',
    password: '',
    companyTeam: '',
    userType: 'marketplace',
    propertyCount: 1,
    referralCode: '',
    agreedToTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+81', country: 'JP', flag: '🇯🇵' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSignUp && formData.agreedToTerms) {
      onSignUp(formData);
    }
  };

  const updateFormData = (field: keyof SignUpFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 sm:px-12 lg:px-16 py-12 overflow-y-auto">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Let's get started</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="John"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                required
              />
            </div>

            {/* Mobile Field */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-900 mb-2">
                Mobile
              </label>
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="flex items-center gap-2 px-3 py-2.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">{formData.countryCode}</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showCountryDropdown && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowCountryDropdown(false)}
                      ></div>
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                        {countryCodes.map((item) => (
                          <button
                            key={item.code}
                            type="button"
                            onClick={() => {
                              updateFormData('countryCode', item.code);
                              setShowCountryDropdown(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
                          >
                            <span>{item.flag}</span>
                            <span>{item.country}</span>
                            <span className="text-gray-500">{item.code}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => updateFormData('mobile', e.target.value)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  required
                />
              </div>
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
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Company/Team Field */}
            <div>
              <label htmlFor="companyTeam" className="block text-sm font-medium text-gray-900 mb-2">
                Company/Team
              </label>
              <input
                type="text"
                id="companyTeam"
                value={formData.companyTeam}
                onChange={(e) => updateFormData('companyTeam', e.target.value)}
                placeholder="Enter Your Company or Team Name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
            </div>

            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                I want to
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="marketplace"
                    checked={formData.userType === 'marketplace'}
                    onChange={(e) => updateFormData('userType', 'marketplace')}
                    className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="text-sm text-gray-700">Find cleaners (Marketplace)</span>
                  <button aria-label='cleaners' type="button" className="ml-auto text-gray-400 hover:text-gray-600">
                    <InfoIcon />
                  </button>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="saas"
                    checked={formData.userType === 'saas'}
                    onChange={(e) => updateFormData('userType', 'saas')}
                    className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="text-sm text-gray-700">Use my own cleaners (SaaS)</span>
                  <button aria-label='owncleaner' type="button" className="ml-auto text-gray-400 hover:text-gray-600">
                    <InfoIcon />
                  </button>
                </label>
              </div>
            </div>

            {/* Property Count */}
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
              <BuildingIcon />
              <span className="text-sm text-gray-700 flex-1">How many properties do you manage?</span>
              <input
                aria-label="propertyCount"
                type="number"
                value={formData.propertyCount}
                onChange={(e) => updateFormData('propertyCount', parseInt(e.target.value))}
                min="1"
                className="w-16 px-2 py-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              />
            </div>

            {/* Referral Code */}
            <div>
              <label htmlFor="referralCode" className="block text-sm font-medium text-gray-900 mb-2">
                Referral Code (optional)
              </label>
              <input
                type="text"
                id="referralCode"
                value={formData.referralCode}
                onChange={(e) => updateFormData('referralCode', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreedToTerms}
                onChange={(e) => updateFormData('agreedToTerms', e.target.checked)}
                className="w-4 h-4 mt-0.5 text-pink-600 rounded focus:ring-pink-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Agree to{' '}
                <a href="/terms" className="text-pink-600 hover:text-pink-700 underline">
                  Terms of Service
                </a>
                ,{' '}
                <a href="/cancellation" className="text-pink-600 hover:text-pink-700 underline">
                  Cancellation Policy
                </a>
                , and{' '}
                <a href="/privacy" className="text-pink-600 hover:text-pink-700 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.agreedToTerms}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create an account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">Already have an account? </span>
            <button
              onClick={onSignIn}
              className="text-sm text-pink-600 hover:text-pink-700 font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Marketing Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-600 to-pink-700 text-white p-12 lg:p-16 flex-col justify-center relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl font-bold mb-6">Cleanster.com</h2>
          <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            The smart way to automate, pay and find vacation rental cleaners.
          </h3>
          <p className="text-lg text-pink-100">
            Join 15,000+ hosts, and discover the magic. Automate your cleaner process now!
          </p>
        </div>

        {/* Illustration */}
        <div className="absolute bottom-0 right-0 w-3/4 opacity-90">
          <svg viewBox="0 0 400 300" className="w-full h-auto">
            {/* Couch */}
            <rect x="50" y="150" width="150" height="80" fill="#E91E8C" rx="10"/>
            <rect x="40" y="140" width="20" height="90" fill="#D91A7C" rx="5"/>
            <rect x="190" y="140" width="20" height="90" fill="#D91A7C" rx="5"/>
            <rect x="70" y="120" width="110" height="40" fill="#F92D99" rx="10"/>
            
            {/* Person 1 - Cleaning couch */}
            <ellipse cx="120" cy="110" rx="15" ry="20" fill="#FFE4F0"/>
            <circle cx="120" cy="90" r="12" fill="#8B4513"/>
            <rect x="115" y="85" width="10" height="8" fill="#FFE4F0" rx="4"/>
            <line x1="135" y1="100" x2="155" y2="120" stroke="#FFE4F0" strokeWidth="4" strokeLinecap="round"/>
            <path d="M 155 120 L 175 125 L 175 135 L 155 130 Z" fill="#E91E8C" opacity="0.7"/>
            
            {/* Desk */}
            <rect x="250" y="180" width="80" height="60" fill="white" opacity="0.9" rx="8"/>
            <rect x="255" y="170" width="70" height="15" fill="white" opacity="0.8" rx="4"/>
            
            {/* Person 2 - At desk */}
            <ellipse cx="290" cy="160" rx="12" ry="18" fill="#FFE4F0"/>
            <circle cx="290" cy="145" r="10" fill="#8B4513"/>
            <rect x="286" y="142" width="8" height="6" fill="#FFE4F0" rx="3"/>
            <rect x="270" y="175" width="20" height="4" fill="#FFE4F0" rx="2"/>
            <rect x="280" y="185" width="15" height="4" fill="#FFE4F0" rx="2"/>
            
            {/* Cleaning supplies */}
            <circle cx="80" cy="210" r="6" fill="white" opacity="0.7"/>
            <rect x="90" y="205" width="8" height="20" fill="white" opacity="0.7" rx="2"/>
            <circle cx="320" cy="210" r="5" fill="white" opacity="0.7"/>
          </svg>
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

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

export default SignUpPage;