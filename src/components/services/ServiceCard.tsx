import { ArrowRight } from 'lucide-react';
import type { ServiceCategory } from '../../types';

interface ServiceCardProps {
  category: ServiceCategory;
  onSelect: (id: string) => void;
}

export default function ServiceCard({ category, onSelect }: ServiceCardProps) {
  const { title, description, image, color } = category;

  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 mb-4 line-clamp-2">{description}</p>
        <button
          onClick={() => onSelect(category.id)}
          className={`inline-flex items-center px-4 py-2 rounded-lg bg-${color} hover:bg-${color}/90 text-white transition-colors`}
        >
          Explore
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}