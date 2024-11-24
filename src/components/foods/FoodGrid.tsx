import { ShoppingBag, Clock, Star } from 'lucide-react';
import type { Food } from '../../types';

interface FoodGridProps {
  foods: Food[];
}

export default function FoodGrid({ foods }: FoodGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {foods.map((food) => (
        <div
          key={food.id}
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="relative h-48 overflow-hidden group">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
              <span className="text-[#3E2723] font-semibold">
                ${food.price.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#3E2723] mb-2">
              {food.name}
            </h3>
            <p className="text-gray-600 mb-4">{food.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{food.preparationTime}</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-[#8D6E63] text-white rounded-lg hover:bg-[#795548] transition-colors">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}