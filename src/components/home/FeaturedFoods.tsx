import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'rice',
    name: 'Rice Family',
    description: 'From aromatic Jollof to flavorful fried rice',
    image: 'https://images.unsplash.com/photo-1567516362675-7a47c63c7cb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 'swallow',
    name: 'Swallows',
    description: 'Traditional favorites with delicious soups',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 'pastry',
    name: 'Pastries',
    description: 'Sweet and savory baked delights',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  }
];

export default function FeaturedFoods() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-brown-900 mb-4">
            Indulge in Our Exquisite Food Selections
          </h2>
          <p className="text-lg text-gray-600">
            Discover our most popular culinary selections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/foods"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-brown-600 text-white hover:bg-brand-brown-700 transition-colors"
          >
            Browse Full Catalog
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}