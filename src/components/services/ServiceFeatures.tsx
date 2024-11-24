import { Check } from 'lucide-react';

interface ServiceFeaturesProps {
  features: string[];
  color?: string;
}

export default function ServiceFeatures({ features, color = 'brand-blue-500' }: ServiceFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className={`mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-${color} flex items-center justify-center`}>
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="ml-3 text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  );
}