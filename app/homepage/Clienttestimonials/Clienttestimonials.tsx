"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  featured?: boolean;
}

const ClientTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Emily C.',
      avatar: '/images/avatars/emily.jpg',
      rating: 5,
      text: '"The cleaner did a fantastic job and sent me pictures afterwards. I have never had that happen with a cleaning service! I recommend this platform fully and look forward to using them again!"'
    },
    {
      id: '2',
      name: 'Samer A.',
      avatar: '/images/avatars/samer.jpg',
      rating: 5,
      text: '"Cleanster allows me to automate my cleaners from Montreal and Dallas with my property management system. The Cleanster support team is amazing, and they help automate all the schedules."'
    },
    {
      id: '3',
      name: 'Tylor P.',
      avatar: '/images/avatars/tylor.jpg',
      rating: 5,
      text: '"It was my first time using an online platform to book and prepay a service. I was slightly nervous, but I couldn\'t be more satisfied! The prices are competitive, and the job was done perfectly!"'
    },
    {
      id: '4',
      name: 'Marteena K.',
      avatar: '/images/avatars/marteena.jpg',
      rating: 5,
      text: '"Great app and service!The cleaning was excellent quality, and they adjusted my bill quickly when I changed my plans about the fridge. I am so impressed that I\'ve arranged monthly cleans.',
      featured: true
    },
    {
      id: '5',
      name: 'John D.',
      avatar: '/images/avatars/john.jpg',
      rating: 5,
      text: '"Professional service from start to finish. The cleaners were thorough and respectful of our home. Highly recommend!"'
    },
    {
      id: '6',
      name: 'Sarah M.',
      avatar: '/images/avatars/sarah.jpg',
      rating: 5,
      text: '"Best cleaning service I\'ve used. Easy booking process and the results exceeded my expectations every time."'
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 4 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 4);

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet some of our clients
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            Rest assured that our clients receive nothing less than exceptional service, top-notch results, and
            reliable cleaners. We take pride in our punctuality and always show up on time!
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
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
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${
        testimonial.featured ? 'ring-2 ring-pink-500' : 'border border-gray-200'
      }`}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="80px"
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
        {testimonial.text}
      </p>
    </div>
  );
};

export default ClientTestimonials;