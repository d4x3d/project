import { ArrowRight } from 'lucide-react';

export default function FoodHero() {
  return (
    <div className="relative h-[500px] bg-[#3E2723]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E2723]/90 to-[#3E2723]/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Delicious Choices
              <span className="block text-[#FFAB91]">Await You</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our curated selection of authentic dishes, prepared with love
              and served with care. Your culinary journey starts here.
            </p>
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FFAB91] text-[#3E2723] hover:bg-[#FF8A65] transition-colors font-medium">
              Start Ordering
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}