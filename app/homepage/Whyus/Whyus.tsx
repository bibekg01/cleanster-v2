import React from 'react';
import Image from 'next/image';

interface Feature {
  id: string;
  icon: React.ReactNode;
  text: string;
}

const WhyUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: '1',
      icon: <UsersIcon />,
      text: 'Over 15,000 happy clients'
    },
    {
      id: '2',
      icon: <CheckIcon />,
      text: 'Trusted, reliable and vetted service providers'
    },
    {
      id: '3',
      icon: <CalendarIcon />,
      text: 'On-demand, recurring and flexible bookings'
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            {/* Decorative background blob */}
            <div className="absolute -top-12 -left-12 w-96 h-96 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-gray-100 rounded-full opacity-40 blur-3xl"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative bg-gray-200">
                  <Image
                    src="/images/cleaner-kitchen.jpg"
                    alt="Professional cleaner cleaning kitchen hood"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="relative">
            {/* Decorative background blob */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-50 rounded-full opacity-50 -z-10"></div>
            
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Why use Cleanster?
              </h2>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature) => (
                  <FeatureItem key={feature.id} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  feature: Feature;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <div className="flex items-start gap-4">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl flex items-center justify-center">
        {feature.icon}
      </div>
      
      {/* Text */}
      <p className="text-gray-900 text-lg font-medium pt-2">
        {feature.text}
      </p>
    </div>
  );
};

// Icon Components
const UsersIcon: React.FC = () => (
  <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C10.067 4.5 8.5 6.067 8.5 8s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5S13.933 4.5 12 4.5zm0 5.5c-.827 0-1.5-.673-1.5-1.5S11.173 6.5 12 6.5s1.5.673 1.5 1.5S12.827 10 12 10z"/>
    <path d="M12 12.5c-3.866 0-7 1.567-7 3.5v2.5h14V16c0-1.933-3.134-3.5-7-3.5zm-5 4v-.5c0-.551 2.019-1.5 5-1.5s5 .949 5 1.5v.5H7z"/>
    <circle cx="18" cy="7" r="2.5" fill="currentColor"/>
    <path d="M18 10.5c-2 0-3.5.8-3.5 1.8v1.2h7v-1.2c0-1-.5-1.8-3.5-1.8z"/>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const CalendarIcon: React.FC = () => (
  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/>
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}/>
    <circle cx="8" cy="14" r="1" fill="currentColor"/>
    <circle cx="12" cy="14" r="1" fill="currentColor"/>
    <circle cx="16" cy="14" r="1" fill="currentColor"/>
    <circle cx="8" cy="18" r="1" fill="currentColor"/>
    <circle cx="12" cy="18" r="1" fill="currentColor"/>
  </svg>
);

export default WhyUs;