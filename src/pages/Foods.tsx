import { useState } from 'react';
import { Search, SlidersHorizontal, Star } from 'lucide-react';
import FoodHero from '../components/foods/FoodHero';
import FoodGrid from '../components/foods/FoodGrid';
import CategoryTabs from '../components/foods/CategoryTabs';
import FiltersDialog from '../components/foods/FiltersDialog';
import FeaturedCarousel from '../components/foods/FeaturedCarousel';
import type { Food } from '../types';

const categories = [
  { 
    id: 'all', 
    name: 'All',
    description: 'Explore our complete culinary collection'
  },
  { 
    id: 'rice', 
    name: 'Rice Family',
    description: 'From aromatic Jollof to classic fried rice'
  },
  { 
    id: 'swallow', 
    name: 'Swallows',
    description: 'Traditional favorites with delicious soups'
  },
  { 
    id: 'pastry', 
    name: 'Pastries',
    description: 'Sweet and savory baked delights'
  }
];

const featuredFoods: Food[] = [
  {
    id: '1',
    name: 'Special Jollof Rice',
    category: 'rice',
    description: 'Aromatic rice cooked in rich tomato sauce with special spices',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    preparationTime: '30 mins'
  },
  {
    id: '2',
    name: 'Pounded Yam & Egusi',
    category: 'swallow',
    description: 'Smooth pounded yam served with rich egusi soup',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    preparationTime: '45 mins'
  },
  {
    id: '3',
    name: 'Meat Pie Deluxe',
    category: 'pastry',
    description: 'Flaky pastry filled with seasoned minced meat and vegetables',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    preparationTime: '20 mins'
  }
];

const allFoods: Food[] = [
  ...featuredFoods,
  {
    id: '4',
    name: 'Coconut Rice',
    category: 'rice',
    description: 'Fragrant rice cooked in coconut milk with aromatic spices',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    preparationTime: '35 mins'
  },
  {
    id: '5',
    name: 'Amala & Ewedu',
    category: 'swallow',
    description: 'Smooth yam flour swallow with traditional ewedu soup',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    preparationTime: '40 mins'
  }
];

export default function Foods() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'newest'>('popular');

  const filteredFoods = allFoods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || food.category === activeCategory;
    const matchesPrice = food.price >= priceRange[0] && food.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedFoods = [...filteredFoods].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-[#FBF7F4]">
      <FoodHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Foods Carousel */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Featured Dishes</h2>
          <FeaturedCarousel foods={featuredFoods} />
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search our menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#D7CCC8] rounded-lg focus:ring-2 focus:ring-[#8D6E63] focus:border-transparent bg-white"
            />
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="inline-flex items-center px-4 py-2 border border-[#8D6E63] rounded-lg bg-white hover:bg-[#EFEBE9] text-[#3E2723]"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'popular' | 'price' | 'newest')}
            className="px-4 py-2 border border-[#D7CCC8] rounded-lg bg-white text-[#3E2723] focus:ring-2 focus:ring-[#8D6E63]"
          >
            <option value="popular">Most Popular</option>
            <option value="price">Price: Low to High</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        {/* Category Tabs */}
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Food Grid */}
        <FoodGrid foods={sortedFoods} />

        {/* Filters Dialog */}
        <FiltersDialog
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
      </div>
    </div>
  );
}