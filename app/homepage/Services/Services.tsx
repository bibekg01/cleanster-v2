import React from 'react';
import Image from 'next/image';

interface ServiceCard {
  id: string;
  title: string;
  imageUrl: string;
  size: 'large' | 'small';
}

const ServicesSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: '1',
      title: 'Short-term Rental Cleaning',
      imageUrl: '/images/short-term-rental.jpg',
      size: 'large'
    },
    {
      id: '2',
      title: 'Common Area Cleaning',
      imageUrl: '/images/common-area.jpg',
      size: 'large'
    },
    {
      id: '3',
      title: 'Apartment Cleaning',
      imageUrl: '/images/apartment.jpg',
      size: 'small'
    },
    {
      id: '4',
      title: 'Deep Cleaning',
      imageUrl: '/images/deep-cleaning.jpg',
      size: 'small'
    },
    {
      id: '5',
      title: 'Make-ready Cleaning',
      imageUrl: '/images/make-ready.jpg',
      size: 'small'
    },
    {
      id: '6',
      title: 'House Cleaning',
      imageUrl: '/images/house.jpg',
      size: 'small'
    },
    {
      id: '7',
      title: 'Move Out Cleaning',
      imageUrl: '/images/move-out.jpg',
      size: 'large'
    },
    {
      id: '8',
      title: 'Office Cleaning',
      imageUrl: '/images/office.jpg',
      size: 'large'
    }
  ];

  const largeServices = services.filter(s => s.size === 'large');
  const smallServices = services.filter(s => s.size === 'small');

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Services Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl px-8 sm:px-12 py-6 sm:py-8 mb-12 inline-flex items-center gap-3 sm:gap-4">
          <div className="flex gap-1 relative">
            {/* Sparkle Icon */}
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2L9.5 8.5L3 9.5L7.5 14L6.5 21L12 17.5L17.5 21L16.5 14L21 9.5L14.5 8.5L12 2Z" />
            </svg>
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 -ml-3 mt-1" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2L9.5 8.5L3 9.5L7.5 14L6.5 21L12 17.5L17.5 21L16.5 14L21 9.5L14.5 8.5L12 2Z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Services Provided
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* First Row - 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {largeServices.slice(0, 2).map((service) => (
              <ServiceCardComponent key={service.id} service={service} />
            ))}
          </div>

          {/* Second Row - 4 small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smallServices.map((service) => (
              <ServiceCardComponent key={service.id} service={service} />
            ))}
          </div>

          {/* Third Row - 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {largeServices.slice(2, 4).map((service) => (
              <ServiceCardComponent key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-10 py-3.5 rounded-md transition-colors shadow-sm">
              Book Cleaning
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-10 py-3.5 rounded-md border border-gray-300 transition-colors shadow-sm">
              Become a Cleaner
            </button>
          </div>
          
          <p className="text-gray-700 text-base">
            Looking to manage your own cleaners?{' '}
            <a 
              href="#" 
              className="text-pink-600 font-semibold hover:text-pink-700 underline"
            >
              Book a Meeting
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceCard;
}

const ServiceCardComponent: React.FC<ServiceCardProps> = ({ service }) => {
  const aspectRatio = service.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]';
  
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden mb-4 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className={`${aspectRatio} bg-gradient-to-br from-gray-50 to-gray-100 relative`}>
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            sizes={service.size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
          />
        </div>
      </div>
      <h3 className={`${service.size === 'large' ? 'text-lg' : 'text-base'} font-semibold text-gray-900 text-center`}>
        {service.title}
      </h3>
    </div>
  );
};

export default ServicesSection;