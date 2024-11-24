import { ArrowRight } from 'lucide-react';
import type { Community } from '../../types';

interface CommunityCardProps {
  community: Community;
}

export default function CommunityCard({ community }: CommunityCardProps) {
  const { title, description, icon: Icon, color, benefits, whatsappLink, image } = community;

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg bg-${color}-100`}>
              <Icon className={`h-6 w-6 text-${color}-600`} />
            </div>
            <h3 className="ml-3 text-xl font-semibold text-white">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <div className={`h-1.5 w-1.5 rounded-full bg-${color}-500 mr-2`} />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        <a
          href={whatsappLink}
          className={`inline-flex items-center px-4 py-2 rounded-lg text-white transition-colors bg-${color}-500 hover:bg-${color}-600`}
        >
          Join on WhatsApp
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}