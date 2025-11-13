import React from 'react';
import Image from 'next/image';

interface Step {
  number: number;
  text: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      text: 'Select the service you need'
    },
    {
      number: 2,
      text: 'Get matched with your cleaner'
    },
    {
      number: 3,
      text: 'Manage your booking online'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              How it works
            </h2>

            {/* Steps List */}
            <ol className="space-y-4">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="flex items-start gap-3 text-gray-900"
                >
                  <span className="text-lg sm:text-xl font-normal">
                    {step.number}.
                  </span>
                  <span className="text-lg sm:text-xl font-normal pt-0.5">
                    {step.text}
                  </span>
                </li>
              ))}
            </ol>

            {/* Tagline */}
            <p className="text-gray-600 text-base sm:text-lg">
              Reliable, high-quality cleaning services you can trust.
            </p>
          </div>

          {/* Right - Mobile Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <MobileMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl perspective-1000">
      {/* Phone 1 - Back Left */}
      <div className="absolute left-0 top-8 w-64 transform -rotate-12 scale-90 origin-bottom-left z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100">
          <div className="aspect-[9/19.5] bg-white p-4">
            {/* Status bar */}
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              </div>
            </div>
            
            {/* Image preview */}
            <div className="bg-gray-100 rounded-xl h-48 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white rounded-lg p-2 shadow">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* List items */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone 2 - Center */}
      <div className="relative w-72 mx-auto transform rotate-3 z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100">
          <div className="aspect-[9/19.5] bg-white p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs font-semibold">9:41</div>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* Profile section */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-1"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              
              <div className="my-4 bg-gray-100 rounded-xl h-32"></div>
              
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </div>
                ))}
              </div>

              {/* Pink button */}
              <div className="mt-4 bg-pink-500 rounded-lg h-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone 3 - Back Right */}
      <div className="absolute right-0 top-12 w-64 transform rotate-12 scale-90 origin-bottom-right z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100">
          <div className="aspect-[9/19.5] bg-white p-4">
            {/* Status bar */}
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* List view */}
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;