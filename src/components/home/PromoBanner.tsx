import { Clock } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-brown-600 to-brand-brown-500 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Join our Recipe Challenge 🏆
            </h2>
            <p className="text-white/90 text-lg">
              Participate and win exciting prizes!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <Clock className="h-5 w-5 text-white inline mr-2" />
              <span className="text-white font-medium">5 days left</span>
            </div>
            <button className="px-6 py-3 bg-white text-brand-brown-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Participate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}