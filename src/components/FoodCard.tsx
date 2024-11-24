import { Clock } from 'lucide-react';
import type { Food } from '../types';

interface FoodCardProps {
  food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        className="h-48 w-full object-cover"
        src={food.image}
        alt={food.name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{food.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{food.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-orange-600 font-bold">${food.price}</span>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{food.preparationTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}