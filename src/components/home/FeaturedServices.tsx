import { Heart, Wallet, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Heart,
    name: 'Health & Wellness',
    description: 'Expert nutrition guidance and wellness coaching'
  },
  {
    icon: Wallet,
    name: 'Digital Finance',
    description: 'Navigate crypto and Web3 opportunities'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Professional culinary and lifestyle courses'
  },
  {
    icon: Users,
    name: 'Community',
    description: 'Connect with like-minded individuals'
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-brand-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lifestyle Services
          </h2>
          <p className="text-lg text-gray-600">
            Enhance your lifestyle with our premium services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-brand-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-blue-600 text-white hover:bg-brand-blue-700 transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}