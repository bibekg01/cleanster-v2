"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const aboutLinks: FooterLink[] = [
    { label: 'Media Assets', href: '/media-assets' },
    { label: 'Blog', href: '/blog' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const cleaningServices: FooterLink[] = [
    { label: 'Short-Term Rental Cleaning', href: '/services/short-term-rental' },
    { label: 'Apartment/Condo Cleaning', href: '/services/apartment' },
    { label: 'House Cleaning', href: '/services/house' },
    { label: 'Common Area Cleaning', href: '/services/common-area' },
    { label: 'Vacation Rental Cleaning', href: '/services/vacation-rental' },
    { label: 'Move Out Cleaning', href: '/services/move-out' },
    { label: 'Office Cleaning', href: '/services/office' },
    { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
    { label: 'Airbnb Cleaning', href: '/services/airbnb' }
  ];

  const topCities: FooterLink[] = [
    { label: 'Houston, TX', href: '/cities/houston-tx' },
    { label: 'Miami, FL', href: '/cities/miami-fl' },
    { label: 'Dallas, TX', href: '/cities/dallas-tx' },
    { label: 'Los Angeles, CA', href: '/cities/los-angeles-ca' },
    { label: 'Chicago, IL', href: '/cities/chicago-il' },
    { label: 'Montréal, QC', href: '/cities/montreal-qc' },
    { label: 'Toronto, ON', href: '/cities/toronto-on' },
    { label: 'Calgary, AB', href: '/cities/calgary-ab' },
    { label: 'New York City, NY', href: '/cities/new-york-ny' },
    { label: 'San Francisco, CA', href: '/cities/san-francisco-ca' },
    { label: 'Vancouver, BC', href: '/cities/vancouver-bc' },
    { label: 'Phoenix, AZ', href: '/cities/phoenix-az' },
    { label: 'Austin, TX', href: '/cities/austin-tx' },
    { label: 'San Diego, CA', href: '/cities/san-diego-ca' },
    { label: 'All Cities', href: '/cities' }
  ];

  const helpLinks: FooterLink[] = [
    { label: 'Developer API', href: '/developer-api' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Why Do You Need Cleanster?', href: '/why-cleanster' },
    { label: 'Book a Demo', href: '/demo' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const joinUsLinks: FooterLink[] = [
    { label: 'Become a Professional', href: '/become-professional' },
    { label: 'Become an Affiliate', href: '/become-affiliate' },
    { label: 'Become a Partner', href: '/become-partner' },
    { label: 'Shop Online', href: '/shop' },
    { label: 'Already with Us? Log In', href: '/login' },
    { label: 'Sell your cleaning business to Cleanster', href: '/sell-business' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com/cleanster' },
    { name: 'Twitter', icon: 'twitter', href: 'https://twitter.com/cleanster' },
    { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/cleanster' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/cleanster' },
    { name: 'TikTok', icon: 'tiktok', href: 'https://tiktok.com/@cleanster' },
    { name: 'Clubhouse', icon: 'clubhouse', href: 'https://clubhouse.com/@cleanster' }
  ];

  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Links */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start text-sm">
            <Link href="/help" className="hover:text-pink-600 transition-colors">
              Visit Help Center
            </Link>
            <Link href="/checklist" className="hover:text-pink-600 transition-colors">
              Public Checklist
            </Link>
            <Link href="/cities" className="hover:text-pink-600 transition-colors">
              Cities
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-pink-600">Cleanster</span>
          </Link>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-pink-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cleaning Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Cleaning Services</h3>
            <ul className="space-y-3">
              {cleaningServices.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-pink-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Top Cities</h3>
            <ul className="space-y-3">
              {topCities.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-pink-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-pink-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Join Us</h3>
            <ul className="space-y-3">
              {joinUsLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-pink-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-pink-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons and Contact */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          <SocialIcon icon="facebook" href="https://facebook.com/cleanster" />
          <SocialIcon icon="twitter" href="https://twitter.com/cleanster" />
          <SocialIcon icon="linkedin" href="https://linkedin.com/company/cleanster" />
          <SocialIcon icon="instagram" href="https://instagram.com/cleanster" />
          <SocialIcon icon="phone" href="tel:+18887882445" />
          <a href="tel:+18887882445" className="text-sm font-medium hover:text-pink-600 transition-colors">
            +1-888-788-2445
          </a>
        </div>

        {/* App Download Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <AppStoreButton store="apple" />
          <AppStoreButton store="google" />
          <AppStoreButton store="mac" />
          <AppStoreButton store="windows" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-gray-600">
          <div>© 2025 Cleanster, Inc.</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-pink-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-pink-600 transition-colors">
              Cleanster.com's Mark Usage Terms
            </Link>
            <Link href="/terms" className="hover:text-pink-600 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button aria-label='chat' className="fixed bottom-8 right-8 w-14 h-14 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors z-50">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </footer>
  );
};

// Social Icon Component
interface SocialIconProps {
  icon: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
    >
      {icon === 'facebook' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )}
      {icon === 'twitter' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )}
      {icon === 'linkedin' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )}
      {icon === 'instagram' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      )}
      {icon === 'phone' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )}
    </a>
  );
};

// App Store Button Component
interface AppStoreButtonProps {
  store: 'apple' | 'google' | 'mac' | 'windows';
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ store }) => {
  const storeConfig = {
    apple: {
      text: 'Download on the',
      storeName: 'App Store',
      href: 'https://apps.apple.com'
    },
    google: {
      text: 'GET IT ON',
      storeName: 'Google Play',
      href: 'https://play.google.com'
    },
    mac: {
      text: 'GET FOR',
      storeName: 'Mac',
      href: 'https://apps.apple.com'
    },
    windows: {
      text: 'GET FOR',
      storeName: 'Windows',
      href: 'https://microsoft.com'
    }
  };

  const config = storeConfig[store];

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2.5 rounded-lg transition-colors"
    >
      <div className="w-8 h-8">
        {store === 'apple' && <AppleIcon />}
        {store === 'google' && <GooglePlayIcon />}
        {store === 'mac' && <AppleIcon />}
        {store === 'windows' && <WindowsIcon />}
      </div>
      <div className="text-left">
        <div className="text-xs">{config.text}</div>
        <div className="text-sm font-semibold">{config.storeName}</div>
      </div>
    </a>
  );
};

// Icon Components
const AppleIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
);

export default Footer;