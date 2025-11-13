"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface CleanerTestimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

interface CleansterProsProps {
  onFindCleaners?: (service: string) => void;
  onApplyForWork?: () => void;
}

const CleansterProsSection: React.FC<CleansterProsProps> = ({
  onFindCleaners,
  onApplyForWork
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState('');

  const testimonials: CleanerTestimonial[] = [
    {
      id: '1',
      name: 'Priscilla V.',
      avatar: '/images/cleaners/priscilla.jpg',
      rating: 5,
      testimonial: '"Priscilla worked professionally on my short-term rental and thoroughly with a wonderful attitude. She even went above and beyond by leaving some local recommendations for my guests!"'
    },
    {
      id: '2',
      name: 'Bianca C.',
      avatar: '/images/cleaners/bianca.jpg',
      rating: 5,
      testimonial: '"Loved her professional attitude, pleasant disposition and thorough cleaning. The common areas in our building have never looked better!"'
    },
    {
      id: '3',
      name: 'Kevin M.',
      avatar: '/images/cleaners/kevin.jpg',
      rating: 5,
      testimonial: '"He was meticulous and paid attention to every detail. The property looks immaculate and is ready to impress potential buyers."'
    },
    {
      id: '4',
      name: 'Tatiana G.',
      avatar: '/images/cleaners/tatiana.jpg',
      rating: 5,
      testimonial: '"She was prompt, courteous, and did a fantastic job. My home is sparkling clean!"'
    },
    {
      id: '5',
      name: 'Marcus L.',
      avatar: '/images/cleaners/marcus.jpg',
      rating: 5,
      testimonial: '"Outstanding service! Very professional and efficient. Will definitely book again."'
    },
    {
      id: '6',
      name: 'Sofia R.',
      avatar: '/images/cleaners/sofia.jpg',
      rating: 5,
      testimonial: '"Amazing attention to detail. Left my apartment looking brand new!"'
    }
  ];

  const services = [
    'House Cleaning',
    'Apartment Cleaning',
    'Office Cleaning',
    'Deep Cleaning',
    'Move In/Out Cleaning',
    'Short-term Rental Cleaning'
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 4 ? 0 : prev + 1));
  };

  const handleFindCleaners = () => {
    if (onFindCleaners) {
      onFindCleaners(selectedService);
    }
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 4);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet some of our CleansterPros
          </h2>
          <div className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            <p>Cleanster are vetted, experienced, rated and reviewed.</p>
            <p>Plus, they are just awesome people.</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <CleanerCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Service Selector and Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative flex-1 max-w-md">
              <select
                aria-label='service'
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3.5 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Choose the service you need</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button
              onClick={handleFindCleaners}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              Find your next cleaners
            </button>
          </div>

          {/* Apply Link */}
          <div className="text-center">
            <button
              onClick={onApplyForWork}
              className="text-pink-600 font-semibold hover:text-pink-700 underline"
            >
              Apply for work here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CleanerCardProps {
  testimonial: CleanerTestimonial;
}

const CleanerCard: React.FC<CleanerCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-md">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-center text-lg font-semibold text-gray-900 mb-3">
        {testimonial.name}
      </h3>

      {/* Star Rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 text-sm leading-relaxed text-center">
        {testimonial.testimonial}
      </p>
    </div>
  );
};

export default CleansterProsSection;