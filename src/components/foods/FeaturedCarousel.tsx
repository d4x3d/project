import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Food } from '../../types';

interface FeaturedCarouselProps {
  foods: Food[];
}

export default function FeaturedCarousel({ foods }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % foods.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + foods.length) % foods.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {foods.map((food) => (
            <div
              key={food.id}
              className="w-full flex-shrink-0 relative aspect-[21/9]"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{food.name}</h3>
                <p className="text-gray-200 mb-4">{food.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">${food.price}</span>
                  <button className="px-4 py-2 bg-[#FFAB91] text-[#3E2723] rounded-lg hover:bg-[#FF8A65] transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#3E2723] shadow-lg"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#3E2723] shadow-lg"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {foods.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}