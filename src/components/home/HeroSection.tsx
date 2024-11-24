import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown-900/80 to-brand-blue-700/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Chef preparing food"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Dr. Chef Community
              <span className="block text-brand-orange-100">
                Where Food Meets Lifestyle Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover delicious meals, elevate your lifestyle, and embrace a community 
              built on passion and purpose.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/foods"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-orange-600 text-white hover:bg-brand-orange-700 transition-colors"
              >
                Explore Food
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-blue-600 text-white hover:bg-brand-blue-700 transition-colors"
              >
                Discover Lifestyle Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}