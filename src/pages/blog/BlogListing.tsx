import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import BlogGrid from '../../components/blog/BlogGrid';
import CategoryFilter from '../../components/blog/CategoryFilter';
import Pagination from '../../components/blog/Pagination';
import type { BlogPost } from '../../types';

const categories = ['All', 'Food', 'Health Tips', 'Lifestyle', 'Web3'];

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Perfect Rice: Tips from Professional Chefs',
    content: 'Master the techniques of cooking perfect rice every time with these expert tips from seasoned chefs. Learn about water ratios, timing, and special techniques.',
    author: 'Chef John Doe',
    date: '2024-03-15',
    tags: ['cooking-tips', 'rice', 'professional-cooking'],
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: '2',
    title: 'Crypto in the Kitchen: Food Industry Meets Web3',
    content: 'Explore how blockchain technology is revolutionizing the food industry, from supply chain transparency to tokenized recipes.',
    author: 'Sarah Smith',
    date: '2024-03-14',
    tags: ['technology', 'web3', 'innovation'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: '3',
    title: 'Healthy Living: Balancing Food and Fitness',
    content: 'Learn how to maintain a healthy lifestyle while enjoying your favorite foods. Get practical tips for portion control and exercise routines.',
    author: 'Dr. Jane Wilson',
    date: '2024-03-13',
    tags: ['health', 'wellness', 'fitness'],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: '4',
    title: 'Farm to Table: The Future of Sustainable Dining',
    content: 'Discover how restaurants and home cooks are embracing sustainable practices and local sourcing for better food quality.',
    author: 'Michael Green',
    date: '2024-03-12',
    tags: ['sustainability', 'food', 'environment'],
    image: 'https://images.unsplash.com/photo-1595351298020-038700609878?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  }
];

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.tags.includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on Food, Lifestyle, and Beyond
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
            />
          </div>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Blog Grid */}
        <BlogGrid posts={currentPosts} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}