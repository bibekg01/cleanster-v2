"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  logo: string;
}

interface WorkWithCleansterProps {
  onApplyNow?: () => void;
  onBookCleaning?: () => void;
}

const WorkWithUs: React.FC<WorkWithCleansterProps> = ({
  onApplyNow,
  onBookCleaning
}) => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const partners: Partner[] = [
    {
      id: '1',
      name: 'hospitable',
      logo: '/images/partners/hospitable.svg'
    },
    {
      id: '2',
      name: 'Hostaway',
      logo: '/images/partners/hostaway.svg'
    },
    {
      id: '3',
      name: 'Hostfully',
      logo: '/images/partners/hostfully.svg'
    },
    {
      id: '4',
      name: 'my VR',
      logo: '/images/partners/myvr.svg'
    },
    {
      id: '5',
      name: 'iGMS',
      logo: '/images/partners/igms.svg'
    },
    {
      id: '6',
      name: 'Guesty',
      logo: '/images/partners/guesty.svg'
    }
  ];

  const handlePreviousLogo = () => {
    setCurrentLogoIndex((prev) => (prev === 0 ? partners.length - 5 : prev - 1));
  };

  const handleNextLogo = () => {
    setCurrentLogoIndex((prev) => (prev >= partners.length - 5 ? 0 : prev + 1));
  };

  const visiblePartners = partners.slice(currentLogoIndex, currentLogoIndex + 5);

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Want to work with Cleanster?
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Ready to become your own boss, choose your own schedule, and work in your
                preferred areas? Click the button below to get started.
              </p>

              <button
                onClick={onApplyNow}
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-md"
              >
                Apply Now
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/cleanster-worker.png"
                    alt="Happy Cleanster worker"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Partners Logo Carousel */}
          <div className="relative mb-12">
            {/* Navigation Buttons */}
            <button
              onClick={handlePreviousLogo}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous partners"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNextLogo}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next partners"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {visiblePartners.map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </div>
          </div>

          {/* Bottom Text and CTA */}
          <div className="text-center space-y-6">
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Cleanster is bringing harmony to homes, apartments, and short-term rentals across North America &
              UK with a fresh approach to cleaning services.
            </p>

            <button
              onClick={onBookCleaning}
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3.5 rounded-lg border border-gray-300 transition-colors shadow-sm"
            >
              Book Cleaning
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface PartnerLogoProps {
  partner: Partner;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ partner }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all flex items-center justify-center">
      <div className="relative w-full h-16">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;